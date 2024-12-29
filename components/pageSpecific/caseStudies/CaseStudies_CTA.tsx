import { Button_Filled, InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'

import WhiskWithFrosting from '@images/WhiskWithFrosting'
interface Props {
  cta?: string
}
function CaseStudies_CTA({ cta }: Props) {
  return (
    <PageSection color='yellow' className='' id={'cta'}>
      <InnerWrapper>
        <H2
          color='blue-dark'
          className='pb-0 mx-auto mb-0 text-center'
          noMaxWidth={true}
          noMargins={true}
        >
          {cta ? `${cta}` : 'Ready to expand your brand?'}
        </H2>
        <div className='flex flex-col justify-center w-full gap-12 lg:gap-32 md:flex-row'>
          <div className='relative self-center w-40 rotate-12 md:block'>
            <WhiskWithFrosting />
          </div>
          <div className='flex flex-col self-center justify-center '>
            <Lead className='self-center text-center lg:text-3xl' color={'peach'} noMargins={true}>
              We want to hear all about you and your ideas
            </Lead>
            <Button_Filled
              text={"Let's Chat"}
              link={'/onboarding'}
              center={false}
              bgColor={'peach'}
              textColor={'cream'}
              chevronDirection={''}
              className='self-center w-full md:mx-0'
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_CTA
