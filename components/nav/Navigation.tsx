import { useEffect, useState } from 'react'
import Link from 'next/link'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
import cn from 'classnames'

const Nav_FullscreenMenu = dynamic(() => import('@nav/Nav_FullscreenMenu'))
import Nav_Logo from './Nav_Logo'
import dynamic from 'next/dynamic'

export default function Navbar() {
  const [isHamActive, setHamToggle] = useState(false)
  const [windowHeight, setwindowHeight] = useState(0)
  const [showNavBar, setShowNavBar] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  function handleShowNavBar() {
    if (scrollPosition + 1 >= windowHeight / 3) setShowNavBar(false)
    else setShowNavBar(true)
  }
  // Create a window resize event listener
  useEffect(() => {
    setwindowHeight(window.innerHeight)
    const handleWindowResize = () => {
      setwindowHeight(window.innerHeight)
      handleShowNavBar()
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
      handleShowNavBar()
    }
  }, [])

  // Create a scroll event listener, and call handleShowNavBar
  useEffect(() => {
    setScrollPosition(window.scrollY + 1)
    handleShowNavBar()
    const handleScroll = () => {
      const position = window.scrollY + 1
      setScrollPosition(position)
      handleShowNavBar()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  const navItem: Variants = {
    offscreen: (delay) => ({
      y: -300,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 1,
        delay: delay,
      },
    }),
    onscreen: (delay) => ({
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1,
        delay: delay,
      },
    }),
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <nav className={'z-40 '}>
          <m.div
            initial={'offscreen'}
            animate={'onscreen'}
            variants={navItem}
            custom={0.3}
            layout
            className='fixed top-0 left-0 z-40 flex w-full mt-8 ml-8 origin-top pointer-events-none'
          >
            <Link
              href={'/'}
              hrefLang='en'
              className='flex duration-200 pointer-events-auto  max-w-fit hover:scale-99'
            >
              <m.div
                initial={{ width: '100%' }}
                animate={
                  showNavBar
                    ? {
                        scale: 1,
                        width: '100%',
                        paddingTop: '1rem',
                        paddingBottom: '.60rem',
                      }
                    : {
                        scale: 1,
                        width: '35%',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                        transition: { width: { delay: 0.33 } },
                      }
                }
                exit={{ width: '100%' }}
                className='flex-col justify-center hidden object-left-top px-4 overflow-hidden origin-top-left rounded-md  bg-cream xl:flex item-start'
                layout
              >
                <Nav_Logo showNavBar={showNavBar} />
                <span className='sr-only'>Home</span>
              </m.div>
            </Link>
          </m.div>
          <div className='fixed top-0 right-0 z-50 flex justify-end mt-8 mr-8 overflow-visible pointer-events-none select-none cursor-none gap-x-6'>
            <m.div
              initial={'offscreen'}
              animate={showNavBar ? 'onscreen' : 'offscreen'}
              variants={navItem}
              exit={'offscreen'}
              custom={0.1}
              transition={{ ease: 'easeOut', duration: 2 }}
              className={cn('pointer-events-none select-none cursor-nonerelative self-center', {
                ['opacity-0 hidden']: isHamActive,
              })}
            >
              <Link
                hrefLang={'en-US'}
                href={'/about'}
                className='z-20 self-center hidden px-4 py-3 font-extrabold tracking-wide lowercase duration-200 rounded-sm cursor-pointer pointer-events-auto select-auto bg-cream md:block text-peach hover:scale-98'
              >
                Who We Are
              </Link>
            </m.div>
            <m.div
              initial={'offscreen'}
              animate={showNavBar ? 'onscreen' : 'offscreen'}
              variants={navItem}
              exit='offscreen'
              custom={0.2}
              className={cn('relative self-center', { ['opacity-0 hidden']: isHamActive })}
            >
              <Link
                hrefLang={'en-US'}
                href={'/work'}
                className='z-20 self-center hidden px-4 py-3 font-extrabold tracking-wide lowercase duration-200 rounded-sm cursor-pointer pointer-events-auto select-auto bg-cream md:block text-peach hover:scale-98'
              >
                What We Make
              </Link>
            </m.div>
            <m.div
              initial={'offscreen'}
              animate={showNavBar ? 'onscreen' : 'offscreen'}
              variants={navItem}
              exit='offscreen'
              custom={0.3}
              className={cn('relative self-center', { ['opacity-0 hidden']: isHamActive })}
            >
              <Link
                hrefLang={'en-US'}
                href={'/onboarding'}
                className='z-20 self-center hidden px-4 py-3 font-extrabold tracking-wide lowercase duration-200 rounded-sm cursor-pointer pointer-events-auto select-auto bg-peach md:block text-cream hover:scale-98'
              >
                start a project
              </Link>
            </m.div>
            <m.div className='' initial={'offscreen'} animate={'onscreen'} variants={navItem}>
              <Nav_HamburgerNav isActive={isHamActive} onModalUpdate={setHamToggle} />
            </m.div>
          </div>
        </nav>
      </LazyMotion>
      <div
        className='absolute z-50 px-3 pt-4 pb-2 transition-all transform rounded-lg pointer-events-auto  xl:hidden bg-egg top-8 left-8 duration-400 hover:scale-105'
        id='mobile-logo'
      >
        <Link
          hrefLang={'en-US'}
          href={'/'}
          className='text-4xl font-extrabold leading-none text-peach'
        >
          <>
            <div>pb</div>
            <div>ds</div>
          </>
        </Link>
      </div>
      <Nav_FullscreenMenu isActive={isHamActive} onModalUpdate={setHamToggle} />
    </>
  )
}
