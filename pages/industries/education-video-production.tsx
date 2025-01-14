import { CaseStudies_CTA } from '@caseStudies'
import Work_Services from '@work/Work_Services'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Industries_Header,
  Industries_MoreIndustries,
  Industries_Important_Education,
  Industries_Reasons_Education,
  Industries_UseCases_Education,
  Industries_SEO_Education,
} from '@industries/index'
import Lead from '@typography/Lead'
const Page_EducationVideoProduction = () => {
  return (
    <>
      <Industries_Header title={'Educational Video Production'}>
        <Lead color='peach'>Using the power of motion to give educators the tools they need.</Lead>
      </Industries_Header>
      <Industries_Important_Education />
      <Industries_UseCases_Education />
      <Industries_Reasons_Education />
      <Industries_MoreIndustries />
      <Work_Services />
      <CaseStudies_CTA />
      <Industries_SEO_Education />
    </>
  )
}
//Set page layout
Page_EducationVideoProduction.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_EducationVideoProduction
