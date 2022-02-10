import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import MoreStories from '@recipes/more-stories'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import Button_Outlined from '@parts/Button_Outlined'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

const Index = ({ allPosts }) => {
  const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
  const morePosts = allPosts.slice(featuredPostNo)
  const getFeaturedPosts = () => {
    return allPosts.slice(0, featuredPostNo).map((post) => {
      return (
        <Recipes_FeaturedPost
          as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/recipes/[slug]`}
          key={post.filePath}
          title={post.data.title}
          author={post.data.author}
          categories={post.data.categories}
          date={post.data.date}
          aspectW={'4'}
          aspectY={'3'}
          coverImage={post.data.coverImage}
          excerpt={post.data.excerpt}
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
          <div className='my-16 grid grid-c\ols-1  sm:grid-cols-2  gap-4 md:gap-10'>
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
