import Link from 'next/link'
import Image from 'next/image'

import { H2 } from '@typography'
import { InnerWrapper, PageSection } from '@parts'

import type { ProjectFile } from '@/types/projectFiles'

interface Props {
  allProjectFiles: ProjectFile[]
}

function Education_ProjectFiles({ allProjectFiles }: Props) {
  if (!allProjectFiles || allProjectFiles.length === 0) {
    return (
      <PageSection className='bg-pink-lighter' id='projectFiles'>
        <InnerWrapper>
          <H2 color='blue' id='project-files'>
            Project Files
          </H2>
          <p className='text-wine-500'>No project files available at this time.</p>
        </InnerWrapper>
      </PageSection>
    )
  }

  return (
    <PageSection className='bg-pink-lighter' id='projectFiles'>
      <InnerWrapper>
        <H2 color='blue' id='project-files'>
          Project Files
        </H2>
        <p className='max-w-md pt-0 mt-0 mb-12 text-lg font-medium text-wine-500 text-opacity-90'>
          Expanding educational opportunities is more possible now than ever before with
          advancements in technology. <br />
          <br />
          PB believes open-sourcing our files is one of countless ways we can break down legal,
          financial, or technical barriers that prevent creativity and believe that everyone should
          have access to high-quality educational experiences and resources.
        </p>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-5 3xl:grid-cols-6'>
          {allProjectFiles.map((projectFile) => {
            return (
              <Link
                key={projectFile.slug}
                as={`/education/project-files/${projectFile.filePath.replace(/\.mdx?$/, '')}`}
                href={`/education/project-files/[slug]`}
                id={projectFile.slug}
                className='visible transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-98 animate__fadeIn'
              >
                <div className='aspect-[3/4] relative overflow-hidden rounded-xl'>
                  {projectFile.frontMatter.videoCoverImage ? (
                    <video
                      autoPlay
                      playsInline
                      muted
                      controls={false}
                      loop
                      className='object-cover w-full h-full hideControls'
                      poster={`${projectFile.frontMatter.coverImage}`}
                    >
                      <source
                        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${projectFile.frontMatter.video}`}
                        type='video/mp4'
                      />
                    </video>
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${projectFile.frontMatter.coverImage}`}
                      alt={`${projectFile.frontMatter.title} project file free for ${projectFile.frontMatter.category}`}
                      placeholder='blur'
                      blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${projectFile.frontMatter.coverImage}`}
                      width={512}
                      height={512}
                      className='object-cover bg-peach'
                    />
                  )}
                </div>
                <div>
                  <div className='z-20 flex flex-col justify-between p-2 mt-2 cursor-pointer h-100'>
                    <div>
                      <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
                        {projectFile.frontMatter.title}
                      </h3>
                      <p className='text-sm text-wine'>{projectFile.frontMatter.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_ProjectFiles
