import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SendToMonday_Onboarding } from '@lib/api_sendToMonday'
import { SendToMailchimp, SendEmail_Onboarding } from '@lib/helpers'
import { yupResolver } from '@hookform/resolvers/yup'
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

interface FormInputs {
  name: string
  entity: string
  multipleErrorInput: string
  newsletter: boolean
  message: string
  soliciting: any
  subject: boolean
  phone: string
  email: string
  website: string
}
const onSubmit = (data, setHideForm, setSubmitted) => {
  if (data.soliciting === 'true') setHideForm(true)
  else {
    SendEmail_Onboarding(data)
    SendToMonday_Onboarding(data)
    SendToMailchimp(data, 'onboarding')
    setSubmitted(true)
  }
}

const yupValidation = Yup.object().shape({
  name: Yup.string()
    .required(`Please enter your name, stranger.`)
    .min(5, `Your name is absolutely not that short`)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.',
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
  subject: Yup.string()
    .required('Please enter a subject line.')
    .min(10, `That's a pretty short subject line.`),
  company: Yup.string().required('Please enter the company / entity you represent.'),
  message: Yup.string()
    .required('Please enter a message, you goose.')
    .min(100, `Please write something a bit more... in-depth.`),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .test('len', 'Please enter a valid phone number', (val) => {
      if (val === undefined) {
        return true
      }
      return val.length === 0 || val.length === 10
    }),
  website: Yup.string().url('Please enter a valid URL. Must start with https://'),
  email: Yup.string()
    .email(`There's no way that's an acutal email address.`)
    .required(`We can't really do much without your email.`)
    .min(6, `C'mon man that's not your email.`)
    .max(255, `There's no way your email address is that long.`),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
})

const Form = ({ register, errors, control, hideForm, handleSubmit, setSubmitted, setHideForm }) => {
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => onSubmit(data, setHideForm, setSubmitted))}
      className='mx-auto max-w-2xl  grid grid-cols-2 gap-4'
    >
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'name'}
        placeHolder={'name'}
        className='col-span-2 md:col-span-1 '
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'company'}
        placeHolder={`company / entity`}
        className={'col-span-2 md:col-span-1'}
      />
      <ContactForm_UrlInput
        register={register}
        errors={errors}
        fieldName={'website'}
        placeHolder={'website'}
        className='col-span-1'
      />
      <ContactForm_PhoneInput
        control={control}
        errors={errors}
        fieldName={'phone'}
        placeHolder={'phone'}
        className='col-span-1'
      />
      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName={'email'}
        placeHolder={'email'}
        className='col-span-2'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'subject'}
        placeHolder={`subject`}
        className={'col-span-2'}
      />
      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName={'message'}
        className='col-span-2'
        placeHolder='tell us about your project idea'
        rows={4}
      />

      <ContactForm_Newsletter register={register} />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className={'col-span-2'} errors={errors} />
    </form>
  )
}

function Onboarding_Contact_Form() {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const setFormOptions = {
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(yupValidation),
    shouldFocusError: true,
    shouldUnregister: false,
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<FormInputs>(setFormOptions as any)

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
