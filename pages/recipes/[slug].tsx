import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import path from 'path'

import markdownStyles from '@styles/markdown-styles.module.css'
import { shuffleArray } from '@lib/helpers'
const readingTime = require('reading-time')
import Carousel from '@parts/Carousel'
import Main from '@parts/Main'
import { peopleFilePaths, PEOPLE_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import { useRef, useState } from 'react'
import Recipes_Post_Tags from '@recipes/Recipes_Post_Tags'
import Video from '@parts/Video'
import { useEffect } from 'react'
import remarkGfm from 'remark-gfm'
import VimeoPlayer from '@parts/VimeoPlayer'

import Recipes_Post_SEO from '@recipes/Recipes_Post_SEO'
import dynamic from 'next/dynamic'
import BackToTop from '@utility/BackToTop'
const Recipes_Post_Header = dynamic(() => import('@recipes/Recipes_Post_Header'), { ssr: false })
const Recipes_Post_Related = dynamic(() => import('@recipes/Recipes_Post_Related'), { ssr: true })

const Recipes_Post_GetPrevNextPost = dynamic(
  () => import('@recipes/Recipes_Post_GetPrevNextPost'),
  {
    ssr: false,
  },
)

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Carousel: Carousel,
  VimeoPlayer: VimeoPlayer,
  Video: Video,
  Head,
}

export default function PostPage({
  slug,
  source,
  frontMatter,
  matchingBio,
  relatedPosts,
  // thisIndex,
  // nextIndex,
  // prevIndex,
  prev,
  next,
}) {
  const datePostedISO = new Date(JSON.parse(JSON.stringify(frontMatter.date))).toISOString()
  const myContainer = useRef(null)
  const [readTime, setReadTime] = useState('')
  const childRef = useRef(null)

  useEffect(() => {
    //Sets Reading Time
    function extractContent(s) {
      var span = document.createElement('span')
      span.innerHTML = s
      return span.textContent || span.innerText
    }
    const text = extractContent(myContainer.current.innerHTML).toString()
    const stats = readingTime(text)
    setReadTime(stats.text)
    return () => {}
  }, [])

  return (
    <Main>
      <Recipes_Post_SEO datePostedISO={datePostedISO} frontMatter={frontMatter} slug={slug} />
      <div className='mb-32'>
        <Recipes_Post_Header
          frontMatter={frontMatter}
          date={frontMatter.date}
          forwardedRef={childRef}
          readTime={readTime}
          matchingBio={matchingBio}
        />

        <section className='px-6 mt-8 md:max-w-3xl mx-auto'>
          <article ref={myContainer} id='blog-body-guts'>
            <div className={markdownStyles['markdown']}>
              <MDXRemote {...source} components={components} />
            </div>
          </article>

          <Recipes_Post_Tags tags={frontMatter.tags} />
        </section>
      </div>

      <Recipes_Post_GetPrevNextPost prev={prev} next={next} />
      <Recipes_Post_Related relatedPosts={relatedPosts} />
      <BackToTop />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  //Author Stuff

  const allPeople = peopleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
    const { data } = matter(source)
    return {
      data,
      filePath,
    }
  })

  // RELEVANT POSTS
  const allPosts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { data } = matter(source)
    data.date = JSON.parse(JSON.stringify(data.date))
    return {
      data,
      filePath,
    }
  })

  // Map the currentPost categories array to a Set for lookup in the filter
  const searchCategories = new Set(data.categories.map((category) => category.toUpperCase()))
  const matchingPosts = allPosts.filter((post) => {
    // If the currently iterated post title matches the currentPost return false (filter it out);

    if (post.data.title === data.title) {
      return false
    }
    // Otherwise, check if the currently iterated post has some() categories in common with currentPost
    return post.data.categories.some((category) => searchCategories.has(category.toUpperCase()))
  })
  // If we don't have any related posts, we still need to display something, so we'll select three posts at random
  if (matchingPosts.length < 3) {
    const morePosts = allPosts
    allPosts.forEach(function (post, i) {
      if (post.data.title === post.data.title) {
        morePosts.splice(i, 1)
      }
    })
    shuffleArray(morePosts)
    for (let i = 0; i < 5 - matchingPosts.length; i++) {
      matchingPosts.push(morePosts[i])
    }
  }
  const relatedPosts = shuffleArray(matchingPosts).slice(0, 3)
  //end of get related posts

  //get previous and next posts
  const index = allPosts
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .findIndex((post) => post.data.title === data.title)

  const getPrev = (i) => {
    if (i === 0) {
      return allPosts[allPosts.length - 1]
    } else if (i < 0) {
      return allPosts[0]
    } else {
      return allPosts[i - 1]
    }
  }

  const getNext = (i) => {
    if (i === allPosts.length - 1) {
      return allPosts[0]
    } else {
      return allPosts[i + 1]
    }
  }

  const prev = getPrev(index)
  const next = getNext(index)
  // Find the previous and next person on the roster, alphabetically by last name.
  let thisIndex, prevIndex, nextIndex

  allPosts
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .map((p, index) => {
      if (p.data.date === data.date) {
        thisIndex = index
      }
    })

  if (thisIndex != null && thisIndex === 0) prevIndex = allPosts[Object.keys(allPosts).length - 1]
  else prevIndex = allPosts[thisIndex - 1]

  if (thisIndex != null && thisIndex === Object.keys(allPosts).length - 1) nextIndex = allPosts[0]
  else nextIndex = allPosts[thisIndex + 1]

  //End of prev/next search
  //end get previous next posts

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins

    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })

  const matchingBio =
    allPeople.find((p) => p.data.name.toUpperCase() === data.author.name.toUpperCase()) ?? null

  return {
    props: {
      relatedPosts: relatedPosts,
      slug: params.slug,
      prev: prevIndex,
      matchingBio: matchingBio,
      // thisIndex,
      // nextIndex,
      // prevIndex,
      next: nextIndex,
      source: mdxSource,
      frontMatter: data,
      allPosts: allPosts,
      allPeople: allPeople,
    },
  }
}

export const getStaticPaths = async () => {
  // Map the path into the static paths object required by Next.js
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
