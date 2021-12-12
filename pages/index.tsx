import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
// import InstagramFeed from "../components/instagramFeed";
// import blogPosts from '../data/blogPosts'
import HomeLanding from '../components/Home/Home_Landing'
import HomeWhoTheHeck from '../components/Home/Home_WhoTheHeck'
import HomeWhatWeMake from '../components/Home/Home_WhatWeMake'
import HomeServices from '../components/Home/Home_Services'
import HomePortfolio from '../components/Home/Home_Portfolio'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pixel Bakery</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <HomeLanding />
      <HomeWhoTheHeck />
      <HomeWhatWeMake />
      <HomeServices />
      <HomePortfolio />
    </div>
  )
}

export default Home
