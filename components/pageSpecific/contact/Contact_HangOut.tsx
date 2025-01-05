import Link from 'next/link'
import { InnerWrapper, PageSection, StrokeText } from '@parts'
import { H2 } from '@typography'
import cn from 'classnames'

import SocialUrls_Contact from '@data/SocialUrls_Contact'

function Contact_HangOut() {
  return (
    <PageSection className='overflow-visible ' id={'socials'}>
      <InnerWrapper>
        <H2 color='blue'>Let's hang out</H2>

        <ul className='flex flex-wrap gap-8 mt-24 lg:gap-12'>
          {SocialUrls_Contact.map((URL, index) => {
            return (
              <li key={URL.name} className={cn('-mt-12')}>
                <Link hrefLang={'en-US'} href={URL.url}>
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
            )
          })}
        </ul>
      </InnerWrapper>
      <div className='relative overflow-visible'>
        <div className='relative block mx-auto overflow-visible pointer-events-none w-fit -mb-14 animate-horizontal'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={cn(' top-0 left-0 social-link text-blue-dark fill-yellow ')}
            stroke='currentColor'
            width={825}
          >
            <g className='text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl'>
              <text
                x='0'
                y='77%'
                strokeWidth={0}
                className={cn(
                  'font-black font-poppins w-full tracking-wider text-blue animate-horizontal',
                )}
                fill='currentColor'
              >
                Let's Hang Out... IRL
              </text>
              <text
                x='10px'
                y='80%'
                strokeWidth={0}
                className={cn('font-black font-poppins w-full tracking-wider  text-yellow')}
                fill='currentColor'
              >
                Let's Hang Out... IRL
              </text>
              <text
                x='6px'
                y='80%'
                fill='none'
                className={cn(
                  'font-black font-poppins w-full tracking-wider stroke-2 letting-none lg:stroke-3',
                )}
              >
                Let's Hang Out... IRL
              </text>
            </g>
          </svg>
        </div>
        <InnerWrapper className='py-8 -mt-8 pink-lighter'>
          <div className='grid grid-cols-1 py-12 lg:grid-cols-2'>
            <div className='h-full col-span-1 mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center h-full mx-auto text-2xl font-bold leading-tight lowercase w-max lg:text-4xl text-pink'>
                <span className='pb-0 mb-2 text-lg font-bold leading-none text-peach md:mb-0 lg:text-2xl'>
                  it's good to see you.
                </span>
                Pixel Bakery <br className='xl:hidden' /> Design Studio
                <br /> 2124 Y Street Suite 122
                <br /> Lincoln, NE 68503
              </div>
            </div>
            <div className='col-span-1 mx-auto mt-6 xl:mx-0 xl:mt-0'>
              <div className='mx-auto xl:mx-auto w-max'>
                <ul className='flex flex-col justify-start gap-4 text-3xl font-bold text-blue'>
                  <li className='pt-0 pb-2 my-0 duration-500 transform border-b-4 cursor-pointer w-fit border-blue hover:text-peach hover:border-peach'>
                    <Link hrefLang={'en-US'} href={'/about#twitch'}>
                      are we home?
                    </Link>
                  </li>
                  <li className='pb-2 duration-500 transform border-b-4 cursor-pointer w-fit border-blue hover:text-peach hover:border-peach'>
                    <Link
                      hrefLang={'en-US'}
                      href={'https://g.page/pixelbakery?share'}
                      target='_blank'
                    >
                      map it
                    </Link>
                  </li>
                  <li className='pb-2 duration-500 transform border-b-4 cursor-pointer w-fit border-blue hover:text-peach hover:border-peach'>
                    <Link hrefLang={'en-US'} href={'/book'}>
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
  )
}
export default Contact_HangOut
