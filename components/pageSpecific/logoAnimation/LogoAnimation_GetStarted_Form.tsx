import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { SendToMonday_LogoAnimation } from '@lib'
import { usePlausible } from 'next-plausible'

export default function LogoAnimation_GetStarted_Form() {
  const plausible = usePlausible()

  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const {
    register,
    handleSubmit,
    resetField,
    // setError,
  } = useForm()
  // Handle the submit
  const onSubmit = ({ data }: any) => {
    SendToSendgrid(data)
    SendToMonday_LogoAnimation(data)
    plausible('Custom Event', { props: { source: 'logo-animation-submit' } })

    resetField('email')
    resetField('phone')
    resetField('entity')
    resetField('name')
    resetField('message')
    setSuccessMessage(
      "Thanks! Your request has been submitted. We'll be in touch shortly to follow up.",
    )

    setSubmitted(true)
  }

  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid({ data }: any) {
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
      >
        <input
          className='w-full form-border-b focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='text'
          placeholder='name'
          {...register('name', { required: true })}
        />
        <input
          className='w-full form-border-b focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='email'
          placeholder='email'
          {...register('email', { required: true })}
        />
        <input
          className='w-full form-border-b focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='tel'
          placeholder='phone'
          {...register('phone', {})}
        />
        <input
          className='w-full form-border-b focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          type='text'
          placeholder='company / entity'
          {...register('entity', {})}
        />

        <div className='z-20 w-full mx-auto mt-2 text-center config-select'>
          <div className='relative flex flex-col justify-center px-4 py-2 mb-1 bg-transparent border md:flex-row gap-x-8 rounded-xl border-blue'>
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
              className='relative z-10 self-center inline-block px-3 py-4 my-0 leading-none transition-all duration-500 ease-in-out cursor-pointer text-wine'
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
              className='relative z-10 self-center inline-block px-3 py-4 my-0 leading-none transition-all duration-500 ease-in-out cursor-pointer text-wine'
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
              className='relative z-10 self-center inline-block px-3 py-4 my-0 leading-none transition-all duration-500 ease-in-out cursor-pointer text-wine'
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
              className='relative z-10 self-center inline-block px-3 py-4 my-0 leading-none transition-all duration-500 ease-in-out cursor-pointer text-wine'
            >
              <span>Kitchen Sink</span>
            </label>
            <span className='absolute px-2 pb-2 duration-500 switch '>
              <div className='w-full h-12 bg-blue rounded-xl'></div>
            </span>
          </div>
        </div>
        <textarea
          className='w-full form-border-b focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
          placeholder='Any additional details you would like to share?'
          rows={5}
          {...register('message', {})}
        />

        <input
          className='px-8 py-3 text-lg font-bold rounded-md cursor-pointer bg-blue text-cream '
          type='submit'
        />
      </form>

      <div
        className='max-w-2xl text-lg font-semibold '
        dangerouslySetInnerHTML={{
          __html: successMessage,
        }}
      />
    </>
  )
}
