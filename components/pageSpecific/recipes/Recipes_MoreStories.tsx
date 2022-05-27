import H2 from '@typography/H2'

import Recipes_SmallPost from './Recipes_SmallPost'

const MoreStories = ({ posts }) => {
  return (
    <section>
      <H2>More Stories</H2>
      <div className='w-full grid grid-cols-1 '>
        {posts.map((post) => (
          <div key={post.data.title}>
            <Recipes_SmallPost
              as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/recipes/[slug]`}
              title={post.data.title}
              categories={post.data.categories}
              coverImage={post.data.coverImage}
              date={post.data.date}
              author={post.data.author}
              excerpt={post.data.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
