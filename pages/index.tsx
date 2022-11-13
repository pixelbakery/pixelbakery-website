import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Main from '@parts/Main'

import dynamic from 'next/dynamic'
import Home_WhatWeMake from '@home/Home_WhatWeMake'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Home_Services from '@home/Home_Services'
import Home_SEO from '@home/Home_SEO'
// import Home_WhoTheHeck from '@home/Home_WhoTheHeck'
import Home_Recipes from '@home/Home_Recipes'
import Home_Portfolio from '@home/Home_Portfolio'
import { H1, H2 } from '@typography/index'

const Home_Landing = dynamic(() => import('@home/Home_Landing'), {
  loading: () => (
    <section className='absolute z-50 top-0 left-0 w-screen h-screen bg-cream flex flex-col justify-center'>
      <H1 color='blue-dark self-center text-center'>Pixel Bakery Design Studio</H1>
      <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
    </section>
  ),
  ssr: false,
})
const Home_WhoTheHeck = dynamic(() => import('@home/Home_WhoTheHeck'), {
  ssr: false,
  loading: () => (
    <section className='w-screen h-screen bg-cream flex flex-col justify-center'>
      <H2>Who The Heck</H2>
      <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
    </section>
  ),
})

// const Home_Portfolio = dynamic(() => import('@home/Home_Portfolio'), { ssr: false })

// import Home_Awwwards from '@home/Home_Awwwards'
// const Home_Recipes = dynamic(() => import('@home/Home_Recipes'), { ssr: false })

const Home = ({ allPosts, allCaseStudies }) => {
  return (
    <Main>
      <Home_SEO />
      {/* <Home_Awwwards /> */}
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
