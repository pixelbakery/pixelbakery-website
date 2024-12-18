import H3 from '@typography/H3'
import Recipes_FeaturedPost from './Recipes_FeaturedPost'

const Recipes_Posts_Related = ({ relatedPosts }) => {
  return (
    <section className='px-6 py-12 my-4 bg-pink-lighter' id='blog-related'>
      <div className='mx-auto md:max-w-6xl'>
        <H3 color='pink'>Other Recipes</H3>

        <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
          {relatedPosts.map((post) => {
            return (
              <div key={post.filePath}>
                <Recipes_FeaturedPost
                  as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/recipes/[slug]`}
                  key={post.filePath}
                  title={post.data.title}
                  author={post.data.author.name}
                  categories={post.data.categories}
                  date={post.data.date}
                  aspectW={'4'}
                  aspectY={'3'}
                  width={376}
                  height={280}
                  coverImage={post.data.coverImage}
                  excerpt={post.data.excerpt}
                />
              </div>
            )
          })}
        </div>
        <div className='grid grid-cols-3 gap-8 my-8 '></div>
      </div>
    </section>
  )
}
export default Recipes_Posts_Related
