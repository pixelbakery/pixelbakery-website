import React from 'react'
import ButtonFilled from '@parts/Button_Filled'
import RecipesFeaturedPost from '@recipes/Recipes_FeaturedPost'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

// Type definition for a single post
interface Post {
  filePath: string
  data: {
    title: string
    author: { name: string }
    categories: string[]
    date: string
    coverImage: string
    excerpt: string
  }
}

// Type definition for the props of HomeRecipes component
interface HomeRecipesProps {
  allPosts: Post[]
}

const SecondaryPosts = ({ allPosts }: HomeRecipesProps) => (
  <>
    {allPosts.map((post) => (
      <RecipesFeaturedPost
        as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/recipes/[slug]`}
        key={post.filePath}
        title={post.data.title}
        author={post.data.author.name}
        categories={post.data.categories}
        date={post.data.date}
        aspectW='3'
        aspectY='4'
        coverImage={post.data.coverImage}
        excerpt={post.data.excerpt}
        width={273}
        height={364}
      />
    ))}
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
