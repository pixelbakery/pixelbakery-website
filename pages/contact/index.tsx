import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Contact_Clients from '@contact/Contact_Clients'
import Contact_ContactForm from '@contact/Contact_ContactForm'
import Contact_Jobs from '@contact/Contact_Jobs'
import Contact_HangOut from '@contact/Contact_HangOut'
import Main from '@parts/Main'

function Contact() {
  return (
    <Main className='' id='contact-page'>
      <PageHeader_VarH header='Contact Us' subheader="Please don't ask us about catering" />
      <Contact_Clients />
      <Contact_ContactForm />
      <Contact_Jobs />
      <Contact_HangOut />
    </Main>
  )
}

export default Contact
