import { SendToMonday_Tutorials } from '@lib/api_sendToMonday'
import H2 from '@typography/H2'

import { InnerWrapper, PageSection } from '@parts'
import { useForm } from 'react-hook-form'
import { usePlausible } from 'next-plausible'

function Education_TutorialRequests() {
  const { register, handleSubmit } = useForm()
  const onSubmit = ({ data }: any) => {
    SendToMonday_Tutorials(data)
    plausible('Custom Event', { props: { source: 'tutorial-request-submit' } })
  }
  const plausible = usePlausible()

  return (
    <PageSection id={'tutorial-requests'}>
      <InnerWrapper>
        <div>
          <H2 id='tutorial-requests'>Tutorial Requests</H2>
        </div>

        <div className='w-full '>
          <form
            className='flex flex-wrap max-w-2xl gap-2 mx-auto'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className='w-full form-input'
              type='text'
              placeholder='name'
              {...register('name', { required: true })}
            />
            <input
              className='w-full form-input'
              type='email'
              placeholder='email'
              {...register('email', { required: true })}
            />

            <input
              className='w-full form-input'
              type='text'
              placeholder="what's this all about?"
              {...register('subject', {})}
            />
            <textarea
              className='w-full form-input'
              placeholder='sup?'
              rows={5}
              {...register('message', {})}
            />

            <input className='form-submit' type='submit' />
          </form>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_TutorialRequests
