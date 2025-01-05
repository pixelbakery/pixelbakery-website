import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { SendToMonday_ContactForm } from '@lib/api_sendToMonday'
import { SendToMailchimp, SendEmail_Contact } from '@lib/helpers'
import { usePlausible } from 'next-plausible'

import {
  ContactForm_NotInterested,
  ContactForm_ThankYou,
  ContactForm_Newsletter,
  ContactForm_TextInput,
  ContactForm_TextAreaInput,
  ContactForm_EmailInput,
  ContactForm_PhoneInput,
  ContactForm_Errors,
  ContactForm_Submit,
  ContactForm_Solicitation,
} from '@utility/ContactForm_Parts'

import type { FormInputs, FormProps } from '@types'

// -----------------------------------------------------------------------------
// Yup Schema
// -----------------------------------------------------------------------------
const yupValidation = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name, stranger.')
    .min(5, 'Your name is absolutely not that short')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain letters.',
    )
    .matches(/^\s*\S+(?:\s+\S+)+\s*$/, 'Please enter your full name.'),
  subject: Yup.string()
    .required('Please enter a subject line.')
    .min(12, `That's a pretty short subject line.`),
  message: Yup.string()
    .required('Please enter a message, you goose.')
    .min(100, `Please write something a bit more... in-depth.`),
  phone: Yup.string().test('len', 'Please enter a valid phone number', (val) => {
    if (!val) return true // empty is allowed
    return val.replace(/\D/g, '').length === 10
  }),
  email: Yup.string()
    .email(`There's no way that's an actual email address.`)
    .required(`We can't really do much without your email.`)
    .min(6, `C'mon man that's not your email.`)
    .max(255, `There's no way your email address is that long.`),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
})

// -----------------------------------------------------------------------------
// The Sub-Form
// -----------------------------------------------------------------------------
function Form({
  register,
  control,
  errors,
  hideForm,
  handleSubmit,
  setSubmitted,
  setHideForm,
}: FormProps & { plausible: ReturnType<typeof usePlausible> }) {
  return (
    <form
      noValidate
      className='grid max-w-2xl grid-cols-2 gap-4 mx-auto'
      onSubmit={handleSubmit((data) => handleFormSubmit(data, setHideForm, setSubmitted))}
    >
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='name'
        placeHolder='name'
        className='col-span-2'
      />
      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName='email'
        placeHolder='email'
        className='col-span-2'
      />
      <ContactForm_PhoneInput
        register={register}
        errors={errors}
        fieldName='phone'
        control={control}
        placeHolder='(123) 456-7890'
        className='my-input-class'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='entity'
        placeHolder='company / entity'
        className='col-span-2 lg:col-span-1'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='subject'
        placeHolder="what's this all about?"
        className='col-span-2'
      />
      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName='message'
        className='col-span-2'
        placeHolder='sup?'
        rows={5}
      />
      <ContactForm_Newsletter register={register} />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className='col-span-2' errors={errors} />
    </form>
  )
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------
function Contact_ContactForm_Form() {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const plausible = usePlausible()

  const formOptions = {
    criteriaMode: 'all' as const,
    reValidateMode: 'onChange' as const,
    resolver: yupResolver(yupValidation),
    shouldFocusError: true,
    shouldUnregister: false,
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>(formOptions)

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
          plausible={plausible}
        />
      ) : (
        <ContactForm_NotInterested />
      )}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Helper: handleFormSubmit
// -----------------------------------------------------------------------------
function handleFormSubmit(
  data: FormInputs,
  setHideForm: React.Dispatch<React.SetStateAction<boolean>>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  plausible?: ReturnType<typeof usePlausible>, // if you want to track inside
) {
  SendToMonday_ContactForm(data)

  plausible?.('Custom Event', { props: { source: 'contact-submit' } })

  // If soliciting is false => legit inquiry
  if (data.soliciting === 'false') {
    SendEmail_Contact(data)
    SendToMailchimp(data, 'Contact Form')
    setSubmitted(true)
  } else {
    // They want to sell us something => hide form
    setHideForm(true)
  }
}

export default Contact_ContactForm_Form
