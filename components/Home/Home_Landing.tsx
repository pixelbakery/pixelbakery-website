import React from 'react'
import Link from 'next/link'
import Home_SocialLinks from './Home_SocialLinks'
import Button_Filled from '../parts/Button_Filled'
import Image from 'next/image'
function Home_Landing() {
  return (
    <main>
      <section className='lander overflow-hidden w-full my-4 flex'>
        <nav className='w-1/3 max-w-lg bg-pink-light h-full hidden  md:flex flex-col justify-between py-10 px-12 '>
          <div className='relative px-20 self-center w-64 h-64 text-blue fill-current'>
            <Image
              layout='fill'
              objectFit='contain'
              blurDataURL={'true'}
              className=' object-center logo-pink'
              src={'/img/pixelbakery-logo-primary.svg'}
              id='home-logo'
              alt='pixel bakery is an animation and video production studio'
            />
          </div>
          <div className='self-center w-full px-4'>
            <div className='w-full mt-12' id='homepage-main-nav'>
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
          <div className='flex-grow'>
            <div className='text-blue font-bold text-2xl text-center w-full mb-0 pb-0'>
              fresh puns & nice buns
            </div>
            <div className='flex justify-center w-full my-3 '>
              <Button_Filled
                text={'Start something wonderful'}
                link={'/onboarding'}
                color={'bg-pink'}
              />
            </div>
            <div className='mx-auto w-full '>
              <Home_SocialLinks />
            </div>
          </div>
        </nav>
        <div className='flex-grow pb-pattern h-full' id='homepage-lander'>
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
