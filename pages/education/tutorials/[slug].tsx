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
const readingTime = require('reading-time')
import Video from '@parts/Video'
import PageSection from '@parts/PageSection'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
const PostHeader = dynamic(() => import('@education/Education_PostHeader'), { ssr: true })
const Education_MadeToOrder_GetPrevNextPost = dynamic(
  () => import('@education/Education_MadeToOrder_GetPrevNextPost'),
  {
    ssr: true,
  },
)
import Education_SupportUs from '@education/Education_SupportUs'
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
  nextIndex,
  prevIndex,
}) {
  const datePostedISO = new Date(frontMatter.date).toISOString()

  const myContainer = useRef(null)
  const [readTime, setReadTime] = useState('')
  const childRef = useRef(null)

  useEffect(() => {
    //Sets Reading Time
    function extractContent(s) {
      var span = document.createElement('span')
      span.innerHTML = s
      return span.textContent || span.innerText
    }
    const text = extractContent(myContainer.current.innerHTML).toString()
    const stats = readingTime(text)
    setReadTime(stats.text)
    return () => {}
  }, [])
  return (
    <Main>
      <Education_MadeToOrder_SEO
        frontMatter={frontMatter}
        slug={slug}
        datePostedISO={datePostedISO}
      />
      <PostHeader
        title={frontMatter.title}
        video={frontMatter.video}
        subtitle={frontMatter.subtitle}
        category={`${frontMatter.category} Tutorial`}
        coverImage={frontMatter.coverImage}
        date={frontMatter.date}
        author={frontMatter.author.name}
        person={frontMatter.author.name}
        authorUrl={frontMatter.author.url}
        forwardedRef={childRef}
        readTime={readTime}
      />
      <PageSection className='px-6 lg:py-16 md:max-w-3xl mx-auto mb-8 lg:mb-8' id='tutorial-body'>
        <article ref={myContainer} id='blog-body-guts'>
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
      if (p.data.date === data.date) {
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
