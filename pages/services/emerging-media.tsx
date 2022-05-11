import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Store_Maintenance from '@store/Store_Maintenance'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'

export default function Services() {
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/lottie_services/lottie_services_emergingMedia.json').then(setAnimationData)
    }, [])

    if (!animationData) return <div>Loading...</div>
    return (
      <Lottie
        animationData={animationData}
        loop
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    )
  }
  return (
    <Main>
      <NextSeo
        title='Emerging Media | Services | Pixel Bakery'
        description={`With the development and expansion of social media, mobile marketing, email marketing,
          instant messaging, and various other digital platforms, it only makes sense that current
          trends in marketing are ever-evolving. Why not evolve with them?`}
        openGraph={{
          url: `https://pixelbakery.com/services/emerging-media`,
          title: 'Emerging Media | Services | Pixel Bakery',
          description: `With the development and expansion of social media, mobile marketing, email marketing,
          instant messaging, and various other digital platforms, it only makes sense that current
          trends in marketing are ever-evolving. Why not evolve with them?`,
        }}
      />

      <section className='lander-education my-4  overflow-hidden'>
        <div className=' grid gap-y-16 md:gap-3 grid-cols-1 lg:grid-cols-2 h-full'>
          <div className='relative bg-blue-dark col-span-1 h-[50vh] lg:h-full'>
            {/* <div className='relative w-full overflow-hidden h-full'> */}
            {/* */}
            {/* </div> */}
            <LottieAnimation />
          </div>
          <div className='col-span-1 flex flex-col justify-center py-6 px-10 '>
            <div className=' max-w-md mx-auto'>
              <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Services</span>
              <H1 className='mt-0 pt-0 mb-3 text-blue-dark'>Emerging Media</H1>
              <p>
                With the development and expansion of social media, mobile marketing, email
                marketing, instant messaging, and various other digital platforms, it only makes
                sense that current trends in marketing are ever-evolving. Why not evolve with them?
              </p>
              <p>
                Here at PB, we like to stay up-to-date with the newest techniques and strategies
                that share information in innovative, interactive ways. Emerging media allows you
                and your brand to speak closer to your customers than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
