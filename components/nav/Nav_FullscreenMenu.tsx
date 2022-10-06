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
      <div className=' w-full h-full bg-blue px-6 py-12 flex flex-col justify-center'>
        <div className='relative z-20 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 justify-center'>
          {/* Main menu */}
          <div className='col-span-1 h-full flex flex-center lg:flex-start'>
            <Link hrefLang={'en-US'} href='/'>
              <div
                className='mx-auto self-center lg:self-start cursor-pointer duration-300 ease-in-out hover:scale-99 text-blue-dark w-28 md:w-32 xl:w-1/2'
                onClick={handleLinkClick}
              >
                <Logo_Primary className='object-contain w-full h-full' />
              </div>
            </Link>
          </div>
          <div className=' self-center mx-auto flex flex-col justify-center lg:justify-start mb-3 2xl:mb-6 xl:mb-12 gap-2 2xl:gap-3 flex-wrap font-extrabold text-blue-dark text-2xl md:text-5xl xl:text-6xl 2xl:text-6xl leading-none text-center lg:text-left lowercase'>
            <div className='grid grid-cols-1 gap-y-3 md:gap-y-2 lg:gap-y-3' ref={el}>
              {nav_main.map((nav_item, index) => {
                return (
                  <div key={index} className='duration-300 ease-in-out hover:scale-99'>
                    <Link hrefLang={'en-US'} href={nav_item.url} passHref>
                      <a hrefLang={'en-US'} className='' onClick={handleLinkClick}>
                        {nav_item.text}
                      </a>
                    </Link>
                  </div>
                )
              })}
            </div>

            <div
              className='flex justify-center w-full mt-3 md:mt-0 lg:mt-8 2xl:mt-3'
              onClick={handleLinkClick}
            >
              <Button_Filled
                center={true}
                text={'Start something wonderful'}
                link={'/onboarding'}
                bgColor={'peach'}
                textColor={'pink-light'}
                chevronDirection='right'
              />
            </div>
            <div className='mx-auto h-full'>
              <Nav_SocialLinks color={'blue-dark'} textSize={'text-2xl md:text-3xl'} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav_FullscreenMenu
