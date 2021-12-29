import React from 'react'
import { getAllPosts } from '../../lib/api_post'
import fs from 'fs'
import Post from '../../types/post'

import { useRouter } from 'next/router'

export default function Index({ allPosts }) {
  //   const allPosts = getAllPosts()
  return <></>
}
// const Index = ({ allPosts }: Props) => {
//   const featuredPostNo = 4 //sets how many posts should be shown at the top as cards

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
