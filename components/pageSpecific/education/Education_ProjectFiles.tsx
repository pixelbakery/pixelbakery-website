import Link from 'next/link'
import Image from 'next/image'
import H2 from '@typography/H2'

import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
// import cn from 'classnames'
// import { useState } from 'react'
// import StrokeText from '@parts/StrokeText'

function Education_ProjectFiles({ allProjectFiles }) {
  // const [activeFilter, setFilter] = useState('all')

  // const [filteredProjectFiles, setFilteredItems] = useState(allProjectFiles)

  // const allCategories = []
  // allProjectFiles.forEach(function (file, i) {
  //   allCategories.push(file.category)
  // })

  // const filters = Array.from(new Set(allCategories))
  // const handleFilteredItems = (filter) => {
  //   setFilter(filter)

  //   if (filter === 'all') {
  //     setFilteredItems(allProjectFiles)
  //   } else {
  //     setFilteredItems(allProjectFiles.filter((file) => file.category === filter))
  //   }
  // }
  return (
    <PageSection className='bg-pink-lighter' id={'projectFiles'}>
      <InnerWrapper>
        <H2 color='blue' id={'project-files'}>
          Project Files
        </H2>
        <p className='text-wine-500 font-medium text-lg max-w-md text-opacity-90 mb-12 mt-0 pt-0 '>
          Expanding educational opportunities is more possible now than ever before with
          advancements in technology. <br />
          <br />
          PB believes open-sourcing our files is one of countless ways we can break down legal,
          financial, or technical barriers that prevent creativity and believe that everyone should
          have access to high-quality educational experiences and resources.
        </p>
        {/* <div className='mb-6 pb-6 pt-6'>
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
                  key={index}
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
        </div> */}
        <div className='grid grid-cols-2 gap-6 md:grid-cols-5 3xl:grid-cols-6'>
          {allProjectFiles.map((pf) => {
            return (
              <Link
                key={pf.data.title}
                as={`/education/project-files/${pf.filePath.replace(/\.mdx?$/, '')}`}
                href={`/education/project-files/[slug]`}
                id={`${pf.data.title}`}
                className='visible cursor-pointer
transform transition-all duration-300 hover:scale-98 ease-in-out animate__fadeIn'
              >
                <>
                  <div className='aspect-[3/4] relative overflow-hidden rounded-xl'>
                    {pf.data.videoCoverImage ? (
                      <video
                        autoPlay={true}
                        playsInline
                        muted
                        controls={false}
                        loop
                        className='object-cover w-full h-full hideControls'
                        poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${pf.data.coverImage}`}
                      >
                        <source
                          src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${pf.data.video}`}
                          type={'video/mp4'}
                        />
                      </video>
                    ) : (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${pf.data.coverImage}`}
                        alt={`${pf.title}} project file free for ${pf.data.category}`}
                        placeholder='blur'
                        blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${pf.data.coverImage}`}
                        className='bg-peach'
                      />
                    )}
                  </div>
                  <div>
                    <div className='cursor-pointer mt-2 z-20 h-100 p-2 flex flex-col justify-between'>
                      <div className=''>
                        <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
                          {pf.data.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              </Link>
            )
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_ProjectFiles
