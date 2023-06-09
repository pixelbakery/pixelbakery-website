import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Main from '@parts/Main'

import {
  ServicesOverview_Intro,
  ServicesOverview_Animation,
  ServicesOverview_VideoProduction,
  ServicesOverview_CreativeStrategy,
  ServicesOverview_MotionMixer,
  ServicesOverview_EmergingMedia,
  ServicesOverview_SocialMedia,
  ServicesOverview_AnimatedExplainers,
  ServicesOverview_ProductPhotography,
} from '@services/index'

import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import { NextSeo } from 'next-seo'

function Services_Page() {
  return (
    <Main>
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
      {/* <ServicesOverview_More /> */}
      <CaseStudies_CTA />
      <NextSeo
        title='Services'
        description={`We create beautiful digital moments using animation, motion graphics, and video production.`}
        canonical={`https://pixelbakery.com/services`}
        openGraph={{
          url: `https://pixelbakery.com/services`,
          title: 'Our Services',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
            },
          ],
          description:
            'We create beautiful digital moments using animation, motion graphics, and video production.',
        }}
      />
    </Main>
  )
}
export default Services_Page
