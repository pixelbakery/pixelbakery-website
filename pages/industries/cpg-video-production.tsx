import { CaseStudies_CTA } from '@caseStudies'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import Work_Services from '@work/Work_Services'
import {
  Industries_Header,
  Industries_MoreIndustries,
  Industries_Important_CPG,
  Industries_UseCases_CPG,
  Industries_Reasons_CPG,
  Industries_SEO_CPG,
} from '@industries/index'
import Lead from '@typography/Lead'
const Page_CPGVideoProduction = () => {
  return (
    <>
      <Industries_Header title={'CPG Video Production'}>
        <Lead color='peach'>
          We love working with Consumer Packaged Goods (CPG) companies to elevate their product
          marketing to the next level.
        </Lead>
      </Industries_Header>
      <Industries_Important_CPG />
      <Industries_UseCases_CPG />
      <Industries_Reasons_CPG />
      <Work_Services />
      <Industries_MoreIndustries />
      <CaseStudies_CTA />
      <Industries_SEO_CPG />
    </>
  )
}
//Set page layout
Page_CPGVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_CPGVideoProduction
