import { useEffect } from 'react'
import StrokeText from '@parts/StrokeText'
import Link from 'next/link'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import cn from 'classnames'
import gsap from 'gsap'
import SocialUrls_Contact from '@data/SocialUrls_Contact'
function Contact_HangOut() {
  useEffect(() => {
    gsap.set('.animate-horizontal', { x: 0 })
    const headerTL = gsap
      .timeline({ repeat: -1 })
      .to('.animate-horizontal', { x: 20, duration: 2, delay: 0.5, ease: ' sine.inOut' })
      .to('.animate-horizontal', { x: 0, duration: 2, delay: 0.5, ease: ' sine.inOut' })
      .to('.animate-horizontal', { x: 20, duration: 2, delay: 0.5, ease: ' sine.inOut' })
      .to('.animate-horizontal', { x: 0, duration: 2, delay: 0.5, ease: ' sine.inOut' })
    headerTL.play
    return () => {
      headerTL.kill()
    }
  }, [])
  return (
    <PageSection className='overflow-visible ' id={'socials'}>
      <InnerWrapper>
        <H2 color='blue'>Let's hang out</H2>

        <ul className='flex flex-wrap gap-8 lg:gap-12 mt-24'>
          {SocialUrls_Contact.map((URL, index) => {
            return (
              <li key={URL.name} className={cn('-mt-12')}>
                <Link hrefLang={'en-US'} href={URL.url} passHref legacyBehavior>

                  <StrokeText
                    text={URL.name}
                    index={index}
                    fontSize={'text-3xl lg:text-4xl'}
                    strokeWidth={'stroke-1'}
                    color={'blue-dark'}
                    fontWeight={'font-black'}
                    active={false}
                  />

                </Link>
              </li>
            );
          })}
        </ul>
      </InnerWrapper>
      <div className='overflow-visible relative'>
        <div className='w-fit -mb-14 relative block mx-auto overflow-visible animate-horizontal pointer-events-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={cn(' top-0 left-0 social-link text-blue-dark fill-yellow ')}
            stroke='currentColor'
            width={800}
          >
            <g className='text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl'>
              <text
                x='0'
                y='77%'
                strokeWidth={0}
                className={cn(
                  'font-black font-body w-full tracking-wider text-blue animate-horizontal',
                )}
                fill='currentColor'
              >
                Let's Hang Out... IRL
              </text>
              <text
                x='10px'
                y='80%'
                strokeWidth={0}
                className={cn('font-black font-body w-full tracking-wider  text-yellow')}
                fill='currentColor'
              >
                Let's Hang Out... IRL
              </text>
              <text
                x='6px'
                y='80%'
                fill='none'
                className={cn(
                  'font-black font-body w-full tracking-wider stroke-2 letting-none lg:stroke-3',
                )}
              >
                Let's Hang Out... IRL
              </text>
            </g>
          </svg>
        </div>
        <InnerWrapper color='pink-lighter -mt-8 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-12'>
            <div className='col-span-1 h-full mx-auto xl:mx-0'>
              <div className='h-full flex flex-col justify-center w-max mx-auto text-2xl lg:text-4xl text-pink font-bold lowercase leading-tight'>
                <span className='text-peach font-bold leading-none mb-2 md:mb-0 pb-0 text-lg lg:text-2xl'>
                  it's good to see you.
                </span>
                Pixel Bakery <br className='xl:hidden' /> Design Studio
                <br /> 2124 Y Street Suite 122
                <br /> Lincoln, NE 68503
              </div>
            </div>
            <div className='col-span-1  mx-auto xl:mx-0 mt-6 xl:mt-0'>
              <div className=' mx-auto xl:mx-auto w-max'>
                <ul className='text-blue font-bold text-3xl flex flex-col justify-start gap-4'>
                  <li className=' pb-2 my-0 pt-0 w-fit border-b-4 border-blue transform duration-500 hover:text-peach hover:border-peach cursor-pointer'>
                    <Link hrefLang={'en-US'} href={'/about#twitch'} passHref>
                      are we home?
                    </Link>
                  </li>
                  <li className=' pb-2  w-fit border-b-4 border-blue transform duration-500 hover:text-peach hover:border-peach cursor-pointer'>
                    <Link
                      hrefLang={'en-US'}
                      href={'https://g.page/pixelbakery?share'}
                      passHref
                      target='_blank'>
                      
                        map it
                      
                    </Link>
                  </li>
                  <li className=' pb-2  w-fit border-b-4 border-blue transform duration-500 hover:text-peach hover:border-peach cursor-pointer'>
                    <Link hrefLang={'en-US'} href={'/onboarding#calendly'} passHref>
                      schedule it
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </div>
    </PageSection>
  );
}
export default Contact_HangOut
