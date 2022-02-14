import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import Link from 'next/link'

function Careers_Apprenticeships() {
  return (
    <PageSection id='' color='white' className=''>
      <InnerWrapper className='mx-auto max-w-7xl py-1 my-0'>
        <div className='mb-12'>
          <H2AndLead
            headerColor='blue'
            className='text-blue'
            headerText={'Apprenticeships'}
            leadText={
              'For those that are still in school or eager to learn, we offer apprenticeships to show you the ropes.'
            }
          />
        </div>
        <div className='grid grid-cols-6 gap-4'>
          <Link href={'/careers/anything-goes'} passHref>
            <a className='col-span-1'>
              <article className='px-3 py-4 border-4 border-pink rounded-lg flex flex-col justify-between'>
                <div className='text-blue-dark bg-yellow font-bold py-1 px-2 mr-auto rounded-md '>
                  Part-Time
                </div>
                <div className='py-8'>
                  <h3 className='text-pink text-3xl mb-0 pb-0 leading-none'>anything goes</h3>
                  <small className='text-blue-dark opacity-80 my-0 py-0 leading-none '>
                    lincoln, ne
                  </small>
                </div>
                <small className='text-wine opacity-50 text-2xs leading-tight'>
                  posted on <br />
                  november 21, 2021
                </small>
              </article>
            </a>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_Apprenticeships
