import React from 'react'
import Link from 'next'

function Onboarding() {
  return (
    <section className=' my-4 bg-pink py-32 border-t-16 ' id='onboarding'>
      <div className='max-w-5xl mx-auto '>
        <h2 className=' text-pink-light'>Become a client</h2>
        <div className='w-full py-6 flex justify-end '>
          <div className=' mr-48 w-2/5'>
            <p className=' text-peach py-4 font-bold text-xl'>
              Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
              believe in building long-term relationships with our clients, so we’re never pushy or
              “car salesman-y”.
            </p>
          </div>
        </div>
        <div className='group my-3 w-full flex justify-end'>
          <Link
            className=' group bg-pink-light py-4 px-12 font-bold text-3xl rounded-md transform transition-y duration-500 ease-in-out hover:-translate-y-1'
            href={'/onboarding'}
          >
            <span className='inline-block text-peach transform transition-skew duration-500 ease-in-out group-hover:-skew-x-12 group-hover:opacity-95'>
              start a project
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Onboarding
