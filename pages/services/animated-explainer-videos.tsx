import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Services_Modulation from '@services/Services_Modulation'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Services_SEO from '@services/Services_SEO'
import Lottie_Animation from '@data/lottie_services/lottie_services_animatedExplainers.json'
import Services_AnimatedExplainers_Topics from '@services/Services_AnimatedExplainers_Topics'
import Services_AnimatedExplainers_GreatFor from '@services/Services_AnimatedExplainers_GreatFor'

const desc = 'You want clients to know who you are and what you do— so let’s show them'

const Services_Animated_Explainer_Videos = () => {
  return (
    <Main>
      <Services_SEO
        serviceName='Animated Explainer Videos'
        description={desc}
        path={'animated-explainer-videos'}
      />
      <Services_Header
        serviceName={'Animated Explainers'}
        isLottie={true}
        subheader={'You want clients to know who you are and what you do—so let’s show them.'}
        bgColor={'yellow'}
        //    videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAnimation_ExplainerVideos.mp4`}
        //    videoSourceWEBM={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAnimation_ExplainerVideos.webm`}
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
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />

      {/* <Services_Animation_Why />

      <Services_Subservices />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach /> */}
    </Main>
  )
}
export default Services_Animated_Explainer_Videos
