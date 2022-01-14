import React from 'react'
import PageHeader_VarH from '../../components/PageHeader/PageHeader_VarH'
import Contact_Clients from '../../components/Contact/Contact_Clients'
import Contact_ContactForm from '../../components/Contact/Contact_ContactForm'
import Contact_Jobs from '../../components/Contact/Contact_Jobs'
import Contact_HangOut from '../../components/Contact/Contact_HangOut'
import Main from '../../components/Main'

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
