import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Services_Modulation from '@services/Services_Modulation'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Lottie_Animation from '@data/lottie_services/lottie_services_animation.json'

export default function Services_Animation() {
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
      <Services_Header
        serviceName={'Animation'}
        isLottie={true}
        subheader={
          'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling'
        }
        bgColor={'blue-dark'}
        LottieComponent={Lottie_Animation}
      >
        <p className='mt-6 leading-loose'>
          Every animation project is full-service and includes project management, creative
          concepting, sound design, storyboarding, and voiceover as needed. Whether you’re looking
          for a lower thirds animation template or a sizzle reel of your company’s coolest products,
          we’ve got you covered. Check out what else we have to offer below.
        </p>
      </Services_Header>

      <Services_Subservices />
      <Services_Modulation />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
