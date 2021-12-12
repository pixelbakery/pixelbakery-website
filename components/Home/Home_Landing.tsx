import React from 'react'
import Link from 'next/link'
import SocialLinks from '../parts/SocialLinks'
import Button_Filled from '../parts/Button_Filled'
import Image from 'next/image'
function Home_Landing() {
  return (
    <main>
      <section className='lander overflow-hidden w-full my-4 flex'>
        <nav className='w-1/3 max-w-lg bg-pink-light hidden h-full md:flex flex-col justify-between py-10 px-12 '>
          <div className='logo-wrapper px-20 w-full aspect-w-1 aspect-w-1 text-blue fill-current'>
            <Image
              layout='fill'
              objectFit='contain'
              quality={66}
              blurDataURL={'true'}
              className=' object-center block m-auto object-contain w-full logo-pink'
              src={'/img/pixelbakery-logo-primary.svg'}
              id='home-logo'
              alt='pixel bakery is an animation and video production studio'
            />
          </div>
          <div className='mx-auto w-full px-4'>
            <div className='mx-auto mt-12' id='homepage-main-nav'>
              <ul className=''>
                <li className='my-1'>
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
            <div className='flex flex-center w-full my-3 '>
              <Button_Filled
                text={'Start something wonderful'}
                link={'/onboarding'}
                color={'bg-pink'}
              />
            </div>
            <div className='block'>
              <SocialLinks color={'text-blue'} />
            </div>
          </div>
        </nav>
        <div className='flex-grow pb-pattern h-full' id='homepage-lander'>
          <div className=' flex flex-col justify-center w-100'>
            <div className='mx-auto  w-full  h-1/3'>
              <Image
                layout='fill'
                height={'100%'}
                width={'100%'}
                quality={66}
                blurDataURL='true'
                src={'/img/pixelbakery_boxlogo.svg'}
                alt='Pixel Bakery Design Studio'
                className='object-center m-auto '
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Home_Landing
