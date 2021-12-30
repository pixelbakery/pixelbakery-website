import Head from 'next/head'
import React from 'react'
// import InstagramFeed from "../components/instagramFeed";

import Home_Landing from '../components/Home/Home_Landing'
import Home_WhoTheHeck from '../components/Home/Home_WhoTheHeck'
import Home_WhatWeMake from '../components/Home/Home_WhatWeMake'
import Home_Services from '../components/Home/Home_Services'
import Home_Portfolio from '../components/Home/Home_Portfolio'
import Post from '../types/post'

import { getAllPosts } from '../lib/api_post'

// import Home_Recipes from '../components/Home/Home_Recipes'

import Link from 'next/link'
import Home_Recipes from '../components/Home/Home_Recipes'
type Props = {
  allPosts: Post[]
}
const Home = ({ allPosts }: Props) => {
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
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'date',
    'slug',
    'author',
    'categories',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
