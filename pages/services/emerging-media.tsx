import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Lottie_Animation from '@data/lottie_services/lottie_services_emergingMedia.json'
import Services_SEO from '@services/Services_SEO'

export default function Services_EmergingMedia() {
  const desc = `With the development and expansion of social media, mobile marketing, email marketing,
          instant messaging, and various other digital platforms, it only makes sense that current
          trends in marketing are ever-evolving. Why not evolve with them?`
  return (
    <Main>
      <Services_SEO serviceName='Emerging Media' description={desc} path='emerging-media' />

      <Services_Header
        serviceName={'Emerging Media'}
        isLottie={true}
        subheader={'AR? VR? Holograms? No Problem.'}
        bgColor={'blue-dark'}
        LottieComponent={Lottie_Animation}
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
      <Services_OurApproach />
    </Main>
  )
}
