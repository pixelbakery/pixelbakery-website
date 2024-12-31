import { useEffect, useState } from 'react'
import { useForm, Control } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {
  SendToMonday_FreelancerForm,
  SendToMonday_FreelancerForm_GetSkills,
} from '@lib/api_sendToMonday'
import {
  SendToMailchimp,
  SendEmail_Freelancers,
  SendEmail_FreelancersConfirmation,
} from '@lib/helpers'
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
// --------------------------------------------------------------------------------------
// TYPES
// --------------------------------------------------------------------------------------

/** Shape of the form data. */
interface FormInputs {
  name: string
  entity?: string
  phone?: string // optional, tested for length if filled
  email: string
  website: string
  about: string
  title: string
  address: string
  rate?: string
  social?: string
  experience?: string
  bird?: string
  referral?: string
  newsletter?: boolean
  skills?: string[]
}

// --------------------------------------------------------------------------------------
// VALIDATION SCHEMA
// --------------------------------------------------------------------------------------

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .min(5, 'Your name is too short.')
    .matches(/^\s*\S+(?:\s+\S+)+\s*$/, 'Please enter your full name.'),
  about: Yup.string().required('Please enter a message.').min(2, 'Please write a bit more.'),
  title: Yup.string().required('Please enter a title.'),
  address: Yup.string().required('Please enter your address.'),
  phone: Yup.string().test('len', 'Please enter a valid phone number', (val) =>
    val ? val.length === 10 : true,
  ),
  website: Yup.string()
    .required('Please enter a valid portfolio URL.')
    .url('Please enter a valid portfolio URL.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('We need your email to contact you.'),
})

// --------------------------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------------------------

function Careers_Freelancer_Application_Form() {
  const [submitted, setSubmitted] = useState(false)
  const [hideForm, setHideForm] = useState(false)
  const [skillsOptions, setSkillsOptions] = useState<Array<{ value: string; label: string }>>([])

  // Fetch dynamic skills from Monday
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await SendToMonday_FreelancerForm_GetSkills()
        const settings = JSON.parse(res.data.boards[0].columns[0].settings_str)
        const formattedSkills = settings.labels.map((label: any) => ({
          value: label.name,
          label: label.name,
        }))
        setSkillsOptions(formattedSkills)
      } catch (error) {
        console.error('Failed to fetch skills:', error)
      }
    }
    fetchSkills()
  }, [])

  // Configure React Hook Form
  const formOptions = {
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange' as const,
    shouldUnregister: false,
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>(formOptions)

  // Submit handler
  const onSubmit = (data: FormInputs) => {
    // If user has opted in for newsletter, hide form (some condition you set)
    if (data.newsletter) {
      setHideForm(true)
    } else {
      // Otherwise proceed with sending data
      SendEmail_Freelancers(data)
      SendToMonday_FreelancerForm(data)
      SendEmail_FreelancersConfirmation(data)
      SendToMailchimp(data, 'freelancers')
      setSubmitted(true)
    }
  }

  return (
    <div>
      {submitted ? (
        <ContactForm_ThankYou />
      ) : !hideForm ? (
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='grid max-w-2xl grid-cols-2 gap-4 mx-auto'
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
            register={register as any}
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
            className='col-span-2 md:col-span-1'
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
            placeHolder='Tell us a little about yourself'
            rows={4}
            className='col-span-2'
          />

          <ContactForm_MultiSelect
            options={skillsOptions}
            errors={errors}
            control={control}
            fieldName='skills'
            className='col-span-2'
          />

          <ContactForm_Newsletter register={register} />

          <ContactForm_Submit valueText='Submit' disabled={hideForm} />

          <ContactForm_Errors errors={errors} className='col-span-2' />
        </form>
      ) : (
        <ContactForm_NotInterested />
      )}
    </div>
  )
}

export default Careers_Freelancer_Application_Form
