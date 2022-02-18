import Lead from '@typography/Lead'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import 'react-toastify/dist/ReactToastify.css'
import ReactPDF, { PDFViewer, usePDF } from '@react-pdf/renderer'
import CareersApplicationPDF from '@lib/careersApplicationPDF'
import ReactDOM from 'react-dom'
export default function Careers_Application_Form({ allJobs }) {
  const [submitted, setSubmitted] = useState(false)

  // const [instance, update] = usePDF({ document })
  const {
    register,
    watch,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm()
  const watchAllFields = watch()
  // Handle the submit
  const onSubmit = (data) => {
    //     SendToMailchimp(data)
    resetField('email')
    setSubmitted(true)
    //     setMessage('👩‍🍳 Nice. Check your inbox. <em>bon appetit</em>')

    console.log(errors)
  }
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
  console.log(errors)

  const test = ReactPDF.renderToStream(<CareersApplicationPDF data={'data'} />)
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            type='text'
            required
            placeholder='First'
            {...register('name_first', {})}
          />
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            required
            type='text'
            placeholder='Middle'
            {...register('name_middle', {})}
          />
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            required
            type='text'
            placeholder='Last'
            {...register('name_last', {})}
          />
        </div>

        <div className='col-span-2 lg:col-span-1'>
          <label htmlFor='pronoun' className=''>
            Preferred Pronoun
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            type='email'
            placeholder='hello@pixelbakery.com'
            {...register('email', {})}
          />
        </div>

        <div className='col-span-2 lg:col-span-1'>
          <label className='required' htmlFor='phone'>
            Phone Number
          </label>
          <input
            type='tel'
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            placeholder='Phone'
            {...register('phone', {})}
          />
        </div>

        <div className='col-span-2 xl:col-span-1'>
          <label className='' htmlFor='zodiac'>
            LinkedIn or Instagram
          </label>
          <input
            type='url'
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6 cursor-pointer'
            {...register}
          >
            <option value='High School Diploma'>High School Diploma</option>
            <option value=' Still In College'> Still In College</option>
            <option value=' Some College'> Some College</option>
            <option value=" Bachelor's Degree"> Bachelor's Degree</option>
            <option value=" Master's Degree"> Master's Degree</option>
            <option value=' Ph.D'> Ph.D</option>
            <option value=' Self-Educated'> Self-Educated</option>
          </select>
        </div>

        <div className='col-span-2'>
          <label className='' htmlFor='hours'>
            Desired Hours &amp; Pay
          </label>
          <div className='flex gap-2'>
            <input
              className='w-1/2 border-0 rounded-md text-lg text-wine px-6'
              type='number'
              placeholder='hrs'
              {...register('hours', {})}
            />
            <input
              className='w-1/2 border-0 rounded-md text-lg text-wine px-6'
              type='text'
              placeholder='$'
              {...register('pay', {})}
            />
          </div>
        </div>

        <div className='col-span-2'>
          <label className='required' htmlFor='address1'>
            Address
          </label>
          <div className='flex flex-col gap-2'>
            <input
              required
              type='text'
              className='w-full border-0 rounded-md text-lg text-wine px-6'
              placeholder='Address'
              {...register('address1', {})}
            />
            <input
              required
              type='text'
              className='w-full border-0 rounded-md text-lg text-wine px-6'
              placeholder='City, State, Zip'
              {...register('address2', {})}
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            {...register('why', {})}
          />
        </div>

        <div className='col-span-2 xl:col-span-1 '>
          <label className=' ' htmlFor='why'>
            What's your favorite band?
          </label>
          <input
            type='text'
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            placeholder="Please don't say Chris Brown"
            {...register('band', {})}
          />
        </div>

        <div className='col-span-2'>
          <label className=' ' htmlFor='website'>
            Website / Portfolio Link
          </label>
          <input
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
            type='file'
            placeholder='Upload Your Resume'
            {...register('resume', {})}
          />
          <p className='text-sm text-wine-400 mb-0 pb-0'>
            Accepted file types: pdf, jpg, png, gif, jpeg, Max. file size: 20 MB. Please upload a
            .pdf under 20MB. If you need help reducing your file size, check out:{' '}
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
            className='w-full border-0 rounded-md text-lg text-wine px-6'
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
                'rounded-lg bg-white  border-1  p-3 my-2 text-blue-dark cursor-pointer  drop-shadow-2xl'
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
