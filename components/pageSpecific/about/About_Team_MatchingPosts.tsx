import Button_Filled from '@parts/Button_Filled'
import { InnerWrapper, PageSection } from '@parts'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'

const About_Team_MatchingPosts = ({ matchingAuthorPosts, name }) => {
  // eslint-disable-next-line no-unused-vars
  const [firstName, lastName] = name.split(' ')
  return (
    <>
      {matchingAuthorPosts.length > 0 ? (
        <PageSection color='white' id={'bio-postsByPerson'}>
          <InnerWrapper>
            <h2>{`${firstName}`}'s Recent Posts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
              {matchingAuthorPosts.map((post) => {
                return (
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
                    coverImage={post.data.coverImage}
                    excerpt={post.data.excerpt}
                    width={376}
                    height={282}
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
