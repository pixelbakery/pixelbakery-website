/* eslint-disable react/prop-types */
/* eslint-disable react/no-string-refs */
// eslint-disable-next-line react/no-string-refs

import Nav_SocialLinks from './Nav_SocialLinks'
import Link from 'next/link'
import Logo_Primary from '@images/logo_primary'
import Button_Filled from '@parts/Button_Filled'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu(props) {
  function handleHamToggle(event) {
    props.onClick(event.target.value)
  }
  return (
    <nav
      id='fullscreenNav'
      className='pointer-events-auto  p-4 fixed w-screen h-screen z-40  bg-cream top-0 right-0'
    >
      <div className='relative w-full h-full bg-blue p-6'>
        <div className='relative z-20 mx-auto max-w-6xl flex justify-center h-full w-full'>
          <div className='w-full md:w-2/3 flex flex-col justify-end '>
            {/* Main menu */}

            <div className='flex-grow mx-auto flex flex-col justify-end mb-12 gap-3 flex-wrap font-extrabold text-blue-dark text-4xl leading-none text-center lowercase'>
              <Link href='/'>
                <div className='self-center relative text-blue-dark w-40'>
                  <Logo_Primary className='object-contain w-full h-full' />
                </div>
              </Link>
              <div>
                <Link href='/work' passHref>
                  <a className='' onClick={handleHamToggle}>
                    Work
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/about' passHref>
                  <a className='' onClick={handleHamToggle}>
                    About
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/contact' passHref>
                  <a className='' onClick={handleHamToggle}>
                    Contact
                  </a>
                </Link>
              </div>
              <div className=''>
                <Link href='/education' passHref>
                  <a className='' onClick={handleHamToggle}>
                    Education
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/recipes' passHref>
                  <a className='' onClick={handleHamToggle}>
                    Mom&apos;s Recipes
                  </a>
                </Link>
              </div>

              <div>
                <Link href='/store' passHref>
                  <a className='' onClick={handleHamToggle}>
                    Company Store
                  </a>
                </Link>
              </div>
            </div>
            <div className='mx-auto'>
              <div className='flex flex-center w-full mt-3'>
                <Button_Filled
                  center={true}
                  text={'Start something wonderful'}
                  link={'/onboarding'}
                  bgColor={'pink'}
                  textColor={'pink-light'}
                  chevronDirection='right'
                />
              </div>
              <div className='flex w-full'>
                <Nav_SocialLinks />
              </div>
            </div>
          </div>
          {/* 
          <div className='w-full md:w-1/3 flex flex-col justify-between h-full'>
            <div className=''>
              <Link href={'/'} passHref>
                <a target='_blank' ref='noopener' className='block'>
                  2124 y st ste 208
                  <br />
                  lincoln, ne 68503
                </a>
              </Link>
              <Link href={'tel:4023020323'} passHref>
                <a target='_blank' ref='noopener' className='block'>
                  402 302 0323
                </a>
              </Link>
            </div>
            <div className=''>
              <button className=' flex'>
                <i className='inline-block w-12'>
                  <svg
                    id='Icon_feather-play-circle'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='-20 -20 145 145'
                    className='pointer-events-auto object-contain w-full h-full stroke-blue-dark stroke-10 '
                  >
                    <path
                      d='M102,52.5A49.5,49.5,0,1,1,52.5,3,49.5,49.5,0,0,1,102,52.5Z'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='fill-none '
                    />
                    <path
                      d='M15,12,44.7,31.8,15,51.6Z'
                      transform='translate(27.6 20.7)'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='fill-none '
                    />
                  </svg>
                </i>
                <span className='ml-2 self-center text-3xl text-blue-dark font-bold'>
                  2021 Demo Reel
                </span>
              </button>
            </div>
            <div className=''>
              <Link href={'mailto:hello@pixelbakery.com'} passHref>
                <a target='_blank' ref='noOpener' className='block'>
                  hello@pixelbakery.com
                </a>
              </Link>
            </div>
            <div className='flex flex-center w-full my-3 '>
              <Button_Filled
                text={'Start something wonderful'}
                link={'/onboarding'}
                bgColor={'pink'}
                textColor={'pink-light'}
                chevronDirection='right'
              />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav_FullscreenMenu
