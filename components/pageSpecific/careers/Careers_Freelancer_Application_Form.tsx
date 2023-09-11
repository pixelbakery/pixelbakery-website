import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SendToMonday_FreelancerForm } from '@lib/api_sendToMonday'
import {
  SendToMailchimp,
  SendEmail_Freelancers,
  SendEmail_FreelancersConfirmation,
} from '@lib/helpers'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {
  ContactForm_TextInput,
  ContactForm_EmailInput,
  ContactForm_TextAreaInput,
  ContactForm_Newsletter,
  ContactForm_Errors,
  ContactForm_Submit,
  ContactForm_UrlInput,
  ContactForm_NotInterested,
  ContactForm_ThankYou,
  ContactForm_MultiSelect,
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
    SendEmail_Freelancers(data)
    SendToMonday_FreelancerForm(data)

    SendEmail_FreelancersConfirmation(data)
    SendToMailchimp(data, 'freelancers')
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

  about: Yup.string()
    .required('Please enter a message, you goose.')
    .min(2, `Please write something a bit more... in-depth.`),
  title: Yup.string().required('Please enter a title.'),
  address: Yup.string().required('Please enter your address.'),
  phone: Yup.string()
    //     .required('Please enter your phone number.')
    .test('len', 'Please enter a valid phone number', (val) => {
      if (val === undefined) {
        return true
      }
      return val.length === 0 || val.length === 10
    }),
  website: Yup.string()
    .required('Please enter a valid portfolio URL. Must start with https://')
    .url('Please enter a valid portfolio URL. Must start with https://'),
  email: Yup.string()
    .email(`There's no way that's an acutal email address.`)
    .required(`We can't really do much without your email.`)
    .min(6, `C'mon man that's not your email.`)
    .max(255, `There's no way your email address is that long.`),
})

const Form = ({
  register,
  errors,
  control,
  hideForm,
  handleSubmit,
  setSubmitted,
  setHideForm,
  skillsOptions,
}) => {
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => onSubmit(data, setHideForm, setSubmitted))}
      className='mx-auto max-w-2xl  grid grid-cols-2 gap-4 md:gap-y-6'
    >
      <div className='col-span-2'>
        <label className='form-label' htmlFor={'phone'}>
          Full Name
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'name'}
          placeHolder={"What yo momma calls you when she's mad"}
          className=''
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'pronoun'}>
          Pronouns
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'pronoun'}
          placeHolder={'(optional)'}
          className=' '
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'title'}>
          I Call Myself A...
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'title'}
          placeHolder={'Motion Designer, etc...'}
          className=''
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'phone'}>
          Phone
        </label>
        <ContactForm_PhoneInput
          control={control}
          errors={errors}
          fieldName={'phone'}
          placeHolder={'(402) 413 8366'}
          className='col-span-2 md:col-span-1'
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'rate'}>
          Avg. Hourly Rate
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'rate'}
          placeHolder={`$1 billion/hr`}
          className={''}
        />
      </div>
      <div className='col-span-2'>
        <label className='form-label' htmlFor={'address'}>
          Address
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'address'}
          placeHolder={`2124 Y St, Lincoln, NE 68503`}
          className={''}
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'website'}>
          Portfolio
        </label>
        <ContactForm_UrlInput
          register={register}
          errors={errors}
          fieldName={'website'}
          placeHolder={'https://'}
          className=''
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'social'}>
          LinkedIn/Instagram
        </label>
        <ContactForm_UrlInput
          register={register}
          errors={errors}
          fieldName={'social'}
          placeHolder={`https://`}
          className={' md:col-span-1'}
        />
      </div>

      <div className='col-span-2'>
        <label className='form-label' htmlFor={'email'}>
          Email
        </label>
        <ContactForm_EmailInput
          register={register}
          errors={errors}
          fieldName={'email'}
          placeHolder={'jordanisgreat@pixelbakery.com'}
          className='col-span-2'
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'experience'}>
          Years of Prof. Experience
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'experience'}
          placeHolder={'420 years'}
          className=''
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'bird'}>
          Most Hated Type of Bird
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'bird'}
          placeHolder={'Blue-Footed Booby'}
          className=''
        />
      </div>
      <div className='col-span-2'>
        <label className='form-label' htmlFor={'about'}>
          Tell Us A Little About Yourself
        </label>
        <ContactForm_TextAreaInput
          register={register}
          errors={errors}
          fieldName={'about'}
          className='col-span-2'
          placeHolder={`My perfect date is April 25th. Because it's not too hot, not too cold, all you need is a light jacket.`}
          rows={4}
        />
      </div>

      <div className='col-span-2'>
        <label className='form-label' htmlFor={'skills'}>
          Some of My Talents Are...
        </label>
        <ContactForm_MultiSelect
          //    register={register}
          options={skillsOptions}
          errors={errors}
          control={control}
          className=' remove-input-txt-border border-0 bg-transparent p-0 cursor-pointer'
          fieldName={'skills'}
        />
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label className='form-label' htmlFor={'referral'}>
          How Did You Hear About Us?
        </label>
        <ContactForm_TextInput
          register={register}
          errors={errors}
          fieldName={'referral'}
          placeHolder={`Probably Instagram`}
          className={'col-span-2 md:col-span-1'}
        />
      </div>

      <ContactForm_Newsletter register={register} />
      <ContactForm_Submit valueText='Submit' disabled={hideForm} />
      <ContactForm_Errors className={'col-span-2'} errors={errors} />
    </form>
  )
}

const Careers_Freelancer_Application_Form = () => {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const [getSkillOptions, setGetSkillOptions] = useState([])

  useEffect(() => {
    async function fetchSkillOptions() {
      const query = `query { boards (ids: ${process.env.NEXT_PUBLIC_MONDAY_BOARD_FREELANCERFORM}) {columns(ids:"dropdown"){settings_str}}}`
      try {
        const res = await fetch('https://api.monday.com/v2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_MONDAY_AUTH,
            'API-Version': '2023-10',
          },
          body: JSON.stringify({
            query: query,
          }),
        })
        const json = await res.json()
        let obj = JSON.parse(json.data.boards[0].columns[0].settings_str)
        obj.labels.map(function (obj) {
          obj['value'] = obj['name']
          obj['label'] = obj['value']
          delete obj['name']
          delete obj['id']
          return obj
        })
        setGetSkillOptions(obj.labels)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSkillOptions()
  }, [])

  const setFormOptions = {
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(yupValidation),
    shouldUnregister: false,
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>(setFormOptions as any)

  return (
    <div>
      {submitted ? (
        <ContactForm_ThankYou />
      ) : !hideForm ? (
        <Form
          skillsOptions={getSkillOptions}
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
export default Careers_Freelancer_Application_Form
