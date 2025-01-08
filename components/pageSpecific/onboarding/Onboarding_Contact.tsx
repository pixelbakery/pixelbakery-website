import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import Onboarding_Contact_Form from './Onboarding_Contact_Form'

function Onboarding_Contact() {
  return (
    <PageSection id='onboarding-contact' color='white'>
      <InnerWrapper>
        <H2 color='blue-dark'>Tell us about your project idea</H2>
        <div className='max-w-3xl mx-auto'>
          <Onboarding_Contact_Form />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Contact
