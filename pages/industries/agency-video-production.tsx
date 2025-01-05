import { CaseStudies_CTA } from '@caseStudies'
import Work_Services from '@work/Work_Services'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

import {
  Industries_Header,
  Industries_MoreIndustries,
  Industries_Important_Agency,
  Industries_Reasons_Agency,
  Industries_SEO_Agency,
} from '@industries/index'
import Lead from '@typography/Lead'

const Page_AgencyVideoProduction = () => {
  return (
    <>
      <Industries_Header title={'Agency Video Production'}>
        <Lead color='peach'></Lead>
      </Industries_Header>
      <Industries_Important_Agency />
      <Industries_Reasons_Agency />
      <Work_Services />
      <Industries_MoreIndustries />
      <CaseStudies_CTA />
      <Industries_SEO_Agency />
    </>
  )
}
//Set page layout
Page_AgencyVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_AgencyVideoProduction
