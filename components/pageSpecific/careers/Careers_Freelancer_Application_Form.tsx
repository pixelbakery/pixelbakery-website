import { useState, type Dispatch, type SetStateAction, type BaseSyntheticEvent } from 'react'

import { type FieldErrors, type UseFormRegister, Control, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { SendToMonday_FreelancerForm } from '@lib/api_sendToMonday'
import { SendEmail_Freelancers, SendEmail_FreelancersConfirmation } from '@lib/helpers'
import {
  ContactForm_TextInput,
  ContactForm_EmailInput,
  ContactForm_TextAreaInput,
  ContactForm_Errors,
  ContactForm_Submit,
  ContactForm_UrlInput,
  ContactForm_Solicitation,
  ContactForm_NotInterested,
  ContactForm_ThankYou,
  ContactForm_PhoneInput,
} from '@utility/ContactForm_Parts'
import { usePlausible } from 'next-plausible'
import type { FormInputs, FormProps } from '@/types/general'

// --------------------------------------------------------------------------------------
// VALIDATION SCHEMA
// --------------------------------------------------------------------------------------
const yupValidation = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .min(5, 'Your name is too short.')
    .matches(/^\s*\S+(?:\s+\S+)+\s*$/, 'Please enter your full name.'),
  about: Yup.string().required('Please enter a message.').min(2, 'Please write a bit more.'),
  title: Yup.string().required('Please enter a title.'),
  address: Yup.string().required('Please enter your address.'),
  phone: Yup.string().test('len', 'Please enter a valid phone number', (val) => {
    if (!val) return true // empty is allowed
    return val.replace(/\D/g, '').length === 10
  }),
  website: Yup.string()
    .required('Please enter a valid portfolio URL.')
    .url('Please enter a valid portfolio URL.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('We need your email to contact you.'),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
})

// --------------------------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------------------------

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
        placeHolder='Full Name'
        className='col-span-2'
      />

      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName='title'
        placeHolder='I Call Myself A...'
        className='col-span-2 md:col-span-1'
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
        fieldName='address'
        placeHolder='Address'
        className='col-span-2'
      />

      <ContactForm_UrlInput
        register={register}
        errors={errors}
        fieldName='website'
        placeHolder='Portfolio URL'
        className='col-span-2'
      />

      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName='email'
        placeHolder='Email Address'
        className='col-span-2'
      />

      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName='about'
        placeHolder="Tell us a little about yourself and what you're good at"
        rows={4}
        className='col-span-2'
      />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className='col-span-2' errors={errors} />
    </form>
  )
}
function Careers_Freelancer_Application_Form() {
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
  } = useForm<FormInputs>(formOptions as any)

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
function handleFormSubmit(
  data: FormInputs,
  setHideForm: Dispatch<SetStateAction<boolean>>,
  setSubmitted: Dispatch<SetStateAction<boolean>>,
  plausible?: ReturnType<typeof usePlausible>, // if you want to track inside
) {
  SendToMonday_FreelancerForm(data)
  plausible?.('Custom Event', { props: { source: 'contact-submit' } })

  // If soliciting is false => legit inquiry
  if (data.soliciting === 'false') {
    SendEmail_Freelancers(data)
    SendEmail_FreelancersConfirmation(data)
    setSubmitted(true)
  } else {
    // They want to sell us something => hide form
    setHideForm(true)
  }
}

export default Careers_Freelancer_Application_Form
