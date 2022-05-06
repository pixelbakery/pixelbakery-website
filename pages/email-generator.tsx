import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import EmailGenerator_Input from '@emailGenerator/EmailGenerator_Input'
import EmailGenerator_Result from '@emailGenerator/EmailGenerator_Result'
import { NextSeo } from 'next-seo'

function EmailGenerator() {
  const [user, setUser] = useState([])

  const [title, setTitle] = useState({ title: '' })
  const [phone, setPhone] = useState({ phone: '' })
  const [name, setName] = useState({ name: '' })
  const [data, setData] = useState({ name: '', phone: '', title: '' })
  const div = useRef(null)

  const [copySuccess, setCopySuccess] = useState(false)
  function handleTitle(event) {
    setTitle(event.target.value)
    handleData(name, phone, title)
  }
  function handleName(event) {
    setName(event.target.value)
    handleData(name, phone, title)
  }
  function handlePhone(event) {
    setPhone(event.target.value)
    handleData(name, phone, title)
  }
  function handleData(name, phone, title) {
    setData({ name: name, phone: phone, title: title })
  }
  const router = useRouter()
  const { pid } = router.query

  return (
    <Main>
      <NextSeo
        noindex={true}
        title='Email Generator | Pixel Bakery '
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com`,
          title: 'Pixel Bakery Design Studio',
          images: [
            {
              url: `https://pixelbakery.com/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multi-disciplinary production studio focused on animation, motion design, and commercial film production`,
            },
          ],
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        }}
      />
      <PageHeader_VarH header='Email Generator' />
      <PageSection className='mb-32'>
        <InnerWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
            <EmailGenerator_Input setUser={setUser} />
            <EmailGenerator_Result user={user} />
          </div>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}

export default EmailGenerator
