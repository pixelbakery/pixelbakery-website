import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import LogoAnimation_GetStarted_Form from './LogoAnimation_GetStarted_Form'
import Button_Filled from '@parts/Button_Filled'
import PageSection from '@parts/PageSection'

function LogoAnimation_GetStarted() {
  return (
    <PageSection className='my-4 px-12 py-12 bg-white' id='descriptions'>
      <InnerWrapper>
        <H2 className='pb-6'>Get Started</H2>

        <LogoAnimation_GetStarted_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_GetStarted
