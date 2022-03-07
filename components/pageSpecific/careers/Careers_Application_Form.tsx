import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'

export default function Careers_Application_Form({ allJobs }) {
  const [submitted, setSubmitted] = useState(false)

  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')

  // function handleUpload(event) {
  //   setFile(event.target.files[0])
  // }
  const {
    register,
    watch,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: 'Henry',
      middle_name: 'E',
      last_name: 'Sipp',
      email: 'henry.sipp@hey.com',
      phone_number: '4026135110',
      address_line_1: 'qweqwer',
      address_line_2: 'qwerqwer',
      about_personal: 'qwerqwer',
      about_professional: 'qwerqwer',
      why: 'asdf',
    },
  })

  const watchAllFields = watch()
  // Handle the  submit
  const onSubmit = (data) => {
    // setFile(base64File)
    // data.base64File = data.resume[0].toString('base64')
    // console.log(base64File)
    // resetField('email')
    console.log({ data })
    SendToSendgrid(data)
  }
  // file upload

  //   auth checkbox
  const [authorized, setAuthorized] = useState(false)
  const handleAuthorized = () => {
    setAuthorized(!authorized)
  }
  //     mailchimp checkbox
  const [mailchimp, setMailchimp] = useState(true)
  const handleMailchimp = () => {
    setMailchimp(!mailchimp)
  }

  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      if (key === 'resume') {
        formData.append(key, data[key][0], 'resume.pdf')
      } else {
        formData.append(key, data[key])
      }
    })

    formData.append('what', 'the heck')

    await fetch('/api/sendJobApplication', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(console.log)
  }

  // const test = ReactPDF.renderToStream(<CareersApplicationPDF data={'data'} />)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mx-auto max-w-4xl grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-10'>
        <div className='col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-y-1 lg:gap-x-4'>
          <div className='col-span-1 lg:col-span-3'>
            <label className='required'> Full Name</label>
            <span className='text-sm text-wine-400 mt-0 mb-3 py-0 leading-none block'>
              What your momma calls you when she's mad.
            </span>
          </div>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            type='text'
            required
            placeholder='First'
            {...register('first_name', {})}
          />
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            required
            type='text'
            placeholder='Middle'
            {...register('middle_name', {})}
          />
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            required
            type='text'
            placeholder='Last'
            {...register('last_name', {})}
          />
        </div>

        <div className='col-span-2 lg:col-span-1'>
          <label htmlFor='pronoun' className=''>
            Preferred Pronoun
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            type='text'
            placeholder='(totally optional)'
            {...register('pronoun', {})}
          />
        </div>

        <div className='col-span-2'>
          <label className='required' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            type='email'
            placeholder='hello@pixelbakery.com'
            {...register('email', {})}
          />
        </div>

        <div className='col-span-2 lg:col-span-1'>
          <label className='required' htmlFor='phone_number'>
            Phone Number
          </label>
          <input
            type='tel'
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            placeholder='Phone'
            {...register('phone_number', {})}
          />
        </div>

        <div className='col-span-2 xl:col-span-1'>
          <label className='' htmlFor='zodiac'>
            LinkedIn or Instagram
          </label>
          <input
            type='url'
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            placeholder='https://'
            {...register('social', {})}
          />
        </div>

        <div className='col-span-2 xl:col-span-1'>
          <label className='' htmlFor='zodiac'>
            Zodiac Sign
          </label>
          <input
            type='text'
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            placeholder='scorpio scorpio scorpio'
            {...register('zodiac', {})}
          />
        </div>

        <div className='col-span-2'>
          <label className='required' htmlFor='position'>
            Position
          </label>

          <select
            {...register('position', {})}
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
          >
            {allJobs.map((job, index) => {
              return (
                <option key={index} value={job.data.title}>
                  {job.data.title}
                </option>
              )
            })}
            <option value={'other'}>Other</option>
          </select>
        </div>

        <div className='col-span-2 lg:col-span-1'>
          <label className='required' htmlFor='commitment'>
            Commitment
          </label>
          <select
            required
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            {...register('commitment', {})}
          >
            <option value='Full-Time'>Full-Time</option>
            <option value='Part-Time'>Part-Time</option>
            <option value='On-Call'>On-Call</option>
            <option value='Unsure'>Unsure</option>
          </select>
        </div>

        <div className='col-span-2 xl:col-span-1'>
          <label className='required' htmlFor='education'>
            Education Level
          </label>

          <select
            required
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            {...register('education', {})}
          >
            <option value='High School Diploma'>High School Diploma</option>
            <option value='Still In College'>Still In College</option>
            <option value='Some College'>Some College</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Mas ter's Degree</option>
            <option value='Ph.D'>Ph.D (bruh..)</option>
            <option value='Self-Educated'>Self-Educated</option>
          </select>
        </div>

        <div className='col-span-2'>
          <label className='' htmlFor='hours'>
            Desired Hours &amp; Pay
          </label>
          <div className='flex gap-2'>
            <input
              className='w-1/2 border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              type='number'
              placeholder='hrs'
              {...register('hours', {})}
            />
            <input
              className='w-1/2 border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              type='text'
              placeholder='$'
              {...register('pay', {})}
            />
          </div>
        </div>

        <div className='col-span-2'>
          <label className='required' htmlFor='address_line_1'>
            Address
          </label>
          <div className='flex flex-col gap-2'>
            <input
              required
              type='text'
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              placeholder='Address'
              {...register('address_line_1', {})}
            />
            <input
              required
              type='text'
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              placeholder='City, State, Zip'
              {...register('address_line_2', {})}
            />
          </div>
        </div>

        <div className='col-span-3'>
          <label className='required ' htmlFor='about_personal'>
            Tell Us About Yourself (nothing to do with your profession)
          </label>
          <textarea
            required
            rows={5}
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            {...register('about_personal', {})}
          />
        </div>

        <div className='col-span-3'>
          <label className='required ' htmlFor='about_professional'>
            Tell Us About Yourself (your professional background)
          </label>
          <textarea
            required
            rows={5}
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            {...register('about_professional', {})}
          />
        </div>

        <div className='col-span-3'>
          <label className='required ' htmlFor='why'>
            Why do you want this job?
          </label>
          <textarea
            required
            rows={5}
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            {...register('why', {})}
          />
        </div>

        <div className='col-span-2 xl:col-span-1 '>
          <label className=' ' htmlFor='why'>
            What's your favorite band?
          </label>
          <input
            type='text'
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            placeholder="Please don't say Chris Brown"
            {...register('band', {})}
          />
        </div>

        <div className='col-span-2'>
          <label className=' ' htmlFor='website'>
            Website / Portfolio Link
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            type='url'
            placeholder='https://'
            {...register('website', {})}
          />{' '}
        </div>

        <div className='col-span-2'>
          <label className='required ' htmlFor='resume'>
            Upload Resume
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            type='file'
            onChange={setFile}
            placeholder='Upload Your Resume'
            {...register('resume', {
              required: true,
              validate: {
                lessThan10MB: (files) => files[0]?.size < 10000000 || 'Max 10MB',
                acceptedFormats: (files) => files[0].type === 'application/pdf',
              },
            })}
          />
          {errors.resume?.type === 'lessThan10MB' && (
            <p className='text-peach font-semibold italic'>Error: Must Be Under 10MB</p>
          )}
          <h1>{fileName}</h1>
          {errors.resume?.type === 'acceptedFormats' && (
            <p className='text-peach font-semibold italic'>Error: Must Be A PDF</p>
          )}
          <p className='text-sm text-wine-400 mb-0 pb-0'>
            Must be a PDF. Please upload a .pdf under 10MB. If you need help reducing your file
            size, check out:{' '}
            <a href='ilovepdf.com' rel='noopener' target={'_blank'}>
              ilovepdf.com
            </a>
          </p>
        </div>
        <div className='col-span-2'>
          <label className='' htmlFor='hear'>
            How did you hear about us?
          </label>
          <input
            type='text'
            className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
            placeholder='bc you totally follow us on insta'
            {...register('hear', {})}
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor=' ' className='required'>
            The Federal Government Says
          </label>
          <div className='flex gap-4'>
            <input
              className={
                'rounded-lg bg-white  border-1  p-3 my-2 text-blue-dark cursor-pointer  drop-shadow-2xl focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              }
              type='checkbox'
              checked={authorized}
              onClick={handleAuthorized}
              {...register('authorized')}
            />
            <label
              className={'cursor-pointer self-center text-sm font-normal leading-none my-0 py-0'}
              htmlFor='authorized'
              onClick={handleAuthorized}
            >
              I am authorized to work lawfully in the United States
            </label>
          </div>
        </div>
        <div className='col-span-2 border-t border-wine pt-4 mt-4'>
          <label>See? That wasn't too bad.</label>
          <p className='my-0 py-0'>
            Look it over, upload your resume, and send it off. Ditch the cover letter, chances are
            we won't read it anyways. We'll be in touch.
          </p>
        </div>
        <div className='col-span-2 my-2'>
          <input
            className='my-3 py-2 px-12 cursor-pointer bg-blue text-cream rounded-md text-center inline-block drop-shadow-md hover:drop-shadow-sm font-bold text-2xl'
            type='submit'
            value={'off she goes!'}
          />
        </div>

        <div className='col-span-2'>
          <div className='flex gap-4'>
            <input
              className={
                'rounded-lg bg-white  border-1  p-3 my-2 text-blue-dark cursor-pointer  drop-shadow-2xl'
              }
              type='checkbox'
              checked={mailchimp}
              onClick={handleMailchimp}
              {...register('mailchimp')}
            />
            <label
              className={'cursor-pointer self-center text-sm font-normal leading-none my-0 py-0'}
              htmlFor='handleMailchimp'
              onClick={handleMailchimp}
            >
              Also sign up for the newsletter that we always forget to send out
            </label>
          </div>
        </div>
      </div>
      <p className='bg-white'>{JSON.stringify(watchAllFields, null, 2)}</p>
    </form>
  )
}
