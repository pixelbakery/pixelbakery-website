import React from 'react'
import Link from 'next/link'
import Home_SocialLinks from './Home_SocialLinks'
import Button_Filled from '../parts/Button_Filled'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import dynamic from 'next/dynamic'
const Lottie_Blue_Dark = dynamic(() => import('../PageHeader/Lottie_Blue_Dark'), { ssr: true })

import LandingPattern from '../../data/Patterns_Blue_Dark.json'
import Logo_Primary from '../Images/logo_primary'

type Props = {
  pattern1: object
}
function Home_Landing() {
  return (
    <main>
      <section className='lander overflow-hidden w-full my-4 flex'>
        <nav className='w-2/5 xl:w-1/3 max-w-lg bg-pink-light h-full hidden lg:flex flex-col py-10 px-16 '>
          <div className=' w-full pr-40   text-pink fill-current'>
            <Logo_Primary className='' />
          </div>
          <div className='flex-grow w-fit px-4'>
            <div className='h-full w-full flex flex-col justify-center ' id='homepage-main-nav'>
              <ul className='mx-auto '>
                <li className='my-1 '>
                  <Link href={'/work'}>
                    <a className='text-pink font-bold lowercase text-4xl'>work</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/about'}>
                    <a className='text-pink font-bold lowercase text-4xl'>bakery</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/education'}>
                    <a className='text-pink font-bold lowercase text-4xl'>education</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/contact'}>
                    <a className='text-pink font-bold lowercase text-4xl'>contact us</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/recipes'}>
                    <a className='text-pink font-bold lowercase text-4xl'>mom&apos;s recipes</a>
                  </Link>
                </li>
                <li className='my-2'>
                  <Link href={'/store'}>
                    <a className='text-pink font-bold lowercase text-4xl'>company store</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='text-blue font-bold text-2xl text-center w-full mb-0 pb-0'>
              fresh puns & nice buns
            </div>
            <div className='flex justify-center w-full my-2'>
              <Button_Filled
                center={true}
                text={'Start something wonderful'}
                link={'/onboarding'}
                bgColor={'pink'}
                textColor={'pink-light'}
                chevronDirection='right'
              />
            </div>
            <div className='mx-auto w-full '>
              <Home_SocialLinks />
            </div>
          </div>
        </nav>
        <div className='relative flex-grow bg-blue h-full overflow-hidden'>
          <div
            className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie'
            id='lottie'
          >
            <Lottie_Blue_Dark />
          </div>
          <div className=' flex flex-col justify-center h-full w-full '>
            <div className='relative  self-center w-full max-w-3xl h-full'>
              <div className=''>
                <Image
                  layout='fill'
                  objectFit='contain'
                  blurDataURL='true'
                  src={'/img/pixelbakery_boxlogo.svg'}
                  alt='Pixel Bakery Design Studio'
                  className='object-enter'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Home_Landing
