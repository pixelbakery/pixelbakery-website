import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent header='Contact Us' subheader="Please don't ask us about catering" />
  ),
  ssr: false,
})

import {
  Contact_Clients,
  Contact_ContactForm,
  Contact_Jobs,
  Contact_HangOut,
  Contact_SEO,
} from '@contact/index'

import Main from '@parts/Main'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'

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
