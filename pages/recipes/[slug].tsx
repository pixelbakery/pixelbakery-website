import dynamic from 'next/dynamic'
import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'
import { shuffleArray } from '@lib/helpers'

import { peopleFilePaths, PEOPLE_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import dayjs from 'dayjs'

import markdownStyles from '@styles/markdown-styles.module.css'
const Video = dynamic(() => import('@parts/Video'), { ssr: false })
import readingTime from '@lib/readingTime'
import Carousel from '@parts/carousel/Carousel'

import Main from '@parts/Main'
import Recipes_Post_SEO from '@recipes/Recipes_Post_SEO'
import Recipes_Post_Header from '@recipes/Recipes_Post_Header'
import Recipes_Post_GetPrevNextPost from '@recipes/Recipes_Post_GetPrevNextPost'
const Recipes_Post_Related = dynamic(() => import('@recipes/Recipes_Post_Related'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})
import Recipes_Post_Tags from '@recipes/Recipes_Post_Tags'
import Loading from '@utility/Loading'

// Custom components/renderers to pass to MDX.
const components = {
  Carousel: Carousel,
  Video: Video,
}
const datePostedISO = (date) => new Date(JSON.parse(JSON.stringify(date))).toISOString()

export default function PostPage({
  slug,
  freshPosts,
  source,
  readTime,
  frontMatter,
  matchingBio,
  nextAuthor,
  nextFilePath,
  nextTitle,
  prevAuthor,
  prevFilePath,
  prevTitle,
}) {
  return (
    <Main>
      <Recipes_Post_SEO datePostedISO={datePostedISO} frontMatter={frontMatter} slug={slug} />
      <div className='mb-32'>
        <Recipes_Post_Header
          frontMatter={frontMatter}
          date={datePostedISO(frontMatter.date)}
          readTime={readTime}
          matchingBio={matchingBio}
        />

        <section className='px-6 mt-8 md:max-w-3xl mx-auto'>
          <article id='blog-body-guts'>
            <div className={markdownStyles['markdown']}>
              <MDXRemote {...source} components={components} />
            </div>
          </article>

          <Recipes_Post_Tags tags={frontMatter.tags} />
        </section>
      </div>

      <Recipes_Post_GetPrevNextPost
        prevTitle={prevTitle}
        prevFilePath={prevFilePath}
        prevAuthor={prevAuthor}
        nextTitle={nextTitle}
        nextFilePath={nextFilePath}
        nextAuthor={nextAuthor}
        as={'recipes'}
      />
      <Recipes_Post_Related relatedPosts={freshPosts} />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  const time = readingTime(content)

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

  const TwoYearsAgo = dayjs().subtract(2, 'year')

  let freshPosts = allPosts.filter((p) => dayjs(p.data.date).isBefore(TwoYearsAgo) === false)

  freshPosts = shuffleArray(freshPosts).slice(0, 3)

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

  const nextAuthor = nextIndex.data.author.name
  const nextFilePath = nextIndex.filePath
  const nextTitle = nextIndex.data.title

  const prevAuthor = prevIndex.data.author.name
  const prevFilePath = prevIndex.filePath
  const prevTitle = prevIndex.data.title
  //End of prev/next search

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: false,
    },
    scope: data,
  })

  const matchingBio =
    allPeople.find((p) => p.data.name.toUpperCase() === data.author.name.toUpperCase()) ?? null

  return {
    props: {
      nextAuthor: nextAuthor,
      nextFilePath: nextFilePath,
      nextTitle: nextTitle,
      prevAuthor: prevAuthor,
      prevFilePath: prevFilePath,
      prevTitle: prevTitle,
      slug: params.slug,
      matchingBio: matchingBio,
      freshPosts: freshPosts,
      source: mdxSource,
      readTime: time,
      frontMatter: data,
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
