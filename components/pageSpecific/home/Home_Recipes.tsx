// components/pageSpecific/home/Home_Recipes.tsx
import { Recipes_FeaturedPost } from '@recipes'
import { InnerWrapper, PageSection, Button_Filled } from '@parts'
import { H2 } from '@typography'
import type { PostData } from '@/types/general'

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
        <Recipes_FeaturedPost
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
export default HomeRecipes
