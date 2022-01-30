import { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
import useCart from '@hooks/useCart'
export default function Navigation_Store({}) {
  const { data: cart } = useCart()
  gsap.registerPlugin(ScrollTrigger)
  //   useEffect(() => {
  //     gsap.set('#logo', { y: -50 })
  //     gsap.set('#logo-bg', { height: 100, width: 315, ease: 'sine.inOut' })
  //     gsap.set(['#nav-ham'], { y: -10, opacity: 0 })

  //     const navTL = gsap.timeline({})
  //     navTL
  //       .to('#logo', {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         delay: 1,
  //         ease: 'back.out',
  //       })
  //       .to('#nav-ham', { opacity: 1, y: 0, duration: 0.33, ease: 'back.out,' }, '<33%')
  //     document.onload = function () {
  //       navTL.play()
  //     }
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#topOfPage',
  //         start: 'top',
  //         end: 'top 50%',
  //         toggleActions: 'play none reverse none',
  //         // markers: true
  //       },
  //     })
  //     tl.addLabel('start')

  //       .to('#b', { x: -92, ease: 'sine.inOut', duration: 0.25 }, '<25%')

  //       .to('#d', { x: 3, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<')
  //       .to('#s', { x: -140, ease: 'sine.inOut', y: 10, duration: 0.25 }, '<33%')
  //       .to('#logo-bg', { height: 124, width: 90, ease: 'sine.inOut', duration: 0.25 }, '<')
  //       .from('#logo-wrapper', { y: -9, ease: 'sine.inOut', duration: 0.25 }, '<')
  //       .from('#logo', { scale: 0.8, ease: 'sine.inOut', duration: 0.25 }, '<')
  //       .addLabel('end')
  //   })

  return (
    <div className=''>
      <div
        className=' z-50 absolute bg-egg rounded-lg px-3 py-2 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
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
        <div className='pr-8  h-full flex'>
          <Nav_HamburgerNav />

          <Link href='/store/cart' passHref>
            <div className=' pointer-events-auto relative ml-4  z-50'>
              <div
                className='relative  text-center bg-pink-light px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-97 active:scale-90'
              >
                {cart?.total_items}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
