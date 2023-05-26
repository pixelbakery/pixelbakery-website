import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import {
  Contact_Clients,
  Contact_ContactForm,
  Contact_Jobs,
  Contact_HangOut,
  Contact_SEO,
} from '@contact/index'

import Main from '@parts/Main'

function Contact() {
  return (
    <Main id='contact-page'>
      <Contact_SEO />
      <PageHeader_VarH header='Contact Us' subheader="Please don't ask us about catering" />
      <Contact_Clients />
      <Contact_ContactForm />
      <Contact_Jobs />
      <Contact_HangOut />
    </Main>
  )
}

export default Contact
