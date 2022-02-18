import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import Lead from '@typography/Lead'

export default function LogoAnimation_GetStarted_Form() {
  const [checked, setChecked] = useState(true)
  const handleCheck = () => {
    setChecked(!checked)
  }
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    formState: { errors },
  } = useForm()
  // Handle the submit
  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)

    // SendToSendgrid(data)
    sendToMonday(data)
    SendToMailchimp(data)
    // SendToMailchimp(data)
    resetField('email')
    resetField('phone')
    resetField('entity')
    resetField('name')
    resetField('message ')
    setSuccessMessage(
      "Thanks! Your request has been submitted. We'll be in touch shortly to follow up. If you have any questions, feel free to email us at <a classname='text-peach border-b border-peach hover:text-opacity-75' href='mailto:hello@pixelbakery.com'>hello@pixelbakery.com</a>. ",
    )

    setSubmitted(true)

    console.log(errors)
  }

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = 'Logo Animation Form'
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

  ////////////
  // MONDAY
  ////////////
  async function sendToMonday(data) {
    let logoPackage = data.package
    if (data.package == 'kitchenSink') {
      logoPackage = 'Kitchen Sink'
    }
    const query =
      'mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:2315048602, item_name:$name, column_values:$columnVals) { id } }'
    const vars = {
      name: data.name,
      columnVals: JSON.stringify({
        status: logoPackage,
        text: data.phone,
        email: { email: data.email, text: data.email },
        text6: data.entity,
        long_text: { text: data.message },
        checkbox: { checked: data.check.toString() },
      }),
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
  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    console.log('sendgrid')
    await fetch('/api/sendLogoAnimation ', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }

  return (
    <>
      <form
        className={cn('mx-auto max-w-2xl  flex flex-wrap gap-2', {
          ['hidden opacity-0']: submitted,
        })}
        onSubmit={handleSubmit(onSubmit)}
        data-netlify='true'
      >
        <input
          className='form-border-b w-full'
          type='text'
          placeholder='name'
          {...register('name', { required: true })}
        />
        <input
          className='form-border-b w-full'
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        <input
          className='form-border-b w-full'
          type='tel'
          placeholder='phone'
          {...register('phone', {})}
        />
        <input
          className='form-border-b w-full'
          type='text'
          placeholder='company / entity'
          {...register('entity', {})}
        />

        <div className='w-full mx-auto config-select text-center z-20 mt-2'>
          <div className='px-4  py-2 flex flex-col md:flex-row gap-x-8 justify-center  relative   mb-1 rounded-xl border border-blue bg-transparent'>
            <input
              {...register('package', { required: true })}
              type='radio'
              name='package'
              value='Essentials'
              id='package-essentials'
              className='absolute hidden'
            />
            <label
              htmlFor='package-essentials'
              className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out leading-none self-center my-0 py-4 px-3'
            >
              <span>Essentials</span>
            </label>
            <input
              {...register('package', { required: true })}
              type='radio'
              name='package'
              value='Standard'
              id='package-standard'
              className='absolute hidden'
              defaultChecked
            />
            <label
              htmlFor='package-standard'
              className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out leading-none self-center my-0 py-4 px-3'
            >
              <span>Standard</span>
            </label>
            <input
              {...register('package', { required: true })}
              type='radio'
              name='package'
              value='Gourmet'
              className='absolute hidden'
              id='package-gourmet'
            />{' '}
            <label
              htmlFor='package-gourmet'
              className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out leading-none self-center my-0 py-4 px-3'
            >
              <span>Gourmet</span>
            </label>
            <input
              {...register('package', { required: true })}
              type='radio'
              name='package'
              value='Kitchen Sink'
              className='absolute hidden'
              id='package-kitchenSink'
            />
            <label
              htmlFor='package-kitchenSink'
              className=' relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out leading-none self-center my-0 py-4 px-3'
            >
              <span>Kitchen Sink</span>
            </label>
            <span className='absolute px-2 duration-500 switch pb-2 '>
              <div className='bg-blue w-full h-12 rounded-xl'></div>
            </span>
          </div>
        </div>
        <textarea
          className='form-border-b w-full'
          placeholder='Any additional details you would like to share?'
          rows={5}
          {...register('message', {})}
        />

        <input
          className='cursor-pointer bg-blue text-lg font-bold text-cream rounded-md px-8 py-3 '
          type='submit'
        />
        <div className='col-span-2 flex my-2'>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-2 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
            }
            type='checkbox'
            checked={checked}
            name={'newsletter'}
            onClick={handleCheck}
            {...register('check')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-wine font-medium font-md leading-none my-0 py-0'
            }
            htmlFor='check  '
            onClick={handleCheck}
          >
            Also sign up for the newsletter that we always forget to send out
          </label>
        </div>
      </form>

      <div
        className='max-w-2xl font-semibold text-lg '
        dangerouslySetInnerHTML={{
          __html: successMessage,
        }}
      />
    </>
  )
}
