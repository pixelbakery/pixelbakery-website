import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { useState } from 'react'
import MoreStories from '@recipes/more-stories'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'

import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import cn from 'classnames'
import { ChevronRightIcon } from '@images/UI_Icons'

const Index = ({ allPosts }) => {
  const [displayed, setDisplayed] = useState(12)

  function handleDisplayed() {
    if (displayed < Object.keys(allPosts).length) {
      setDisplayed(displayed + 12)
    } else setDisplayed(Object.keys(allPosts).length)
  }

  const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
  const secondaryPostNo = 8
  const morePosts = allPosts.slice(secondaryPostNo + featuredPostNo, displayed)
  const getFeaturedPosts = () => {
    return allPosts.slice(0, featuredPostNo).map((post, index) => {
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
  const getSecondaryPosts = () => {
    return allPosts.slice(featuredPostNo, secondaryPostNo + featuredPostNo).map((post) => {
      return (
        <Recipes_FeaturedPost
          as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/recipes/[slug]`}
          key={post.filePath}
          title={post.data.title}
          author={post.data.author}
          categories={post.data.categories}
          date={post.data.date}
          aspectW={'3'}
          aspectY={'4'}
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
          <div className='my-16 grid grid-cols-1  sm:grid-cols-2  gap-4 md:gap-10'>
            {getFeaturedPosts()}
          </div>
          <div className='my-16 grid grid-cols-2  sm:grid-cols-4  gap-4 md:gap-y-20 md:gap-5'>
            {getSecondaryPosts()}
          </div>
        </div>

        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-6xl'>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <div className='my-14 mx-auto max-w-sm '>
          <button
            onClick={() => handleDisplayed()}
            className={cn(
              'cursor-pointer transform transition-all duration-500 hover:scale-99 my-2 max-w-lg py-2 rounded-xl px-6 w-full bg-transparent text-center border-2 border-blue text-blue',
            )}
          >
            <div className={cn(' font-extrabold text-lg lowercase flex')}>
              <div className='self-center flex-grow flex flex-col justify-center'>Load More</div>

              <i
                className={cn(
                  'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center rotate-90',
                )}
              >
                <ChevronRightIcon />
              </i>
            </div>
          </button>
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
