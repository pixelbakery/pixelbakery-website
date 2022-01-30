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
    <form
      className='mx-auto max-w-2xl  flex flex-wrap gap-2'
      onSubmit={handleSubmit(onSubmit)}
      data-netlify='true'
    >
      <input
        className='form-border-b w-full'
        type='text'
        placeholder='name'
        {...register('name', { required: true })}
      />
      <input
        className='form-border-b w-full'
        type='email'
        placeholder='email'
        {...register('email', { required: true })}
      />
      <input
        className='form-border-b w-full'
        type='tel'
        placeholder='phone'
        {...register('phone', {})}
      />
      <input
        className='form-border-b w-full'
        type='text'
        placeholder='company / entity'
        {...register('entity', {})}
      />

      <div className='w-full config-select text-center z-20 mt-2'>
        <div className='fieldset md-whiteframe-z1 inline-block relative p-1 mb-1 rounded-full border border-blue bg-transparent'>
          <input
            {...register('package', { required: true })}
            type='radio'
            name='package'
            value='Essentials'
            id='package-essentials'
            className='absolute hidden'
          />
          <label
            htmlFor='package-essentials'
            className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out'
          >
            <span>Essentials</span>
          </label>
          <input
            {...register('package', { required: true })}
            type='radio'
            name='package'
            value='Standard'
            id='package-standard'
            className='absolute hidden'
            defaultChecked
          />
          <label
            htmlFor='package-standard'
            className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out'
          >
            <span>Standard</span>
          </label>
          <input
            {...register('package', { required: true })}
            type='radio'
            name='package'
            value='Gourmet'
            className='absolute hidden'
            id='package-gourmet'
          />{' '}
          <label
            htmlFor='package-gourmet'
            className='relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out'
          >
            <span>Gourmet</span>
          </label>
          <input
            {...register('package', { required: true })}
            type='radio'
            name='package'
            value='kitcheSink'
            className='absolute hidden'
            id='package-kitchenSink'
          />
          <label
            htmlFor='package-kitchenSink'
            className='text-ccenter relative z-10 inline-block cursor-pointer text-wine transition-all duration-500 ease-in-out'
          >
            <span>Kitchen Sink</span>
          </label>
          <span className='absolute bg-blue rounded-full duration-500 switch md-whiteframe-z1'></span>
        </div>
      </div>
      <textarea className='form-border-b w-full' rows={5} {...register('message', {})} />

      <input className='bg-blue text-lg font-bold text-cream rounded-md px-8 py-3 ' type='submit' />
    </form>
  )
}
