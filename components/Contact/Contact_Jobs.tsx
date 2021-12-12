import React from 'react'
import Button_Filled from '../parts/Button_Filled'

function Contact_Jobs() {
  return (
    <section className='my-4 bg-wine mx-auto py-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-wrap'>
          <h2>Looking for a job?</h2>
          <div>
            <h3>We&apos;re always searching for new family members</h3>
            <p>
              Got what it takes to rise with us? Great! Send us a link to your résumé or portfolio
              to become part of our talent pool.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button_Filled link={'/'} text={'get to work'} color={undefined} />
        <Button_Filled link={'/'} text={"get to freelancin'"} color={undefined} />
        <Button_Filled link={'/'} text={"get to actin'"} color={undefined} />
      </div>
    </section>
  )
}
export default Contact_Jobs
