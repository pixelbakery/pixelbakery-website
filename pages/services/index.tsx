import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

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

function Page_Services() {
  return (
    <>
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
      <CaseStudies_CTA />
      <NextSeo
        title='Services - Animation, Animated Explainers, Video Production'
        description={`Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.`}
        canonical={`https://pixelbakery.com/services`}
        openGraph={{
          title: 'Services - Animation, Animated Explainers, Video Production',
          url: `https://pixelbakery.com/services`,
          description:
            'Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_all_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_all_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_all_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: `Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.`,
            },
          ],
        }}
      />
    </>
  )
}
//Set page layout
Page_Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}

export default Page_Services
