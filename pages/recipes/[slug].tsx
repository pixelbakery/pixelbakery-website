import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import path from 'path'
import remarkGfm from 'remark-gfm'
import { isBefore, parseISO, sub } from 'date-fns'
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

import VimeoPlayer from '@parts/VimeoPlayer'

import Recipes_Post_SEO from '@recipes/Recipes_Post_SEO'
import dynamic from 'next/dynamic'
import BackToTop from '@utility/BackToTop'
import Recipes_Post_Header from '@recipes/Recipes_Post_Header'
const Recipes_Post_Related = dynamic(() => import('@recipes/Recipes_Post_Related'), { ssr: false })

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
  freshPosts,
  source,
  frontMatter,
  matchingBio,
  // relatedPosts,
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
          date={datePostedISO}
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
      <Recipes_Post_Related relatedPosts={freshPosts} />
      <BackToTop />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
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

  const TwoYearsAgo = sub(new Date(), { years: 2 })
  // const test = isBefore(parseISO(data.date), TwoYearsAgo)
  let freshPosts = allPosts.filter((p) => isBefore(parseISO(p.data.date), TwoYearsAgo) === false)
  freshPosts = shuffleArray(freshPosts).slice(0, 3)
  // const freshPosts = getFreshPosts.slice(0, 4)
  // Find the previous and next post on the list, sorted by date.
  let thisIndex = null,
    prevIndex = null,
    nextIndex = null

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
      slug: params.slug,
      prev: prevIndex,
      matchingBio: matchingBio,
      freshPosts: freshPosts,
      next: nextIndex,
      source: mdxSource,
      frontMatter: data,
      allPosts: allPosts,
      allPeople: allPeople,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
