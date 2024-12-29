// pages/index.tsx
import type { ReactElement } from 'react'
import type { GetStaticProps } from 'next'
import type { NextPageWithLayout } from './_app'
import dynamic from 'next/dynamic'
import type { PostData, CaseStudyProject } from '@types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { caseStudyFilePaths, CASESTUDIES_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Layout_Home from 'components/layouts/Layout_Home'
import Work_Industries from '@work/Work_Industries'
import Loading from '@utility/Loading'

const Home_Portfolio = dynamic(() => import('@home/Home_Portfolio'), {
  ssr: true,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})

const Home_Recipes = dynamic(() => import('@home/Home_Recipes'), {
  ssr: true,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})

import {
  Home_Services,
  Home_SEO,
  Home_WhoTheHeck,
  Home_Landing,
  Home_WhatWeMake,
} from '@home/index'

interface Post {
  filePath: string
  data: PostData & {
    active: boolean
  }
}

interface PageHomeProps {
  allPosts: Post[]
  allCaseStudies: CaseStudyProject[]
  dynamicAnimation: string
}

const Page_Home: NextPageWithLayout<PageHomeProps> = ({
  allPosts,
  allCaseStudies,
  dynamicAnimation,
}) => {
  return (
    <>
      <h1 className='sr-only'>Pixel Bakery Design Studio</h1>
      <Home_Landing dynamicAnimation={dynamicAnimation} />
      <Home_WhoTheHeck />
      <Home_WhatWeMake />
      <Home_Services />
      <Home_Portfolio allCaseStudies={allCaseStudies} />
      <Work_Industries header={'Industries We Love Working With'} />
      <Home_Recipes allPosts={allPosts} />
      <Home_SEO />
    </>
  )
}

Page_Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Home>{page}</Layout_Home>
}

export default Page_Home

// Example getStaticProps implementation
export const getStaticProps: GetStaticProps<PageHomeProps> = async () => {
  // Transform your allPosts data to meet the expected structure
  const allPosts: Post[] = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8')
      const { data } = matter(source)

      return {
        filePath,
        data: {
          // make sure these fields exist in your frontmatter
          title: data.title,
          author: data.author,
          categories: data.categories,
          coverImage: data.coverImage,
          excerpt: data.excerpt,
          date: JSON.parse(JSON.stringify(data.date)),
          active: true,
        },
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .slice(0, 4)

  const allCaseStudies: CaseStudyProject[] = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath), 'utf8')
      const { data } = matter(source)

      return {
        filePath,
        data: {
          date: JSON.parse(JSON.stringify(data.date)),
          active: true,
          client: data.client,
          title: data.title,
          excerpt: data.excerpt,
          tags: data.tags,
          vimeoPreview: data.vimeoPreview,
          vimeoID: data.vimeoID,
        },
      }
    })
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))
    .slice(0, 4)

  const currentMonth = new Date().getMonth()
  const dynamicAnimation =
    currentMonth === 10 // December
      ? 'december'
      : 'normal'

  return {
    props: { allPosts, allCaseStudies, dynamicAnimation },
    revalidate: 86400, // Revalidate every 24 hours
  }
}
