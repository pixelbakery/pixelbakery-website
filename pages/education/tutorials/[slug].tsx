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
import { ArticleJsonLd, NextSeo } from 'next-seo'
import PostHeader from '@education/Education_PostHeader'
import Pill from '@parts/Pill'
import H2 from '@typography/H2'
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
}

export default function PostPage({ slug, allMadeToOrders, source, frontMatter }) {
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
      <NextSeo
        title={`${frontMatter.title} | Tutorials | Pixel Bakery`}
        description={`${frontMatter.excerpt}`}
        openGraph={{
          url: `https://pixelbakery.com/education/tutorials/${slug}`,
          title: `${frontMatter.title} | Tutorials | Pixel Bakery`,
          type: 'article',
          description: `${frontMatter.excerpt}`,
          article: {
            publishedTime: `${datePostedISO}`,
            tags: [`${frontMatter.category}`],
          },
          images: [
            {
              url: `https://pixelbakery.com${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author}`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        type='Blog'
        url={`https://pixelbakery.com/education/tutorials/${slug}`}
        title={`${frontMatter.title}`}
        images={[`https://pixelbakery.com/${frontMatter.coverImage}`]}
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
      <PageSection className='px-6 lg:py-16 md:max-w-3xl mx-auto'>
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
      <section className='my-4 py-16 bg-blue'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4'>
          <div className='col-span-1 pb-12'>
            <div className='max-w-md mx-auto'>
              <H2 className='mt-0 pt-0' color='cream'>
                Support Us
              </H2>
              <p className='max-w-lg text-cream font-medium text-xl'>
                If this project file helped you at all, feel free to give us a tip.
              </p>
            </div>
          </div>
          <div className=' col-span-1  flex flex-col justify-center'>
            <div className='relative h-fit'>
              <iframe
                scrolling='no'
                className='w-full  inline-block bg-transparent'
                id='kofiframe'
                src='https://ko-fi.com/pixelbakery/?hidefeed=true&widget=true&embed=true&preview=true&transparent-background=true'
                style={{
                  border: 'none',
                  width: '100%',
                  padding: '4px',
                  background: 'rgba(0,0,0,0) !important',
                }}
                height='800'
                title='pixelbakery'
              />
            </div>
          </div>
        </div>
      </section>
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

  const allMadeToOrders = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { content, data } = matter(source)
      return {
        content,
        data,
        filePath,
      }
    })
    .filter((mto) => mto.data.active)
    .sort((mto1, mto2) => (mto1.data.date > mto2.data.date ? -1 : 1))

  return {
    props: {
      allMadeToOrders: allMadeToOrders,
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
