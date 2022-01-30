import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Contact_ContactForm_Form from './Contact_ContactForm_Form'
import H2 from '@parts/H2'
function Content_ContactForm() {
  return (
    <PageSection className='bg-pink-light'>
      <InnerWrapper>
        <H2 className='text-pink'>HMU.</H2>
        <Contact_ContactForm_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default Content_ContactForm
