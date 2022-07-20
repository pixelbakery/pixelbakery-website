import Lead from '@typography/Lead'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import 'react-toastify/dist/ReactToastify.css'
import { SendToMonday_JobShadow } from '@lib/api_sendToMonday'

function Careers_JobShadow_Form() {
  const [checked, setChecked] = useState(true)
  const [checked3People, setChecked3People] = useState(false)
  const [checkedNoParents, setCheckedNoParents] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const handleCheck3People = () => {
    setChecked3People(!checked3People)
  }
  const handleCheck = () => {
    setChecked(!checked)
  }
  const handleCheckNoParents = () => {
    setCheckedNoParents(!checkedNoParents)
  }

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = 'Job Shadow'
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
    await fetch('/api/sendJobShadowRequest', {
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
    SendToMonday_JobShadow(data)
    SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
  }
  //////////////////

  // END GSAP

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('opacity-100 transition-opacity duration-500 grid grid-cols-2 gap-4', {
          ['opacity-0 hidden pointer-events-none']: submitted,
        })}
      >
        {/* name */}
        <input
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-0  text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='text'
          placeholder='full name'
          {...register('name', { required: true })}
        />

        {/* email */}
        <input
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-0  text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        {/* school */}
        <input
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-0  text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          type='text'
          placeholder='school'
          {...register('school', { required: true })}
        />
        {/* message */}
        <textarea
          rows={4}
          className='col-span-2  font-semibold py-4  px-8  rounded-xl border-0  text-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          placeholder='tell us about yourself and what about Pixel Bakery interests you'
          {...register('message', { required: true })}
        />
        {/* agreements */}
        <div className='col-span-2 flex'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            checked={checkedNoParents}
            onClick={handleCheckNoParents}
            {...register('checkNoParents')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
            }
            htmlFor='checkNoParents'
            onClick={handleCheckNoParents}
          >
            I&apos;m filling this out for myself.
          </label>
        </div>
        <div className='col-span-2 flex'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            checked={checked3People}
            onClick={handleCheck3People}
            {...register('check3People')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
            }
            htmlFor='check3People'
            onClick={handleCheck3People}
          >
            I have at least 3 people in my group.
          </label>
        </div>

        {/* newsletter */}
        <div className='col-span-2 flex '>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl ring-0 focus:ring-0 '
            }
            type='checkbox'
            checked={checked}
            onClick={handleCheck}
            {...register('check')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
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
        <Lead>Thanks for your interest 🙂 We&apos;ll be in touch soon.</Lead>
      </div>
    </>
  )
}
export default Careers_JobShadow_Form
