import React, { useEffect, useState } from 'react'
import next from 'next'
import Link from 'next/link'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import HamburgerNav from './nav/Nav-HamburgerMenu'
import NavLogo from './nav/Nav-NavLogo'
import FullscreenMenu from './nav/nav-FullscreenMenu'
import { NavButton, NavTextLink } from './nav/Nav-NavLinks'
export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.set('#logo', { y: -50 })
    gsap.set('#logo-bg', { height: 100, width: 315, ease: 'sine.inOut' })
    gsap.set(
      ['#logo-line-1', '#logo-line-2', '#nav-link-1', '#nav-link-2', '#nav-link-3', '#nav-ham'],
      { y: -10, opacity: 0 },
    )

    const navTL = new gsap.timeline({})
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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.lander',
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
      .to('#d', { x: 3, ease: 'sine.inOut', duration: 0.25 }, '<')
      .to('#s', { x: -140, scaleY: 1.25, y: -4, ease: 'sine.inOut', duration: 0.25 }, '<33%')
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
      <div className='pointer-events-none fixed w-full top-0 mt-8 z-40 px-4 flex justify-between'>
        <NavLogo />
        <div className='pr-8  h-full flex'>
          <NavTextLink id={'nav-link-1'} url={'work'} text={'what we do'} />
          <NavTextLink id={'nav-link-2'} url={'about'} text={'who we are'} />
          <NavButton id={'nav-link-3'} url={'onboarding'} text={'start a project'} />
          <HamburgerNav />
        </div>
      </div>

      <nav className=' fixed w-full flex justify-center'>
        <Link href={'/sitemap'}>
          <a className='underline pointer-events-auto'>Sitemap</a>
        </Link>
      </nav>
    </div>
  )
}
