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
import Home_Awwwards from '@home/Home_Awwwards'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Home_Recipes from '@home/Home_Recipes'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'

const Home = ({ allPosts, allCaseStudies }) => {
  return (
    <Main>
      <NextSeo
        title='Home'
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com`,
          title: 'Home',
          images: [
            {
              url: 'https://pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://pixelbakery.com/img/pixel-bakery-office.jpeg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        }}
      />
      <Home_Awwwards />
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
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  // Get all portfolio pieces:
  const allCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))

  return { props: { allPosts, allCaseStudies } }
}
