// import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Lottie_Animation from '@data/lottie_services/lottie_services_creativeStrategy.json'
import Services_SEO from '@services/Services_SEO'

export default function Services_CreativeStrategy() {
  const desc = `From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client's goals, pain points, and ideas.`
  ;('Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.')
  return (
    <Main>
      <Services_SEO serviceName='Creative Strategy' description={desc} path='creative-strategy' />

      <Services_Header
        serviceName={'Creative Strategy'}
        isLottie={true}
        subheader={`We're more than just designers – we're thinkers, strategizers, and
                consultants.`}
        bgColor={'blue-dark'}
        LottieComponent={Lottie_Animation}
      >
        <p>
          From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client&apos;s goals, pain points, and ideas.
        </p>
        <p>
          Between a client&apos;s invaluable knowledge of their brand and our dedication to
          providing a homogeneous brand experience from start to finish, PB knows that a unifying
          theme that ties a project together is the key to a successful campaign.
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
    </Main>
  )
}
