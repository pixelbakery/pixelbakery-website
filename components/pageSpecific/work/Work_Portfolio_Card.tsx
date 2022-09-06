import { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import Link from 'next/link'
import Pill from '@parts/Pill'

import cn from 'classnames'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

// type MediaType = HTMLVideoElement | HTMLAudioElement
function Work_Portfolio_Card({ project }) {
  const [isHovered, setHover] = useState(false)
  const projID = `${project.data.client.replace(/[^A-Za-z]+/g, '')}-${project.data.title.replace(
    /[^A-Za-z]+/g,
    '',
  )}`
  const [tl, setTimeline] = useState(gsap.timeline({ paused: false }))
  const projID_title = `${projID}-title`
  const projID_tags = `${projID}-tags`
  const handleHover = () => {
    setHover(!isHovered)
  }

  useEffect(() => {
    tl.from(`#${projID_title} .detail`, {
      stagger: 0.25,
      y: 30,
      duration: '0.33',
      autoAlpha: 0,
      ease: 'sine.easeIn',
    }),
      tl.from(
        `#${projID_tags} .tag`,
        {
          stagger: 0.25,
          y: -30,
          duration: '0.33',
          autoAlpha: 0,
          ease: 'sine.easeIn',
        },
        '<=0.25',
      )
    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (isHovered) {
      tl.play()
    } else if (!isHovered) {
      tl.reverse()
    }
    return () => {
      tl.kill()
    }
  }, [isHovered])

  return (
    <Link
      as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
      href={`/work/case-studies/[slug]`}
      passHref
    >
      <article
        className='relative  aspect-16/9 bg-blue cursor-pointer origin-center transform duration-300 hover:scale-99 overflow-hidden'
        onMouseOver={() => handleHover()}
        onMouseOut={() => handleHover()}
      >
        <div
          className={cn(
            'aspect-16/9 relative w-full h-full transform-opacity transition duration-500 z-10 pointer-events-none',
            {
              ['opacity-0 ']: isHovered,
              ['opacity-100 ']: !isHovered,
            },
          )}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
            alt={`animation or video production work created for ${project.data.client}`}
            quality={50}
          />
        </div>

        <div className='absolute z-0 top-0 left-0 -right-1 -bottom-1'>
          <ReactPlayer
            muted={true}
            playsinline={true}
            loop={true}
            controls={false}
            width='100%'
            height='100%'
            playing={isHovered}
            className='bg-blue'
            url={[
              `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.webm`,
              `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.mp4`,
            ]}
            config={{
              file: {
                attributes: {
                  autoPlay: false,
                  loop: true,
                  playsInline: true,
                  muted: true,
                  style: { width: '100%', height: '100%', objectFit: 'cover' },
                  // poster: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`,
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
          <div
            id={projID_tags}
            className={' pointer-events-none  -py-3 hidden md:flex flex-wrap flex-row  gap-4'}
          >
            {project.data.tags.slice(0, 3).map((tag) => (
              <Pill text={tag} bgColor={'blue'} textColor={'cream'} size='xs' key={tag} />
            ))}
          </div>
          <div
            id={projID_title}
            className={(cn('projectTitle hidden lg:block'), `${projID}-title`)}
          >
            <div className='detail  text-sm text-white text-shadow-sm'>{project.data.client}</div>
            <h3 className='detail text-2xl text-white text-shadow-sm'>{project.data.title}</h3>
          </div>
        </div>
        <div
          className={cn('absolute bottom-0 left-0  mb-1 ml-1 z-40  lg:hidden py-2 px-4 bg-cream')}
        >
          <div className='text-xs text-wine leading-none '>{project.data.client}</div>
          <h3 className='  text-md text-wine leading-none'>{project.data.title}</h3>
        </div>
      </article>
    </Link>
  )
}
export default Work_Portfolio_Card
