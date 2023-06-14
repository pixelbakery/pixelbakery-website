import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Main from '@parts/Main'
import Work_Services from '@work/Work_Services'
import Lead from '@typography/Lead'

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
    <Main>
      <Industries_Header title={'Corporate Video Production'}>
        <Lead color='peach'>
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
      <Industries_SEO_Corporate />
    </Main>
  )
}

export default Page_CorporateVideoProduction
