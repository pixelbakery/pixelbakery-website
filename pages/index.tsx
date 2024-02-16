import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import dynamic from 'next/dynamic'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { caseStudyFilePaths, CASESTUDIES_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Layout_Home from 'components/layouts/Layout_Home'
import Work_Industries from '@work/Work_Industries'
import Loading from '@utility/Loading'

import {
  Home_Services,
  Home_SEO,
  Home_WhoTheHeck,
  Home_Landing,
  Home_WhatWeMake,
} from '@home/index'

const Home_Portfolio = dynamic(() => import('@home/Home_Portfolio'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})
const Home_Recipes = dynamic(() => import('@home/Home_Recipes'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})

const Page_Home: NextPageWithLayout = ({ allPosts, allCaseStudies }: any) => {
  return (
    <>
      <Home_Landing />
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

//Set page layout
Page_Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Home>{page}</Layout_Home>
}

export default Page_Home

export function getStaticProps() {
  // Get all blog posts:
  const allPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .slice(0, 4)

  // Get all portfolio pieces:
  const allCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))
    .slice(0, 4)

  return { props: { allPosts, allCaseStudies } }
}
