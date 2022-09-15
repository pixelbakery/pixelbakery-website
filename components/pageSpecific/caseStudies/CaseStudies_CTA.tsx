import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'

function CaseStudies_CTA() {
  return (
    <PageSection color='blue-light' className='border-t-32 border-b-32 border-blue' id={'cta'}>
      <InnerWrapper>
        <Lead color='blue-dark' className='text-center mx-auto'>
          Ready to expand your brand?
        </Lead>
        <Button_Filled
          text={"Let's Chat"}
          link={'/onboarding'}
          center={true}
          bgColor={'peach'}
          textColor={'cream'}
          chevronDirection={''}
        />
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_CTA
