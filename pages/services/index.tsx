import dynamic from 'next/dynamic'
import Main from '@parts/Main'
import ServicesOverview_Intro from '@services/ServicesOverview_Intro'
import ServicesOverview_Animation from '@services/ServicesOverview_Animation'
import ServicesOverview_VideoProduction from '@services/ServicesOverview_VideoProduction'
import ServicesOverview_CreativeStrategy from '@services/ServicesOverview_CreativeStrategy'
import ServicesOverview_MotionMixer from '@services/ServicesOverview_MotionMixer'
import ServicesOverview_EmergingMedia from '@services/ServicesOverview_EmergingMedia'
import ServicesOverview_SocialMedia from '@services/ServicesOverview_SocialMedia'

import ServicesOverview_More from '@services/ServicesOverview_More'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'

const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <section className='absolute z-50 top-0 left-0 w-screen h-screen bg-cream flex flex-col justify-center'>
      <H1 color='blue-dark self-center text-center'>Our Services</H1>
      <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
    </section>
  ),
  ssr: false,
})

const ServicesOverview_ProductPhotography = dynamic(
  () => import('@services/ServicesOverview_ProductPhotography'),
  {
    loading: () => (
      <section className='absolute z-50 top-0 left-0 w-screen h-screen bg-cream flex flex-col justify-center'>
        <H1 color='blue-dark self-center text-center'>Product Photography</H1>
        <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
      </section>
    ),
    ssr: false,
  },
)

const ServicesOverview_AnimatedExplainers = dynamic(
  () => import('@services/ServicesOverview_AnimatedExplainers'),
  {
    loading: () => (
      <section className='absolute z-50 top-0 left-0 w-screen h-screen bg-cream flex flex-col justify-center'>
        <H1 color='blue-dark self-center text-center'>Animated Explainer Videos</H1>
        <p className='self-center text-center text-2xl font-bold text-blue'>Loading...</p>
      </section>
    ),
    ssr: false,
  },
)

function Services_Page() {
  return (
    <Main>
      <NextSeo
        title='Services'
        description={`We create beautiful digital moments using animation, motion design, video production, social media development, and ui + ux`}
        canonical={`https://pixelbakery.com/services`}
        openGraph={{
          url: `https://pixelbakery.com/services`,
          title: 'Services',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
            },
          ],
          description:
            'We create beautiful digital moments using animation, motion design, video production, social media development, and ui + ux',
        }}
      />
      <PageHeader_VarH header='Our Services' subheader='We do a few things, and we do them well' />
      <ServicesOverview_Intro />
      <ServicesOverview_Animation />
      <ServicesOverview_VideoProduction />
      <ServicesOverview_AnimatedExplainers />
      <ServicesOverview_ProductPhotography />
      <ServicesOverview_MotionMixer />

      <ServicesOverview_CreativeStrategy />
      <ServicesOverview_EmergingMedia />
      <ServicesOverview_SocialMedia />
      <ServicesOverview_More />
      <CaseStudies_CTA />
    </Main>
  )
}
export default Services_Page
