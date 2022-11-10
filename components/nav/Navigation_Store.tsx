import Link from 'next/link'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
import useCart from '@hooks/useCart'
import Nav_FullscreenMenu from './Nav_FullscreenMenu'
import { useState } from 'react'

const Navigation_Store = ({}) => {
  const [isHamActive, setHamToggle] = useState(false)
  const { data: cart } = useCart()

  return (
    <div className='w-full'>
      <div
        className=' z-50 absolute bg-egg rounded-lg px-3 py-2 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
        id='mobile-logo'
      >
        <Link hrefLang={'en-US'} href={'/'}>
          <a hrefLang={'en-US'} className='text-4xl font-extrabold text-peach leading-none'>
            <div>pb</div>
            <div>ds</div>
          </a>
        </Link>
      </div>
      <div className='pointer-events-none fixed w-full right-0 top-0 mt-8 z-40 px-4 flex justify-end xl:justify-between'>
        <div className='pr-8  h-full flex justify-end w-full'>
          <div className=' relative right-0 top-0  z-50'>
            <Nav_HamburgerNav isActive={isHamActive} onModalUpdate={setHamToggle} />
            <Nav_FullscreenMenu isActive={isHamActive} onModalUpdate={setHamToggle} />
          </div>

          <Link hrefLang={'en-US'} href='/store/cart' passHref>
            <div className=' pointer-events-auto relative ml-4  z-50'>
              <div
                className='relative  text-center bg-pink-lighter px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
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
export default Navigation_Store
