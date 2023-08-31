import {
  Services_Subservices,
  Services_SEO_Animation,
  Services_AllServices,
  Services_OurApproach,
  Services_Modulation,
  Services_Header,
  Services_Animation_Why,
  Services_Animation_Benefits,
} from '@services/index'

import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Lottie_Animation from '@data/lottie_services/lottie_services_animation.json'
import Work_Industries from '@work/Work_Industries'

const Page_Services_Animation = () => {
  return (
    <Main>
      <Services_Header
        serviceName={'Animation'}
        isLottie={true}
        subheader={
          'We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.'
        }
        bgColor={'blue-dark'}
        lottieComponent={Lottie_Animation}
      >
        <p className='mt-6 leading-loose'>
          Animation is a powerful marketing tool that can be used to engage, educate, and entertain
          audiences of all ages. Whether you’re looking for a lower thirds animation template or a
          product highlight of your company’s coolest products, we’ve got you covered. Check out
          what else we have to offer below.
        </p>
      </Services_Header>
      <Services_Animation_Why />
      <Services_Subservices />
      <Services_Animation_Benefits />
      <Services_Modulation />
      <Work_Industries header={'Industries We Love Making Animated Content For'} />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
      <Services_SEO_Animation />
    </Main>
  )
}

export default Page_Services_Animation
