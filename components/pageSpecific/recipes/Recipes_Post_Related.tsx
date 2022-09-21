import Recipes_FeaturedPost from './Recipes_FeaturedPost'

const Recipes_Posts_Related = ({ relatedPosts }) => {
  return (
    <section className='px-6 bg-pink-light py-12 my-4' id='blog-related'>
      <div className='md:max-w-6xl mx-auto'>
        <h3 className='text-pink text-4xl'>Other Recipes</h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-16'>
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
