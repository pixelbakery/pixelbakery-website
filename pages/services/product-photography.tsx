import { CaseStudies_CTA } from '@caseStudies/index'
import Main from '@parts/Main'
import {
  Services_AllServices,
  Services_Header,
  Services_OurApproach,
  Services_ProductPhotography_HowImportant,
  Services_SEO_ProductPhotography,
  Services_ProductPhotography_WhyPB,
} from '@services/index'
import Work_Industries from '@work/Work_Industries'

const Page_ProductPhotography = () => {
  return (
    <Main>
      <Services_Header
        serviceName={'Product Photography'}
        isLottie={false}
        subheader={'The key to a killer first impression (and loyal customers for life)'}
        bgColor={'pink'}
        videoSourceMP4={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAnimation_ProductPhotography.mp4`}
      >
        <p className='mt-6 leading-loose'>
          Product photography is one of the most effective ways to show potential customers who you
          are and what you sell. Photos are the entryway into your brand, and they should accurately
          reflect the effort and consideration you’ve put into everything you’ve built.
        </p>
      </Services_Header>
      <Services_ProductPhotography_HowImportant />
      <Services_ProductPhotography_WhyPB />
      <Work_Industries header={'Industries We Love Doing Product Photography For'} />
      <CaseStudies_CTA
        cta='📸 Ready to take some pics?
'
      />
      <Services_AllServices />
      <Services_OurApproach />
      <Services_SEO_ProductPhotography />
    </Main>
  )
}

export default Page_ProductPhotography
