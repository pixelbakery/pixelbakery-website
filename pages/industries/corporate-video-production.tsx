import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Work_Services from '@work/Work_Services'
import { Lead } from '@typography'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Industries_Header,
  Industries_Reasons_Corporate,
  Industries_UseCases_Corporate,
  Industries_Important_Corporate,
  Industries_MoreIndustries,
  Industries_SEO_Corporate,
} from '@industries/index'

const Page_CorporateVideoProduction = () => {
  return (
    <>
      <Industries_SEO_Corporate />
      <Industries_Header title={'Corporate Video Production'}>
        <Lead color='wine' className='font-medium'>
          Our specialty is telling brand stories. Wether that’s through animation or video
          production, there’s no better way to illuminate your brand than by bringing it to life
          with video.
        </Lead>
      </Industries_Header>
      <Industries_Important_Corporate />
      <Industries_UseCases_Corporate />
      <Industries_Reasons_Corporate />
      <Work_Services />
      <Industries_MoreIndustries />
      <CaseStudies_CTA />
    </>
  )
}
//Set page layout
Page_CorporateVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_CorporateVideoProduction
