import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Services_Modulation from '@services/Services_Modulation'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Lottie_Animation from '@data/lottie_services/lottie_services_animation.json'
import Services_SEO from '@services/Services_SEO'
import Services_Animation_Why from '@services/Services_Animation_Why'

const desc = 'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling'

const Page_Services_Animation = () => {
  return (
    <Main>
      <Services_SEO serviceName='animation' description={desc} path={'animation'} />
      <Services_Header
        serviceName={'Animation'}
        isLottie={true}
        subheader={
          'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling.'
        }
        bgColor={'blue-dark'}
        lottieComponent={Lottie_Animation}
      >
        <p className='mt-6 leading-loose'>
          Every animation project is full-service and includes project management, creative
          concepting, sound design, storyboarding, and voiceover as needed. Whether you’re looking
          for a lower thirds animation template or a sizzle reel of your company’s coolest products,
          we’ve got you covered. Check out what else we have to offer below.
        </p>
      </Services_Header>
      <Services_Animation_Why />

      <Services_Subservices />
      <Services_Modulation />
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurApproach />
    </Main>
  )
}

export default Page_Services_Animation
