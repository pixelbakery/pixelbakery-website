import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
import Nav_NavLogo from '@nav/Nav_Logo'
import { Nav_Links_Button, Nav_Links_Text } from '@nav/Nav_Links'
import style from '@styles/HamburgerMenu.module.css'
import cn from 'classnames'
gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  function handleMouseEnter(e) {
    console.log('hovered')
    gsap.to(e.target, { scale: 0.975, ease: 'sine.inOut', duration: 0.15 })
  }
  function handleMouseLeave(e) {
    console.log('hovered')
    gsap.to(e.target, { scale: 1, ease: 'sine.inOut', duration: 0.15 })
  }

  const logoWrapper = useRef(null)
  const hamRef = useRef(null)
  const logo = useRef(null)
  const logoBG = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)

  const line1 = useRef(null)
  const line2 = useRef(null)

  const p = useRef(null)
  const b = useRef(null)
  const d = useRef(null)
  const s = useRef(null)

  const ixel = useRef(null)
  const akery = useRef(null)
  const esign = useRef(null)
  const udio = useRef(null)

  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(hamRef.current, {
      y: -120,
    })

    gsap.to(hamRef.current, {
      delay: 1,
      ease: 'back.out',
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.25,
      },
    })
  }, [])

  // initial logo sizing
  useEffect(() => {
    // gsap.set(logoWrapper.current, { scale: 0.8 })
  })

  //scrolly stuff
  useEffect(() => {
    let boxes = [box1.current, box2.current, box3.current]
    gsap.set(line2.current, { scale: 0.75, x: -26, y: -3, duration: 0.25 })
    gsap.set(ixel.current, { autoAlpha: 1 })
    gsap.set(boxes, {
      y: -120,
    })
    let tl_logo = gsap.timeline({ paused: true })

    tl_logo.to(ixel.current, { opacity: 0, autoAlpha: 0 }, '<=')
    tl_logo.to(akery.current, { opacity: 0, autoAlpha: 0 }, '<=')
    tl_logo.to(esign.current, { opacity: 0, autoAlpha: 0 }, '<=')
    tl_logo.to(udio.current, { opacity: 0, autoAlpha: 0 }, '<=')
    tl_logo.to(b.current, { x: -92 }, '<=')
    tl_logo.to(d.current, { scale: 1.35, y: 5, x: -11 }, '<=')
    tl_logo.to(s.current, { scale: 1.35, y: 5, x: -142 }, '<=')

    tl_logo.to(line2.current, { y: -4 }, '<=')

    let tl = gsap.timeline({ duration: 1, delay: 1, ease: 'sine.out' })

    tl.to(boxes, {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.25,
      },
    })
    tl.to(logo.current, {
      y: 0,
      opacity: 1,
    })

    ScrollTrigger.create({
      start: `${window.innerHeight / 2} top`,
      end: 'max',
      invalidateOnRefresh: true,
      markers: true,
      onToggle(self) {
        // prevent toggling when at the bottom of page
        if (self.progress === 1) return
        if (self.isActive) {
          tl_logo.play()

          tl.reverse()
        } else {
          tl_logo.reverse()

          tl.play()
        }
      },
    })
  }, [])

  return (
    <>
      <div ref={el} className={'z-40'}>
        <div
          ref={logo}
          className='navItem origin-top-left ml-8 mt-8 fixed top-0 left-0 bg-cream z-40 '
        >
          <div ref={logo} className='opacity-100 origin-top-left hidden xl:block  '>
            <Link href={'/'} passHref>
              <a className='pointer-events-auto block relative  h-full w-full z-50 px-4 py-4 '>
                <div
                  ref={logoWrapper}
                  className='relative z-20 top-0 bg-none text-peach text-center font-extrabold rounded-md  text-5xl leading-none inline-block'
                >
                  <div ref={line1} className='tracking-normal text-left'>
                    <span ref={p} className='inline-block'>
                      p
                    </span>
                    <span ref={ixel} className='inline-block'>
                      ixel{' '}
                    </span>
                    <span ref={b} className='inline-block ml-3'>
                      b
                    </span>
                    <span ref={akery} className='inline-block'>
                      akery
                    </span>
                  </div>
                  <div ref={line2} className='tracking-wide -mt-2 -ml-1 text-left '>
                    <span ref={d} className='inline-block'>
                      d
                    </span>
                    <span ref={esign} className='inline-block'>
                      esign{' '}
                    </span>
                    <span ref={s} className='inline-block ml-3'>
                      s
                    </span>
                    <span ref={udio} className='inline-block'>
                      tudio
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className='mt-8 mr-8 fixed top-0 right-0 z-50 flex justify-end gap-x-6'>
          <div
            className='opacity-0 self-center'
            ref={box1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={'/about'} passHref>
              <div
                className='bg-cream px-4 py-3 rounded-sm  self-center z-20 hidden md:block cursor-pointer font-extrabold text-peach tracking-wide lowercase '
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                who we are
              </div>
            </Link>
          </div>
          <div
            className='opacity-0 self-center'
            ref={box2}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={'/work'} passHref>
              <div
                className='bg-cream px-4 py-3 rounded-sm  self-center z-20 hidden md:block cursor-pointer font-extrabold text-peach tracking-wide lowercase'
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              >
                what we make
              </div>
            </Link>
          </div>
          <div
            className='opacity-0 self-center'
            ref={box3}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={'/onboarding'} passHref>
              <div
                className='bg-peach px-4 py-3 rounded-sm  self-center z-20 hidden md:block cursor-pointer font-extrabold text-cream tracking-wide lowercase '
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              >
                start a project
              </div>
            </Link>
          </div>
          <div ref={hamRef} className=' navItem'>
            <Nav_HamburgerNav />
          </div>
        </div>
      </div>
    </>

    // OLD
    // useEffect(() => {
    //   gsap.set('#logo', { y: -50 })
    //   gsap.set('#logo-bg', { height: 100, width: 315, ease: 'sine.inOut' })
    //   gsap.set(
    //     ['#logo-line-1', '#logo-line-2', '#nav-link-1', '#nav-link-2', '#nav-link-3', '#nav-ham'],
    //     { y: -10, opacity: 0 },
    //   )

    //   const navTL = gsap.timeline({})
    //   navTL
    //     .to('#logo', {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1,
    //       delay: 1,
    //       ease: 'back.out',
    //     })
    //     .to('#logo-line-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //     .to('#logo-line-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //     .to('#nav-link-1', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //     .to('#nav-link-2', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //     .to('#nav-link-3', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //     .to('#nav-ham', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
    //   document.onload = function () {
    //     navTL.play()
    //   }
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: 'body',
    //       start: 0,
    //       end: () => innerHeight / 2,
    //       toggleActions: 'play none reverse none',
    //       // markers: true
    //     },
    //   })
    //   tl.addLabel('start')
    //     .to('#esign', { opacity: 0, duration: 0.4 }, '<25%')
    //     .to('#tudio', { opacity: 0, duration: 0.4 }, '<25%')
    //     .to('#ixel', { opacity: 0, duration: 0.4 }, '<25%')
    //     .to('#akery', { opacity: 0, duration: 0.4 }, '<25%')
    //     .to('#b', { x: -92, ease: 'sine.inOut', duration: 0.25 }, '<25%')
    //     .from('#logo-line-2', { scale: 0.75, x: -26, y: -3, duration: 0.25 }, '<25%')
    //     .to('#d', { x: 3, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<')
    //     .to('#s', { x: -140, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<33%')
    //     .to('#logo-bg', { height: 124, width: 90, ease: 'sine.inOut', duration: 0.25 }, '<')
    //     .from('#logo-wrapper', { y: -9, ease: 'sine.inOut', duration: 0.25 }, '<')
    //     .from('#logo', { scale: 0.8, ease: 'sine.inOut', duration: 0.25 }, '<')
    //     .to('#nav-link-1', { x: 300, scale: 0, opacity: 0, ease: 'back.in', duration: 0.5 }, '<')
    //     .to(
    //       '#nav-link-2',
    //       { x: 300, scale: 0, opacity: 0, ease: 'sine.inOut', duration: 0.5 },
    //       '<25%',
    //     )
    //     .to('#nav-link-3', { y: -20, opacity: 0, ease: 'back.in', duration: 0.33 }, '<33%')
    //     .addLabel('end')
    // })

    // return (
    //   <div className=''>
    //     <div
    //       className=' z-50 xl:hidden absolute bg-egg rounded-lg px-3 py-2 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
    //       id='mobile-logo'
    //     >
    //       <Link href={'/'}>
    //         <a className='text-4xl font-extrabold text-peach leading-none'>
    //           <div>pb</div>
    //           <div>ds</div>
    //         </a>
    //       </Link>
    //     </div>
    //     <div className='pointer-events-none fixed w-full top-0 mt-8 z-40 px-4 flex justify-end xl:justify-between'>
    //       <Nav_NavLogo />

    //       <div className='pr-8  h-full flex'>
    //         <Nav_Links_Text id={'nav-link-1'} url={'/work'} text={'what we do'} />
    //         <Nav_Links_Text id={'nav-link-2'} url={'/about'} text={'who we are'} />
    //         <Nav_Links_Button id={'nav-link-3'} url={'/onboarding'} text={'start a project'} />
    //         <Nav_HamburgerNav />
    //       </div>
    //     </div>
    //   </div>
  )
}
