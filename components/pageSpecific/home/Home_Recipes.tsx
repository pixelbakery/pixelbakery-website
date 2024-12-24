// components/pageSpecific/home/Home_Recipes.tsx

import ButtonFilled from '@parts/Button_Filled'
import RecipesFeaturedPost from '@recipes/Recipes_FeaturedPost'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import { H2 } from '@typography'
import type { PostData } from '@types'

interface Post {
  filePath: string
  data: PostData & {
    active: boolean
  }
}

interface HomeRecipesProps {
  allPosts: Post[]
}

const SecondaryPosts = ({ allPosts }: HomeRecipesProps) => (
  <>
    {allPosts.map((post) => {
      const authorName =
        typeof post.data.author === 'string' ? post.data.author : post.data.author.name

      return (
        <RecipesFeaturedPost
          as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/recipes/[slug]`}
          key={post.filePath}
          title={post.data.title}
          author={authorName}
          categories={post.data.categories}
          date={post.data.date}
          aspectW='3'
          aspectY='4'
          coverImage={post.data.coverImage}
          excerpt={post.data.excerpt}
          width={273}
          height={364}
        />
      )
    })}
  </>
)

const HomeRecipes = ({ allPosts }: HomeRecipesProps) => {
  return (
    <PageSection id='recipes'>
      <InnerWrapper>
        <H2>Mom&apos;s Recipes</H2>
        <div className='grid grid-cols-2 gap-4 my-16 sm:grid-cols-4 md:gap-y-20 md:gap-5'>
          <SecondaryPosts allPosts={allPosts} />
        </div>
        <ButtonFilled
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
export default HomeRecipes
