import React from 'react'
import { useForm } from 'react-hook-form'

import sendgrid from '@sendgrid/mail'

const message = {
  personalizations: [
    {
      to: [
        {
          email: 'john_doe@example.com',
          name: 'John Doe',
        },
        {
          email: 'julia_doe@example.com',
          name: 'Julia Doe',
        },
      ],
      cc: [
        {
          email: 'jane_doe@example.com',
          name: 'Jane Doe',
        },
      ],
      bcc: [
        {
          email: 'james_doe@example.com',
          name: 'Jim Doe',
        },
      ],
    },
    {
      from: {
        email: 'sales@example.com',
        name: 'Example Sales Team',
      },
      to: [
        {
          email: 'janice_doe@example.com',
          name: 'Janice Doe',
        },
      ],
      bcc: [
        {
          email: 'jordan_doe@example.com',
          name: 'Jordan Doe',
        },
      ],
    },
  ],
  from: {
    email: 'orders@example.com',
    name: 'Example Order Confirmation',
  },
  replyTo: {
    email: 'customer_service@example.com',
    name: 'Example Customer Service Team',
  },
  subject: 'Your Example Order Confirmation',
  content: [
    {
      type: 'text/html',
      value:
        '<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>',
    },
  ],
  attachments: [
    {
      content:
        'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==',
      filename: 'index.html',
      type: 'text/html',
      disposition: 'attachment',
    },
  ],
  categories: ['cake', 'pie', 'baking'],
  sendAt: 1617260400,
  batchId: 'AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl',
  asm: {
    groupId: 12345,
    groupsToDisplay: [12345],
  },
  ipPoolName: 'transactional email',
  mailSettings: {
    bypassListManagement: {
      enable: false,
    },
    footer: {
      enable: false,
    },
    sandboxMode: {
      enable: false,
    },
  },
  trackingSettings: {
    clickTracking: {
      enable: true,
      enableText: false,
    },
    openTracking: {
      enable: true,
      substitutionTag: '%open-track%',
    },
    subscriptionTracking: {
      enable: false,
    },
  },
}

function getDate() {
  const SetDate = new Date()
  const getDate =
    SetDate.getFullYear() +
    '-' +
    ('0' + (SetDate.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + SetDate.getDate()).slice(-2)
  return getDate
}
function getTime() {
  function checkTime(i) {
    return i < 10 ? '0' + i : i
  }
  const time = new Date(),
    h = checkTime(time.getHours()),
    m = checkTime(time.getMinutes()),
    s = checkTime(time.getSeconds())
  return h + ':' + m + ':00'
}

async function SendToMonday(data) {
  const strippedPhone = data.phone.replace(/[^+\d]+/g, '')
  const query5 =
    'mutation ($subject: String!, $columnVals: JSON!) { create_item (board_id:2102802560, item_name:$subject, column_values:$columnVals) { id } }'
  const vars = {
    subject: data.subject,
    columnVals: JSON.stringify({
      status: { label: 'Done' },
      //  date4: { date: getDate(), time: getTime() },
      long_text: { text: data.message },
      text6: data.name,
      phone: { phone: strippedPhone, countryShortName: 'US' },
      //  text6: { text: data.name },
      email: { email: data.email, text: data.email },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzOTI1NDQyNiwidWlkIjo2MjMxNTk0LCJpYWQiOiIyMDIyLTAxLTA0VDE3OjAxOjA1LjIwM1oiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjoyODE2ODI0LCJyZ24iOiJ1c2UxIn0.nkdU5cHY8Ut9NHMUcyXqqz2ciKaR3BdNByVi5hIzsB8',
    },
    body: JSON.stringify({
      query: query5,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

function Contact_ContactForm_Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => SendToMonday(data)
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
      <div className='w-full flex flex-wrap gap-2'>
        <input
          className='form-border-b flex-grow'
          type='tel'
          placeholder='phone (optional)'
          {...register('phone', {})}
        />
        <input
          className='form-border-b flex-grow'
          type='text'
          placeholder='company / entity'
          {...register('entity', {})}
        />
      </div>
      <input
        className='form-border-b w-full'
        type='text'
        placeholder="what's this all about?"
        {...register('subject', {})}
      />
      <textarea
        className='form-border-b w-full'
        placeholder='sup?'
        rows={5}
        {...register('message', {})}
      />

      <input className='bg-blue text-lg font-bold text-cream rounded-md px-8 py-3 ' type='submit' />
    </form>
  )
}
export default Contact_ContactForm_Form
