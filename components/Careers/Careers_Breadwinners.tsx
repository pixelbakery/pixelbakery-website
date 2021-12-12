import React from 'react'

import Link from 'next/link'

function Careers_Breadwinners() {
  return (
    <Link href={'/'} passHref>
      <section id='' className='my-4 bg-blue-dark py-12 px-6'>
        <div className='mx-auto max-w-6xl py-4'>
          <h2 className='text-cream text-2xl'>breadwinner program</h2>
          <p className='text-pink text-xl'>
            If you’re looking for some extra cash in your pocket and a really fun and fulfilling
            side hustle with little commitment, this opportunity is for you.
          </p>
        </div>
      </section>
    </Link>
  )
}

export default Careers_Breadwinners
