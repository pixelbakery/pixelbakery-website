import React from 'react'

function About_Intro() {
  return (
    <section className='my-4' id='team'>
      <div className='mx-auto grid gap-4 grid-cols-12'>
        <div className='bg-blue aspect-w-3 aspect-h-4 '>
          <div className='px-12 w-full  flex flex-col justify-center'>
            <h2 className='col-span-3 text-blue-dark text-left mx-auto'>
              who
              <br className='hidden sm:block' /> we
              <br className='hidden sm:block' /> are
            </h2>
          </div>
        </div>
        <div className=' col-span9'>
          <h3 className='text-blue bg-yellow text-6xl max-w-3xl'>
            we&apos;re a ragtag team of scrappy designers and producers deadset on these three
            things
          </h3>
        </div>
      </div>
    </section>
  )
}
export default About_Intro
