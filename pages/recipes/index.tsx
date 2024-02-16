import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import Recipes_MoreStories from '@recipes/Recipes_MoreStories'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

import InnerWrapper from '@parts/InnerWrapper'
import Recipes_SEO from '@recipes/Recipes_SEO'
import { Fragment } from 'react'
// let counter = 0
const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
const secondaryPostNo = 8

const getFeaturedPosts = ({ allPosts }) => {
  return allPosts.slice(0, featuredPostNo).map((post, index) => {
    return (
      <Fragment key={index}>
        <Recipes_FeaturedPost
          as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/recipes/[slug]`}
          key={post.filePath}
          title={post.data.title}
          author={post.data.author.name}
          categories={post.data.categories}
          date={post.data.date}
          aspectW={'4'}
          aspectY={'3'}
          width={556}
          height={417}
          coverImage={post.data.coverImage}
          excerpt={post.data.excerpt}
        />
      </Fragment>
    )
  })
}

const getSecondaryPosts = ({ allPosts }) => {
  return allPosts.slice(featuredPostNo, secondaryPostNo + featuredPostNo).map((post) => {
    return (
      <Recipes_FeaturedPost
        as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/recipes/[slug]`}
        key={post.filePath}
        title={post.data.title}
        author={post.data.author.name}
        categories={post.data.categories}
        date={post.data.date}
        aspectW={'3'}
        aspectY={'4'}
        width={273}
        height={364}
        coverImage={post.data.coverImage}
        excerpt={post.data.excerpt}
      />
    )
  })
}
const Page_Recipes = ({ allPosts }) => {
  const morePosts = allPosts.slice(secondaryPostNo + featuredPostNo)

  return (
    <>
      <PageHeader_VarH header="Mom's Recipes" subheader='No word yet on her spaghetti, though' />
      <PageSection id='recent-posts'>
        <InnerWrapper>
          <H2>Recent</H2>
          <div className='my-16 grid grid-cols-1  sm:grid-cols-2  gap-4 md:gap-10'>
            {getFeaturedPosts({ allPosts })}
          </div>
          <div className='my-16 grid grid-cols-2  sm:grid-cols-4  gap-4 md:gap-y-20 md:gap-5'>
            {getSecondaryPosts({ allPosts })}
          </div>
        </InnerWrapper>

        <InnerWrapper className='my-24 relative py-24 lg:py-24' disableSpacing>
          {morePosts.length > 0 && <Recipes_MoreStories posts={morePosts} />}
        </InnerWrapper>
      </PageSection>
      <Recipes_SEO />
    </>
  )
}
//Set page layout
Page_Recipes.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Recipes

export function getStaticProps() {
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

  return { props: { allPosts } }
}
