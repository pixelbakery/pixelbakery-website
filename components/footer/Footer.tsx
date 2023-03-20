import { NextPage } from 'next'
import Footer_Nav from '@footer/Footer_Nav_Link'
import Footer_Nav_SubNav from 'components/footer/Footer_Nav_SubNav'
import Footer_HappyCard from 'components/footer/Footer_HappyCard'
// import Logo_Type from '@parts/Logo_Type'
import Button_Filled from '@parts/Button_Filled'
import Footer_SocialLinks from '@nav/Nav_SocialLinks'
import Footer_Croissant from 'components/footer/Footer_Croissant'
import nav_footer_main from '@data/nav_footer_main'
import nav_footer_sub from '@data/nav_footer_sub'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import H3 from '@typography/H3'
import Obfuscate from 'react-obfuscate'
import Image from 'next/image'
import Link from 'next/link'
import services from '@data/services'

import { m } from 'framer-motion'
import { LazyMotion } from 'framer-motion'
import { domMax } from 'framer-motion'
export const Footer: NextPage = () => {
  const [testModalOpen, setTestModal] = useState(false)

  const updateModal = () => {
    setTestModal(!testModalOpen)
  }
  // GSAP FOR MODAL
  useEffect(() => {
    if (!testModalOpen) gsap.to('#croissantModal', 0.3, { autoAlpha: 0 })
    else if (testModalOpen) gsap.to('#croissantModal', 0.3, { autoAlpha: 1 })
    return () => {}
  })

  const year = new Date().getFullYear()
  return (
    <div>
      <footer
        className='relative bg-peach px-6 lg:px-12 py-12 xl:py-24 xl:max-h-screen mb-4'
        id='footer'
      >
        <section
          id='croissantModal'
          className='transform-gpu will-change-transform absolute w-full h-full top-0 left-0 bg-peach z-30'
        >
          <Footer_Croissant onModalUpdate={updateModal} />
        </section>

        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:mb-12 gap-8 h-full'>
            <div className='h-full flex flex-col justify-between'>
              {/* <Logo_Type /> */}

              <Link href={'/'} className='relative flex justify-center lg:justify-start'>
                <LazyMotion features={domMax}>
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
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/icons/doodles/PB_ColorIcon_PopTart.svg`}
                        width={133.6536}
                        height={169.8851}
                        className={'rotate-6 origin-center w-full block relative'}
                        alt={'Pixel Bakery Design Studio'}
                      />
                    </m.div>
                  </m.div>
                </LazyMotion>
              </Link>

              <nav className='hidden lg:block pt-5 mt-3'>
                <ul className='grid grid-cols-1 lg:grid-cols-1  text-left text-xl md:text-3xl xl:text-4xl font-semibold gap-x-2 xl:gap-y-2 lg:font-black mb-0 pb-0'>
                  {nav_footer_main.map((navitem) => (
                    <Footer_Nav navitem={navitem} key={navitem.text} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='hidden sm:flex flex-col justify-start h-full md:pr-6'>
                <div className='self-center w-full hidden lg:block'>
                  <div className='mx-auto border-b-4 border-cream text-bold max-w-xs  md:pr-4  md:mr-4'>
                    <H3 className='text-center md:text-left font-extrabold text-3xl text-cream'>
                      studio
                    </H3>
                  </div>
                  <div>
                    <ul className='mt-3 text-center md:text-left'>
                      <li>
                        <Link
                          className='text-cream text-xl'
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
                      <li className='mt-3 text-xl text-cream'>
                        <address>
                          <Obfuscate
                            tel={'tel:402-302-0323'}
                            linkText={'tel:000-000-0000'}
                            className={'text-cream  '}
                          >
                            402 302 0323
                          </Obfuscate>
                        </address>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='xl:pt-4 md:pr-4 hidden lg:block'>
                  <div className='hidden lg:block mx-auto lg:mt-4 border-b-4 border-cream mb-4 max-w-xs md:pr-4'>
                    <H3 className='text-center md:text-left font-extrabold text-3xl  leading-none mt-0 text-cream'>
                      more stuff
                    </H3>
                  </div>
                  <nav className=''>
                    <ul className='mt-3 mb-0 grid grid-cols-1 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
                      {nav_footer_sub.map((navitem) => (
                        <Footer_Nav_SubNav navitem={navitem} key={navitem.text} />
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className='mb-0 pb-0 mt-4 xl:pt-4 md:pr-4 hidden lg:block'>
                  <div className='hidden lg:block mx-auto lg:mt-4 border-b-4 border-cream mb-4 max-w-xs md:pr-4'>
                    <H3 className='text-center md:text-left font-extrabold text-3xl  leading-none mt-0 text-cream'>
                      Services
                    </H3>
                  </div>
                  <nav className=''>
                    <ul className='mt-3 mb-0 grid grid-cols-1 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
                      {services
                        // .filter((s) => s.service != 'Animated Explainer Videos')
                        .filter((s) => s.service != 'Educational Content')
                        .filter((s) => s.service != 'Creative Concepting & Strategy')
                        .map((navitem, i) => (
                          <li
                            className='text-left leading-none text-cream text-md cursor-pointer my-0 py-0'
                            key={i}
                          >
                            <Link
                              hrefLang={'en-US'}
                              href={navitem.url}
                              className='my-0 py-0 leading-none hover-98 hover-shadow-none'
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
            <div className=' mx-auto lg:hidden grid grid-cols-2 gap-y-0 gap-x-6'>
              <ul className='flex flex-col gap-y-3'>
                {nav_footer_main.map((navitem, index) => (
                  <div key={index} className={'font-extrabold text-xl leading-none'}>
                    <Footer_Nav navitem={navitem} key={navitem.text} />
                  </div>
                ))}
              </ul>
              <ul className=' mb-0 flex flex-col gap-y-3'>
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
                  <Footer_SocialLinks color={'cream'} textSize={'text-2xl md:text-3xl'} />
                </div>
              </div>
              <div className='hidden lg:flex justify-center w-full my-3'>
                <Button_Filled
                  center={true}
                  text={'Start A Project'}
                  link={'/onboarding'}
                  bgColor={'blue-dark'}
                  textColor={'cream'}
                  chevronDirection='right'
                />
              </div>
              <div className='hidden lg:block text-center lg:mt-3'>
                <Obfuscate
                  linkText={'mailto:no@no.com'}
                  email={'hello@pixelbakery.com'}
                  className={'text-cream  text-2xl font-extrabold mb-0 pb-0 leading-none'}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center md:justify-between pt-3'>
            <button
              onClick={updateModal}
              className='self-center max-w-xs group text-2xl ease-in-out bg-cream px-3 rounded-md pb-2 pt-4 duration-300 hover:scale-98 drop-shadow-md hover:drop-shadow-sm '
            >
              <i className='block duration-300 ease-in-out group-hover:rotate-360 leading-none'>
                🥐
              </i>
            </button>
            <span className='self-center text-center mt-4 md:mt-0 italic text-sm  text-cream'>
              © {year} Pixel Bakery Design Studio
              <br />
              Made with love and flour in Lincoln, Nebraska &amp; NW Arkansas
            </span>
            <div className='hidden md:block' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
