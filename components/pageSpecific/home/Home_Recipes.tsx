import Button_Filled from '@parts/Button_Filled'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

const getSecondaryPosts = ({ allPosts }) => {
  return allPosts.map((post) => {
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
        coverImage={post.data.coverImage}
        excerpt={post.data.excerpt}
      />
    );
  });
}

function Home_Recipes({ allPosts }) {
  return (
    <PageSection id={'recipes'}>
      <InnerWrapper>
        <H2>Mom&apos;s Recipes</H2>
        <div className='my-16 grid grid-cols-2  sm:grid-cols-4  gap-4 md:gap-y-20 md:gap-5'>
          {getSecondaryPosts({ allPosts })}
        </div>
        <Button_Filled
          text='we got more'
          link='/recipes'
          chevronDirection='right'
          bgColor='blue'
          textColor='cream'
          center={true}
        />
      </InnerWrapper>
    </PageSection>
  )
}
export default Home_Recipes
