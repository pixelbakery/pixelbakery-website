import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import Link from 'next/link'
import Pill from '../parts/Pill'

import cn from 'classnames'

function Work_Portfolio_Card(props) {
  const [isHovered, setHover] = useState(false)
  const projID = `${props.client.replace(/[^A-Za-z]+/g, '')}-${props.name.replace(
    /[^A-Za-z]+/g,
    '',
  )}`
  const [tl, setTimeline] = useState(gsap.timeline({ paused: false }))
  const projID_title = `${projID}-title`
  const projID_tags = `${projID}-tags`

  const handleHover = (e) => {
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
  }, [])

  useEffect(() => {
    if (isHovered) {
      tl.play()
    } else if (!isHovered) {
      tl.reverse()
    }
  }, [isHovered])

  const shimmer = (w, h) => `
    <svg width="${w}+30" height="${h}+30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="g"><stop stop-color="rgb(56, 204, 255)" offset="0%" /><stop stop-color="rgba(0, 81, 116, 0.25)" offset="50%" /><stop stop-color="rgb(56, 204, 255)" offset="100%" /></linearGradient></defs><rect width="${w}" height="${h}" fill="rgb(56, 204, 255)" /><rect id="r" width="${w}" height="${h}" fill="url(#g)" /><animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  /></svg>`

  const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  return (
    <Link href={props.url} passHref>
      <article
        className='relative  aspect-16/9 bg-blue cursor-pointer origin-center transform duration-300 hover:scale-99 overflow-hidden'
        onMouseOver={(event) => handleHover(event)}
        onMouseOut={(event) => handleHover(event)}
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
            src={props.previewImg}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            alt={''}
            quality={50}
          />
        </div>
        <div className='absolute z-0 top-0 left-0 -right-1 -bottom-1'>
          <video
            muted
            playsInline
            loop
            autoPlay={false}
            poster={props.previewImg}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            className='object-cover w-full h-full'
          >
            <source src={props.hoverVideo} type='video/mp4' />
          </video>
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
            {props.tags.map((tag) => (
              <Pill text={tag} bgColor={'blue'} textColor={'cream'} size='xs' key={tag} />
            ))}
          </div>
          <div
            id={projID_title}
            className={(cn('projectTitle hidden lg:block'), `${projID}-title`)}
          >
            <div className='detail drop-shadow-lg text-sm text-white text-shadow-md'>
              {props.client}
            </div>
            <h3 className='detail drop-shadow-lg text-2xl text-white text-shadow-md'>
              {props.name}
            </h3>
          </div>
        </div>
        <div
          className={cn('absolute bottom-0 left-0  mb-1 ml-1 z-40  lg:hidden py-2 px-4 bg-cream')}
        >
          <div className='text-xs text-wine leading-none '>{props.client}</div>
          <h3 className='  text-md text-wine leading-none'>{props.name}</h3>
        </div>
      </article>
    </Link>
  )
}
export default Work_Portfolio_Card
