import Services_Header from '@services/Services_Header'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Main from '@parts/Main'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Link from 'next/link'
import Services_SEO from '@services/Services_SEO'

export default function Services() {
  const desc = `Engage with your audience on their favorite platforms.`
  return (
    <Main>
      <Services_SEO serviceName='Social Media Kits' path='social-media' description={desc} />

      <Services_Header
        serviceName={'Social Media Kits'}
        isLottie={false}
        subheader={'We create capitvating and engaging social ecosystems'}
        bgColor={'yellow'}
        videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/PB_ServiceAniamtion_SocialMedia.mp4`}
        videoSourceWEBM={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/PB_ServiceAniamtion_SocialMedia.webm`}
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
          the social content we've built for SNACKLINS.
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
    </Main>
  )
}
