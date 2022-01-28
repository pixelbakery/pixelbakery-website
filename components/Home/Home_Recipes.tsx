import React from 'react'

import Recipes_SmallPost from '../Recipes/Recipes_SmallPost'
import Button_Filled from '../parts/Button_Filled'

function Home_Recipes({ allPosts }) {
  const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
  const postsToShhow = allPosts.slice(0, featuredPostNo)
  return (
    <section className='my-4 px-6 pb-8 pt-12 '>
      <div className='max-w-md md:max-w-2xl xl:max-w-4xl mx-auto'>
        <h2 className='mb-20'>Mom&apos;s Recipes</h2>
        {postsToShhow.map((post) => {
          return (
            <Recipes_SmallPost
              key={post.filePath}
              title={post.data.title}
              categories={post.data.categories}
              coverImage={post.data.coverImage}
              date={post.data.date}
              author={post.data.author}
              as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/recipes/[slug]`}
              excerpt={post.data.excerpt}
            />
          )
        })}
      </div>
      <div className='mx-auto pt-16 pb-8 border-t border-wine-100 max-w-6xl'>
        <Button_Filled
          text='we got more'
          link='/recipes'
          chevronDirection='right'
          bgColor='blue'
          textColor='cream'
          center={true}
        />
      </div>
    </section>
  )
}
export default Home_Recipes
// const Index = ({ allPosts }: Props) => {

//   const getFeaturedPosts = () => {
//     return allPosts.slice(0, featuredPostNo).map((post) => {
//       return (
//         <Recipes_FeaturedPost
//           slug={post.slug}
//           key={post.title}
//           title={post.title}
//           author={post.author}
//           categories={post.categories}
//           date={post.date}
//           aspectW={'4'}
//           aspectY={'3'}
//           coverImage={post.coverImage}
//           excerpt={post.excerpt}
//         />
//       )
//     })
//   }
//   return (
//     <>
//       <Section>
//         <div className='mx-auto max-w-6xl'>
//           <h2>Recent</h2>
//           <div className='my-16 grid grid-cols-1  sm:grid-cols-2  gap-4 md:gap-10'>
//             {getFeaturedPosts()}
//           </div>
//         </div>

//         <div className='my-14 mx-auto max-w-sm '>
//           <Button_Outlined
//             text={'we got more'}
//             link={'/recipes'}
//             color={'blue'}
//             chevronDirection={'right'}
//           />
//         </div>
//       </Section>
//     </>
//   )
// }

// export default Index

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'subtitle',
//     'date',
//     'slug',
//     'author',
//     'categories',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
// export async function getStaticProps() {
//   const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

//   return {
//     props: { allPosts },
//   }
// }
