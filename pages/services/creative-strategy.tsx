import Services_Header from '@services/Services_Header'
// import Services_Subservices from '@services/Services_Subservices'
// import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Store_Maintenance from '@store/Store_Maintenance'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'

export default function Services_CreativeStrategy() {
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/lottie_services/lottie_services_creativeStrategy.json').then(setAnimationData)
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
        title='Creative Strategy | Services | Pixel Bakery'
        description={`From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client's goals, pain points, and ideas.`}
        openGraph={{
          url: `https://pixelbakery.com/services/creative-strategy`,
          title: 'Creative Strategy | Services | Pixel Bakery',
          description: `From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client's goals, pain points, and ideas.`,
        }}
      />
      <section className='lander-education my-4  overflow-hidden'>
        <div className=' grid gap-y-16 md:gap-3 grid-cols-1 lg:grid-cols-2 h-full'>
          <div className='relative bg-blue col-span-1 h-[50vh] lg:h-full'>
            <LottieAnimation />
          </div>
          <div className='col-span-1 flex flex-col justify-center py-6 px-10 '>
            <div className=' max-w-md mx-auto'>
              <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Services</span>
              <H1 className='mt-0 pt-0 mb-3 text-blue-dark'>Creative Strategy</H1>
              <Lead color='peach'>
                We&apos;re more than just designers – we&apos;re thinkers, strategizers, and
                consultants.
              </Lead>
              <p>
                From the initial discovery meeting to the final deliverable, our leadership team at
                Pixel Bakery is all about strategizing the best way to deliver your message. Before
                any pre-production on a project begins, PB develops a communication strategy and
                creative brief based on a client&apos;s goals, pain points, and ideas.
              </p>
              <p>
                Between a client&apos;s invaluable knowledge of their brand and our dedication to
                providing a homogeneous brand experience from start to finish, PB knows that a
                unifying theme that ties a project together is the key to a successful campaign.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
