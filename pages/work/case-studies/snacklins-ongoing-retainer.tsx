import Main from '@parts/Main'
import CaseStudies_Testimonial from '@caseStudies/CaseStudies_Testimonial'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import CaseStudies_TikTok from '@caseStudies/CaseStudies_TikTok'
import CaseStudies_Gallery from '@caseStudies/CaseStudies_Gallery'
import CaseStudies_Gallery_Alt from '@caseStudies/CaseStudies_Gallery_Alt'
import CaseStudies_Header_Alt from '@caseStudies/CaseStudies_Header_Alt'
import CaseStudies_ProjectIntro_Alt from '@caseStudies/CaseStudies_ProjectIntro_Alt'
import CaseStudies_Gallery_Email from '@caseStudies/CaseStudies_Gallery_Email'

function Test() {
  return (
    <Main>
      <CaseStudies_Header_Alt />
      <CaseStudies_ProjectIntro_Alt />
      <CaseStudies_Gallery_Email />
      <CaseStudies_Gallery_Alt />
      <CaseStudies_Gallery />
      <CaseStudies_Testimonial />
      <CaseStudies_TikTok />
      <CaseStudies_CTA />
    </Main>
  )
}
export default Test

// <PageSection>
//   <InnerWrapper>
//     <div className='grid grid-cols-4 gap-8 max-h-screen bg-yellow '>
//       {/* <div className='col-span-1 flex-col justify-center'>
//         <img src={'/img/SNACK_ChesapeakeEmail_v02.png'} className='max-w-full block ' />
//       </div> */}

//       <div className='col-span-2 '>
//         <div className='  bg-blue overflow-hidden'>
//           <img
//             src={'/img/SNACK_Email_BFCM_Launch_v03.png'}
//             className='h-full object-contain'
//           />
//         </div>
//       </div>
//       {/* <div className='col-span-1 w-full flex flex-col justify-center'>
//         <img src={'/img/SNACK_NachoEmail_v04.png'} className='w-full block' />
//       </div> */}
//     </div>
//   </InnerWrapper>
// </PageSection>
