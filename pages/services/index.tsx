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
        title='Our Services'
        description={`Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.`}
        canonical={`https://pixelbakery.com/services`}
        openGraph={{
          url: `https://pixelbakery.com/services`,

          title: 'Our Services',
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
          description:
            'Offering expert animation, animated explainer videos, motion graphics, and video production to craft unforgettable digital experiences.',
        }}
      />
    </Main>
  )
}
export default Services_Page
