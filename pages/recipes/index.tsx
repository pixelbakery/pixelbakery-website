import React from 'react'
import Section from '../../components/Section'
import MoreStories from '../../components/Recipes/Tutorial/more-stories'

import { getAllPosts } from '../../lib/api_post'

import Post from '../../types/post'
import PageHeader_VariableHeight from '../../components/PageHeader/PageHeader_VarH'
import Recipes_FeaturedPost from '../../components/Recipes/Tutorial/Recipes_FeaturedPost'
import Button_Outlined from '../../components/parts/Button_Outlined'
import PageSection from '../../components/PageSection'
import H2 from '../../components/H2'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
  const morePosts = allPosts.slice(featuredPostNo)
  const getFeaturedPosts = () => {
    return allPosts.slice(0, featuredPostNo).map((post) => {
      return (
        <Recipes_FeaturedPost
          slug={post.slug}
          key={post.title}
          title={post.title}
          author={post.author}
          categories={post.categories}
          date={post.date}
          aspectW={'4'}
          aspectY={'3'}
          coverImage={post.coverImage}
          excerpt={post.excerpt}
        />
      )
    })
  }
  return (
    <>
      <PageHeader_VariableHeight
        header="Mom's Recipes"
        subheader='No word yet on her spaghetti, though'
      />
      <PageSection>
        <div className='mx-auto max-w-6xl'>
          <H2>Recent</H2>
          <div className='my-16 grid grid-cols-1  sm:grid-cols-2  gap-4 md:gap-10'>
            {getFeaturedPosts()}
          </div>
        </div>

        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-3xl'>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <div className='my-14 mx-auto max-w-sm '>
          <Button_Outlined text={'load more'} link={'/'} color={'blue'} chevronDirection={'down'} />
        </div>
      </PageSection>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'date',
    'slug',
    'headshotSerious',
    'photos',
    'author',
    'categories',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
