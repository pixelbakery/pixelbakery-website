/* eslint-disable no-unused-vars */
// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SendToMonday_JobApplication } from '@lib/api_sendToMonday'
import { SendToMailchimp } from '@lib/helpers'
import router from 'next/router'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'
type FormInputs = {
  test: string
}

export default function Careers_Application_Form({ allJobs }) {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    defaultValues: {},
  })

  const plausible = usePlausible()
  // Handle the  submit
  const onSubmit = async (data: FormInputs) => {
    if (isLoading) {
      return
    }
    plausible('Custom Event', { props: { source: 'job-application-submit' } })
    await setIsLoading(true)
    await SendToMonday_JobApplication(data)
    await SendToSendgrid(data)

    await SendtosSendgridconfirmation(data)

    await SendToMailchimp(data, 'Job Application')
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
        <div className='grid max-w-4xl grid-cols-2 gap-4 mx-auto lg:grid-cols-3 lg:gap-y-10'>
          <div className='grid grid-cols-1 col-span-2 lg:col-span-3 lg:grid-cols-3 gap-y-1 lg:gap-x-4'>
            <div className='col-span-1 lg:col-span-3'>
              <label className='required' htmlFor='given-name'>
                {' '}
                Full Name
              </label>
              <span className='block py-0 mt-0 mb-3 text-sm leading-none text-wine-400'>
                What your momma calls you when she&apos;s mad.
              </span>
            </div>
            <input
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              type='text'
              required
              autoComplete='given-name'
              id='given-name'
              placeholder='First'
              {...register('first_name' as never, {})}
            />
            <input
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              type='text'
              autoComplete='additional-name'
              id='additional-name'
              placeholder='Middle'
              {...register('middle_name' as never, {})}
            />
            <input
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              required
              type='text'
              autoComplete='family-name'
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
              id='pronoun'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
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
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              type='email'
              id='email'
              autoComplete='email'
              placeholder='hello@pixelbakery.com'
              required
              {...register('email' as never, {})}
            />
          </div>

          <div className='col-span-2 lg:col-span-1'>
            <label className='required' htmlFor='tel-national'>
              Phone Number
            </label>
            <input
              id='tel-national'
              type='tel'
              autoComplete='tel'
              required
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              placeholder='Phone'
              {...register('phone_number' as never, {})}
            />
          </div>

          <div className='col-span-2 xl:col-span-1'>
            <label className='' htmlFor='social'>
              LinkedIn or Instagram
            </label>
            <input
              id='social'
              type='url'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
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
              id='zodiac'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              placeholder='scorpio scorpio scorpio'
              {...register('zodiac' as never, {})}
            />
          </div>

          <div className='col-span-2'>
            <label className='required' htmlFor='position'>
              Position
            </label>

            <select
              id='position'
              {...register('position' as never, {})}
              className='w-full px-6 text-lg border-0 rounded-md cursor-pointer text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
            >
              {allJobs
                .filter((job) => job.data.active)
                .map((job, index) => {
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
              id='commitment'
              className='w-full px-6 text-lg border-0 rounded-md cursor-pointer text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
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
              id='education'
              className='w-full px-6 text-lg border-0 rounded-md cursor-pointer text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              {...register('education' as never, {})}
            >
              <option value='High School Diploma'>High School Diploma</option>
              <option value='Still In College'>Still In College</option>
              <option value='Some College'>Some College</option>
              <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
              <option value="Master's Degree">Master&apos;s Degree</option>
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
                id='hours'
                className='w-1/2 px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
                type='number'
                placeholder='hrs'
                {...register('hours' as never, {})}
              />
              <input
                className='w-1/2 px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
                type='text'
                placeholder='$'
                {...register('pay' as never, {})}
              />
            </div>
          </div>

          <div className='col-span-2'>
            <label className='required' htmlFor='street-address'>
              Address
            </label>
            <div className='flex flex-col gap-2'>
              <input
                required
                type='text'
                id='street-address'
                autoComplete='street-address'
                className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
                placeholder='Address'
                {...register('address_line_1' as never, {})}
              />
              <input
                required
                type='text'
                autoComplete='address-level2'
                className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
                placeholder='City, State, Zip'
                {...register('address_line_2' as never, {})}
              />
            </div>
          </div>

          <div className='col-span-3'>
            <label className='required' htmlFor='about_personal'>
              Tell Us About Yourself (nothing to do with your profession)
            </label>
            <textarea
              required
              id='about_personal'
              rows={5}
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              {...register('about_personal' as never, {})}
            />
          </div>

          <div className='col-span-3'>
            <label className='required ' htmlFor='about_professional'>
              Tell Us About Yourself (your professional background)
            </label>
            <textarea
              required
              id='about_professional'
              rows={5}
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
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
              id='why'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              {...register('why' as never, {})}
            />
          </div>

          <div className='col-span-2 xl:col-span-1 '>
            <label className='' htmlFor='band'>
              What&apos;s your favorite band?
            </label>
            <input
              type='text'
              id='band'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              placeholder="Please don't say Chris Brown"
              {...register('band' as never, {})}
            />
          </div>

          <div className='col-span-2'>
            <label className='' htmlFor='website'>
              Website / Portfolio Link
            </label>
            <input
              id='website'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
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
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              type='file'
              id='resume'
              onChange={setFile}
              placeholder='Upload Your Resume'
              {...register('resume' as never, {
                required: true,
                validate: {
                  lessThan10MB: (files: any) => files[0]?.size < 10000000 || 'Max 10MB',
                  acceptedFormats: (files: any) => files[0].type === 'application/pdf',
                },
              })}
            />
            {errors.resume?.type === 'lessThan10MB' && (
              <p className='italic font-semibold text-peach'>Error: Must Be Under 10MB</p>
            )}
            <span>{fileName}</span>
            {errors.resume?.type === 'acceptedFormats' && (
              <p className='italic font-semibold text-peach'>Error: Must Be A PDF</p>
            )}
            <p className='pb-0 mb-0 text-sm text-wine-400'>
              Must be a PDF. Please upload a .pdf under 10MB. If you need help reducing your file
              size, check out:{' '}
              <Link hrefLang={'en-US'} href='https://ilovepdf.com' rel='noopener' target={'_blank'}>
                ilovepdf.com
              </Link>
            </p>
          </div>
          <div className='col-span-2'>
            <label className='' htmlFor='hear'>
              How did you hear about us?
            </label>
            <input
              type='text'
              id='hear'
              className='w-full px-6 text-lg border-0 rounded-md text-wine focus:ring-2 focus:border-blue-dark focus:ring-blue-dark'
              placeholder='bc you totally follow us on insta'
              {...register('hear' as never, {})}
            />
          </div>
          <div className='col-span-2'>
            <label htmlFor='authorized' className='required'>
              The Federal Government Says
            </label>
            <div className='flex gap-4'>
              <input
                className={
                  'rounded-lg bg-white  border-1  p-3 my-2 text-blue-dark cursor-pointer  drop-shadow-2xl focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
                }
                type='checkbox'
                required
                id='authorized'
                checked={authorized}
                onClick={handleAuthorized}
                {...register('authorized' as never)}
              />
              <label
                className={'cursor-pointer self-center text-sm font-medium leading-none my-0 py-0'}
                htmlFor='authorized'
                onClick={handleAuthorized}
              >
                I am authorized to work lawfully in the United States
              </label>
            </div>
          </div>
          <div className='col-span-2 pt-4 mt-4 border-t border-wine'>
            <p className='font-bold'>See? That wasn&apos;t too bad.</p>
            <p className='py-0 my-0'>
              Look it over, upload your resume, and send it off. Ditch the cover letter, chances are
              we won&apos;t read it anyways. We&apos;ll be in touch.
            </p>
          </div>
          <div className='col-span-2 my-2'>
            <button
              className='inline-block px-12 py-2 my-3 text-2xl font-bold text-center rounded-md cursor-pointer bg-blue text-cream drop-shadow-md hover:drop-shadow-sm disabled:bg-wine-300 disabled:cursor-progress disabled:hover:drop-shadow-md'
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
                id='handleMailchimp'
                checked={mailchimp}
                onClick={handleMailchimp}
                {...register('mailchimp' as never)}
              />
              <label
                className={'cursor-pointer self-center text-sm font-medium leading-none my-0 py-0'}
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
      </form>
    </>
  )
}
