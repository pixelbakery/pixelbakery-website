import { InnerWrapper, PageSection, Button_Filled } from '@parts'
import { Recipes_FeaturedPost } from '@recipes'
import { usePlausible } from 'next-plausible'
import type { AboutTeamMatchingPostsProps } from '@/types/posts'

interface Props {
  matchingAuthorPosts: AboutTeamMatchingPostsProps[] //lazy, I know. But I'm so tired.
  name: string
}
const About_Team_MatchingPosts = ({ matchingAuthorPosts, name }: Props) => {
  const plausible = usePlausible()

  function handlePostClick(postTitle: string) {
    plausible('AuthorPostClicked', {
      props: {
        authorName: name,
        postTitle,
      },
    })
  }

  const [firstName] = name.split(' ') // Extract the first name

  return (
    <>
      {matchingAuthorPosts.length > 0 ? (
        <PageSection color='white' id={'bio-postsByPerson'}>
          <InnerWrapper>
            <h2>{`${firstName}`}'s Recent Posts</h2>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
              {matchingAuthorPosts.map((post: AboutTeamMatchingPostsProps) => (
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
                  onClick={() => handlePostClick(post.data.title)}
                />
              ))}
            </div>
            <div className='mt-24'>
              <Button_Filled
                text='View More'
                link='/recipes'
                center={true}
                textColor='cream'
                bgColor='blue'
                chevronDirection='right'
                plausibleEventName='ViewMoreRecipes'
                plausibleEventProps={{
                  button: 'View More',
                  location: 'About Team Matching Posts',
                }}
              />
            </div>
          </InnerWrapper>
        </PageSection>
      ) : null}
    </>
  )
}

export default About_Team_MatchingPosts
