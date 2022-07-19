import React, { useRouter } from 'next/router'
import markdownToHtml from '@lib/markdownToHtml'
import ProjectFileType from 'types/projectFile'

import { getAllProjectFiles, getProjectFileBySlug } from '@lib/api_projectFile'
import Link from 'next/link'
import Image from 'next/image'
import markdownStyles from '@styles/markdown-styles.module.css'

import H2 from '@typography/H2'

import H1 from 'components/typography/H1'

import Button_Filled from '@parts/Button_Filled'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
type Props = {
  projectFile: ProjectFileType
  content: string
  excerpt: string
  videoCoverImage: boolean
}

function EducationProject({ projectFile }: Props) {
  return (
    <Main id='' className=''>
      <NextSeo
        title={`${projectFile.title} | Project Files`}
        description={`${projectFile.excerpt}`}
        openGraph={{
          url: `https://pixelbakery.com/contact`,
          title: `${projectFile.title} | Project Files`,
          description: `${projectFile.excerpt}`,
          images: [
            {
              url: `https://pixelbakery.com/${projectFile.coverImage}`,
              alt: `${projectFile.excerpt}`,
            },
          ],
        }}
      />
      <section className='pt-32 lg:pt-0 lander-education my-4 grid grid-cols-1 lg:grid-cols-2'>
        {projectFile.videoCoverImage ? (
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
                  src={`https://cdn.pixelbakery.com/${projectFile.coverImage}`}
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
                  src={`https://cdn.pixelbakery.com/${projectFile.coverImage}`}
                  type={'video/mp4'}
                />
              </video>
            </div>
          </>
        ) : (
          <div>
            <div className=' lg:hidden relative col-span-1  h-full w-full '>
              <Image
                blurDataURL='true'
                quality={90}
                layout='fill'
                objectFit='cover'
                src={projectFile.coverImage}
                className='absolute object-cover object-center w-full h-full'
                alt='polaroid 3d model made in cinema 4d'
              />
            </div>
            <div className='hidden lg:block relative col-span-1 h-full w-full '>
              <Image
                blurDataURL='true'
                quality={90}
                layout='fill'
                objectFit='cover'
                src={projectFile.coverImage}
                className='absolute object-cover object-center w-full h-full'
                alt={`${projectFile.title} project file made in ${projectFile.category}`}
              />
            </div>
          </div>
        )}

        <div className='relative col-span-1 h-full w-full md:overflow-hidden flex flex-col justify-center'>
          <div className='pt-12 lg:pt-0 pb-12 md:lg-0 self-center w-full max-w-md lg:max-w-xl 4xl:max-w-2xl px-8 '>
            <div className='text-peach mb-0 pb-0 font-bold text-2xl xl:text-3xl lowercase'>
              Project File
            </div>
            <h1 className='text-4xl md:text-8xl text-blue-dark leading-none mt-0 pt-0'>
              <H1 color='blue-dark'>{projectFile.title}</H1>
            </h1>

            <div>
              <ul className='text-wine text-opacity-50 text-sm list-none my-10'>
                <li>Application: {projectFile.category}</li>
                <li>File Name: {projectFile.fileName}</li>
                <li>File Size: {projectFile.fileSize}</li>
                <li>File Type: {projectFile.fileType}</li>
                <li>Upload Date: {projectFile.uploadDate}</li>
              </ul>
              <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: projectFile.content }}
              />

              <div className='mt-8'>
                <Button_Filled
                  center={false}
                  text='download'
                  chevronDirection='download'
                  link={`${projectFile.downloadLink}`}
                  bgColor='blue'
                  textColor='cream'
                />
              </div>
              <Link href={'/education#projectFiles'} passHref>
                <a className=' text-blue border-b border-blue inline-block px-1 pb-1'>
                  <span> ← all project files</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='my-4 py-16 bg-blue'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4'>
          <div className='col-span-1 pb-12'>
            <div className='max-w-md mx-auto'>
              <H2 className='mt-0 pt-0' color='cream'>
                Support Us
              </H2>
              <p className='max-w-lg text-cream font-medium text-xl'>
                If this project file helped you at all, feel free to give us a tip. All tips go
                directly to the designer that worked on the project.
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

export default EducationProject

type Params = {
  params: {
    projectFile: string
    slug: string
  }
}
export async function getStaticProps({ params }: Params) {
  const projectFile = getProjectFileBySlug(params.projectFile, [
    'title',
    'coverImage',
    'fileName',
    'fileSize',
    'uploadDate',
    'fileType',
    'category',
    'content',
    'videoCoverImage',
    'downloadLink',
  ])

  const content = await markdownToHtml(projectFile.content || '')
  return {
    props: {
      projectFile: {
        ...projectFile,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const projectFiles = getAllProjectFiles(['slug'])

  return {
    paths: projectFiles.map((projectFile) => {
      return {
        params: {
          projectFile: projectFile.slug,
        },
      }
    }),
    fallback: false,
  }
}
