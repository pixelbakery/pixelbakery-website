import React, { useRouter } from 'next/router'
import markdownToHtml from '@lib/markdownToHtml'
import ProjectFileType from 'types/projectFile'

import { getAllProjectFiles, getProjectFileBySlug } from '@lib/api_projectFile'
import Link from 'next/link'
import Image from 'next/image'
import markdownStyles from '@styles/markdown-styles.module.css'

import H2 from '@parts/H2'
import H1 from '@parts/H1'

import Button_Filled from '@parts/Button_Filled'
type Props = {
  projectFile: ProjectFileType
  content: string
}

function EducationProject({ projectFile }: Props) {
  return (
    <main id='' className=''>
      <section className='pt-32 md:pt-0 lander my-4 grid grid-cols-1 md:grid-cols-2'>
        <div className=' md:hidden relative col-span-1 aspect-4/3 h-full w-full md:overflow-hidden'>
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
        <div className='hidden md:block relative col-span-1 h-full w-full md:overflow-hidden'>
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
        <div className='relative col-span-1 h-full w-full md:overflow-hidden flex flex-col justify-center'>
          <div className='pt-12 md:pt-0 pb-12 md:pb-0 self-center w-full max-w-md lg:max-w-xl 4xl:max-w-2xl px-8 '>
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
                  link='/'
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
                Appropriately morph flexible products with customer directed interfaces. Uniquely
                seize 24/365 e-commerce through holistic interfaces. Enthusiastically empower.
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
    </main>
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
