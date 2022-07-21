import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import BackLink from '@parts/BackLink'
import Services_Header from '@services/Services_Header'

export default function Services_3dModeling() {
  return (
    <Main>
      <NextSeo
        title='3D Modeling | Services'
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com/services/3d-modeling`,
          title: '3D Modeling | Services',
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
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

      <Services_Header
        serviceName={'3D Modeling'}
        isLottie={false}
        subheader={'Cooler than 2D'}
        bgColor={'blue-dark'}
        videoSourceMP4={'https://cdn.pixelbakery.com/img/PB_ServiceAniamtion_3dModeling.mp4'}
        videoSourceWEBM={'https://cdn.pixelbakery.com/img/PB_ServiceAniamtion_3dModeling.webm'}
      >
        <p>
          With the development and expansion of social media, mobile marketing, email marketing,
          instant messaging, and various other digital platforms, it only makes sense that current
          trends in marketing are ever-evolving. Why not evolve with them?
        </p>
        <p>
          Here at PB, we like to stay up-to-date with the newest techniques and strategies that
          share information in innovative, interactive ways. Emerging media allows you and your
          brand to speak closer to your customers than ever before.
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
