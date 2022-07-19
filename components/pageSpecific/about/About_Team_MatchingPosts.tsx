import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

function About_Team_MatchingPosts({ allPosts, frontMatter }) {
  const matchingAuthorPosts = allPosts
    .filter((p) => p.data.author.name.toUpperCase() === frontMatter.name.toUpperCase())
    .slice(0, 11)

  return (
    <>
      {matchingAuthorPosts.length > 0 ? (
        <PageSection color='white'>
          <InnerWrapper>
            <h2>Recent Posts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
              {matchingAuthorPosts.map((post) => {
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
              })}
            </div>
            <div className='mt-24'>
              <Button_Filled
                text='View More'
                link='/recipes'
                center={true}
                textColor='cream'
                bgColor='blue'
                chevronDirection='right'
              />
            </div>
          </InnerWrapper>
        </PageSection>
      ) : (
        ''
      )}
    </>
  )
}
export default About_Team_MatchingPosts
