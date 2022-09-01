import Lead from '@typography/Lead'
import cn from 'classnames'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format'
export const ContactForm_NotInterested = () => {
  return (
    <div id='notInterested' className='py-12'>
      <Lead color='blue'>Thank you for your interest.</Lead>
      <p>We are currently not seeking outside partnerships.</p>
    </div>
  )
}

export const ContactForm_ThankYou = () => {
  return <Lead>Thanks for your message 😉  We&apos;ll get back to you asap. </Lead>
}

export const ContactForm_Newsletter = ({ register }) => {
  const [isChecked, setChecked] = useState(true)
  return (
    <div className='col-span-2 flex my-4'>
      <input
        className={
          'rounded-lg bg-cream border-2 border-blue-dark p-3 my-0 text-blue-dark cursor-pointer shadow-2xl drop-shadow-lg hover:scale-97 duration-300'
        }
        type='checkbox'
        name={'newsletter'}
        id='newsletter'
        checked={isChecked}
        onClick={() => setChecked(!isChecked)}
        {...register('newsletter')}
      />
      <label
        className={
          'self-center cursor-pointer ml-4 text-blue-dark  font-semibold leading-none my-0 py-0 '
        }
        htmlFor='newsletter'
      >
        Also sign up for the newsletter that we always forget to send out
      </label>
    </div>
  )
}
interface Inputs {
  register: any
  errors: any
  fieldName: string
  placeHolder?: string
  className?: string
  rows?: number
}
interface PhoneInputs {
  control: any
  errors: any
  fieldName: string
  placeHolder?: string
  className?: string
}
interface Errors {
  errors: any
  className?: string
}
interface Submit {
  valueText?: string
  className?: string
  disabled?: boolean
}
export const ContactForm_TextInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
}: Inputs) => {
  return (
    <>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      <input
        className={cn(' form-input', className, { ['error']: errors[fieldName] })}
        type='text'
        placeholder={placeHolder}
        name={fieldName}
        aria-invalid={errors[fieldName] ? 'true' : 'false'}
        id={fieldName}
        autoFocus
        {...register(fieldName)}
      />
    </>
  )
}
export const ContactForm_EmailInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
}: Inputs) => {
  return (
    <>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      <input
        className={cn(' form-input', className, { ['error']: errors[fieldName] })}
        type='email'
        placeholder={placeHolder}
        autoFocus
        name={fieldName}
        aria-invalid={errors[fieldName] ? 'true' : 'false'}
        id={fieldName}
        {...register(fieldName)}
      />
    </>
  )
}

export const ContactForm_UrlInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
}: Inputs) => {
  return (
    <>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      <input
        className={cn(' form-input', className, { ['error']: errors[fieldName] })}
        type='url'
        placeholder={placeHolder}
        autoFocus
        name={fieldName}
        aria-invalid={errors[fieldName] ? 'true' : 'false'}
        id={fieldName}
        {...register(fieldName)}
      />
    </>
  )
}
export const ContactForm_TextAreaInput = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  rows,
}: Inputs) => {
  return (
    <>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      <textarea
        className={cn('form-input', className, { ['error']: errors[fieldName] })}
        type='text'
        placeholder={placeHolder}
        name={fieldName}
        autoFocus
        id={fieldName}
        aria-invalid={errors[fieldName] ? 'true' : 'false'}
        rows={rows}
        {...register(fieldName)}
      />
    </>
  )
}

export const ContactForm_PhoneInput = ({
  control,
  errors,
  placeHolder,
  fieldName,
  className,
}: PhoneInputs) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <NumberFormat
          format='(###) ### ####'
          name={fieldName}
          className={cn('form-input', className, { ['error']: errors[fieldName] })}
          // allowEmptyFormatting
          type='tel'
          value={value}
          aria-invalid={errors[fieldName] ? 'true' : 'false'}
          placeholder={placeHolder}
          autoFocus
          onBlur={onBlur}
          onValueChange={(v) => {
            if (typeof value === 'number') {
              onChange(v.floatValue)
              return
            }
            onChange(v.value)
          }}
          ref={ref}
        />
      )}
    />
  )
}

export const ContactForm_Errors = ({ errors, className }: Errors) => {
  return (
    <div className={cn(' text-peach', className)}>
      {errors ? (
        <ul>
          {Object.entries(errors).map(([type, message]) => {
            return (
              <li className='text-error font-medium text-lg italic' key={type}>
                🚨 {Object.values(message)[0].toString()}
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

export const ContactForm_Submit = ({ valueText, className, disabled }: Submit) => {
  let val
  if (valueText != undefined) val = valueText
  else val = 'Submit'

  return (
    <div className=''>
      <input
        className={cn('form-submit', className)}
        type='submit'
        value={val}
        autoFocus
        disabled={disabled === null ? false : disabled}
      />
    </div>
  )
}

export const ContactForm_Solicitation = ({ register, errors }) => {
  return (
    <div className='col-span-2 flex-col my-4'>
      <span
        className={cn('text-blue-dark text-lg mb-1 font-semibold leading-none', {
          ['text-error']: errors['soliciting'],
        })}
      >
        Is this message regarding goods or services you'd like to offer us?
      </span>

      <div className='flex gap-x-6'>
        <div>
          <input
            {...register('soliciting')}
            type='radio'
            name='soliciting'
            value={true}
            autoFocus
            id='soliciting-yes'
            className='hidden peer'
            aria-invalid={errors['soliciting'] ? 'true' : 'false'}
          />
          <label htmlFor='soliciting-yes' className='radio-button '>
            <span>Yes</span>
          </label>
        </div>

        <div>
          <input
            {...register('soliciting')}
            type='radio'
            name='soliciting'
            value={false}
            autoFocus
            id='soliciting-no'
            className='hidden peer'
            aria-invalid={errors['soliciting'] ? 'true' : 'false'}
          />
          <label htmlFor='soliciting-no' className='radio-button '>
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  )
}
