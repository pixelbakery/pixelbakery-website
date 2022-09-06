import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'

import Image_VarH from '@parts/Image_VarH'

const CaseStudies_Gallery_Email = () => {
  return (
    <>
      <PageSection color='pink-light' className='z-20 relative'>
        <InnerWrapper>
          <H2>Emails</H2>
          <p>
            When it comes to email marketing, SNACKLINS likes to keep it short and sweet—or salty!
            With a mix of punny copy, themed concepts, and delicious visuals, our vibrant emails
            keep the customer coming back for more.
          </p>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <div className='relative w-full'></div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='grid grid-cols-3 gap-3 lg:gap-6'>
              <div className='col-span-1'>
                <Image_VarH
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_ChesapeakeEmail_v02.jpg`}
                  openInNewWindow={true}
                />
              </div>
              <div className='col-span-1'>
                <Image_VarH
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Email_BFCM_Launch_v03.jpg`}
                  openInNewWindow={true}
                />
              </div>
              <div className='col-span-1'>
                <Image_VarH
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_NachoEmail_v04.jpg`}
                  openInNewWindow={true}
                />
              </div>
            </div>
          </div>
          {/* <Carousel /> */}
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery_Email
