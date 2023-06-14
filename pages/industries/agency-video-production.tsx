import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Work_Services from '@work/Work_Services'

import Main from '@parts/Main'
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
    <Main>
      <Industries_Header title={'Agency Video Production'}>
        <Lead color='peach'></Lead>
      </Industries_Header>
      <Industries_Important_Agency />
      <Industries_Reasons_Agency />
      <Work_Services />
      <Industries_MoreIndustries />
      <CaseStudies_CTA />
      <Industries_SEO_Agency />
    </Main>
  )
}

export default Page_AgencyVideoProduction
