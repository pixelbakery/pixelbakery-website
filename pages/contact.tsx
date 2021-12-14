import React from 'react'
import Contact_Clients from '../components/Contact/Contact_Clients'
import Contact_ContactForm from '../components/Contact/Contact_ContactForm'
import Contact_Jobs from '../components/Contact/Contact_Jobs'
// import Contact_HangOut from '../components/Contact/Contact_HangOut'

function Contact() {
  return (
    <main className='' id='contact-page'>
      <Contact_Clients />
      <Contact_ContactForm />
      <Contact_Jobs />
      {/* <Contact_HangOut /> */}
    </main>
  )
}

export default Contact
