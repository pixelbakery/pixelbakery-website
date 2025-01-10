import {
  Contact_SEO,
  Contact_Clients,
  Contact_Jobs,
  Contact_HangOut,
  Contact_ContactForm,
} from '@contact'

// import { Contact_ContactForm } from '@contact'
import type { ReactElement } from 'react'
import Layout_Defaualt from '@/components/layouts/Layout_Default'
import { PageHeader_VarH } from '@pageHeaders/index'

function Page_Contact() {
  return (
    <>
      <Contact_SEO />
      <PageHeader_VarH header='Contact Us' subheader="Please don't ask us about catering" />
      <Contact_Clients />
      <Contact_ContactForm />
      <Contact_Jobs />
      <Contact_HangOut />
    </>
  )
}
//Set page layout
Page_Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Contact
