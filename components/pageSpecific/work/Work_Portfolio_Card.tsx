/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pill } from '@parts'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import Shimmer from '@lib/Shimmer'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import Loading from '@utility/Loading'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => <Loading />,
})

interface ProjectData {
  client: string
  title: string
  tags: string[]
  sources: { src: string; type: string }[]
  vimeoPreview: string
}

interface Project {
  filePath: string
  data: ProjectData
}

interface WorkPortfolioCardProps {
  project: Project
}

const cardOverlay: Variants = {
  show: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
  hide: { opacity: 0, transition: { when: 'afterChildren' } },
}

const cardOverlayItem_Tag: Variants = {
  show: { y: 5, opacity: 1 },
  hide: { y: -15, opacity: 0 },
}

const cardOverlayItem_Title: Variants = {
  show: { y: -5, opacity: 1 },
  hide: { y: 15, opacity: 0 },
}

function Work_Portfolio_Card({ project }: WorkPortfolioCardProps) {
  if (!project || !project.data) {
    return (
      <div className='p-4 bg-gray-200'>
        <h3 className='text-lg text-center'>Unable to load project data.</h3>
        <p className='text-center'>Please try again later or contact support.</p>
      </div>
    )
  }
  const { filePath, data } = project
  const {
    client = 'Unknown Client',
    title = 'Untitled',
    tags = [],
    sources = [],
    vimeoPreview = '',
  } = data

  const [isHovered, setIsHovered] = useState(false)
  const [filteredSources, setFilteredSources] = useState(sources)
  function toggleHover() {
    setIsHovered((prev) => !prev)
  }

  const previewImageUrl = `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${vimeoPreview}.jpg`

  // Remove failed video sources
  const handleError = () => {
    setFilteredSources((prevSources) =>
      prevSources.filter((source) => source.type !== 'video/webm'),
    )
  }
  return (
    <Link
      as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
      href={`/work/case-studies/[slug]`}
    >
      <div
        className='relative block overflow-hidden origin-center cursor-pointer aspect-16/9 bg-blue'
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className='relative z-0 w-full h-full transition duration-500 opacity-100 transform-opacity '>
          <Image
            src={previewImageUrl}
            width={854}
            height={480}
            placeholder='blur'
            blurDataURL={Shimmer(854, 480)}
            alt={`${
              tags[0] || 'Motion design'
            } creative project for ${client} by Pixel Bakery Design Studio`}
            className='object-cover w-full h-full'
            quality={75}
          />
        </div>

        {/* Video Player */}
        <div
          className={cn(
            'absolute block transform-opacity duration-300 ease-in-out z-10 top-0 left-0 -right-1 -bottom-1',
            {
              ['opacity-0']: !isHovered,
              ['opacity-100']: isHovered,
            },
          )}
        >
          <ReactPlayer
            muted
            playsInline
            loop
            controls={false}
            width='100%'
            height='100%'
            playing={isHovered}
            url={filteredSources}
            config={{
              file: {
                attributes: {
                  autoPlay: false,
                  loop: true,
                  playsInline: true,
                  muted: true,
                  style: { width: '100%', height: '100%', objectFit: 'cover' },
                },
              },
            }}
            onError={handleError}
          />
        </div>
        <div
          className={cn(
            'absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-t from-blue-dark via-transparent to-blue-dark pointer-events-none transform duration-300',
            { ['opacity-25 ']: isHovered, ['opacity-0 ']: !isHovered },
          )}
        ></div>
        <div
          className={cn(
            'absolute z-40 top-0 left-0 w-full h-full flex flex-col justify-between py-6 px-4 pointer-events-none',
          )}
        >
          <LazyMotion features={domAnimation}>
            <m.div
              variants={cardOverlay}
              animate={isHovered ? 'show' : 'hide'}
              className='flex-row flex-wrap hidden gap-4 pointer-events-none -py-3 md:flex'
            >
              {tags.slice(0, 3).map((tag) => (
                <m.span key={tag} variants={cardOverlayItem_Tag}>
                  <Pill
                    text={tag}
                    bgColor='blue'
                    textColor='cream'
                    size='xs'
                    className='hidden md:inline'
                  />
                </m.span>
              ))}
            </m.div>
          </LazyMotion>
          <LazyMotion features={domAnimation}>
            <m.div
              className='hidden projectTitle lg:block'
              variants={cardOverlay}
              animate={isHovered ? 'show' : 'hide'}
            >
              <m.div
                className='hidden text-sm text-white detail text-shadow-sm lg:block'
                variants={cardOverlayItem_Title}
              >
                {client}
              </m.div>
              <m.h3
                className='hidden text-2xl font-semibold text-white detail text-shadow-sm lg:block font-geologica'
                variants={cardOverlayItem_Title}
              >
                {title}
              </m.h3>
            </m.div>
          </LazyMotion>
        </div>

        <span className='hidden lg:sr-only'>{`Project for ${client} - ${title}`}</span>
        <div className='absolute bottom-0 left-0 z-40 px-4 py-2 mb-1 ml-1 lg:hidden bg-cream'>
          <div className='text-xs leading-none text-wine'>{client}</div>
          <h3 className='leading-none text-md text-wine'>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Work_Portfolio_Card
