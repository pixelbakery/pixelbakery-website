import Services_Header from '@services/Services_Header'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Main from '@parts/Main'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Link from 'next/link'

export default function Services() {
  return (
    <Main>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Services',
            item: 'https://pixelbakery.com/services',
          },
          {
            position: 2,
            name: `Social Media Kits`,
            item: `https://pixelbakery.com/services/social-media`,
          },
        ]}
      />
      <NextSeo
        title='Social Media | Services'
        description={`Engage with your audience on their favorite platforms.`}
        openGraph={{
          url: `https://pixelbakery.com/services/social-media`,
          title: 'Social Media Kits | Services',
          description: `Engage with your audience on their favorite platforms.`,
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
        serviceName={'Social Media Kits'}
        isLottie={false}
        subheader={'We create capitvating and engaging social ecosystems'}
        bgColor={'blue-dark'}
        videoSourceMP4={'https://cdn.pixelbakery.com/img/PB_ServiceAniamtion_SocialMedia.mp4'}
        videoSourceWEBM={'https://cdn.pixelbakery.com/img/PB_ServiceAniamtion_SocialMedia.webm'}
      >
        <p className='mt-6 leading-loose'>
          You typically have 5 seconds to grab the attention of your user base on social media. In a
          world of over-stimulation and digital noise, it's important to stand out. Nothing immerses
          your audience more than a catchy animation. Engage with your audience on their favorite
          platforms. We bring your feeds to life using dynamic content and motion design.
        </p>
        <p>
          <Link href={'/work/case-studies/snacklins-content-kit'} passHref>
            <a>Check out</a>
          </Link>{' '}
          the social content we've built for SNACKLINS.
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
