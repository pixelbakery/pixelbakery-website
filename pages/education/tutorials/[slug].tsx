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
import VimeoPlayer from '@parts/VimeoPlayer'
import Button_Filled from '@parts/Button_Filled'
import PageSection from '@parts/PageSection'
import { useEffect, useRef, useState } from 'react'
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
const PostHeader = dynamic(() => import('@education/Education_PostHeader'), { ssr: false })

import Pill from '@parts/Pill'
import H2 from '@typography/H2'
import Education_SupportUs from '@education/Education_SupportUs'

const components = {
  Carousel: Carousel,
  VimeoPlayer: VimeoPlayer,
  Video: Video,
}

export default function Page_Education_Tutorials({ slug, source, frontMatter }) {
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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Education',
            item: 'https://pixelbakery.com/education',
          },
          {
            position: 2,
            name: 'Tutorials',
            item: 'https://pixelbakery.com/education#madeToOrder',
          },
          {
            position: 3,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/education/tutorials/${slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${frontMatter.title} | Tutorials`}
        description={`${frontMatter.excerpt}`}
        openGraph={{
          url: `https://pixelbakery.com/education/tutorials/${slug}`,
          title: `${frontMatter.title} | Tutorials`,
          type: 'article',
          description: `${frontMatter.excerpt}`,
          article: {
            publishedTime: `${datePostedISO}`,
            tags: [`${frontMatter.category}`],
          },
          images: [
            {
              url: `${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author}`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://pixelbakery.com/education/tutorials/${slug}`}
        title={`${frontMatter.title}`}
        images={[`${frontMatter.coverImage}`]}
        datePublished={`${datePostedISO}`}
        authorName={`${frontMatter.author}`}
        description={`${frontMatter.excerpt}`}
      />

      <PostHeader
        title={frontMatter.title}
        video={frontMatter.video}
        subtitle={frontMatter.subtitle}
        category={`${frontMatter.category} Tutorial`}
        coverImage={frontMatter.coverImage}
        date={frontMatter.date}
        author={frontMatter.author}
        person={frontMatter.author}
        forwardedRef={childRef}
        readTime={readTime}
      />
      <PageSection className='px-6 lg:py-16 md:max-w-3xl mx-auto' id='tutorial-body'>
        <article ref={myContainer} id='blog-body-guts'>
          <div className={markdownStyles['markdown']}>
            <MDXRemote {...source} components={components} />
          </div>
        </article>

        <div className='my-4 pt-12 max-w-3xl mx-auto'>
          <h3 className='text-blue font-semibold text-3xl mb-4'>Tags</h3>
          <div className='flex justify-start flex-wrap gap-2'>
            {frontMatter.tags.map((tag) => {
              return <Pill key={tag} text={tag} bgColor='pink-light' textColor='pink' size='sm' />
            })}
          </div>
          <div className='mt-12'>
            <Button_Filled
              center={true}
              text='we got more'
              link='/education#madeToOrder'
              bgColor='blue'
              textColor='cream'
              chevronDirection='left'
            />
          </div>
        </div>
      </PageSection>
      <Education_SupportUs />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const temp = path.join(MADETOORDER_PATH, `${params.slug}.mdx`.toString())
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)

  //END OF RELEVANT POSTS
  //Back to MDX Stuff
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = madeToOrderFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
