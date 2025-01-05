import { CaseStudies_CTA } from '@caseStudies'
import Work_Services from '@work/Work_Services'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Industries_Header,
  Industries_MoreIndustries,
  Industries_Important_Nonprofits,
  Industries_UseCases_Nonprofits,
  Industries_Reasons_Nonprofits,
  Industries_SEO_Nonprofits,
} from '@industries/index'
import Lead from '@typography/Lead'

const Page_NonprofitVideoProduction = () => {
  return (
    <>
      <Industries_Header title={'Nonprofit Video Production'}>
        <Lead color='peach'>We want to help you make the world a better place.</Lead>
      </Industries_Header>
      <Industries_Important_Nonprofits />
      <Industries_UseCases_Nonprofits />
      <Industries_Reasons_Nonprofits />
      <Industries_MoreIndustries />
      <Work_Services />
      <CaseStudies_CTA />
      <Industries_SEO_Nonprofits />
    </>
  )
}
//Set page layout
Page_NonprofitVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_NonprofitVideoProduction
