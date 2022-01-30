import Head from 'next/head'
import Image from 'next/image'
import SendMail from '../../pages/api/mail'

export default function Home() {
  async function handleOnSubmit(e) {
    e.preventDefault()

    const formData = {}

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    await fetch('../api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }
  return (
    <section>
      <h1>Contact Me</h1>

      <p>Please be human!</p>

      <div>
        <style jsx>{`
          form {
            font-size: 1.2em;
          }

          label {
            display: block;
            margin-bottom: 0.2em;
          }

          input,
          textarea {
            width: 100%;
            padding: 0.8em;
          }

          button {
            color: white;
            font-size: 1em;
            background-color: blueviolet;
            padding: 0.8em 1em;
            border: none;
            border-radius: 0.2em;
          }
        `}</style>
        <form onSubmit={handleOnSubmit}>
          <p>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' name='email' />
          </p>
          <p>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' />
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    </section>
  )
}
