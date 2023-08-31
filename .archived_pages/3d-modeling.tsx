import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurApproach'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Services_SEO from '@services/Services_SEO'

export default function Services_3dModeling() {
  const desc =
    'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.'
  return (
    <Main>
      <Services_SEO serviceName='3D Modeling' description={desc} path='animation' />

      <Services_Header
        serviceName={'3D Modeling'}
        isLottie={false}
        subheader={'Cooler than 2D'}
        bgColor={'blue-dark'}
        videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_3dModeling.mp4`}
        videoSourceWEBM={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_3dModeling.webm`}
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
