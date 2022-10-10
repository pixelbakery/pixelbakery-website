import fs from 'fs'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import path from 'path'

import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent
      header={"Mon's Recipes"}
      subheader={'No word yet on her spaghetti, though'}
    />
  ),
  ssr: false,
})
const Recipes_FeaturedPost = dynamic(() => import('@recipes/Recipes_FeaturedPost'), { ssr: true })
const Recipes_MoreStories = dynamic(() => import('@recipes/Recipes_MoreStories'), { ssr: true })

import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Main from '@parts/Main'

import InnerWrapper from '@parts/InnerWrapper'

import BackToTop from '@utility/BackToTop'
import Recipes_SEO from '@recipes/Recipes_SEO'
// let counter = 0
const featuredPostNo = 4 //sets how many posts should be shown at the top as cards
const secondaryPostNo = 8

const getFeaturedPosts = ({ allPosts }) => {
  return allPosts.slice(0, featuredPostNo).map((post, index) => {
    return (
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
    )
  })
}

const getSecondaryPosts = ({ allPosts }) => {
  return allPosts.slice(featuredPostNo, secondaryPostNo + featuredPostNo).map((post) => {
    return (
      <Recipes_FeaturedPost
        as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/recipes/[slug]`}
        key={post.filePath}
        title={post.data.title}
        author={post.data.author.name}
        categories={post.data.categories}
        date={post.data.date}
        aspectW={'3'}
        aspectY={'4'}
        coverImage={post.data.coverImage}
        excerpt={post.data.excerpt}
      />
    )
  })
}
const Page_Recipes = ({ allPosts }) => {
  // const [totalPages, setTotalPages] = useState<number>(0)
  // const [currentPage, setCurrentPage] = useState<number>(secondaryPostNo + featuredPostNo + 5)
  // const { pathname, query } = useRouter()
  // const router = useRouter()

  // useEffect(() => {
  //   const numberOfPages = allPosts.length
  //   setTotalPages(numberOfPages)
  // }, [])
  // useEffect(() => {
  //   if (currentPage <= totalPages) setCurrentPage(currentPage + 5)
  // }, [router.query.counter])

  const morePosts = allPosts.slice(secondaryPostNo + featuredPostNo)

  return (
    <Main>
      <Recipes_SEO />
      <BackToTop />
      <PageHeader_VarH header="Mom's Recipes" subheader='No word yet on her spaghetti, though' />
      <PageSection id='recent-posts'>
        <InnerWrapper>
          <H2>Recent</H2>
          <div className='my-16 grid grid-cols-1  sm:grid-cols-2  gap-4 md:gap-10'>
            {getFeaturedPosts({ allPosts })}
          </div>
          <div className='my-16 grid grid-cols-2  sm:grid-cols-4  gap-4 md:gap-y-20 md:gap-5'>
            {getSecondaryPosts({ allPosts })}
          </div>
        </InnerWrapper>

        <InnerWrapper className='my-24 relative py-24 lg:py-24' disableSpacing>
          {morePosts.length > 0 && <Recipes_MoreStories posts={morePosts} />}
          {/* {currentPage <= totalPages ? (
            <div className='w-full flex justify-center my-12'>
              <Link
                hrefLang={'en-US'}
                href={{ pathname: pathname, query: { counter: currentPage } }}
                shallow
                passHref
              >
                <a
                  hrefLang={'en-US'}
                  className='relative  bg-blue mx-auto py-4 px-24 rounded-md text-cream font-semibold text-xl duration-300 ease-in-out hover:scale-99 drop-shadow-lg hover:drop-shadow-sm'
                >
                  Show More 👇
                </a>
              </Link>
            </div>
          ) : (
            ''
          )} */}
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}

export default Page_Recipes

export function getStaticProps() {
  const allPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allPosts } }
}
