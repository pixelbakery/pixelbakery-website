import Head from 'next/head'

// import InstagramFeed from "../components/instagramFeed";
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Home_Landing from '@home/Home_Landing'
import Home_WhoTheHeck from '@home/Home_WhoTheHeck'
import Home_WhatWeMake from '@home/Home_WhatWeMake'
import Home_Services from '@home/Home_Services'
import Home_Portfolio from '@home/Home_Portfolio'

import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'

import Home_Recipes from '@home/Home_Recipes'

const Home = ({ allPosts }) => {
  return (
    <main className='max-w-screen overflow-x-hidden '>
      <Head>
        <title>Pixel Bakery</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Home_Landing />
      <Home_WhoTheHeck />
      <Home_WhatWeMake />
      <Home_Services />
      <Home_Portfolio />
      <Home_Recipes allPosts={allPosts} />
    </main>
  )
}

export default Home

export function getStaticProps() {
  const allPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allPosts } }
}
