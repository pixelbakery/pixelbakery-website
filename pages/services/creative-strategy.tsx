import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Lottie_Animation from '@data/lottie_services/lottie_services_creativeStrategy.json'
import {
  Services_SEO_CreativeStrategy,
  Services_AllServices,
  Services_OurApproach,
  Services_Header,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'
export default function Services_CreativeStrategy() {
  return (
    <Main>
      <Services_Header
        serviceName={'Creative Strategy'}
        isLottie={true}
        subheader={`We're more than just designers – we're thinkers, strategizers, and
                consultants.`}
        bgColor={'blue'}
        lottieComponent={Lottie_Animation}
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
      <Work_Industries header={'Industries We Love Doing Creative Strategy For'} />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Services_SEO_CreativeStrategy />
    </Main>
  )
}
