import dynamic from 'next/dynamic'
import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import CustomImage from '@parts/CustomImage'
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'

import Button_Filled from '@parts/Button_Filled'
import H3 from '@typography/H3'

import { Nav_SocialLinks } from '@nav/index'
import { Footer_HappyCard, Footer_Nav_SubNav, Footer_Nav_Link } from '@footer/index'
const Footer_Croissant = dynamic(() => import('@footer/Footer_Croissant'))
import { services, nav_footer_main, nav_footer_sub } from '@data/index'

export const Footer: NextPage = () => {
  const [testModalOpen, setTestModal] = useState(false)
  const year = new Date().getFullYear()

  const updateModal = () => {
    setTestModal(!testModalOpen)
  }

  return (
    <div>
      <footer className='relative px-6 py-12 mb-4 bg-peach lg:px-12 xl:py-24' id='footer'>
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode={'wait'}>
            {testModalOpen && (
              <m.div
                id='croissantModal'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='absolute top-0 left-0 z-30 w-full h-full transform-gpu will-change-transform bg-peach'
              >
                <Footer_Croissant onModalUpdate={updateModal} />
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>

        <div className='max-w-6xl mx-auto'>
          <div className='grid h-full grid-cols-1 gap-8 lg:grid-cols-3 lg:mb-12'>
            <div className='flex flex-col justify-between h-full'>
              <Link href={'/'} className='relative flex justify-center lg:justify-start'>
                <LazyMotion features={domAnimation}>
                  <m.div
                    className='self-center w-1/3 lg:w-3/5'
                    animate={{
                      translateY: [24, -12, 24],
                    }}
                    transition={{
                      duration: 8,
                      ease: 'easeInOut',
                      times: [1, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 0,
                    }}
                  >
                    <m.div
                      animate={{
                        rotate: [6, -12, 6],
                      }}
                      transition={{
                        duration: 32,
                        ease: 'easeInOut',
                        times: [4, 4, 4, 4],
                        repeat: Infinity,
                        repeatDelay: 0,
                      }}
                    >
                      <CustomImage
                        src={`/img/icons/doodles/PB_ColorIcon_PopTart.svg`}
                        width={218}
                        height={278}
                        className={'rotate-6 origin-center w-full block relative'}
                        alt={'Pixel Bakery Design Studio'}
                      />
                    </m.div>
                  </m.div>
                  <span className='sr-only'>Home</span>
                </LazyMotion>
              </Link>
              <nav className='hidden pt-5 mt-3 lg:block'>
                <ul className='grid grid-cols-1 pb-0 mb-0 text-xl font-semibold text-left lg:grid-cols-1 md:text-3xl xl:text-4xl gap-x-2 xl:gap-y-2 lg:font-black'>
                  {nav_footer_main.map((navitem) => (
                    <Footer_Nav_Link navitem={navitem} key={navitem.text} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex-col justify-start hidden h-full sm:flex md:pr-6'>
                <div className='self-center hidden w-full lg:block'>
                  <div className='max-w-xs mx-auto border-b-4 border-cream text-bold md:pr-4 md:mr-4'>
                    <H3 className='text-3xl font-extrabold text-center md:text-left' color='cream'>
                      studio
                    </H3>
                  </div>
                  <div>
                    <ul className='mt-3 text-center md:text-left'>
                      <li className='relative duration-100 ease-in-out origin-left hover:scale-98 hover:opacity-95'>
                        <Link
                          className='text-xl text-cream'
                          target='_blank'
                          href='https://g.page/pixelbakery?share'
                          rel='noreferrer'
                        >
                          <>
                            2124 y st ste 122
                            <br />
                            lincoln, ne 68503
                          </>
                        </Link>
                      </li>
                      <li className='mt-3 text-xl text-cream '>
                        <address className='relative duration-100 ease-in-out origin-left hover:scale-98 hover:opacity-95'>
                          <Link href={'tel:402-302-0323'} className={'text-cream  '}>
                            402 302 0323
                          </Link>
                        </address>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hidden xl:pt-4 md:pr-4 lg:block'>
                  <div className='hidden max-w-xs mx-auto mb-4 border-b-4 lg:block lg:mt-4 border-cream md:pr-4'>
                    <H3
                      className='mt-0 text-3xl font-extrabold leading-none text-center md:text-left'
                      color='cream'
                    >
                      more stuff
                    </H3>
                  </div>
                  <nav className=''>
                    <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
                      {nav_footer_sub.map((navitem) => (
                        <Footer_Nav_SubNav navitem={navitem} key={navitem.text} />
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className='hidden pb-0 mt-4 mb-0 xl:pt-4 md:pr-4 lg:block'>
                  <div className='hidden max-w-xs mx-auto mb-4 border-b-4 lg:block lg:mt-4 border-cream md:pr-4'>
                    <H3
                      className='mt-0 text-3xl font-extrabold leading-none text-center md:text-left'
                      color='cream'
                    >
                      Services
                    </H3>
                  </div>
                  <nav className=''>
                    <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
                      {services
                        // .filter((s) => s.service != 'Animated Explainer Videos')
                        .filter((s) => s.service != 'Educational Content')
                        .filter((s) => s.service != 'Creative Concepting & Strategy')
                        .map((navitem, i) => (
                          <li
                            className='relative py-0 my-0 leading-none text-left duration-100 ease-in-out origin-left cursor-pointer text-cream text-md hover:scale-98 hover:opacity-95'
                            key={i}
                          >
                            <Link
                              hrefLang={'en-US'}
                              href={navitem.url}
                              className='relative py-0 my-0 leading-none hover-98 hover-shadow-none'
                            >
                              {navitem.service}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Mobile Nav */}
            <div className='grid grid-cols-2 mx-auto lg:hidden gap-y-0 gap-x-6'>
              <ul className='flex flex-col gap-y-3'>
                {nav_footer_main.map((navitem, index) => (
                  <div key={index} className={'font-extrabold text-xl leading-none'}>
                    <Footer_Nav_Link navitem={navitem} key={navitem.text} />
                  </div>
                ))}
              </ul>
              <ul className='flex flex-col mb-0 gap-y-3'>
                {nav_footer_sub.map((navitem, index) => (
                  <div key={index}>
                    <Footer_Nav_SubNav navitem={navitem} key={navitem.text} />
                  </div>
                ))}
              </ul>
            </div>
            {/* End Mobile Nav */}
            <div className='flex flex-col justify-between h-full'>
              <div className='mx-auto text-center xl:mb-4'>
                <Footer_HappyCard />
              </div>
              <div className='w-full lg:py-4 xl:my-3'>
                <div className='w-full' id='footer-social'>
                  <Nav_SocialLinks color={'cream'} textSize='2xl' />
                </div>
              </div>
              <div className='justify-center hidden w-full my-3 lg:flex'>
                <Button_Filled
                  center={true}
                  text={'Start A Project'}
                  link={'/onboarding'}
                  bgColor={'blue-dark'}
                  textColor={'cream'}
                  chevronDirection='right'
                />
              </div>
              <div className='hidden text-center lg:block lg:mt-3'>
                <Link
                  href={'mailto:hello@pixelbakery.com'}
                  className={'text-cream  text-2xl font-extrabold mb-0 pb-0 leading-none'}
                >
                  hello@pixelbakery.com
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center pt-3 md:flex-row md:justify-between'>
            <button
              onClick={updateModal}
              className='self-center max-w-xs px-3 pt-4 pb-2 text-2xl duration-300 ease-in-out rounded-md group bg-cream hover:scale-98 drop-shadow-md hover:drop-shadow-sm '
            >
              <i className='block leading-none duration-300 ease-in-out group-hover:rotate-360'>
                🥐
              </i>
            </button>
            <span className='self-center mt-4 text-sm italic text-center md:mt-0 text-cream'>
              © {year} Pixel Bakery Design Studio
              <br />
              Made with love and flour in Lincoln, Nebraska
            </span>
            <div className='hidden md:block' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
