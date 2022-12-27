import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

interface Props {
  cta?: string
}
function CaseStudies_CTA({ cta }: Props) {
  return (
    <PageSection color='yellow' className='' id={'cta'}>
      <InnerWrapper>
        <H2 color='blue-dark' className='text-center mx-auto' noMaxWidth={true}>
          {cta ? `${cta}` : 'Ready to expand your brand?'}
        </H2>
        <Lead className='text-center mx-auto' noMargins={true}>
          We want to hear all about you and your ideas
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
