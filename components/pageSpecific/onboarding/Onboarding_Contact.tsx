import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import Onboarding_Contact_Form from './Onboarding_Contact_Form'

function Onboarding_Contact() {
  return (
    <PageSection id='onboarding-contact' color='white'>
      <InnerWrapper>
        <H2 color='blue-dark'>Tell us about your project idea</H2>
        <div className='mx-auto max-w-3xl'>
          <Onboarding_Contact_Form />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Contact
