import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Main from '@parts/Main'

import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import {
  Home_Services,
  Home_SEO,
  Home_WhoTheHeck,
  Home_Landing,
  Home_Recipes,
  Home_Portfolio,
  Home_WhatWeMake,
} from '@home/index'

const Home = ({ allPosts, allCaseStudies }) => {
  return (
    <Main>
      <Home_SEO />
      <Home_Landing />
      <Home_WhoTheHeck />
      <Home_WhatWeMake />
      <Home_Services />
      <Home_Portfolio allCaseStudies={allCaseStudies} />
      <Home_Recipes allPosts={allPosts} />
    </Main>
  )
}

export default Home

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
