import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SendToMonday_JobApplication } from '@lib/api_sendToMonday'
import 'react-toastify/dist/ReactToastify.css'
import router from 'next/router'

export default function Careers_Application_Form({ allJobs }) {
  // const [submitted, setSubmitted] = useState(false)
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {},
  })

  // const watchAllFields = watch()
  // Handle the  submit
  const onSubmit = async (data) => {
    if (isLoading) {
      return
    }

    await setIsLoading(true)
    await SendToSendgrid(data)
    await SendToMonday_JobApplication(data)
    await SendtosSendgridconfirmation(data)
    await SendToMailchimp(data)
    await router.push('/careers/submitted')
    await setIsLoading(false)
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
  ////////////
  // MAILCHIMP
  ////////////
  async function SendToMailchimp(data) {
    data.tag = 'Job Application'
    if (mailchimp) {
      await fetch('/api/mailchimp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      return
    }
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

    await fetch('/api/sendJobApplication', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
  }
  async function SendtosSendgridconfirmation(data) {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      if (key === 'resume') {
        formData.append(key, data[key][0], 'resume.pdf')
      } else {
        formData.append(key, data[key])
      }
    })

    await fetch('/api/sendJobApplication-confirmation', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
  }

  // const test = ReactPDF.renderToStream(<CareersApplicationPDF data={'data'} />)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete={'true'}>
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
              id='given-name'
              placeholder='First'
              {...register('first_name' as never, {})}
            />
            <input
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              type='text'
              id='additional-name'
              placeholder='Middle'
              {...register('middle_name' as never, {})}
            />
            <input
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              required
              type='text'
              id='family-name'
              placeholder='Last'
              {...register('last_name' as never, {})}
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
              {...register('pronoun' as never, {})}
            />
          </div>

          <div className='col-span-2'>
            <label className='required' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              type='email'
              id='email'
              placeholder='hello@pixelbakery.com'
              required
              {...register('email' as never, {})}
            />
          </div>

          <div className='col-span-2 lg:col-span-1'>
            <label className='required' htmlFor='phone_number'>
              Phone Number
            </label>
            <input
              id='tel-national'
              type='tel'
              required
              className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
              placeholder='Phone'
              {...register('phone_number' as never, {})}
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
              {...register('social' as never, {})}
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
              {...register('zodiac' as never, {})}
            />
          </div>

          <div className='col-span-2'>
            <label className='required' htmlFor='position'>
              Position
            </label>

            <select
              {...register('position' as never, {})}
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
              {...register('commitment' as never, {})}
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
              {...register('education' as never, {})}
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
                {...register('hours' as never, {})}
              />
              <input
                className='w-1/2 border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
                type='text'
                placeholder='$'
                {...register('pay' as never, {})}
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
                id='street-address'
                className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
                placeholder='Address'
                {...register('address_line_1' as never, {})}
              />
              <input
                required
                type='text'
                className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
                placeholder='City, State, Zip'
                {...register('address_line_2' as never, {})}
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
              {...register('about_personal' as never, {})}
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
              {...register('about_professional' as never, {})}
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
              {...register('why' as never, {})}
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
              {...register('band' as never, {})}
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
              {...register('website' as never, {})}
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
              {...register('resume' as never, {
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
              {...register('hear' as never, {})}
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
                required
                checked={authorized}
                onClick={handleAuthorized}
                {...register('authorized' as never)}
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
            <button
              className='my-3 py-2 px-12 cursor-pointer bg-blue text-cream rounded-md text-center inline-block drop-shadow-md hover:drop-shadow-sm font-bold text-2xl disabled:bg-wine-300 disabled:cursor-progress disabled:hover:drop-shadow-md'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'off she goes!'}
            </button>
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
                {...register('mailchimp' as never)}
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
          <p className='col-span-2 mt-12 text-sm italic text-wine-300'>
            PS: Pixel Bakery Motion Studio is an equal opportunity employer. By submitting this
            application you agree to allow us to check references and verify former employment.
          </p>
        </div>

        {/* <p className='bg-white'>{JSON.stringify(watchAllFields, null, 2)}</p> */}
      </form>
    </>
  )
}
