import Lead from '@typography/Lead'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import 'react-toastify/dist/ReactToastify.css'
import { SendToMonday_Onboarding } from '@lib/api_sendToMonday'
function Footer_Mailchimp() {
  const [checked, setChecked] = useState(true)
  const handleCheck = () => {
    setChecked(!checked)
  }
  const [submitted, setSubmitted] = useState(false)

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = 'Onboarding Form'
    if (checked) {
      await fetch('/api/mailchimp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      return
    }
  }
  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    await fetch('/api/sendOnboarding', {
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
    setError,
    formState: { errors },
  } = useForm()

  // Handle the submit
  const onSubmit = (data) => {
    setError('email', {
      type: 'custom',
      message: 'Make sure your email is entered correctly.',
    })
    SendToSendgrid(data)
    SendToMonday_Onboarding(data)
    SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
  }
  //////////////////

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('opacity-100 transition-opacity duration-500 grid grid-cols-2 gap-4', {
          ['opacity-0 hidden pointer-events-none']: submitted,
        })}
      >
        {/* name */}
        <input
          className='col-span-2 md:col-span-1  font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='text'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {/* company */}
        <input
          className='col-span-2 md:col-span-1 font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='text'
          placeholder='company/entity'
          {...register('company', {})}
        />
        <input
          type='url'
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          placeholder='website (must start with https://)'
          {...register('website', {})}
        />
        {/* email */}
        <input
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        {/* subject */}
        <input
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='text'
          placeholder='subject'
          {...register('subject', { required: true })}
        />
        {/* message */}
        <textarea
          rows={4}
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-1 border-blue-dark text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          placeholder='tell us about your project idea'
          {...register('message', { required: true })}
        />

        <div className='col-span-2 flex'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-2 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            checked={checked}
            onClick={handleCheck}
            {...register('check')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-wine font-bold font-xl leading-none my-0 py-0'
            }
            htmlFor='check'
            onClick={handleCheck}
          >
            Also sign up for the newsletter that we always forget to send out
          </label>
        </div>

        <button
          type='submit'
          className='col-span-2 md:col-span-1 px-6 py-3 bg-blue-dark rounded-lg my-3 font-bold text-2xl duration-300 hover:scale-98 text-cream shadow-lg'
        >
          ✨ let&apos;s do it ✨
        </button>
      </form>
      <div className={cn({ ['opacity-0 hidden']: !submitted }, { ['opacity-100 ']: submitted })}>
        <Lead>Thanks for your interest 🙂 We'll be in touch soon.</Lead>
      </div>
    </div>
  )
}
export default Footer_Mailchimp
