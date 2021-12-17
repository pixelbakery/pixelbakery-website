import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card_Rounded from '../../components/parts/Card_Rounded'
import { getAllPosts } from '../../lib/api'
import Post from '../../types/post'
import MoreStories from '../../components/Recipes/MoreStories'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice(1)
  return (
    <main id='recipes'>
      <section className='lander'>
        <h1> Landing Page</h1>
      </section>
      <section>
        <input>search</input>
      </section>
      <section>
        <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2'>
          <div className='col-span-1'>
            <Card_Rounded />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </div>
      </section>
    </main>
  )
}
export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
