import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Link from 'next/link'
import faqData from '@data/faq_socialMedia'
import {
  Services_AllServices,
  Services_OurApproach,
  Services_Header,
  Services_SEO_SocialMedia,
  Services_FAQ_SocialMedia,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'
function Page_Services_SocialMedia() {
  const faqs = faqData
  if (!faqs || !Array.isArray(faqs)) {
    console.error('FAQs data is missing or invalid')
    return null
  }
  return (
    <>
      <Services_Header
        serviceName={'Social Videos'}
        isLottie={false}
        subheader={'We create capitvating and engaging social ecosystems'}
        bgColor={'yellow'}
        videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_SocialMedia.mp4`}
        id={'multichannel-videos'}
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
      <Services_FAQ_SocialMedia />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Work_Industries header={'Industries We Love Making Social Media Video Content For'} />
      <Services_SEO_SocialMedia />
    </>
  )
}

Page_Services_SocialMedia.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Services_SocialMedia
