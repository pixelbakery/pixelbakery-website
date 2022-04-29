import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import EmailGenerator_Input from '@emailGenerator/EmailGenerator_Input'
import EmailGenerator_Result from '@emailGenerator/EmailGenerator_Result'

function EmailGenerator(props) {
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
