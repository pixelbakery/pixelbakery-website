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
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent
      header='Our Services'
      subheader='We do a few things, and we do them well'
    />
  ),
  ssr: false,
})

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
              alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, motion design, and commercial film production`,
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
      <ServicesOverview_CreativeStrategy />
      <ServicesOverview_MotionMixer />
      <ServicesOverview_EmergingMedia />
      <ServicesOverview_SocialMedia />
      <ServicesOverview_More />
      <CaseStudies_CTA />
    </Main>
  )
}
export default Services_Page
