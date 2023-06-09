import Lead from '@typography/Lead'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { SendToMonday_InstagramMerchCampaign } from '@lib/api_sendToMonday'
import { ChevronRightIcon } from '@images/UI_Icons/index'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })
function Surprise_ContactForm() {
  const [checked, setChecked] = useState(true)

  const [submitted, setSubmitted] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = '2022 Instagram Merch Campaign'
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

  //////////////////
  // REACT-HOOK-FORM
  //////////////////

  const { register, handleSubmit, resetField, setError } = useForm()

  // Handle the submit
  const onSubmit = (data) => {
    setError('email', {
      type: 'custom',
      message: 'Make sure your email is entered correctly.',
    })

    SendToMonday_InstagramMerchCampaign(data)
    SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
  }
  //////////////////

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('opacity-100 transition-opacity duration-500 grid grid-cols-3 gap-4', {
          ['opacity-0 hidden pointer-events-none']: submitted,
        })}
      >
        {/* name */}
        <input
          className='col-span-3 md:col-span-2  font-medium py-4  px-8  rounded-xl border-0   text-sm xl:text-xl text-wine cursor-text focus:ring-2 focus:border-blue  focus:ring-blue bg-white'
          type='text'
          placeholder='full name'
          {...register('name', { required: true })}
        />
        <div className='relative col-span-3 md:col-span-1 bg-white border-egg border-inset rounded-xl text-wine cursor-text overflow-hidden flex'>
          {' '}
          <span className=' text-sm xl:text-xl font-semibold relative bottom-0 bg-wine-100 h-full text-wine-400 px-4  overflow-hidden flex flex-col justify-center'>
            @
          </span>
          <input
            className='relative w-full font-medium py-4 border-0 px-8  text-sm xl:text-xl rounded-r-xl  overflow-hidden  focus:ring-0 focus:ring-blue focus:border-blue '
            type='text'
            placeholder='insti handle'
            {...register('instagram', { required: true })}
          />
        </div>
        {/* shirt size */}
        <select
          {...register('size' as never, {})}
          className='col-span-3 md:col-span-1 border-0 rounded-xl py-4 text-sm xl:text-xl text-wine-400 font-medium  px-6 cursor-pointer focus:ring-2 focus:border-blue  focus:ring-blue'
          placeholder='test'
        >
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='' disabled selected>
            Shirt Size
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='XS'>
            XS
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='SM'>
            SM
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='MD'>
            MD
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='LG'>
            LG
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='XL'>
            XL
          </option>
          <option className={'text-wine font-medium text-sm xl:text-xl'} value='2XL'>
            2XL
          </option>
        </select>
        {/* address */}
        <input
          className='col-span-3 md:col-span-2  font-medium py-4  px-8  rounded-xl border-0   text-sm xl:text-xl text-wine cursor-text focus:ring-2 focus:border-blue  focus:ring-blue'
          type='text'
          placeholder='1234 Baller Rd, Apt #420, Thatshitisgasville, 68503'
          {...register('address', { required: true })}
        />

        {/* message */}
        <textarea
          rows={2}
          className='col-span-3  font-medium py-4  px-8  rounded-xl border-0   text-sm xl:text-xl text-wine cursor-text focus:ring-2 focus:border-blue  focus:ring-blue'
          placeholder={`anything you want to get off your chest while you're at it?`}
          {...register('message', { required: false })}
        />

        {/* newsletter */}
        <div className='col-span-3 flex '>
          <input
            className={
              'rounded-lg bg-cream border-6 border-cream p-2 my-0 text-blue cursor-pointer shadow-2xl drop-shadow-xl ring-0 focus:ring-0 '
            }
            type='checkbox'
            checked={checked}
            onClick={handleCheck}
            {...register('check')}
          />
          <label
            className={
              'self-center cursor-pointer ml-3 text-white font-medium font-xl leading-none my-0 py-0'
            }
            htmlFor='check'
            onClick={handleCheck}
          >
            Also sign up for the newsletter that we always forget to send out
          </label>
        </div>

        <button
          type='submit'
          className='col-span-2 md:col-span-1 px-6 py-3 bg-blue rounded-lg my-3 font-bold text-2xl duration-300 hover:scale-98 text-cream shadow-lg flex max-w-sm'
        >
          <div className='text-center flex-grow flex flex-col justify-center leading-none text-cream'>
            💅 get it{' '}
          </div>
          <i className={'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center text-cream'}>
            <ChevronRightIcon />
          </i>
        </button>
      </form>
      <div className={cn({ ['opacity-0 hidden']: !submitted }, { ['opacity-100 ']: submitted })}>
        <Lead className={'lg:mb-4 mt-8'} color='cream'>
          Boom. Done. Thanks again for being a great human 🙂
        </Lead>
        <p className='text-white'>Here&apos;s a video of some cute capivaras vibing in Japan. </p>
        <div className='w-full aspect-w-16 aspect-h-9'>
          <ReactPlayer
            playsInline
            width='100%'
            height='100%'
            url='https://www.youtube.com/watch?v=wCa08BwOOS4'
          />
        </div>
      </div>
    </>
  )
}
export default Surprise_ContactForm
