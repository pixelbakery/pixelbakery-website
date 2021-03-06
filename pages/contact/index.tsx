import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))

import Contact_Clients from '@contact/Contact_Clients'
import Contact_ContactForm from '@contact/Contact_ContactForm'
import Contact_Jobs from '@contact/Contact_Jobs'
import Contact_HangOut from '@contact/Contact_HangOut'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'

function Contact() {
  return (
    <Main id='contact-page'>
      <NextSeo
        title='Contact'
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com/contact`,
          title: 'Contact',
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <PageHeader_VarH header='Contact Us' subheader="Please don't ask us about catering" />
      <Contact_Clients />
      <Contact_ContactForm />
      <Contact_Jobs />
      <Contact_HangOut />
    </Main>
  )
}

export default Contact
