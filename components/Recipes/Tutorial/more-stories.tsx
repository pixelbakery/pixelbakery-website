import React from 'react'
import Post from '../../../types/post'
import Recipes_SmallPost from './Recipes_SmallPost'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Stories
      </h2>
      <div className='w-full grid grid-cols-1 '>
        {posts.map((post) => (
          <Recipes_SmallPost
            key={post.slug}
            title={post.title}
            categories={post.categories}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
