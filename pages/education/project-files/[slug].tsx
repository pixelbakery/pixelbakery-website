import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'
import markdownStyles from '@styles/markdown-styles.module.css'
import Main from '@parts/Main'
import { projectFilesFilePaths, PROJECTFILE_PATH } from '@lib/mdxUtils'

const Video = dynamic(() => import('@parts/Video'), { ssr: false })
import Button_Filled from '@parts/Button_Filled'

import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

import H1 from '@typography/H1'
import Link from 'next/link'
import Image from 'next/image'
import Education_SupportUs from '@education/Education_SupportUs'
import dynamic from 'next/dynamic'
import DateFormatter from '@lib/date-formatter'

const components = {
  Video: Video,
}

const Page_Education_ProjectFiles = ({ slug, source, frontMatter }) => {
  return (
    <Main id='' className=''>
      <NextSeo
        title={`${frontMatter.title} | Project Files`}
        description={`${frontMatter.excerpt}`}
        canonical={`https://pixelbakery.com/education/project-files/${slug}`}
        openGraph={{
          url: `https://pixelbakery.com/education/project-files/${slug}`,
          title: `${frontMatter.title} | Project Files`,
          description: `${frontMatter.excerpt}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`,
              alt: `${frontMatter.excerpt}`,
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Education',
            item: 'https://pixelbakery.com/education',
          },

          {
            position: 2,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/education/project-files/${slug}`,
          },
        ]}
      />
      <section className='pt-32 lg:pt-0 lander-education my-4 grid grid-cols-1 lg:grid-cols-2 '>
        {frontMatter.videoCoverImage ? (
          <div className='relative col-span-1 max-h-[75vh] lg:max-h-full lg:h-full w-full'>
            <div className='relative lg:absolute w-full h-full'>
              <video
                autoPlay={true}
                playsInline
                muted
                controls={false}
                loop
                poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                className='object-cover w-full h-full hideControls'
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.video}`}
                  type={'video/mp4'}
                />
              </video>
            </div>
          </div>
        ) : (
          <div>
            <div className=' lg:hidden relative col-span-1  h-full w-full '>
              <Image
                placeholder='blur'
                blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                quality={90}
                fill={true}
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                className='absolute object-cover object-center w-full h-full'
                alt='polaroid 3d model made in cinema 4d'
              />
            </div>
            <div className='hidden lg:block relative col-span-1 h-full w-full '>
              <Image
                placeholder='blur'
                blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                quality={90}
                fill={true}
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                className='absolute object-cover object-center w-full h-full'
                alt={`${frontMatter.title} project file made in ${frontMatter.category}`}
              />
            </div>
          </div>
        )}

        <div className='relative col-span-1 h-full w-full md:overflow-hidden flex flex-col justify-center px-12'>
          <div className='py-24 self-center w-full lg:max-w-xl 4xl:max-w-2xl px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
            <div>
              <div className='text-peach mb-0 pb-0 font-bold text-2xl xl:text-3xl lowercase'>
                Project File
              </div>

              <H1
                color='blue-dark'
                className='text-6xl md:text-4xl  sm:text-xl lg:text-xl xl:text-6xl md:my-0'
              >
                {frontMatter.title}
              </H1>
            </div>

            <div>
              <ul className='text-wine text-opacity-50 text-sm list-none xl:my-10'>
                <li>Application: {frontMatter.category}</li>
                <li>File Name: {frontMatter.fileName}</li>
                <li>File Size: {frontMatter.fileSize}</li>
                <li>File Type: {frontMatter.fileType}</li>
                <li>
                  Upload Date: <DateFormatter dateString={frontMatter.uploadDate} />
                </li>
              </ul>
              <div className={markdownStyles['markdown']}>
                <MDXRemote {...source} components={components} />
              </div>
              <div className='mt-8'>
                <Button_Filled
                  center={false}
                  text='download'
                  chevronDirection='download'
                  link={`${frontMatter.downloadLink}`}
                  bgColor='blue'
                  textColor='cream'
                />
              </div>

              <Link
                hrefLang={'en-US'}
                href={'/education#projectFiles'}
                className=' text-blue border-b border-blue inline-block px-1 pb-1'
              >
                <span> ← all project files</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Education_SupportUs />
    </Main>
  )
}

export default Page_Education_ProjectFiles

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const temp = path.join(PROJECTFILE_PATH, `${params.slug}.mdx`.toString())
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)

  //Back to MDX Stuff
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })
  data.date = JSON.parse(JSON.stringify(data.date))
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = projectFilesFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
