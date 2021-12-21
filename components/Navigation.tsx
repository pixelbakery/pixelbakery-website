import React, { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Nav_HamburgerNav from './Nav/Nav_HamburgerMenu'
import Nav_NavLogo from './Nav/Nav_Logo'

import { Nav_Links_Button, Nav_Links_Text } from './Nav/Nav_Links'
export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.set('#logo', { y: -50 })
    gsap.set('#logo-bg', { height: 100, width: 315, ease: 'sine.inOut' })
    gsap.set(
      ['#logo-line-1', '#logo-line-2', '#nav-link-1', '#nav-link-2', '#nav-link-3', '#nav-ham'],
      { y: -10, opacity: 0 },
    )

    const navTL = gsap.timeline({})
    navTL
      .to('#logo', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'back.out',
      })
      .to('#logo-line-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
      .to('#logo-line-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
      .to('#nav-link-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
      .to('#nav-link-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
      .to('#nav-link-3', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
      .to('#nav-ham', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    document.onload = function () {
      navTL.play()
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#topOfPage',
        start: 'top',
        end: 'top 50%',
        toggleActions: 'play none reverse none',
        // markers: true
      },
    })
    tl.addLabel('start')
      .to('#esign', { opacity: 0, duration: 0.4 }, '<25%')
      .to('#tudio', { opacity: 0, duration: 0.4 }, '<25%')
      .to('#ixel', { opacity: 0, duration: 0.4 }, '<25%')
      .to('#akery', { opacity: 0, duration: 0.4 }, '<25%')
      .to('#b', { x: -92, ease: 'sine.inOut', duration: 0.25 }, '<25%')
      .from('#logo-line-2', { scale: 0.75, x: -26, y: -3, duration: 0.25 }, '<25%')
      .to('#d', { x: 3, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<')
      .to('#s', { x: -140, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<33%')
      .to('#logo-bg', { height: 124, width: 90, ease: 'sine.inOut', duration: 0.25 }, '<')
      .from('#logo-wrapper', { y: -9, ease: 'sine.inOut', duration: 0.25 }, '<')
      .from('#logo', { scale: 0.8, ease: 'sine.inOut', duration: 0.25 }, '<')
      .to('#nav-link-1', { x: 300, scale: 0, opacity: 0, ease: 'back.in', duration: 0.5 }, '<')
      .to(
        '#nav-link-2',
        { x: 300, scale: 0, opacity: 0, ease: 'sine.inOut', duration: 0.5 },
        '<25%',
      )
      .to('#nav-link-3', { y: -20, opacity: 0, ease: 'back.in', duration: 0.33 }, '<33%')
      .addLabel('end')
  })

  return (
    <div className=''>
      <div
        className=' z-50 xl:hidden absolute bg-egg rounded-lg px-3 py-2 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
        id='mobile-logo'
      >
        <Link href={'/'}>
          <a className='text-4xl font-extrabold text-peach leading-none'>
            <div>pb</div>
            <div>ds</div>
          </a>
        </Link>
      </div>
      <div className='pointer-events-none fixed w-full top-0 mt-8 z-40 px-4 flex justify-end xl:justify-between'>
        <Nav_NavLogo />

        <div className='pr-8  h-full flex'>
          <Nav_Links_Text id={'nav-link-1'} url={'/work'} text={'what we do'} />
          <Nav_Links_Text id={'nav-link-2'} url={'/about'} text={'who we are'} />
          <Nav_Links_Button id={'nav-link-3'} url={'/onboarding'} text={'start a project'} />
          <Nav_HamburgerNav />
        </div>
      </div>

      {/* <nav className=' fixed w-full flex justify-center'>
        <Link href={'/sitemap'}>
          <a className='underline pointer-events-auto'>Sitemap</a>
        </Link>
      </nav> */}
    </div>
  )
}
