import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

// import InstagramFeed from "../components/instagramFeed";
// import blogPosts from '../data/blogPosts'
import BlogCard from '../components/parts/blogCard'
import HomeLanding from '../components/pg-home/homeLanding'
import HomeWhoTheHeck from '../components/pg-home/homeWhoTheHeck'
import HomeWhatWeMake from '../components/pg-home/homeWhatWeMake'
import HomeServices from '../components/pg-home/homeServices'
import HomePortfolio from '../components/pg-home/home-portfolio'
import Footer from '../components/footer/Footer'

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
