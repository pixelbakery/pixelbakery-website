// components/pageSpecific/home/Home_Landing.tsx
import Link from 'next/link'
import Button_Filled from '@parts/Button_Filled'
import dynamic from 'next/dynamic'
import nav_main from '@data/nav_main'
import Logo_Primary from '@images/logo_primary'
import Nav_SocialLinks from '@nav/Nav_SocialLinks'
import PixelBakery_EasyBakeOven from '@data/lottie_misc/PixelBakery_EasyBakeOven.json' assert { type: 'json' }
import { NorthEastArrowIcon } from '@icons'

const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})
const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'), {
  ssr: false,
})

function Home_Landing() {
  return (
    <section className='flex w-full my-4 overflow-hidden lander'>
      <nav className='flex-col justify-center hidden w-2/5 h-full max-w-lg px-16 py-10 xl:w-1/3 bg-egg lg:flex '>
        <div className='w-24 -mb-6 xl:w-32 2xl:w-52'>
          <div className='w-full fill-current text-pink'>
            <Logo_Primary />
          </div>
        </div>
        <div className='w-fit '>
          <div className='flex flex-col justify-center w-full h-full ' id='homepage-main-nav'>
            <ul className='relative grid grid-cols-1 text-3xl font-bold lowercase gap-y-1 xl:gap-y-2 2xl:text-5xl 2xl:font-extrabold text-pink'>
              {nav_main.map((navItem, index) => {
                return (
                  <li
                    key={index}
                    className='relative block py-0 my-0 leading-none duration-150 ease-in-out cursor-pointer hover:scale-98 hover:animate-pulse'
                  >
                    <Link hrefLang={'en-US'} href={navItem.url}>
                      {navItem.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>
          <div className='flex justify-center w-full xl:my-2'>
            <Button_Filled
              center={true}
              text={'Start A Project'}
              link={'/onboarding'}
              className={'w-full hover:animate-pulse'}
              bgColor={'peach'}
              textColor={'pink-lighter'}
              chevronDirection='right'
            />
          </div>
          <div className='w-full mx-auto '>
            <Nav_SocialLinks color={'peach'} textSize={'2xl'} />
          </div>
          <div className='relative flex justify-center w-full pt-1 mx-auto mt-2'>
            <Link
              href={'https://clients.pixelbakery.com'}
              className='relative inline-block text-lg font-semibold text-center no-underline duration-100 ease-in-out origin-center text-peach hover:scale-98 hover:opacity-95 center'
            >
              <span>
                Client Portal <NorthEastArrowIcon className='inline ml-1' />
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className='relative flex-grow h-full overflow-hidden bg-blue player-wrapper'>
        <div
          className='absolute top-0 left-0 z-0 w-full h-full overflow-hidden lottie-blue-dark'
          id='lottie'
        >
          <LottiePatternPlayer />
        </div>
        <div className='flex justify-center w-full h-full '>
          <div className='self-center block w-2/3 max-w-3xl lg:w-1/2 '>
            <LottiePlayer anim={PixelBakery_EasyBakeOven} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home_Landing
