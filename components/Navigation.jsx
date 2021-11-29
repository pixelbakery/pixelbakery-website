import React, { useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function hamToggle() {
  var element = document.getElementById('ham')
  element.classList.toggle('active')
}

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    // gsap.set('#logo', { y: -50 })
    // gsap.set('#logo-bg', { height: 100, width: 315, ease: 'sine.inOut' })
    // gsap.set('#logo-line-1', { y: -10 })
    // gsap.set('#logo-line-2', { opacity: 0, y: -10 })
    // gsap.set('#nav-link-1', { y: -10 })
    // gsap.set('#nav-link-2', { y: -10 })
    // gsap.set('#nav-link-3', { y: -10 })
    // gsap.set('#nav-hav', { y: -10 })
    // const navTL = new gsap.timeline({})
    // navTL
    //   .to('#logo', {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     delay: 1,
    //     ease: 'back.out',
    //   })
    //   .to('#logo-line-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   .to('#logo-line-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   .to('#nav-link-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   .to('#nav-link-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   .to('#nav-link-3', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   .to('#nav-ham', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    // document.onload = function() {
    //   navTL.play()
    // }
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.lander',
    //     start: 'top',
    //     end: 'top 50%',
    //     toggleActions: 'play none reverse none',
    //     // markers: true
    //   },
    // })
    // tl.addLabel('start')
    //   .to('#esign', { opacity: 0, duration: 0.4 }, '<25%')
    //   .to('#tudio', { opacity: 0, duration: 0.4 }, '<25%')
    //   .to('#ixel', { opacity: 0, duration: 0.4 }, '<25%')
    //   .to('#akery', { opacity: 0, duration: 0.4 }, '<25%')
    //   .to('#b', { x: -92, ease: 'sine.inOut', duration: 0.25 }, '<25%')
    //   .from('#logo-line-2', { scale: 0.75, x: -26, y: -3, duration: 0.25 }, '<25%')
    //   .to('#d', { x: 3, ease: 'sine.inOut', duration: 0.25 }, '<')
    //   .to('#s', { x: -140, scaleY: 1.25, y: -4, ease: 'sine.inOut', duration: 0.25 }, '<33%')
    //   .to('#logo-bg', { height: 124, width: 90, ease: 'sine.inOut', duration: 0.25 }, '<')
    //   .from('#logo-wrapper', { y: -9, ease: 'sine.inOut', duration: 0.25 }, '<')
    //   .from('#logo', { scale: 0.8, ease: 'sine.inOut', duration: 0.25 }, '<')
    //   .to('#nav-link-1', { x: 300, scale: 0, opacity: 0, ease: 'back.in', duration: 0.5 }, '<')
    //   .to(
    //     '#nav-link-2',
    //     { x: 300, scale: 0, opacity: 0, ease: 'sine.inOut', duration: 0.5 },
    //     '<25%',
    //   )
    //   .to('#nav-link-3', { y: -20, opacity: 0, ease: 'back.in', duration: 0.33 }, '<33%')
    //   .addLabel('end')
  })

  return (
    <div>
      <div className='pointer-events-none fixed w-full top-0 z-20 mt-8 px-4 flex justify-between'>
        <div id='logo' className='opacity-0 origin-top-left'>
          <Link
            href='/'
            passHref
            className='pointer-events-auto block relative  h-full w-full z-50 px-4 py-4'
            passHref
          >
            <>
              <div
                id='logo-wrapper'
                className='relative z-20 top-0 bg-none text-peach text-center font-extrabold rounded-md  text-5xl leading-none inline-block'
              >
                <p id='logo-line-1' className='opacity-0 tracking-normal text-left'>
                  <span id='p' className='inline-block'>
                    p
                  </span>
                  <span id='ixel' className='inline-block'>
                    ixel{' '}
                  </span>
                  <span id='b' className='inline-block ml-3'>
                    b
                  </span>
                  <span id='akery' className='inline-block'>
                    akery
                  </span>
                </p>
                <p
                  id='logo-line-2'
                  className='tracking-wide -mt-2 -ml-1 text-left'
                  id='design-studio'
                >
                  <span id='d' className='inline-block'>
                    d
                  </span>
                  <span id='esign' className='inline-block'>
                    esign{' '}
                  </span>
                  <span id='s' className='inline-block ml-3'>
                    s
                  </span>
                  <span id='tudio' className='inline-block'>
                    tudio
                  </span>
                </p>
              </div>
              <div
                id='logo-bg'
                className='absolute z-10 top-0 left-0 bg-cream block rounded-md'
              ></div>
            </>
          </Link>
        </div>
        <div className='pr-8  h-full flex'>
          <div id='nav-link-1' className='opacity-0 self-center relative z-20'>
            <Link
              className='pointer-events-auto mx-3 text-xl tracking-wide lowercase text-peach font-bold'
              href='/work'
              passHref
            >
              Our Work
            </Link>
          </div>

          <div id='nav-link-2' className='opacity-0 self-center relative z-20'>
            <Link
              className='pointer-events-auto  mx-3 text-xl tracking-wide lowercase text-peach font-bold'
              href='/about'
              passHref
            >
              Who We Are
            </Link>
          </div>
          <div id='nav-link-3' className='opacity-0 self-center relative z-30'>
            <Link
              href='/contact'
              className='pointer-events-auto  mx-3 my-2 py-3 rounded-sm px-6 w-full text-center bg-peach'
              passHref
            >
              <span className='text-cream font-extrabold text-md lowercase tracking-wide'>
                Start a Project
              </span>
            </Link>
          </div>

          <div id='nav-ham' className='self-center w-16 h-16'>
            <svg
              className='ham hamRotate ham8 pointer-events-auto'
              viewBox='0 0 100 100'
              width=''
              onClick={hamToggle}
              id='ham'
            >
              <path
                className='line top stroke-current text-peach'
                d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
              />
              <path className='line middle stroke-current text-peach' d='m 30,50 h 40' />
              <path
                className='line bottom stroke-current text-peach'
                d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
              />
            </svg>
          </div>
        </div>
      </div>
      <nav className=' fixed w-full flex justify-center'>
        <Link className='underline pointer-events-auto' href={'/sitemap'}>
          Sitemap
        </Link>
      </nav>
    </div>
  )
}
