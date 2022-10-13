import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Main from '@parts/Main'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Home_WhatWeMake from '@home/Home_WhatWeMake'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Home_Services from '@home/Home_Services'
import Home_SEO from '@home/Home_SEO'
import Home_WhoTheHeck from '@home/Home_WhoTheHeck'
import Home_Recipes from '@home/Home_Recipes'
import Home_Portfolio from '@home/Home_Portfolio'

const Home_Landing = dynamic(() => import('@home/Home_Landing'), {
  suspense: true,
})

// const Home_WhoTheHeck = dynamic(() => import('@home/Home_WhoTheHeck'), { ssr: false })
// const Home_Portfolio = dynamic(() => import('@home/Home_Portfolio'), { ssr: false })

// import Home_Awwwards from '@home/Home_Awwwards'
// const Home_Recipes = dynamic(() => import('@home/Home_Recipes'), { ssr: false })

const Home = ({ allPosts, allCaseStudies }) => {
  return (
    <Main>
      <Home_SEO />
      {/* <Home_Awwwards /> */}
      <Suspense
        fallback={
          <section className='w-screen h-screen bg-cream flex flex-col justify-center'>
            <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
          </section>
        }
      >
        <Home_Landing />
      </Suspense>
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
      return {
        data,
        filePath,
      }
    })
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))
    .slice(0, 4)

  return { props: { allPosts, allCaseStudies } }
}
