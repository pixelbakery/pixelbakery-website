import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Work_Services from '@work/Work_Services'
import Main from '@parts/Main'
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
    <Main>
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
    </Main>
  )
}

export default Page_SaaSVideoProduction
