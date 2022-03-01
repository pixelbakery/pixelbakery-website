import { NextPage } from 'next'
import Footer_Nav from 'components/footer/Footer_Nav'
import Footer_Nav_SubNav from 'components/footer/Footer_Nav_SubNav'
import Footer_HappyCard from 'components/footer/Footer_HappyCard'
import Logo_Type from '@parts/Logo_Type'
import Button_Filled from '@parts/Button_Filled'
import Footer_SocialLinks from '@nav/Nav_SocialLinks'
import Footer_Mailchimp2 from 'components/footer/Footer_Croissant'
import footerMenu from '@data/footerMenu'
import footerMenuMore from '@data/footerMenuMore'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { InstagramGallery } from '@parts/Instagram'

export const Footer: NextPage = () => {
  const [testModalOpen, setTestModal] = useState(false)
  // const [selectedStar, setSelectedStar] = useState()

  const updateModal = () => {
    setTestModal(!testModalOpen)
    console.log(testModalOpen)
  }

  // GSAP FOR MODAL
  useEffect(() => {
    if (!testModalOpen) gsap.to('#croissantModal', 0.3, { autoAlpha: 0 })
    else if (testModalOpen) gsap.to('#croissantModal', 0.3, { autoAlpha: 1 })
    return () => {}
  })
  // const updateStars = (star) => {
  //   setSelectedStar(star)
  // }
  const year = new Date().getFullYear()
  return (
    <div>
      <footer
        className='relative bg-peach px-6 lg:px-12 py-6 lg:py-24 lg:max-h-screen mb-4'
        id='footer'
      >
        <section
          id='croissantModal'
          className='transform-gpu will-change-transform absolute w-full h-full top-0 left-0 bg-peach z-30'
        >
          <Footer_Mailchimp2 onModalUpdate={updateModal} />
        </section>

        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:mb-12 gap-8 h-full'>
            <div className='h-full flex flex-col justify-between'>
              <div className='flex justify-center lg:justify-start'>
                <Logo_Type />
              </div>

              <nav className=' pt-5 mt-3'>
                <ul className='grid grid-cols-2 lg:grid-cols-1  text-left text-xl lg:text-4xl font-semibold gap-x-2 lg:font-black'>
                  {footerMenu.map((navitem) => (
                    <Footer_Nav navitem={navitem} key={navitem.text} />
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex flex-col justify-between h-full md:pr-6'>
              <div className='self-center w-full hidden lg:block'>
                <div className='mx-auto border-b-4 border-cream text-bold max-w-xs  md:pr-4  md:mr-4'>
                  <h3 className='text-center md:text-left font-extrabold text-3xl text-cream'>
                    studio
                  </h3>
                </div>
                <div>
                  <ul className='mt-3 text-center md:text-left'>
                    <li>
                      <a
                        className='text-cream text-xl'
                        target='_blank'
                        href='https://g.page/pixelbakery?share'
                      >
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
              <div className='lg:pt-4 md:pr-4'>
                <div className='hidden lg:block mx-auto lg:mt-4 border-b-4 border-cream mb-4 max-w-xs md:pr-4'>
                  <h3 className='text-center md:text-left font-extrabold text-3xl  leading-none mt-0 text-cream'>
                    more stuff
                  </h3>
                </div>
                <nav className='flex justify-center'>
                  <ul className='mt-3 grid grid-cols-2 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
                    {footerMenuMore.map((navitem) => (
                      <Footer_Nav_SubNav navitem={navitem} key={navitem.text} />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className='flex flex-col justify-between h-full'>
              <div className='text-center lg:mb-4'>
                <Footer_HappyCard />
              </div>
              <div className='w-full lg:py-4 lg:my-3'>
                <div className='w-full' id='footer-social'>
                  <Footer_SocialLinks color={'cream'} textSize={'text-2xl md:text-3xl'} />
                </div>
                {/* <div className='w-full flex justify-center'>
                  <span className='text-cream italic font-bold text-center text-lg'>
                    fresh puns and nice buns
                  </span>
                </div> */}
              </div>
              <div className='hidden lg:flex justify-center w-full my-3'>
                <Button_Filled
                  center={true}
                  text={'Start something wonderful'}
                  link={'/onboarding'}
                  bgColor={'blue-dark'}
                  textColor={'cream'}
                  chevronDirection='right'
                />
              </div>
              <div className='hidden lg:block text-center lg:mt-3'>
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
          <div className='flex flex-col md:flex-row justify-center md:justify-between'>
            <button
              onClick={updateModal}
              className='self-center max-w-xs group text-2xl ease-in-out bg-cream px-3 rounded-md py-2 duration-300 hover:scale-98 drop-shadow-md hover:drop-shadow-sm '
            >
              <i className='block duration-300 ease-in-out group-hover:rotate-360'> 🥐</i>
            </button>
            <span className='self-center text-center mt-4 md:mt-0 italic text-sm  text-cream'>
              © {year} Pixel Bakery Design Studio
              <br />
              Made with lust and flour in Lincoln, Nebraska & NW Arkansas
            </span>
            <div className='hidden md:block' />
          </div>
        </div>
      </footer>
      <div className='my-4'>
        <InstagramGallery count={14} />
      </div>
    </div>
  )
}

export default Footer
