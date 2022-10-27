import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'
import markdownStyles from '@styles/markdown-styles.module.css'
import Carousel from '@parts/Carousel'
import Main from '@parts/Main'

import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import readingTime from '@lib/readingTime'

const Video = dynamic(() => import('@parts/Video'), {
  ssr: false,
})
import PageSection from '@parts/PageSection'
import dynamic from 'next/dynamic'

import Education_PostHeader from '@education/Education_PostHeader'

// const Education_PostHeader = dynamic(() => import('@education/Education_PostHeader'), {
//   suspense: true,
//   ssr: false,
// })
import Education_MadeToOrder_GetPrevNextPost from '@education/Education_MadeToOrder_GetPrevNextPost'
// const Education_MadeToOrder_GetPrevNextPost = dynamic(
//   () => import('@education/Education_MadeToOrder_GetPrevNextPost'),
//   {
//     ssr: false,
//   },
// )
import Education_SupportUs from '@education/Education_SupportUs'
// const Education_SupportUs = dynamic(() => import('@education/Education_SupportUs'), { ssr: false })
import Education_MadeToOrder_SEO from '@education/Education_MadeToOrder_SEO'
import Education_MadeToOrder_Tags from '@education/Education_MadeToOrder_Tags'

const components = {
  Carousel: Carousel,
  Video: Video,
}

export default function Page_Education_Tutorials({
  slug,
  source,
  frontMatter,
  readTime,
  nextIndex,
  prevIndex,
}) {
  const datePostedISO = new Date(frontMatter.date).toISOString()

  return (
    <Main>
      <Education_MadeToOrder_SEO
        frontMatter={frontMatter}
        slug={slug}
        datePostedISO={datePostedISO}
      />

      <Education_PostHeader
        title={frontMatter.title}
        category={`${frontMatter.category} Tutorial`}
        date={frontMatter.date}
        author={frontMatter.author.name}
        authorUrl={frontMatter.author.url}
        readTime={readTime}
      />

      <div className='max-w-6xl mx-auto'>
        <div className=' w-full aspect-w-16 aspect-h-9  mx-auto bg-peach'>
          <Video
            url={frontMatter.video}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
            controls={true}
          />
        </div>
      </div>
      <PageSection className='px-6 lg:py-16 md:max-w-3xl mx-auto mb-8 lg:mb-8' id='tutorial-body'>
        <article id='blog-body-guts'>
          <div className={markdownStyles['markdown']}>
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </PageSection>
      <Education_MadeToOrder_Tags tags={frontMatter.tags} />
      <Education_MadeToOrder_GetPrevNextPost prev={prevIndex} next={nextIndex} />
      <Education_SupportUs />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const temp = path.join(MADETOORDER_PATH, `${params.slug}.mdx`.toString())
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })
  const time = readingTime(content)
  const allTutorials = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))

      return { filePath, data }
    })
    .filter((cs) => cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.date < cs2.data.date ? -1 : 1))

  let thisIndex,
    prevIndex,
    nextIndex = null

  if (data.active != false) {
    allTutorials.map((p, index) => {
      if (p.data.title === data.title) {
        thisIndex = index
      }
    })

    if (thisIndex != undefined && thisIndex === 0)
      prevIndex = allTutorials[Object.keys(allTutorials).length - 1]
    else prevIndex = allTutorials[thisIndex - 1]

    if (thisIndex != undefined && thisIndex === Object.keys(allTutorials).length - 1)
      nextIndex = allTutorials[0]
    else nextIndex = allTutorials[thisIndex + 1]
  } else (thisIndex = null), (nextIndex = null), (prevIndex = null)

  //End of prev/next search

  data.date = JSON.parse(JSON.stringify(data.date))
  return {
    props: {
      nextIndex: nextIndex,
      prevIndex: prevIndex,
      slug: params.slug,
      source: mdxSource,
      readTime: time,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = madeToOrderFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
