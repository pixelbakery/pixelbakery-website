import Link from 'next/link'
import Image from 'next/image'
import H2 from '@typography/H2'

import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import ProjectFile from '@types/projectFile'
import cn from 'classnames'
import { useState } from 'react'
import StrokeText from '@parts/StrokeText'

// import Swiper core and required modules

// install Swiper modules

type Props = {
  projectFiles: ProjectFile[]
}

function Education_ProjectFiles({ projectFiles }: Props) {
  const [activeFilter, setFilter] = useState('all')

  const [filteredProjectFiles, setFilteredItems] = useState(projectFiles)

  const allCategories = []
  projectFiles.forEach(function (file, i) {
    allCategories.push(file.category)
  })

  const filters = Array.from(new Set(allCategories))
  const handleFilteredItems = (filter) => {
    setFilter(filter)

    if (filter === 'all') {
      setFilteredItems(projectFiles)
    } else {
      setFilteredItems(projectFiles.filter((file) => file.category === filter))
    }
  }
  return (
    <PageSection className='bg-pink-light'>
      <InnerWrapper>
        <H2 color='blue' id={'project-files'}>
          Project Files
        </H2>
        <p className='text-wine-500 font-medium text-lg max-w-md text-opacity-90 mb-12 mt-0 pt-0 '>
          Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
          distinctive convergence for stand-alone alignments.{' '}
        </p>
        <div className='mb-6 pb-6 pt-6'>
          <ul className='flex flex-wrap gap-8'>
            <li
              className={cn('-mt-12 cursor-pointer', {
                ['fill-blue-dark text-blue-dark active']: 'all' === activeFilter,
              })}
              onClick={() => {
                handleFilteredItems('all')
              }}
            >
              <StrokeText
                index={0}
                text={'all'}
                active={'all' === activeFilter ? true : false}
                fontSize={'text-3xl lg:text-5xl'}
                strokeWidth={'stroke-1'}
                color={'blue-dark'}
                fontWeight={'font-black'}
              />
            </li>
            {filters.map((filter, index) => {
              return (
                <li
                  key={filter}
                  className={cn('-mt-12', {
                    ['fill-blue-dark text-blue-dark active']: filter === activeFilter,
                  })}
                  onClick={() => {
                    handleFilteredItems(filter)
                  }}
                >
                  <StrokeText
                    text={filter}
                    index={index + 1}
                    active={filter === activeFilter ? true : false}
                    fontSize={'text-3xl lg:text-5xl'}
                    strokeWidth={'stroke-1'}
                    color={'blue-dark'}
                    fontWeight={'font-black'}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-5 3xl:grid-cols-6'>
          {filteredProjectFiles.map((projectFile) => {
            if (projectFile.active === true) {
              return (
                <Link
                  key={projectFile.title}
                  href={`/education/project-files/${projectFile.slug}`}
                  passHref
                >
                  <a
                    id={`${projectFile.title}`}
                    className='visible cursor-pointer
transform transition-all duration-300 hover:scale-98 ease-in-out animate__fadeIn'
                  >
                    <div>
                      <div className='aspect-[3/4] relative overflow-hidden rounded-xl'>
                        <Image
                          src={projectFile.coverImage}
                          alt={`${projectFile.title}} project file free for ${projectFile.category}`}
                          layout='fill'
                          objectFit='cover'
                          blurDataURL='true'
                          className='bg-peach'
                        />
                      </div>
                      <div className='mt-2 text-xs text-wine-200'>{`${projectFile.category}`}</div>
                      <h3 className='text-lg text-wine leading-none'>{projectFile.title}</h3>
                    </div>
                  </a>
                </Link>
              )
            } else {
              return
            }
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_ProjectFiles
