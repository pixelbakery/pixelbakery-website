import { H3 } from '@typography'
import { Recipes_FeaturedPost } from '@recipes'
import type { Post } from '@/types/posts'

type RecipesPostsRelatedProps = {
  relatedPosts: Post[]
}

const Recipes_Post_Related = ({ relatedPosts }: RecipesPostsRelatedProps) => {
  if (!relatedPosts || relatedPosts.length === 0) {
    return null
  }

  return (
    <section className='px-6 py-12 my-4 bg-pink-lighter' id='blog-related'>
      <div className='mx-auto md:max-w-6xl'>
        <H3 color='pink'>Other Recipes</H3>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 md:grid-cols-3'>
          {relatedPosts.map((post) => (
            <div key={post.filePath} className='md:last:hidden'>
              <Recipes_FeaturedPost
                as={`/recipes/${post.frontMatter.slug}`}
                href={`/recipes/[slug]`}
                title={post.frontMatter.title}
                author={post.frontMatter.author.name}
                categories={post.frontMatter.categories}
                date={post.frontMatter.date}
                aspectW={'4'}
                aspectY={'3'}
                width={376}
                height={280}
                coverImage={post.frontMatter.coverImage}
                excerpt={post.frontMatter.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recipes_Post_Related
