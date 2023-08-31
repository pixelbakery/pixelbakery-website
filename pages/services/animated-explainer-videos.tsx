import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Lottie_Animation from '@data/lottie_services/lottie_services_animatedExplainers.json'

import {
  Services_AllServices,
  Services_OurApproach,
  Services_Modulation,
  Services_Header,
  Services_AnimatedExplainers_Topics,
  Services_AnimatedExplainers_GreatFor,
  Services_SEO_ExplainerVideos,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'

const Services_Animated_Explainer_Videos = () => {
  return (
    <Main>
      <Services_Header
        serviceName={'Animated Explainers'}
        isLottie={true}
        subheader={'You want clients to know who you are and what you do—so let’s show them.'}
        bgColor={'yellow'}
        lottieComponent={Lottie_Animation}
      >
        <p className='mt-6 leading-loose'>
          Generally clocking in around 60 to 90 seconds, animated explainer videos are used to
          explain your company’s product or service. By introducing audiences to your brand in a
          concise, visually pleasing way, you can make sure that everyone is on the same page— fast.
        </p>
      </Services_Header>
      <Services_AnimatedExplainers_Topics />
      <Services_AnimatedExplainers_GreatFor />
      <Services_Modulation />
      <Work_Industries header={'Industries We Love Making Animated Explainer Videos For'} />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Services_SEO_ExplainerVideos />
    </Main>
  )
}
export default Services_Animated_Explainer_Videos
