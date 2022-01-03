import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, useFormik, useField, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from 'react-netlify-forms'
interface Values {
  firstName: string
  lastName: string
  acceptedTerms: boolean
  email: string
  label: string
}
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  )
}

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}

// And now we can use these
const SignupForm = () => {
  const netlify = useNetlifyForm({
    name: 'Formik',
    action: '/thanks',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server')
    },
  })
  const { handleSubmit, handleChange, handleBlur, touched, errors, values } = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => netlify.handleSubmit(null, values),
    validate: (values) => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Email is required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
  })

  return (
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit}>
        <Honeypot />
        {netlify.success && (
          <p sx={{ variant: 'alerts.success', p: 3 }}>Thanks for contacting us!</p>
        )}
        {netlify.error && (
          <p sx={{ variant: 'alerts.muted', p: 3 }}>
            Sorry, we could not reach servers. Because it only works on Netlify, our GitHub demo
            does not provide a response.
          </p>
        )}
        <div>
          <label htmlFor='email' sx={{ variant: 'forms.label' }}>
            Email:
          </label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            sx={{
              variant: 'forms.input',
            }}
          />
          {touched.email && errors.email ? (
            <div sx={{ variant: 'text.error' }}>{errors.email}</div>
          ) : null}
        </div>
        <div sx={{ pt: 3 }}>
          <button type='submit' sx={{ variant: 'buttons.success' }}>
            Submit
          </button>
          <button type='reset' sx={{ variant: 'buttons.danger' }}>
            Reset
          </button>
        </div>
      </NetlifyFormComponent>
    </NetlifyFormProvider>
  )
}
export default SignupForm
