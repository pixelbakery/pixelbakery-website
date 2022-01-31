import Button_Filled from '@parts/Button_Filled'
import { useRef, useState } from 'react'
import mailchimp from '@mailchimp/mailchimp_marketing'
// const mailchimp = require('@mailchimp/mailchimp_marketing')

function Footer_Mailchimp() {
  const [checked, setChecked] = useState(true)

  const handleCheck = () => {
    setChecked(!checked)
  }

  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  ////////////
  // MONDAY
  ////////////

  ////////////
  // MAILCHIMP
  ////////////

  const subscribe = async (e) => {
    e.preventDefault()
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const { error } = await res.json()
    if (error) {
      // 4. If there was an error, update the message in state.
      console.log(error)
      return
    }
    // 5. Clear the input value and show a success message.
    inputEl.current.value = ''
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  ///////////
  // SENDGRID
  ///////////

  async function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {}
    if (checked) {
      console.log('sending to mailchimp')
    }
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    await fetch('/api/sendCroissant', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    if (checked) {
      console.log('sending to mailchimp')
      subscribe
    } else console.log("I'm not sending this to mailchimp")
    inputEl.current.value = ''
  }

  return (
    <section className='absolute w-full h-full top-0 left-0 bg-peach z-30'>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='email-input'>{'Email Address'}</label>
        <input
          id='email-input'
          name='email'
          placeholder='you@awesome.com'
          ref={inputEl}
          required
          type='email'
        />
        <div>
          {message ? message : `I'll only send emails when new content is posted. No spam.`}
        </div>
        <label>
          <input type='checkbox' checked={checked} onChange={handleCheck} />
          My Value
        </label>
        <button type='submit'>{'✨ Subscribe 💌'}</button>
      </form>
      <p>Is "My Value" checked? {checked.toString()}</p>
    </section>
  )
}
export default Footer_Mailchimp
