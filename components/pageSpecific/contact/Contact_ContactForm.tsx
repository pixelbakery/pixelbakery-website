import { InnerWrapper, PageSection } from '@parts'
import { Contact_ContactForm_Form } from '@contact'
import { H2 } from '@typography'

function Content_ContactForm() {
  return (
    <PageSection color='pink-lighter' id='contact-form'>
      <InnerWrapper>
        <H2 color='blue-dark'>HMU.</H2>
        <Contact_ContactForm_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default Content_ContactForm
