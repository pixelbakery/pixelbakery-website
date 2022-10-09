/* eslint-disable react/prop-types */
/* eslint-disable react/no-string-refs */
// eslint-disable-next-line react/no-string-refs
import nav_main from '@data/nav_main'
import Nav_SocialLinks from './Nav_SocialLinks'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Logo_Primary from '@images/logo_primary'
import Button_Filled from '@parts/Button_Filled'
import H3 from '@typography/H3'
import Obfuscate from 'react-obfuscate'
import Nav_FullScreenMenu_CTA from './Nav_FullScreenMenu_CTA'
import Nav_FullScreenMenu_RightCol from './Nav_FullScreenMenu_RightCol'
import Nav_FullScreenMenu_MiddleCol from './Nav_FullScreenMenu_MiddleCol'
import Nav_FullScreenMenu_LeftCol from './Nav_FullScreenMenu_LeftCol'

//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu({ isActive, onModalUpdate }) {
  const el = useRef(null)
  const fsNavRef = useRef(null)

  const handleLinkClick = () => {
    onModalUpdate(false)
  }

  useEffect(() => {
    if (!isActive) {
      document.body.classList.remove('overflow-y-hidden')
      gsap.to(fsNavRef.current, {
        autoAlpha: 0,
      })
    } else {
      gsap.to(fsNavRef.current, {
        autoAlpha: 1,
      })
      document.body.classList.add('overflow-y-hidden')
    }
    return () => {
      gsap.killTweensOf(fsNavRef.current)
      gsap.killTweensOf(el.current)
    }
  }, [isActive])

  return (
    <nav
      ref={fsNavRef}
      id='fullscreenNav'
      className={
        'opacity-0 pointer-events-auto  p-4 fixed w-screen h-screen z-40  bg-cream top-0 right-0 '
      }
    >
      <div className=' w-full h-full bg-blue px-6 py-12 flex justify-center'>
        {/* Main menu */}

        <div className='mx-auto self-center '>
          <div className='w-full flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center gap-x-0 lg:gap-x-4 2xl:gap-x-12 '>
            <Nav_FullScreenMenu_LeftCol update={handleLinkClick} />
            <Nav_FullScreenMenu_MiddleCol update={handleLinkClick} />
            <Nav_FullScreenMenu_RightCol update={handleLinkClick} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav_FullscreenMenu
