import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Link from 'next/link'

import {
  Services_AllServices,
  Services_OurApproach,
  Services_Header,
  Services_SEO_SocialMedia,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'
export default function Services() {
  return (
    <Main>
      <Services_Header
        serviceName={'Social Media Kits'}
        isLottie={false}
        subheader={'We create capitvating and engaging social ecosystems'}
        bgColor={'yellow'}
        videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_SocialMedia.mp4`}
      >
        <p className='mt-6 leading-loose'>
          You typically have 5 seconds to grab the attention of your user base on social media. In a
          world of over-stimulation and digital noise, it's important to stand out. Nothing immerses
          your audience more than a catchy animation. Engage with your audience on their favorite
          platforms. We bring your feeds to life using dynamic content and motion design.
        </p>
        <p>
          <Link hrefLang={'en-US'} href={'/work/case-studies/snacklins-content-kit'}>
            Check out
          </Link>{' '}
          the social content we've built for{' '}
          <Link hrefLang='en-US' href={'https://snacklins.com'}>
            SNACKLINS
          </Link>
          .
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Work_Industries header={'Industries We Love Making Social Media Video Content For'} />
      <Services_SEO_SocialMedia />
    </Main>
  )
}
