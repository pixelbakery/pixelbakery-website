import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import { MDXRemote } from 'next-mdx-remote'

import Image from 'next/image'
import Link from 'next/link'

import { projectFilesFilePaths, PROJECTFILE_PATH } from '@lib/mdxUtils'

import { H1 } from '@typography'
import { Education_SupportUs } from '@education'
import { Layout_Default } from '@layouts'
import { Button_Filled, Video } from '@parts'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

import type { ProjectFileFrontMatter, ProjectFilePageProps } from '@/types/projectFiles'
import type { ReactElement } from 'react'
import { GetStaticPropsContext } from 'next/types'

const components = { Video }

const Page_Education_ProjectFiles = ({ slug, source, frontMatter }: ProjectFilePageProps) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | Project Files`}
        description={frontMatter.excerpt}
        canonical={`https://pixelbakery.com/education/project-files/${slug}`}
        openGraph={{
          url: `https://pixelbakery.com/education/project-files/${slug}`,
          title: `${frontMatter.title} | Project Files`,
          description: frontMatter.excerpt,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`,
              alt: frontMatter.excerpt,
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Education', item: 'https://pixelbakery.com/education' },
          {
            position: 2,
            name: frontMatter.title,
            item: `https://pixelbakery.com/education/project-files/${slug}`,
          },
        ]}
      />
      <section className='grid grid-cols-1 pt-32 my-4 lg:pt-0 lander-education lg:grid-cols-2'>
        {frontMatter.videoCoverImage ? (
          <div className='relative col-span-1 max-h-[75vh] lg:max-h-full lg:h-full w-full'>
            <div className='relative w-full h-full lg:absolute'>
              <video
                autoPlay
                playsInline
                muted
                loop
                poster={`$${frontMatter.coverImage}`}
                className='object-cover w-full h-full hideControls'
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.video}`}
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        ) : (
          frontMatter.coverImage && (
            <div>
              <Image
                placeholder='blur'
                blurDataURL={`${frontMatter.coverImage}`}
                quality={90}
                fill
                src={`${frontMatter.coverImage}`}
                className='absolute object-cover object-center w-full h-full'
                alt={frontMatter.title}
              />
            </div>
          )
        )}

        <div className='relative flex flex-col justify-center w-full h-full col-span-1 px-12 md:overflow-hidden'>
          <div className='grid self-center w-full grid-cols-1 px-8 py-24 lg:max-w-xl 4xl:max-w-2xl md:grid-cols-2 lg:grid-cols-1'>
            <div>
              <div className='pb-0 mb-0 text-2xl font-bold lowercase text-peach xl:text-3xl'>
                Project File
              </div>
              <H1
                color='blue-dark'
                className='text-6xl md:text-4xl sm:text-xl lg:text-xl xl:text-6xl md:my-0'
              >
                {frontMatter.title}
              </H1>
            </div>
            <div>
              <ul className='text-sm text-opacity-50 list-none text-wine xl:my-10'>
                <li>Application: {frontMatter.category}</li>
                <li>File Name: {frontMatter.fileName}</li>
                <li>File Size: {frontMatter.fileSize}</li>
                <li>File Type: {frontMatter.fileType}</li>

                {frontMatter.date && (
                  <li>
                    Upload Date: <time dateTime={frontMatter.date}>{frontMatter.date}</time>{' '}
                  </li>
                )}
              </ul>
              <div>
                <MDXRemote {...source} components={components} />
              </div>
              {frontMatter.downloadLink && (
                <div className='mt-8'>
                  <Button_Filled
                    center={false}
                    text='download'
                    chevronDirection='download'
                    link={frontMatter.downloadLink}
                    bgColor='blue'
                    textColor='cream'
                    plausibleEventName={'Project File Download'}
                    plausibleEventProps={{
                      file: frontMatter.title,
                    }}
                  />
                </div>
              )}
              <Link
                href='/education#projectFiles'
                className='inline-block px-1 pb-1 border-b text-blue border-blue'
              >
                <span>← all project files</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Education_SupportUs />
    </>
  )
}

// Ensure all other fields are JSON-serializable
//   const jsonSerializableData = JSON.parse(JSON.stringify(normalizedData))

//   return {
//     source: await serialize(content, {
//       mdxOptions: { remarkPlugins: [remarkGfm] },
//       scope: jsonSerializableData, // Pass the serialized data
//     }),
//     frontMatter: jsonSerializableData,
//   }
// }

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<{ props: ProjectFilePageProps }> => {
  if (!params || !params.slug) {
    throw new Error('Slug is missing in params')
  }

  const projectFilePath = path.join(PROJECTFILE_PATH, `${params.slug}.mdx`)

  const source = fs.readFileSync(projectFilePath, 'utf-8')
  const { content, data } = matter(source)

  if (!Object.keys(data).length) {
    throw new Error(`FrontMatter is empty for slug: ${params.slug}`)
  }

  // Normalize the `frontMatter` to ensure all fields are JSON-serializable
  const frontMatter = {
    ...data,
    date: data.date ? new Date(data.date).toISOString() : null, // Convert `date` to string or set to null
  } as ProjectFileFrontMatter

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
    scope: frontMatter, // Ensure scope contains JSON-serializable data
  })

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = projectFilesFilePaths.map((filePath) => ({
    params: { slug: filePath.replace(/\.mdx?$/, '') },
  }))
  return { paths, fallback: false }
}

// Set page layout
Page_Education_ProjectFiles.getLayout = (page: ReactElement) => (
  <Layout_Default>{page}</Layout_Default>
)

export default Page_Education_ProjectFiles
