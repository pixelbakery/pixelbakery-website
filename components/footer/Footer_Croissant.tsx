import Lead from '@typography/Lead'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Close from '@images/Close'
import cn from 'classnames'
function Footer_Mailchimp({ onModalUpdate }) {
  const [checked, setChecked] = useState(true)
  const [modalOpen, setModal] = useState(!false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const handleOnClick = (index) => {
    // this next line will update the state in the parent component
    onModalUpdate(false)
    setSubmitted(false)
    setMessage('a delicious surprise on us.')
  }

  const handleCheck = () => {
    setChecked(!checked)
  }
  const handleModal = () => {
    setModal(!modalOpen)
    setSubmitted(false)
  }
  const handleSubmitted = () => {
    setSubmitted(!submitted)
  }

  ////////////
  // MONDAY
  ////////////
  async function SendToMonday(data) {
    data.tag = 'Croissants'
    const query =
      'mutation ($email: String!) { create_item (board_id:2222479021, item_name:$email) { id } }'
    const vars = {
      email: data.email,
    }
    fetch('https://api.monday.com/v2', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzOTI1NDQyNiwidWlkIjo2MjMxNTk0LCJpYWQiOiIyMDIyLTAxLTA0VDE3OjAxOjA1LjIwM1oiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjoyODE2ODI0LCJyZ24iOiJ1c2UxIn0.nkdU5cHY8Ut9NHMUcyXqqz2ciKaR3BdNByVi5hIzsB8',
      },
      body: JSON.stringify({
        query: query,
        variables: JSON.stringify(vars),
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(JSON.stringify(res, null, 2)))
  }

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    if (checked) {
      console.log('sending to mailchimp')
      await fetch('/api/mailchimp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      console.log('not sending to mailchimp')
      return
    }
  }
  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    console.log('sendgrid')
    await fetch('/api/sendCroissant', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }

  //////////////////
  // REACT-HOOK-FORM
  //////////////////

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm()

  // Handle the submit
  const onSubmit = (data) => {
    SendToSendgrid(data)
    SendToMonday(data)
    SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
    setMessage('👩‍🍳 Nice. Check your inbox. <em>bon appetit</em>')

    console.log(errors)
  }
  //////////////////

  // END GSAP
  return (
    <div className='flex flex-col justify-between mx-6'>
      <div className='flex flex-col mt-12 lg:mt-24 justify-start'>
        <div className=' self-center'>
          <button
            onClick={handleOnClick}
            className='duration-300 ease-in-out hover:scale-98 -ml-2   text-blue-dark '
          >
            <Close className='h-12 w-12' />
          </button>

          <h2
            color='cream'
            className='font-bold max-w-md text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-4xl leading-none 2xl:mb-20 mb-2 mt-3 text-cream'
            dangerouslySetInnerHTML={{
              __html: message ? message : `a delicious surprise on us.`,
            }}
          ></h2>
          <Lead
            color='cream'
            className={cn('opacity-100 transition-opacity duration-500 lg:mb-8', {
              ['opacity-0 pointer-events-none']: submitted,
            })}
          >
            enter your email below and we'll send you a free pastry
          </Lead>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn('opacity-100 transition-opacity duration-500 ', {
              ['opacity-0 pointer-events-none']: submitted,
            })}
          >
            <input
              className='bg-cream text-2xl font-semibold py-4  px-8 text-blue-dark rounded-xl border-0 w-full my-2 cursor-text'
              type='email'
              placeholder='email'
              {...register('email', { required: true })}
            />
            <div></div>

            <div className='my-2 flex justify-start '>
              <input
                className={
                  'rounded-lg bg-cream border-6 border-cream p-2 my-2 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
                }
                type='checkbox'
                checked={checked}
                onClick={handleCheck}
                {...register('check', { required: true })}
              />
              <label
                className={
                  'self-center cursor-pointer ml-3 text-cream font-bold font-xl leading-none my-0 py-0'
                }
                htmlFor='check'
                onClick={handleCheck}
              >
                Also sign up for the newsletter that we always forget to send out
              </label>
            </div>

            <button
              type='submit'
              className='px-6 py-3 bg-blue-dark rounded-lg my-3 font-bold text-2xl duration-300 hover:scale-98 text-cream shadow-lg'
            >
              {'✨ Yummy! ✨ '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Footer_Mailchimp
