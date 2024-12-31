import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { usePlausible } from 'next-plausible'

import * as Yup from 'yup'
import {
  ContactForm_TextInput,
  ContactForm_EmailInput,
  ContactForm_TextAreaInput,
  ContactForm_Newsletter,
  ContactForm_Errors,
  ContactForm_Solicitation,
  ContactForm_Submit,
  ContactForm_UrlInput,
  ContactForm_NotInterested,
  ContactForm_ThankYou,
  ContactForm_PhoneInput,
} from '@utility/ContactForm_Parts'
import {
  SendToMailchimp,
  SendEmail_Onboarding,
  SendEmail_OnboardingConfirmation,
} from '@lib/helpers'
import { SendToMonday_ContactForm } from '@lib/api_sendToMonday'

import type { FormProps } from '@types'

interface BaseFormInputs {
  name: string
  entity?: string
  multipleErrorInput?: string
  newsletter?: boolean
  message: string
  soliciting: string | null
  subject: string
  value?: string
  phone?: string
  email: string
  website?: string | undefined
}

// Extended interface (entity required)
export interface FormInputsEntityRequired extends Omit<BaseFormInputs, 'entity'> {
  entity: string
}
// ─────────────────────────────────────────────────────────────────────────────
// YUP VALIDATION SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .min(5, 'Your name is too short.')
    .matches(/^\s*\S+(?:\s+\S+)+\s*$/, 'Please enter your full name.'),
  subject: Yup.string()
    .required('Please enter a subject line.')
    .min(8, 'Your subject line is too short.'),
  entity: Yup.string(),
  message: Yup.string()
    .required('Please provide a message.')
    .min(30, 'Please write something more in-depth.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .test('len', 'Please enter a valid phone number.', (val) =>
      val ? val.replace(/\D/g, '').length === 10 : false,
    ),
  website: Yup.string().url('Please enter a valid URL.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('We need your email to contact you.')
    .max(255, 'Your email address is too long.'),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
  multipleErrorInput: Yup.string()
    .max(30, 'Input is too long.')
    .matches(/^[A-Za-z0-9 ]*$/, 'Alphanumeric only, buddy.')
    .nullable(),
})

// ─────────────────────────────────────────────────────────────────────────────
// SUB-FORM COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Form({
  register,
  errors,

  hideForm,
  handleSubmit,
  setSubmitted,
  setHideForm,
}: FormProps) {
  const plausible = usePlausible()

  const onSubmit = (data: BaseFormInputs) => {
    if (data.soliciting === 'true') {
      // the user is soliciting us => hide form
      setHideForm(true)
    } else {
      // legit inquiry => handle onboarding
      SendEmail_Onboarding(data)
      SendEmail_OnboardingConfirmation(data)
      SendToMonday_ContactForm(data)
      plausible('Custom Event', { props: { source: 'onboarding-form-submit' } })
      SendToMailchimp(data, 'onboarding')
      setSubmitted(true)
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='grid max-w-2xl grid-cols-2 gap-4 mx-auto'
    >
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='name'
        autoComplete='name'
        placeHolder='Full Name'
        className='col-span-2 md:col-span-1'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='entity'
        autoComplete='organization'
        placeHolder='Company / Entity'
        className='col-span-2 md:col-span-1'
      />
      <ContactForm_UrlInput
        register={register}
        errors={errors}
        fieldName='website'
        placeHolder='Website'
        className='col-span-2 md:col-span-1'
      />
      <ContactForm_PhoneInput
        register={register}
        errors={errors}
        fieldName='phone'
        placeHolder='(123) 456-7890'
        className='col-span-2 md:col-span-1'
      />
      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName='email'
        placeHolder='Email'
        className='col-span-2'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='subject'
        placeHolder='Subject'
        className='col-span-2'
      />
      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName='message'
        className='col-span-2'
        placeHolder='Tell us about your project idea'
        rows={4}
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='referral'
        placeHolder='How did you hear about us?'
        className='col-span-2'
      />
      <ContactForm_Newsletter register={register} />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className='col-span-2' errors={errors} />
    </form>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Onboarding_Contact_Form() {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const formOptions = {
    resolver: yupResolver(validationSchema),
    criteriaMode: 'all' as const,
    reValidateMode: 'onChange' as const,
    shouldUnregister: false,
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<BaseFormInputs>(formOptions as any)

  return (
    <div>
      {submitted ? (
        <ContactForm_ThankYou />
      ) : !hideForm ? (
        <Form
          register={register}
          errors={errors}
          control={control}
          hideForm={hideForm}
          handleSubmit={handleSubmit}
          setSubmitted={setSubmitted}
          setHideForm={setHideForm}
        />
      ) : (
        <ContactForm_NotInterested />
      )}
    </div>
  )
}

export default Onboarding_Contact_Form
