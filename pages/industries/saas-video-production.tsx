import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Work_Services from '@work/Work_Services'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Industries_Header,
  Industries_MoreIndustries,
  Industries_Important_SaaS,
  Industries_Reasons_SaaS,
  Industries_UseCases_SaaS,
  Industries_SEO_SaaS,
} from '@industries/index'
import Lead from '@typography/Lead'
const Page_SaaSVideoProduction = () => {
  return (
    <>
      <Industries_Header title={'SaaS Video Production'}>
        <Lead color='peach'></Lead>
      </Industries_Header>
      <Industries_Important_SaaS />
      <Industries_UseCases_SaaS />
      <Industries_Reasons_SaaS />
      <Industries_MoreIndustries />
      <Work_Services />
      <CaseStudies_CTA />
      <Industries_SEO_SaaS />
    </>
  )
}
//Set page layout
Page_SaaSVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_SaaSVideoProduction
