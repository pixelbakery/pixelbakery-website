import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { SendToMonday_ContactForm } from '@lib/api_sendToMonday'
import { SendToMailchimp, SendEmail_Contact } from '@lib/helpers'
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
    .min(12, `That's a pretty short subject line.`),
  message: Yup.string()
    .required('Please enter a message, you goose.')
    .min(100, `Please write something a bit more... in-depth.`),
  phone: Yup.string().test('len', 'Please enter a valid phone number', (val) => {
    if (val === undefined) {
      return true
    }
    return val.length === 0 || val.length === 10
  }),
  email: Yup.string()
    .email(`There's no way that's an acutal email address.`)
    .required(`We can't really do much without your email.`)
    .min(6, `C'mon man that's not your email.`)
    .max(255, `There's no way your email address is that long.`),
  soliciting: Yup.string().required('Please select a solicitation answer.').nullable(),
})
// Handle the submit

const onSubmit = (data, setHideForm, setSubmitted) => {
  if (data.soliciting === 'true') setHideForm(true)
  else {
    SendEmail_Contact(data)
    SendToMonday_ContactForm(data)
    SendToMailchimp(data, 'Contact Form')
    setSubmitted(true)
  }
}
const Form = ({ register, errors, control, hideForm, handleSubmit, setSubmitted, setHideForm }) => {
  return (
    <form
      noValidate
      className='mx-auto max-w-2xl  grid grid-cols-2 gap-4'
      onSubmit={handleSubmit((data) => onSubmit(data, setHideForm, setSubmitted))}
    >
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'name'}
        placeHolder={'name'}
        className='col-span-2'
      />
      <ContactForm_EmailInput
        register={register}
        errors={errors}
        fieldName={'email'}
        placeHolder={'email'}
        className='col-span-2'
      />
      <ContactForm_PhoneInput
        control={control}
        errors={errors}
        fieldName={'phone'}
        placeHolder={'phone (optional)'}
        className='col-span-2 lg:col-span-1'
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'entity'}
        placeHolder={`company / entity`}
        className={'col-span-2 lg:col-span-1'}
      />
      <ContactForm_TextInput
        register={register}
        errors={errors}
        fieldName={'subject'}
        placeHolder={`what's this all about?`}
        className={'col-span-2'}
      />
      <ContactForm_TextAreaInput
        register={register}
        errors={errors}
        fieldName={'message'}
        className='col-span-2'
        placeHolder='sup?'
        rows={5}
      />
      <ContactForm_Newsletter register={register} />
      <ContactForm_Solicitation register={register} errors={errors} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className={'col-span-2'} errors={errors} />
    </form>
  )
}

function Contact_ContactForm_Form() {
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
export default Contact_ContactForm_Form
