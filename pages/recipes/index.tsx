import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { ReactElement } from 'react'

import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import Recipes_MoreStories from '@recipes/Recipes_MoreStories'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import InnerWrapper from '@parts/InnerWrapper'
import Recipes_SEO from '@recipes/Recipes_SEO'

import { Post, PostData } from '@/types'

const FEATURED_POSTS_COUNT = 4
const SECONDARY_POSTS_COUNT = 8
interface PageRecipesProps {
  allPosts: Post[]
}

const getPostUrl = (filePath: string): string => `/recipes/${filePath.replace(/\.mdx?$/, '')}`
interface PostCardConfig {
  width: number
  height: number
  aspectW: string
  aspectY: string
}

const FEATURED_POST_CONFIG: PostCardConfig = {
  width: 556,
  height: 417,
  aspectW: '4',
  aspectY: '3',
}

const SECONDARY_POST_CONFIG: PostCardConfig = {
  width: 273,
  height: 364,
  aspectW: '3',
  aspectY: '4',
}

const renderPost = (post: Post, config: PostCardConfig) => (
  <Recipes_FeaturedPost
    as={getPostUrl(post.filePath)}
    href='/recipes/[slug]'
    key={post.filePath}
    title={post.data.title}
    author={post.data.author.name}
    categories={post.data.categories}
    date={post.data.date}
    aspectW={config.aspectW}
    aspectY={config.aspectY}
    width={config.width}
    height={config.height}
    coverImage={post.data.coverImage}
    excerpt={post.data.excerpt}
  />
)

const getFeaturedPosts = ({ allPosts }: { allPosts: Post[] }) =>
  allPosts.slice(0, FEATURED_POSTS_COUNT).map((post) => renderPost(post, FEATURED_POST_CONFIG))

const getSecondaryPosts = ({ allPosts }: { allPosts: Post[] }) =>
  allPosts
    .slice(FEATURED_POSTS_COUNT, FEATURED_POSTS_COUNT + SECONDARY_POSTS_COUNT)
    .map((post) => renderPost(post, SECONDARY_POST_CONFIG))

const Page_Recipes = ({ allPosts }: PageRecipesProps) => {
  const morePosts = allPosts.slice(FEATURED_POSTS_COUNT + SECONDARY_POSTS_COUNT)

  return (
    <>
      <PageHeader_VarH header="Mom's Recipes" subheader='No word yet on her spaghetti, though' />
      <PageSection id='recent-posts'>
        <InnerWrapper>
          <H2>Recent</H2>
          <div className='grid grid-cols-1 gap-4 my-16 sm:grid-cols-2 md:gap-10'>
            {getFeaturedPosts({ allPosts })}
          </div>
          <div className='grid grid-cols-2 gap-4 my-16 sm:grid-cols-4 md:gap-y-20 md:gap-5'>
            {getSecondaryPosts({ allPosts })}
          </div>
        </InnerWrapper>

        {morePosts.length > 0 && (
          <InnerWrapper className='relative py-24 my-24 lg:py-24' disableSpacing>
            <Recipes_MoreStories posts={morePosts} />
          </InnerWrapper>
        )}
      </PageSection>
      <Recipes_SEO />
    </>
  )
}

Page_Recipes.getLayout = (page: ReactElement) => <Layout_Defaualt>{page}</Layout_Defaualt>
export default Page_Recipes

export async function getStaticProps() {
  try {
    const allPosts = postFilePaths
      .map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8')
        const { data } = matter(source)
        return {
          data: {
            ...data,
            date: JSON.parse(JSON.stringify(data.date)),
          } as PostData,
          filePath,
        }
      })
      .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

    return {
      props: { allPosts },
      revalidate: 3600,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: { allPosts: [] },
      revalidate: 60,
    }
  }
}
