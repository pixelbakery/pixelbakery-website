import React from 'react'
import PageSection from '../PageSection'

function Home_WhoTheHeck() {
  return (
    <section className='py-8 px-8 lg:py-32 bg-pink-light'>
      <div className='max-w-md  md:max-w-2xl xl:max-w-6xl mx-auto'>
        <h2 className=' my-8 2xl:text-8xl text-peach'>who the heck</h2>
        <div className='text-4xl  text-pink my-8 leading-none lowercase font-bold'>
          <p className='py-3 max-w-xl lg:max-w-4xl'>
            we&apos;re an award-winning multidisciplinary production studio centered around
            animation, film, and design.
          </p>
          <p className='py-3 mt-2'>We don&apos;t do catering.</p>
        </div>
      </div>
    </section>
  )
}
export default Home_WhoTheHeck
