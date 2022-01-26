import React from 'react'
import Post from '../../../types/post'
import H2 from '../../H2'
import Recipes_SmallPost from './Recipes_SmallPost'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <H2>More Stories</H2>
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
