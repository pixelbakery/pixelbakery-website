import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import LogoAnimation_GetStarted_Form from './LogoAnimation_GetStarted_Form'

function LogoAnimation_GetStarted() {
  return (
    <PageSection className='px-12 py-12 my-4 bg-white' id='descriptions'>
      <InnerWrapper>
        <H2 className='pb-6'>Get Started</H2>
        <LogoAnimation_GetStarted_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_GetStarted
