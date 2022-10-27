import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function CaseStudies_CTA() {
  return (
    <PageSection color='yellow' className='' id={'cta'}>
      <InnerWrapper>
        <H2 color='blue-dark' className='text-center mx-auto' noMaxWidth={true}>
          Ready to expand your brand?
        </H2>
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
