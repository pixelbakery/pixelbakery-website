import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import WhiskWithFrosting from '@images/WhiskWithFrosting'
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
        <div className='flex flex-row w-full justify-center gap-32'>
          <div className='relative w-40 rotate-12 hidden md:block'>
            <WhiskWithFrosting />
          </div>
          <div className='self-center'>
            <Lead className='text-center md:text-left mx-auto' noMargins={true}>
              We want to hear all about you and your ideas
            </Lead>
            <Button_Filled
              text={"Let's Chat"}
              link={'/onboarding'}
              center={false}
              bgColor={'peach'}
              textColor={'cream'}
              chevronDirection={''}
              className='mx-auto md:mx-0'
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_CTA
