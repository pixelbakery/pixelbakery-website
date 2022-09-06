import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Store_Maintenance from '@store/Store_Maintenance'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'

export default function Services() {
  return (
    <Main>
      <NextSeo
        title='UI/UX | Services'
        description={`Engage with your audience on their favorite platforms.`}
        openGraph={{
          url: `https://pixelbakery.com/services/ui-ux`,
          title: 'UI/UX | Services',
          description: `Engage with your audience on their favorite platforms.`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <Services_Header serviceName='UI / UX Design'>
        <Lead>Coming Soon 😉 </Lead>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
    </Main>
  )
}
