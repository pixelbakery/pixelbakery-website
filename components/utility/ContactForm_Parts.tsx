/* eslint-disable jsx-a11y/role-supports-aria-props */
import Lead from '@typography/Lead'

import cn from 'classnames'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

import type {
  ErrorsProps,
  PhoneInputProps,
  BaseFieldProps,
  NewsletterProps,
  SubmitProps,
  SolicitationProps,
  MultiSelectProps,
} from 'types'

// --------------------------------------------------------------------------------------
// NOT INTERESTED + THANK YOU
// --------------------------------------------------------------------------------------

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function handleDoubleDown() {
  for (let i = 1; i < 4; i++) {
    await sleep(400)
    window.open('https://youtu.be/OmIGBB2m-_I?t=70', '_blank')
    await sleep(1200)
    window.focus()
  }
  await sleep(1200)
  window.location.replace('https://youtu.be/OmIGBB2m-_I?t=70')
}

export const ContactForm_NotInterested = () => {
  return (
    <div id='notInterested' className='relative py-12'>
      <Lead color='blue'>Thank you for your interest.</Lead>
      <p>We are currently not seeking outside partnerships.</p>
      <a
        onClick={() => handleDoubleDown()}
        className='relative inline-block px-8 py-4 my-4 text-xl font-semibold duration-300 ease-in-out rounded-sm cursor-pointer bg-blue text-cream hover:scale-98'
      >
        But this is really worth it
      </a>
    </div>
  )
}

export const ContactForm_ThankYou = () => {
  return <Lead>Thanks for your message 😉. We&apos;ll get back to you asap.</Lead>
}

// --------------------------------------------------------------------------------------
// NEWSLETTER CHECKBOX
// --------------------------------------------------------------------------------------

export const ContactForm_Newsletter = ({ register }: NewsletterProps) => {
  const [isChecked, setChecked] = useState(true)

  return (
    <div className='flex col-span-2 my-4'>
      <input
        className='p-3 my-0 duration-300 border-2 rounded-lg shadow-2xl cursor-pointer bg-cream border-blue-dark text-blue-dark drop-shadow-lg hover:scale-97'
        type='checkbox'
        id='newsletter'
        checked={isChecked}
        onClick={() => setChecked(!isChecked)}
        {...register('newsletter')}
      />
      <label
        className='self-center py-0 my-0 ml-4 font-semibold leading-none cursor-pointer text-blue-dark'
        htmlFor='newsletter'
      >
        Also sign up for the newsletter that we always forget to send out
      </label>
    </div>
  )
}

// --------------------------------------------------------------------------------------
// TEXT INPUT
// --------------------------------------------------------------------------------------

export const ContactForm_TextInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  autoComplete,
}: BaseFieldProps) => {
  return (
    <input
      className={cn('form-input', className, { error: errors[fieldName] })}
      type='text'
      placeholder={placeHolder}
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      id={fieldName}
      {...register(fieldName)}
      autoComplete={autoComplete}
    />
  )
}

// --------------------------------------------------------------------------------------
// EMAIL INPUT
// --------------------------------------------------------------------------------------

export const ContactForm_EmailInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
}: BaseFieldProps) => {
  return (
    <input
      className={cn('form-input', className, { error: errors[fieldName] })}
      type='email'
      placeholder={placeHolder}
      autoComplete='email'
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      id={fieldName}
      {...register(fieldName)}
    />
  )
}

// --------------------------------------------------------------------------------------
// URL INPUT
// --------------------------------------------------------------------------------------

export const ContactForm_UrlInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
}: BaseFieldProps) => {
  return (
    <input
      className={cn('form-input', className, { error: errors[fieldName] })}
      type='url'
      placeholder={placeHolder}
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      id={fieldName}
      {...register(fieldName)}
    />
  )
}

// --------------------------------------------------------------------------------------
// TEXTAREA
// --------------------------------------------------------------------------------------

export const ContactForm_TextAreaInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  rows,
  autoComplete,
}: BaseFieldProps) => {
  return (
    <textarea
      className={cn('form-input', className, { error: errors[fieldName] })}
      placeholder={placeHolder}
      id={fieldName}
      rows={rows}
      autoComplete={autoComplete}
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      {...register(fieldName)}
    />
  )
}

// --------------------------------------------------------------------------------------
// PHONE INPUT
// --------------------------------------------------------------------------------------
export const ContactForm_PhoneInput = ({
  errors,
  fieldName,
  placeHolder,
  className,
  register,
}: PhoneInputProps) => {
  // 1. Must ensure `fieldName` is *never* undefined
  // If it might be undefined, handle that
  if (!fieldName) return null

  const [value, setValue] = useState('')

  const formatPhoneNumber = (input: string) => {
    const numericInput = input.replace(/\D/g, '')
    if (numericInput.length <= 3) {
      return numericInput
    } else if (numericInput.length <= 6) {
      return `(${numericInput.slice(0, 3)}) ${numericInput.slice(3)}`
    } else {
      return `(${numericInput.slice(0, 3)}) ${numericInput.slice(3, 6)}-${numericInput.slice(
        6,
        10,
      )}`
    }
  }

  // 2. If we’re relying on `register` to handle `onChange`, remove handleChange
  //   since it’s unused. Or rename it and pass it to `onChange` yourself.

  return (
    <input
      className={cn('form-input', className, {
        error: errors[fieldName],
      })}
      type='tel'
      placeholder={placeHolder}
      id={fieldName}
      value={value}
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      {...register(fieldName, {
        onChange: (e) => setValue(formatPhoneNumber(e.target.value)),
      })}
    />
  )
}

// --------------------------------------------------------------------------------------
// ERRORS
// --------------------------------------------------------------------------------------

export const ContactForm_Errors = ({ errors, className }: ErrorsProps) => {
  return (
    <div className={cn('text-peach', className)}>
      {errors ? (
        <ul>
          {Object.entries(errors).map(([fieldName, errorObj]) => {
            // If there's no error or if it's not a simple FieldError, skip rendering
            if (!errorObj) return null

            // At runtime, narrow down to the actual FieldError case
            const maybeFieldError = errorObj as { message?: string }
            const msg = maybeFieldError.message

            // If it’s not a string, skip
            if (typeof msg !== 'string') return null

            return (
              <li className='text-lg italic font-medium text-error' key={fieldName}>
                🚨 {msg}
              </li>
            )
          })}
        </ul>
      ) : (
        'no errors'
      )}
    </div>
  )
}

// --------------------------------------------------------------------------------------
// SUBMIT BUTTON
// --------------------------------------------------------------------------------------

export const ContactForm_Submit = ({ valueText, className, disabled }: SubmitProps) => {
  const val = valueText || 'Submit'
  return (
    <div>
      <input
        className={cn('form-submit', className)}
        type='submit'
        value={val}
        disabled={disabled ?? false}
      />
    </div>
  )
}

// --------------------------------------------------------------------------------------
// SOLICITATION RADIO
// --------------------------------------------------------------------------------------

export const ContactForm_Solicitation = ({ register, errors }: SolicitationProps) => {
  return (
    <div className='flex-col col-span-2 my-4'>
      <span
        className={cn('text-blue-dark text-lg mb-1 font-semibold leading-none', {
          ['text-error']: errors['soliciting'],
        })}
      >
        Is this message regarding goods or services you&apos;d like to offer us?
      </span>
      <div className='flex gap-x-6'>
        <div>
          <input
            {...register('soliciting')}
            type='radio'
            name='soliciting'
            value={'true'}
            id='soliciting-yes'
            className='hidden peer'
            aria-invalid={errors['soliciting'] ? 'true' : 'false'}
          />
          <label htmlFor='soliciting-yes' className='radio-button'>
            <span>Yes</span>
          </label>
        </div>
        <div>
          <input
            {...register('soliciting')}
            type='radio'
            name='soliciting'
            value={'false'}
            id='soliciting-no'
            className='hidden peer'
            aria-invalid={errors['soliciting'] ? 'true' : 'false'}
          />
          <label htmlFor='soliciting-no' className='radio-button'>
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  )
}

// --------------------------------------------------------------------------------------
// MULTI-SELECT
// --------------------------------------------------------------------------------------

export const ContactForm_MultiSelect = ({
  className,
  errors,
  control,
  fieldName,
  options,
}: MultiSelectProps) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select
          options={options}
          className={cn('form-input', className, { error: errors[fieldName] })}
          aria-invalid={errors[fieldName] ? 'true' : 'false'}
          onChange={onChange}
          onBlur={onBlur}
          id={fieldName}
          classNamePrefix='skills'
          instanceId={fieldName}
          value={value}
          name={name}
          ref={ref}
          isMulti
        />
      )}
    />
  )
}
