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

const components = {
  Video: Video,
}

const Page_Education_ProjectFiles = ({ slug, source, frontMatter }) => {
  return (
    <Main id='' className=''>
      <NextSeo
        title={`${frontMatter.title} | Project Files`}
        description={`${frontMatter.excerpt}`}
        canonical={`https://pixelbakery.com/project-files/${frontMatter.slug}`}
        openGraph={{
          url: `https://pixelbakery.com/project-files/${frontMatter.slug}`,
          title: `${frontMatter.title} | Project Files`,
          description: `${frontMatter.excerpt}`,
          images: [
            {
              url: `https://pixelbakery.com/${frontMatter.coverImage}`,
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
            name: 'Tutorials',
            item: 'https://pixelbakery.com/education#projectFiles',
          },
          {
            position: 3,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/education/project-files/${slug}`,
          },
        ]}
      />
      <section className='pt-32 lg:pt-0 lander-education my-4 grid grid-cols-1 lg:grid-cols-2'>
        {frontMatter.videoCoverImage ? (
          <>
            <div className=' lg:hidden relative col-span-1  h-full w-full '>
              <video
                autoPlay={true}
                playsInline
                muted
                controls={false}
                loop
                className='object-cover w-full h-full hideControls'
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                  type={'video/mp4'}
                />
              </video>
            </div>
            <div className='hidden lg:block relative col-span-1 h-full w-full '>
              <video
                autoPlay={true}
                playsInline
                muted
                controls={false}
                loop
                className='object-cover w-full h-full hideControls'
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                  type={'video/mp4'}
                />
              </video>
            </div>
          </>
        ) : (
          <div>
            <div className=' lg:hidden relative col-span-1  h-full w-full '>
              <Image
                placeholder='blur'
                blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                quality={90}
                layout='fill'
                objectFit='cover'
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
                layout='fill'
                objectFit='cover'
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
                className='absolute object-cover object-center w-full h-full'
                alt={`${frontMatter.title} project file made in ${frontMatter.category}`}
              />
            </div>
          </div>
        )}

        <div className='relative col-span-1 h-full w-full md:overflow-hidden flex flex-col justify-center'>
          <div className='pt-12 lg:pt-0 pb-12 md:lg-0 self-center w-full max-w-md lg:max-w-xl 4xl:max-w-2xl px-8 '>
            <div className='text-peach mb-0 pb-0 font-bold text-2xl xl:text-3xl lowercase'>
              Project File
            </div>

            <H1 color='blue-dark'>{frontMatter.title}</H1>

            <div>
              <ul className='text-wine text-opacity-50 text-sm list-none my-10'>
                <li>Application: {frontMatter.category}</li>
                <li>File Name: {frontMatter.fileName}</li>
                <li>File Size: {frontMatter.fileSize}</li>
                <li>File Type: {frontMatter.fileType}</li>
                <li>Upload Date: {frontMatter.uploadDate}</li>
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
              <Link hrefLang={'en-US'} href={'/education#projectFiles'} passHref>
                <a
                  hrefLang={'en-US'}
                  className=' text-blue border-b border-blue inline-block px-1 pb-1'
                >
                  <span> ← all project files</span>
                </a>
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
