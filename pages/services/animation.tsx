import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Services_Modulation from '@services/Services_Modulation'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'

export default function Services_Animation() {
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/lottie_services/lottie_services_animation.json').then(setAnimationData)
    }, [])

    if (!animationData)
      return (
        <div className='w-full h-full flex flex-col justify-center'>
          <Lead color='cream' className='self-center text-center'>
            Loading
          </Lead>
        </div>
      )
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
        title='Animation | Services'
        description={
          'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling'
        }
        openGraph={{
          url: `https://pixelbakery.com/services/animation`,
          title: 'Animation | Services',
          description:
            'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling',
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
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
              <H1 className='mt-0 pt-0 mb-3 text-blue-dark'>Animation</H1>
              <Lead color='peach'>
                We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling
              </Lead>
              <p className='mt-6 leading-loose'>
                Every animation project is full-service and includes project management, creative
                concepting, sound design, storyboarding, and voiceover as needed. Whether you’re
                looking for a lower thirds animation template or a sizzle reel of your company’s
                coolest products, we’ve got you covered. Check out what else we have to offer below.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Services_Subservices />
      <Services_Modulation />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
