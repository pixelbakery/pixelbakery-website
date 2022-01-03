import React from 'react'
import { useForm } from 'react-hook-form'

export default function LogoAnimation_GetStarted_Formik() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-netlify='true'>
      <input type='text' placeholder='name' {...register('name', { required: true })} />
      <input type='email' placeholder='email' {...register('email', { required: true })} />
      <input type='tel' placeholder='phone' {...register('phone', {})} />
      <input type='text' placeholder='entity' {...register('entity', {})} />

      <input {...register('package', { required: true })} type='radio' value='Essentials' />
      <input {...register('package', { required: true })} type='radio' value='Standard' />
      <input {...register('package', { required: true })} type='radio' value='Gourmet' />
      <input {...register('package', { required: true })} type='radio' value='Kitchen Sink' />
      <textarea {...register('message', {})} />

      <input type='submit' />
    </form>
  )
}
