import React from 'react'
import Image from 'next/image'
function FourOhFour() {
  return (
    <main>
      <section className='lander' id='topOfPage'>
        <div className='mx-auto flex flex-col justify-center max-w-4xl h-full'>
          <h1 className='mb-12 text-center text-4xl text-blue'>404: Page Not Found</h1>
          <Image
            src={'/img/imindanger.webp'}
            layout='responsive'
            width='480px'
            height='269px'
            className='w-full'
          />
        </div>
      </section>
    </main>
  )
}

export default FourOhFour
