import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Main from '@parts/Main'
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
    <Main>
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
    </Main>
  )
}

export default Page_CPGVideoProduction
