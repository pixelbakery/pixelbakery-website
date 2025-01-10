import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remarkGfm from 'remark-gfm'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import markdownStyles from '@styles/markdown-styles.module.css'
import { readingTime } from '@lib'
import { Layout_Default } from '@layouts'
import {
  Education_PostHeader,
  Education_SupportUs,
  Education_MadeToOrder_SEO,
  Education_MadeToOrder_Tags,
} from '@education'
import { Recipes_Post_GetPrevNextPost } from '@recipes'
import { PageSection, Video } from '@parts'

import type { GetStaticPropsContext } from 'next'
import type { ReactElement } from 'react'
import type { TutorialPageProps, Tutorial, TutorialFrontMatter } from '@/types/tutorials'
import type { ReadTime } from '@/types/general'

const components = {
  Video: Video,
}

function Page_Education_Tutorials({
  slug,
  source,
  frontMatter,
  readTime,
  prev,
  next,
}: TutorialPageProps) {
  const datePostedISO = new Date(frontMatter.date).toISOString()

  return (
    <>
      <Education_PostHeader
        title={frontMatter.title}
        category={`${frontMatter.category} Tutorial`}
        author={frontMatter.author.name}
        authorUrl={frontMatter.author.url}
        readTime={readTime}
      />
      <div className='max-w-6xl mx-auto'>
        <div className='w-full mx-auto aspect-w-16 aspect-h-9 bg-peach'>
          <Video
            url={frontMatter.video}
            poster={`${frontMatter.coverImage}`}
            controls={true}
            enableTracking={true}
            eventName='Tutorial Video Plays'
            title={`${frontMatter.title} `}
          />
        </div>
      </div>
      <PageSection className='px-6 mx-auto mb-8 lg:py-16 md:max-w-3xl lg:mb-8' id='tutorial-body'>
        <article id='blog-body-guts'>
          <div className={markdownStyles['markdown']}>
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </PageSection>
      <Education_MadeToOrder_Tags tags={frontMatter.tags} />
      <Recipes_Post_GetPrevNextPost
        prev={prev || null}
        next={next || null}
        as={'education/tutorials'}
      />
      <Education_SupportUs />
      <Education_MadeToOrder_SEO
        frontMatter={frontMatter}
        slug={slug}
        datePostedISO={datePostedISO}
      />
    </>
  )
}

// Set page layout
Page_Education_Tutorials.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export default Page_Education_Tutorials

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<{ props: TutorialPageProps }> => {
  if (!params || !params.slug) {
    throw new Error('Slug is missing in params')
  }

  const tutorialFilePath = path.join(MADETOORDER_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(tutorialFilePath)
  const { content, data } = matter(source)

  // Ensure `date` is converted to a string
  const frontMatter = {
    ...data,
    date: data.date ? new Date(data.date).toISOString() : null, // Normalize date to ISO string
  } as TutorialFrontMatter

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
    scope: frontMatter, // Ensure scope contains JSON-serializable data
  })

  const readingTimeResult = readingTime(content)
  const readTime: ReadTime = {
    text: readingTimeResult.text,
    minutes: readingTimeResult.minutes,
    time: readingTimeResult.time,
    words:
      typeof readingTimeResult.words === 'number'
        ? readingTimeResult.words
        : readingTimeResult.words.total,
  }

  // Fetch and process all tutorials
  const allTutorials: Tutorial[] = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { data } = matter(source)
      return {
        filePath,
        frontMatter: {
          ...data,
          date: data.date ? new Date(data.date).toISOString() : null, // Normalize date to ISO string
        } as Tutorial['frontMatter'],
      }
    })
    .filter((tut) => tut.frontMatter.active)
    .sort((a, b) => new Date(a.frontMatter.date).getTime() - new Date(b.frontMatter.date).getTime())

  // Get current, previous, and next tutorials
  const currentIndex = allTutorials.findIndex((t) => t.frontMatter.slug === params.slug)
  const prevTutorial = allTutorials[currentIndex - 1]
  const nextTutorial = allTutorials[currentIndex + 1]

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter,
      readTime,
      prev:
        prevTutorial && prevTutorial.frontMatter.slug
          ? {
              title: prevTutorial.frontMatter.title,
              slug: prevTutorial.frontMatter.slug,
              author: prevTutorial.frontMatter.author,
            }
          : null,
      next:
        nextTutorial && nextTutorial.frontMatter.slug
          ? {
              title: nextTutorial.frontMatter.title,
              slug: nextTutorial.frontMatter.slug,
              author: nextTutorial.frontMatter.author,
            }
          : null,
    },
  }
}
export const getStaticPaths = async () => {
  const paths = madeToOrderFilePaths.map((filePath) => ({
    params: { slug: filePath.replace(/\.mdx?$/, '') },
  }))

  return {
    paths,
    fallback: false,
  }
}
