import {
  Services_AllServices,
  Services_OurApproach,
  Services_Modulation,
  Services_Header,
  Services_VideoProduction_Why,
  Services_SEO_VideoProduction,
  Services_FAQ_VideoProduction,
} from '@services/index'

import Main from '@parts/Main'

import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Work_Industries from '@work/Work_Industries'

export default function Services() {
  return (
    <Main>
      <Services_Header
        serviceName={'Video Production'}
        isLottie={false}
        subheader={'Making your story come to life'}
        bgColor={'dangerPink'}
        videoSourceMP4={'/img/services/PB_ServiceAniamtion_VideoProduction.mp4'}
      >
        <p>
          Commercial video production can include video ads, TV commercials, YouTube pre-roll ads,
          online advertisements, digital campaigns, and way more. These are all great ways to give
          your brand more recognition and to boost your marketplace identity. With our experience in
          both video production and animation, there are no limits to what we can produce for your
          brand.
        </p>
      </Services_Header>
      <Services_VideoProduction_Why />
      <Services_Modulation />
      <Services_OurApproach />
      <Work_Industries header={'Industries We Love Making Video Content For'} />
      <CaseStudies_CTA />
      <Services_FAQ_VideoProduction />
      <Services_AllServices />
      <Services_SEO_VideoProduction />
    </Main>
  )
}
