import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'
import markdownStyles from '@styles/markdown-styles.module.css'

import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import readingTime from '@lib/readingTime'

const Video = dynamic(() => import('@parts/Video'), {
  ssr: false,
})

import dynamic from 'next/dynamic'
import { PageSection, Main } from '@parts/index'
import {
  Education_PostHeader,
  // Education_MadeToOrder_GetPrevNextPost,
  Education_SupportUs,
  Education_MadeToOrder_SEO,
  Education_MadeToOrder_Tags,
} from '@education/index'
import Recipes_Post_GetPrevNextPost from '@recipes/Recipes_Post_GetPrevNextPost'
const components = {
  Video: Video,
}

export default function Page_Education_Tutorials({
  slug,
  source,
  frontMatter,
  readTime,
  nextAuthor,
  nextFilePath,
  nextTitle,
  prevAuthor,
  prevFilePath,
  prevTitle,
}) {
  const datePostedISO = new Date(frontMatter.date).toISOString()

  return (
    <Main>
      <Education_MadeToOrder_SEO
        frontMatter={frontMatter}
        slug={slug}
        datePostedISO={datePostedISO}
      />

      <Education_PostHeader
        title={frontMatter.title}
        category={`${frontMatter.category} Tutorial`}
        date={frontMatter.date}
        author={frontMatter.author.name}
        authorUrl={frontMatter.author.url}
        readTime={readTime}
      />

      <div className='max-w-6xl mx-auto'>
        <div className=' w-full aspect-w-16 aspect-h-9  mx-auto bg-peach'>
          <Video
            url={frontMatter.video}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
            controls={true}
          />
        </div>
      </div>
      <PageSection className='px-6 lg:py-16 md:max-w-3xl mx-auto mb-8 lg:mb-8' id='tutorial-body'>
        <article id='blog-body-guts'>
          <div className={markdownStyles['markdown']}>
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </PageSection>
      <Education_MadeToOrder_Tags tags={frontMatter.tags} />
      <Recipes_Post_GetPrevNextPost
        prevTitle={prevTitle}
        prevFilePath={prevFilePath}
        prevAuthor={prevAuthor}
        nextTitle={nextTitle}
        nextFilePath={nextFilePath}
        nextAuthor={nextAuthor}
        as={'education/tutorials'}
      />
      <Education_SupportUs />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const temp = path.join(MADETOORDER_PATH, `${params.slug}.mdx`.toString())
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })
  const time = readingTime(content)
  const allTutorials = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))

      return { filePath, data }
    })
    .filter((cs) => cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.date < cs2.data.date ? -1 : 1))

  let thisIndex,
    prevIndex,
    nextIndex = null

  if (data.active != false) {
    allTutorials.map((p, index) => {
      if (p.data.title === data.title) {
        thisIndex = index
      }
    })

    if (thisIndex != undefined && thisIndex === 0)
      prevIndex = allTutorials[Object.keys(allTutorials).length - 1]
    else prevIndex = allTutorials[thisIndex - 1]

    if (thisIndex != undefined && thisIndex === Object.keys(allTutorials).length - 1)
      nextIndex = allTutorials[0]
    else nextIndex = allTutorials[thisIndex + 1]
  } else (thisIndex = null), (nextIndex = null), (prevIndex = null)

  const nextAuthor = nextIndex.data.author.name
  const nextFilePath = nextIndex.filePath
  const nextTitle = nextIndex.data.title

  const prevAuthor = prevIndex.data.author.name
  const prevFilePath = prevIndex.filePath
  const prevTitle = prevIndex.data.title

  //End of prev/next search

  data.date = JSON.parse(JSON.stringify(data.date))
  return {
    props: {
      nextAuthor: nextAuthor,
      nextFilePath: nextFilePath,
      nextTitle: nextTitle,
      prevAuthor: prevAuthor,
      prevFilePath: prevFilePath,
      prevTitle: prevTitle,
      slug: params.slug,
      source: mdxSource,
      readTime: time,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = madeToOrderFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
