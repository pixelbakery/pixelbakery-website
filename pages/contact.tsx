import React from 'react'
import PageHeader_VarH from '../components/PageHeader/PageHeader_VarH'
import Contact_Clients from '../components/Contact/Contact_Clients'
import Contact_ContactForm from '../components/Contact/Contact_ContactForm'
import Contact_Jobs from '../components/Contact/Contact_Jobs'
import Contact_HangOut from '../components/Contact/Contact_HangOut'
import TestForm from '../components/Contact/TestForm'
function Contact() {
  return (
    <main className='' id='contact-page'>
      <PageHeader_VarH header='Contact Us' subheader='copy copy copy' />
      <TestForm />
      <Contact_Clients />
      {/* <Contact_ContactForm /> */}
      <Contact_Jobs />
      <Contact_HangOut />
    </main>
  )
}

export default Contact
