import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Lottie_Animation from '@data/lottie_services/lottie_services_emergingMedia.json'

import {
  Services_AllServices,
  Services_OurApproach,
  Services_Header,
  Services_SEO_EmergingMedia,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'

export default function Services_EmergingMedia() {
  return (
    <Main>
      <Services_Header
        serviceName={'Emerging Media'}
        isLottie={true}
        subheader={'AR? VR? Holograms? No Problem.'}
        bgColor={'blue-dark'}
        lottieComponent={Lottie_Animation}
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
      <Work_Industries header={'Industries We Love Creating Emerging Media For'} />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Services_SEO_EmergingMedia />
    </Main>
  )
}
