import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import path from 'path'
import addMonths from 'date-fns/addMonths'

import markdownStyles from '@styles/markdown-styles.module.css'
const readingTime = require('reading-time')
import Carousel from '@parts/Carousel'
import Main from '@parts/Main'
import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import { useRef, useState } from 'react'
import Recipes_Post_Tags from '@recipes/Recipes_Post_Tags'
import Video from '@parts/Video'
import Recipes_Posts_Related from '@recipes/Recipes_Post_Related'
import { useEffect } from 'react'
import remarkGfm from 'remark-gfm'
import VimeoPlayer from '@parts/VimeoPlayer'
import { ArticleJsonLd, JobPostingJsonLd, NextSeo } from 'next-seo'
import DateFormatter from '@lib/date-formatter'
import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'
import H2AndLead from '@typography/H2AndLead'
import Link from 'next/link'
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Carousel: Carousel,
  VimeoPlayer: VimeoPlayer,
  Video: Video,
  TestComponent: dynamic(() => import('@pageHeaders/PageHeader_VarH')),
  Head,
}

export default function PostPage({ slug, source, filePath, frontMatter }) {
  const datePostedISO = new Date(frontMatter.date).toISOString()
  const dateExpiredISO = addMonths(new Date(frontMatter.date), 2).toISOString()

  const myContainer = useRef(null)

  // useEffect(() => {
  //   //Sets Reading Time
  //   function extractContent(s) {
  //     var span = document.createElement('span')
  //     span.innerHTML = s
  //     return span.textContent || span.innerText
  //   }
  //   const text = extractContent(myContainer.current.innerHTML).toString()
  //   const stats = readingTime(text)

  //   return () => {}
  // }, [])

  return (
    <Main>
      <JobPostingJsonLd
        datePosted={`${datePostedISO}`}
        description={`Pixel Bakery is looking to hire a ${frontMatter.commitment} ${frontMatter.title}`}
        hiringOrganization={{
          name: 'Pixel Bakery Design Studio',
          sameAs: 'https://pixelbakery.com',
        }}
        jobLocation={{
          streetAddress: '2124 Y Street',
          addressLocality: 'Lincoln',
          addressRegion: 'NE',
          postalCode: '68503',
          addressCountry: 'USA',
        }}
        title={`${frontMatter.title}`}
        validThrough={`${dateExpiredISO}`}
      />
      <Head>
        <title>Careers – {frontMatter.title} | PBDS</title>
        {/* <meta property='og:image' content={frontMatter.ogImage.url} /> */}
      </Head>
      <PageSection className='min-h-screen mt-32'>
        <article>
          <InnerWrapper>
            <div className='max-w-2xl mx-auto'>
              <div className='pb-12'>
                <Link href='/careers' passHref>
                  <a className='border-b-2 pb-1 border-b-blue text-blue'> ← back to all careers</a>
                </Link>
              </div>
              <p className='my-0 py-0 leading-none text-4xl text-peach font-extrabold'>
                job position
              </p>
              <H1 color='blue' className='text-6xl text-blue'>
                {frontMatter.title}
              </H1>
              <p className='text-sm italic'>
                posted on <DateFormatter dateString={frontMatter.date} />:
              </p>
            </div>
          </InnerWrapper>

          <InnerWrapper>
            <div className='mx-auto max-w-2xl'>
              <div className={markdownStyles['markdown']}>
                <MDXRemote {...source} components={components} />
              </div>

              <div className='flex flex-col justify-center mt-32'>
                <H2AndLead
                  headerColor='blue-dark'
                  leadColor='peach'
                  headerText={'Does that sound like you?'}
                  leadText={'great, get at it.'}
                />
                <Button_Filled
                  text='apply for position'
                  bgColor={'pink'}
                  textColor={'pink-light'}
                  chevronDirection='right'
                  link={'/careers/application'}
                  center={false}
                />
              </div>
              <div className='pt-12'>
                <Link href='/careers' passHref>
                  <a className='border-b-2 pb-1 border-b-blue'> ← back to all careers</a>
                </Link>
              </div>
            </div>
          </InnerWrapper>
        </article>
      </PageSection>
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const madeToOrderFilePaths = path.join(MADETOORDER_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(madeToOrderFilePaths)
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
