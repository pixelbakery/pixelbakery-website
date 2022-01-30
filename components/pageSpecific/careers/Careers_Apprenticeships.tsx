import Link from 'next/link'

function Careers_Apprenticeships() {
  return (
    <section id='' className='my-4'>
      <div className='mx-auto max-w-7xl py-10'>
        <div className='mb-12'>
          <h2 className='text-blue'>Apprenticeships</h2>
          <h3 className='opacity-80 text-wine font-semibold'>
            this is a sub header interesting sub heads go here
          </h3>
        </div>
        <div className='grid grid-cols-6 gap-4'>
          <Link href={'/'} passHref>
            <a className='col-span-1'>
              <article className='px-3 py-4 border-4 border-pink rounded-lg flex flex-col justify-between'>
                <div className='text-blue-dark bg-yellow font-bold py-1 px-2 mr-auto rounded-md '>
                  Part-Time
                </div>
                <div className='py-8'>
                  <h3 className='text-pink text-3xl mb-0 pb-0 leading-none'>account executive</h3>
                  <small className='text-blue-dark opacity-80 my-0 py-0 leading-none '>
                    lincoln, ne
                  </small>
                </div>
                <small className='text-wine opacity-50 text-2xs'>posted on november 21, 2021</small>
              </article>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Careers_Apprenticeships
