import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Close from '@images/Close'
import cn from 'classnames'
import { SendToMonday_Croissants, SendEmail_Croissants } from '@lib'
import { usePlausible } from 'next-plausible'

interface FooterObjectCroissantProps {
  onModalUpdate: (value: boolean) => void
}

interface CroissantFormData {
  email: string
  check?: boolean
  tag: string
}

export default function Footer_Object_Croissant({ onModalUpdate }: FooterObjectCroissantProps) {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const plausible = usePlausible()
  const handleOnClick = () => {
    onModalUpdate(false)
    setSubmitted(false)
    setMessage('a delicious surprise on us.')
  }

  const { register, handleSubmit, resetField } = useForm<CroissantFormData>()

  const onSubmit = (data: CroissantFormData) => {
    SendToMonday_Croissants(data)
    SendEmail_Croissants(data)
    resetField('email')
    plausible('Custom Event', { props: { source: 'croissant-submit' } })
    setSubmitted(true)
    setMessage('👩‍🍳 Nice. Check your inbox. <br/><br/><em>bon appetit</em>')
  }

  return (
    <div className='flex flex-row justify-center w-full max-w-4xl mx-auto mt-12 align-self-center xl:mt-24'>
      <div className='self-center px-12'>
        <button
          onClick={handleOnClick}
          className='-ml-2 duration-300 ease-in-out hover:scale-95 hover:rotate-90 text-blue-dark '
        >
          <Close className='w-12 h-12 ' />
        </button>

        <p
          color='cream'
          className='max-w-md mt-3 mb-2 text-4xl font-bold leading-none font-geologica sm:text-5xl xl:text-5xl 2xl:text-6xl 2xl:max-w-4xl 2xl:mb-20 text-cream'
          dangerouslySetInnerHTML={{
            __html: message || '👩‍🍳 A delicious surprise on us.',
          }}
        ></p>

        {!submitted && (
          <div>
            <p
              className={cn(
                'font-geologica text-cream leading-none max-w-lg opacity-100 transition-opacity duration-500 mb-4 md:mb-6 pb-0 xl:mb-4 text-xl xl:text-3xl',
                {
                  ['opacity-0 pointer-events-none lg:mb-2 text-lg lg:text-lg']: submitted,
                },
              )}
            >
              Enter your email below and we&apos;ll send you a free pastry
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn('opacity-100 transition-opacity duration-500 ', {
                ['opacity-0 pointer-events-none']: submitted,
              })}
            >
              <input
                className='w-full px-8 py-4 my-2 text-xl font-semibold border-0 bg-cream xl:text-2xl text-blue-dark rounded-xl cursor-text focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
                type='email'
                placeholder='email'
                {...register('email', { required: true })}
              />

              <button
                type='submit'
                className='px-6 py-3 my-3 text-xl font-bold duration-300 rounded-lg shadow-lg bg-blue-dark xl:text-2xl hover:scale-98 text-cream'
              >
                {'✨ Yummy! ✨ '}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
