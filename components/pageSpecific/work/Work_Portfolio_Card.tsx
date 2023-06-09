/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import cn from 'classnames'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
import Shimmer from '@lib/Shimmer'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'

// type MediaType = HTMLVideoElement | HTMLAudioElement
function Work_Portfolio_Card({ project }) {
  const [isHovered, setHover] = useState(false)
  const handleHover = () => {
    setHover(!isHovered)
  }

  const cardOverlay: Variants = {
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const cardOverlayItem_Tag: Variants = {
    show: {
      y: 5,
      opacity: 1,
    },
    hide: {
      y: -15,
      opacity: 0,
    },
  }

  const cardOverlayItem_Title: Variants = {
    show: {
      y: -5,
      opacity: 1,
    },
    hide: {
      y: 15,
      opacity: 0,
    },
  }
  return (
    <Link
      as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
      href={`/work/case-studies/[slug]`}
      className=' cursor-pointer '
    >
      <div
        className='cursor-pointer relative block origin-center aspect-16/9 bg-blue overflow-hidden  '
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
      >
        <div
          className={cn(
            'opacity-100 aspect-16/9 relative w-full h-full transform-opacity transition duration-500 z-0 pointer-events-none',
          )}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
            width={854}
            height={480}
            className={'object-cover w-full h-full'}
            placeholder='blur'
            blurDataURL={`${Shimmer(854, 480)}`}
            alt={`animation or video production work created for ${project.data.client}`}
            quality={75}
          />
        </div>

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
            muted={true}
            playsInline={true}
            loop={true}
            controls={false}
            preload={'true'}
            width='100%'
            height='100%'
            playing={isHovered}
            className=''
            url={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.mp4`}
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
          />
        </div>
        {/* This is the Scrim that sits on top of videos */}
        <div
          className={cn(
            'absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-t from-blue-dark via-transparent to-blue-dark  pointer-events-none transform duration-300',
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
              // id={projID_tags}
              className={' pointer-events-none  -py-3 hidden md:flex flex-wrap flex-row  gap-4'}
            >
              {project.data.tags.slice(0, 3).map((tag) => (
                <m.span key={tag} variants={cardOverlayItem_Tag}>
                  <Pill
                    text={tag}
                    bgColor={'blue'}
                    textColor={'cream'}
                    size='xs'
                    className={'hidden md:inline'}
                  />
                </m.span>
              ))}
            </m.div>
          </LazyMotion>
          <LazyMotion features={domAnimation}>
            <m.div
              className={cn('projectTitle hidden lg:block')}
              variants={cardOverlay}
              animate={isHovered ? 'show' : 'hide'}
            >
              <m.div
                className='detail  text-sm text-white text-shadow-sm hidden lg:block'
                variants={cardOverlayItem_Title}
              >
                {project.data.client}
              </m.div>
              <m.h3
                className='detail text-2xl text-white text-shadow-sm hidden lg:block'
                variants={cardOverlayItem_Title}
              >
                {project.data.title}
              </m.h3>
            </m.div>
          </LazyMotion>
        </div>
        <div
          className={cn('absolute bottom-0 left-0  mb-1 ml-1 z-40  lg:hidden py-2 px-4 bg-cream')}
        >
          <div className='text-xs text-wine leading-none '>{project.data.client}</div>
          <h3 className='  text-md text-wine leading-none'>{project.data.title}</h3>
        </div>
      </div>
    </Link>
  )
}
export default Work_Portfolio_Card
