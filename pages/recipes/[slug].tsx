import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import path from 'path'
import PostHeader from '@recipes/post-header'
import markdownStyles from '@styles/markdown-styles.module.css'
import { getAllPeople } from '@lib/api_person'
const readingTime = require('reading-time')
import ReactPlayer from 'react-player'
import Carousel from '@parts/Carousel'
import Main from '@parts/Main'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PersonType from 'types/person'
import { ReactDOM, useRef, useState } from 'react'
import Recipes_Post_Tags from '@recipes/Recipes_Post_Tags'
import Video from '@parts/Video'
import Recipes_Posts_Related from '@recipes/Recipes_Post_Related'
import { useEffect } from 'react'
import remarkGfm from 'remark-gfm'
import VimeoPlayer from '@parts/VimeoPlayer'
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
  TestComponent: dynamic(() => import('@pageHeaders/PageHeader_VarH')),
  Head,
}
type Props = {
  matchingAuthor: PersonType
  ourPerson: PersonType
}

function shuffleArray(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
export default function PostPage({ slug, source, filePath, frontMatter, ourPerson, relatedPosts }) {
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
      <div className='mb-32'>
        <Head>
          <title>{frontMatter.title} | PBDS</title>
          <meta property='og:image' content={frontMatter.ogImage.url} />
        </Head>
        <h1>{filePath}</h1>
        <PostHeader
          title={frontMatter.title}
          subtitle={frontMatter.subtitle}
          category={frontMatter.categories[0]}
          coverImage={frontMatter.coverImage}
          date={frontMatter.date}
          author={frontMatter.author as any}
          person={ourPerson as any}
          forwardedRef={childRef}
          readTime={readTime}
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

      <Recipes_Posts_Related relatedPosts={relatedPosts} />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  //Author Stuff
  const allPeople = getAllPeople([
    'name',
    'slug',
    'headshotSerious',
    'headshotSmiling',
    'photos',
    'active',
    'title',
    'phone',
    'email',
    'content',
  ])

  // Get author bios
  const matchingAuthor = allPeople.filter(
    (person) => person.name.toUpperCase() === data.author.name.toUpperCase(),
  )
  const ourPerson = matchingAuthor[0]

  // RELEVANT POSTS
  const allPosts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
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

  //END OF RELEVANT POSTS
  //Back to MDX Stuff
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins

    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      relatedPosts: relatedPosts,
      source: mdxSource,
      frontMatter: data,
      ourPerson: { ...ourPerson },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
