import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import Services_Modulation from '@services/Services_Modulation'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'

export default function Services() {
  return (
    <Main>
      <NextSeo
        title='Commercial Video Production | Services'
        description={`Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.`}
        openGraph={{
          url: `https://pixelbakery.com/services/video-production`,
          title: 'Commercial Video Production | Services',
          description: `Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.`,
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
        serviceName={'Video Production'}
        isLottie={false}
        subheader={'Making your story come to life'}
        bgColor={'pink'}
        videoSourceWEBM={'/img/PB_ServiceAniamtion_VideoProduction.webm'}
        videoSourceMP4={'/img/PB_ServiceAniamtion_VideoProduction.mp4'}
      >
        <p>
          Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.
        </p>
      </Services_Header>
      <Services_Modulation />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
