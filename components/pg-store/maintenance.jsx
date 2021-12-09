import React from 'react'

function Maintenance() {
  return (
    <section className='my-4 bg-yellow py-16 px-8'>
      <div className='max-w-6xl mx-auto'>
        <h2>Mind the dust</h2>
        <p className='my-4 text-blue-dark text-3xl font-bold md:max-w-3xl'>
          This is a development preview of our new website ~~see ya in Q1 of 2022 😉~~. This means
          that a lot of links are going to be broken outside of our shop pages.
        </p>
        <p className='my-4 text-peach font-bold italic text-2xl '>
          please don't tell the health inspector.
        </p>
      </div>
    </section>
  )
}

export default Maintenance
