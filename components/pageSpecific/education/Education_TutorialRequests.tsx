import Link from 'next/link'
import Image from 'next/image'
import H2 from '@parts/H2'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import { useForm } from 'react-hook-form'
import sendgrid from '@sendgrid/mail'
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

function Education_TutorialRequests() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => SendToMonday(data)
  console.log(errors)

  return (
    <PageSection>
      <InnerWrapper>
        <div>
          <H2 id='tutorial-requests'>Tutorial Requests</H2>
        </div>

        <div className='w-full '>
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

            <input
              className='bg-blue text-lg font-bold text-cream rounded-md px-8 py-3 '
              type='submit'
            />
          </form>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_TutorialRequests
