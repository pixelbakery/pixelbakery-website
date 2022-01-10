import React from 'react'
import PageSection from '../PageSection'
import InnerWrapper from '../InnerWrapper'
import Contact_ContactForm_Form from './Contact_ContactForm_Form'
import H2 from '../H2'
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
