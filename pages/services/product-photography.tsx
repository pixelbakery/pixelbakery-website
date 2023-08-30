import { CaseStudies_CTA } from '@caseStudies/index'
import Main from '@parts/Main'
import {
  Services_AllServices,
  Services_Header,
  Services_OurApproach,
  Services_SEO,
} from '@services/index'
import Services_ProductPhotography_HowImportant from '@services/Services_ProductPhotography_HowImportant'
import Services_ProductPhotography_WhyPB from '@services/Services_ProductPhotography_WhyPB'

const desc =
  "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication."
const Page_ProductPhotography = () => {
  return (
    <Main>
      <Services_SEO
        serviceName='Product Photography'
        description={desc}
        path={'product-photography'}
      />
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
      <CaseStudies_CTA
        cta='📸 Ready to take some pics?
'
      />
      <Services_AllServices />
      <Services_OurApproach />
    </Main>
  )
}

export default Page_ProductPhotography
