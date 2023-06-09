import { useEffect, useState } from 'react'
import Link from 'next/link'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
import cn from 'classnames'
import Nav_FullscreenMenu from './Nav_FullscreenMenu'
import Nav_Logo from './Nav_Logo'
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
            className='flex w-full origin-top ml-8 mt-8 fixed top-0 left-0 z-40'
          >
            <Link href={'/'} hrefLang='en' className=' max-w-fit flex '>
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
                className=' bg-cream  rounded-md origin-top-left object-left-top hidden xl:flex flex-col justify-center item-start  px-4   overflow-hidden'
                layout
              >
                <Nav_Logo showNavBar={showNavBar} />
              </m.div>
            </Link>
          </m.div>
          <div className='pointer-events-none select-none cursor-none overflow-visible mt-8 mr-8 fixed top-0 right-0 z-50 flex justify-end gap-x-6'>
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
                className='pointer-events-auto select-auto cursor-pointer bg-cream px-4 py-3 rounded-sm  self-center z-20 hidden md:block font-extrabold text-peach tracking-wide lowercase '
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
                className='pointer-events-auto select-auto cursor-pointer bg-cream px-4 py-3 rounded-sm  self-center z-20 hidden md:block  font-extrabold text-peach tracking-wide lowercase'
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
                className='pointer-events-auto select-auto bg-peach px-4 py-3 rounded-sm  self-center z-20 hidden md:block cursor-pointer font-extrabold text-cream tracking-wide lowercase '
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
        className=' z-50 xl:hidden absolute bg-egg rounded-lg px-3 pb-2 pt-4 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
        id='mobile-logo'
      >
        <Link
          hrefLang={'en-US'}
          href={'/'}
          className='text-4xl font-extrabold text-peach leading-none'
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
