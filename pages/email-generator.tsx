import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import { useState } from 'react'

function EmailGenerator() {
  const [name, setName] = useState(null)
  const [title, setTitle] = useState(null)
  const [phone, setPhone] = useState(null)

  function handleName(event) {
    setName(event.target.value)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handlePhone(event) {
    setPhone(event.target.value)
  }
  return (
    <Main>
      <PageHeader_VarH header='Email Generator' />
      <PageSection>
        <InnerWrapper>
          <div>
            <form>
              <input
                name={'name'}
                type={'text'}
                placeholder='First M Last'
                className=''
                required
                onChange={handleName}
              />
              <input
                name={'title'}
                type={'text'}
                placeholder='Job Title'
                className=''
                required
                onChange={handleTitle}
              />
              <input
                name={'phone'}
                type={'text'}
                placeholder='Phone Number (optional)'
                onChange={handlePhone}
                className=''
              />
            </form>
          </div>
        </InnerWrapper>
      </PageSection>
      <h1>{name}</h1>
      <h1>{title}</h1>
      <h1>{phone}</h1>

      <div></div>
    </Main>
  )
}
export default EmailGenerator
