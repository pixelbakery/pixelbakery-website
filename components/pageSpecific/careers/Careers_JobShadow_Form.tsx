/* eslint-disable no-unused-vars */
import Lead from '@typography/Lead'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { SendToMonday_JobShadow } from '@lib/api_sendToMonday'
import { SendToMailchimp, SendEmail_JobShadow } from '@lib/helpers'
type FormInputs = {
  name: string
  school: string
  noParents: boolean
  multipleErrorInput: string
  newsletter: boolean
  message: string
  threePeople: boolean
  email: string
}
function Careers_JobShadow_Form() {
  const [submitted, setSubmitted] = useState(false)

  const yupValidation = Yup.object().shape({
    name: Yup.string()
      .required(`Stranger Danger: What's your name?`)
      .min(5, `Your name is absolutely not that short`)
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.',
      )
      .matches(/^\s*\S+(?:\s+\S+)+\s*$/, 'Please enter your full name.'),
    school: Yup.string().required(`Please enter your school.`),
    message: Yup.string().min(100, `C'mon, put a little bit more effort into your message.`),
    email: Yup.string()
      .email(`There's no way that's an acutal email address.`)
      .required(`We can't really do much without your email.`)
      .max(255, `There's no way your email address is that long.`),
    noParents: Yup.bool().oneOf(
      [true],
      `You must pinky promise that you are not a parent or school counselor.`,
    ),
    threePeople: Yup.bool().oneOf([true], `You must bring two other homies.`),
  })
  const setFormOptions = {
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(yupValidation),
    shouldFocusError: true,
    shouldUnregister: false,
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>(setFormOptions as any)

  // Handle the submit
  function onSubmit(data: any) {
    SendEmail_JobShadow(data)
    SendToMonday_JobShadow(data)
    SendToMailchimp(data, 'Job Shadow')
    setSubmitted(true)
  }
  //////////////////

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('opacity-100 transition-opacity duration-500 grid grid-cols-2 gap-4', {
          // ['opacity-0 hidden pointer-events-none']: submitted,
        })}
      >
        {/* name */}
        <input
          className='col-span-2 px-8 py-4 text-xl font-semibold border-0 rounded-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='text'
          placeholder='full name'
          {...register('name', { required: true })}
        />

        {/* email */}
        <input
          className='col-span-2 px-8 py-4 text-xl font-semibold border-0 rounded-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='email'
          id={'email'}
          placeholder='email'
          {...register('email')}
        />
        {/* school */}
        <input
          className='col-span-2 px-8 py-4 text-xl font-semibold border-0 rounded-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='text'
          placeholder='school'
          {...register('school', { required: true })}
        />
        {/* message */}
        <textarea
          rows={4}
          className='col-span-2 px-8 py-4 text-xl font-semibold border-0 rounded-xl text-wine cursor-text focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          placeholder='tell us about yourself and what about Pixel Bakery interests you'
          {...register('message', { required: true })}
        />
        {/* agreements */}
        <div className='flex col-span-2'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            id='noParents'
            {...register('noParents')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
            }
            htmlFor='noParents'
          >
            I&apos;m filling this out for myself.
          </label>
        </div>
        <div className='flex col-span-2'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            id='threePeople'
            {...register('threePeople')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
            }
            htmlFor='threePeople'
          >
            I have at least 3 people in my group.
          </label>
        </div>

        {/* newsletter */}
        <div className='flex col-span-2 '>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl ring-0 focus:ring-0 '
            }
            type='checkbox'
            id='newsletter'
            {...register('newsletter')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-semibold font-xl leading-none my-0 py-0'
            }
            htmlFor='newsletter'
          >
            Also sign up for the newsletter that we always forget to send out
          </label>
        </div>
        <button
          type='submit'
          className='col-span-2 px-6 py-3 my-3 text-2xl font-bold duration-300 rounded-lg shadow-lg md:col-span-1 bg-blue-dark hover:scale-98 text-cream'
        >
          ✨ let&apos;s do it ✨
        </button>
      </form>
      {/* <div className='invalid-feedback'>{errors.noParents?.message}</div> */}
      {errors ? (
        <ul>
          {Object.entries(errors).map(([type, message], index) => {
            return (
              <li className='text-lg italic font-semibold text-error' key={index}>
                🚨 {Object.values(message)[0].toString()}
              </li>
            )
          })}
        </ul>
      ) : (
        'no errors'
      )}

      <div className={cn({ ['opacity-0 hidden']: !submitted }, { ['opacity-100 ']: submitted })}>
        <Lead>Thanks for your interest 🙂 We&apos;ll be in touch soon.</Lead>
      </div>
    </>
  )
}
export default Careers_JobShadow_Form
