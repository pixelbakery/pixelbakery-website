import React from 'react'
import Recipes_FeaturedPost from './Recipes_FeaturedPost'
import Post from '../../../types/post'
type Props = {
  relatedPosts: Post[]
}

const Recipes_Posts_Related = ({ relatedPosts }: Props) => {
  return (
    <section className='px-6 bg-pink-light py-12 my-4' id='blog-related'>
      <div className='md:max-w-6xl mx-auto'>
        <h3 className='text-pink text-4xl'>Related Posts</h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-16'>
          {relatedPosts.map((post) => {
            return (
              <Recipes_FeaturedPost
                slug={post.slug}
                key={post.title}
                title={post.title}
                author={post.author}
                categories={post.categories}
                date={post.date}
                aspectW={'4'}
                aspectY={'3'}
                coverImage={post.coverImage}
                excerpt={post.excerpt}
              />
            )
          })}
        </div>
        <div className='grid grid-cols-3 gap-8 my-8 '></div>
      </div>
    </section>
  )
}
export default Recipes_Posts_Related
