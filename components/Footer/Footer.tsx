import React from 'react'

import { NextPage } from 'next'
import Footer_Nav from './Footer_Nav'
import Footer_Nav_SubNav from './Footer_Nav_SubNav'
import Footer_HappyCard from './Footer_HappyCard'
import Logo_Type from '../parts/Logo_Type'
import Button_Filled from '../parts/Button_Filled'
import Footer_SocialLinks from './Footer_SocialLinks'

import footerMenu from '../../data/footerMenu'
import footerMenuMore from '../../data/footerMenuMore'

export const Footer: NextPage = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-peach px-12 py-24 lg:max-h-screen mb-4' id='footer'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-3 mb-12 gap-8 h-full'>
          <div className='h-full flex flex-col justify-between'>
            <div className='flex justify-center lg:justify-start'>
              <Logo_Type />
            </div>

            <nav className=' pt-5 mt-3'>
              <ul className='grid grid-cols-1 text-center lg:text-left text-4xl font-black'>
                {footerMenu.map((navitem) => (
                  <Footer_Nav navitem={navitem} key={navitem.text} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col justify-between h-full md:pr-6'>
            <div className='self-center w-full'>
              <div className='mx-auto border-b-4 border-cream text-bold max-w-xs  md:pr-4  md:mr-4'>
                <h3 className='text-center md:text-left font-extrabold text-3xl text-cream'>
                  studio
                </h3>
              </div>
              <div>
                <ul className='mt-3 text-center md:text-left'>
                  <li>
                    {' '}
                    <a className='text-cream text-xl' href='#'>
                      2124 y st ste 208
                      <br />
                      lincoln, ne 68503
                    </a>
                  </li>
                  <li className='mt-3 text-xl text-cream'>
                    <a href='tel:4024138366' target='_blank' rel='noreferrer'>
                      402 413 8366
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='pt-4 md:pr-4'>
              <div className='mx-auto mt-4 border-b-4 border-cream mb-4 max-w-xs md:pr-4'>
                <h3 className='text-center md:text-left font-extrabold text-3xl  text-cream'>
                  more stuff
                </h3>
              </div>
              <nav>
                <ul className='mt-3'>
                  {footerMenuMore.map((navitem) => (
                    <Footer_Nav_SubNav navitem={navitem} key={navitem.text} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className='flex flex-col justify-between h-full'>
            <div className='text-center mb-4'>
              <Footer_HappyCard />
            </div>
            <div className='w-full py-4 my-3'>
              <div className='w-full' id='footer-social'>
                <Footer_SocialLinks />
              </div>
              <div className='w-full flex justify-center'>
                <span className='text-cream italic font-bold text-center text-lg'>
                  fresh puns and nice buns
                </span>
              </div>
            </div>
            <div className='flex justify-center w-full my-3'>
              <Button_Filled
                center={true}
                text={'Start something wonderful'}
                link={'/onboarding'}
                bgColor={'pink'}
                textColor={'pink-light'}
                chevronDirection='right'
              />
            </div>
            <div className='text-center mt-3'>
              <a
                className='text-cream  text-2xl font-extrabold'
                href='mailto:hello@pixelbakery.com'
                target='_blank'
                rel='noreferrer'
              >
                hello@pixelbakery.com
              </a>
            </div>
          </div>
        </div>
        <div className='text-center pt-4'>
          <span className='italic text-sm  text-cream'>
            © {year} Pixel Bakery Design Studio
            <br />
            Made with lust and flour in Lincoln, Nebraska & NW Arkansas
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
