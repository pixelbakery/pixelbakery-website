import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Close from '@images/Close'
import cn from 'classnames'
import { SendToMonday_Croissants } from '@lib/api_sendToMonday'
function Footer_Mailchimp({ onModalUpdate }) {
  const [checked, setChecked] = useState(true)
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
  // const handleModal = () => {
  //   setModal(!modalOpen)
  //   setSubmitted(false)
  // }
  // const handleSubmitted = () => {
  //   setSubmitted(!submitted)
  // }

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = 'Croissants'
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
    SendToMonday_Croissants(data)
    SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
    setMessage('👩‍🍳 Nice. Check your inbox. <em>bon appetit</em>')
  }
  //////////////////

  // END GSAP
  return (
    <div className='flex flex-col justify-between mx-6'>
      <div className='flex flex-col mt-12 xl:mt-24 justify-start'>
        <div className=' self-center'>
          <button
            onClick={handleOnClick}
            className='duration-300 ease-in-out hover:scale-98 -ml-2   text-blue-dark '
          >
            <Close className='h-12 w-12' />
          </button>

          <h2
            color='cream'
            className='font-bold max-w-md text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl 2xl:max-w-4xl leading-none 2xl:mb-20 mb-2 mt-3 text-cream'
            dangerouslySetInnerHTML={{
              __html: message ? message : `a delicious surprise on us.`,
            }}
          ></h2>
          <p
            className={cn(
              'text-cream leading-none max-w-lg opacity-100 transition-opacity duration-500 mb-4 md:mb-6 pb-0 xl:mb-4 text-xl xl:text-3xl',
              {
                ['opacity-0 pointer-events-none lg:mb-2 text-lg lg:text-lg']: submitted,
              },
            )}
          >
            enter your email below and we&apos;ll send you a free pastry
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn('opacity-100 transition-opacity duration-500 ', {
              ['opacity-0 pointer-events-none']: submitted,
            })}
          >
            <input
              className='bg-cream text-xl xl:text-2xl font-semibold py-4  px-8 text-blue-dark rounded-xl border-0 w-full my-2 cursor-text focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              type='email'
              placeholder='email'
              {...register('email', { required: true })}
            />
            <div></div>

            <div className='my-2 flex justify-start '>
              <input
                className={
                  'rounded-lg bg-cream border-6 border-cream p-1 xl:p-2 my-2 text-blue-dark cursor-pointer shadow-2xl drop-shadow-xl'
                }
                type='checkbox'
                checked={checked}
                onClick={handleCheck}
                {...register('check')}
              />
              <label
                className={
                  'self-center cursor-pointer ml-3 text-cream font-medium xl:font-bold font-lg xl:font-2xl leading-none my-0 py-0'
                }
                htmlFor='check'
                onClick={handleCheck}
              >
                Also sign up for the newsletter that we always forget to send out
              </label>
            </div>

            <button
              type='submit'
              className='px-6 py-3 bg-blue-dark rounded-lg my-3 font-bold text-xl xl:text-2xl duration-300 hover:scale-98 text-cream shadow-lg'
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
