import PageSection_FullWidth from '@parts/PageSection_FullWidth'

import H2AndLead from '@typography/H2AndLead'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Button_Outlined = dynamic(() => import('@parts/Button_Outlined'), {
  ssr: false,
})
const ServicesOverview_More = () => {
  return (
    <PageSection_FullWidth id='more-services'>
      <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
        <Link hrefLang={'en-US'} href={'/services/web-hosting'}>
          <div className='bg-cream flex flex-col justify-center'>
            <div
              className='px-12 py-12 cursor-pointer mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-x-24'
              id='web-hosting'
            >
              <H2AndLead
                headerColor='blue'
                className='mb-6 2xl:mb-10 self-center  '
                headerText={'Web Hosting'}
                leadText={'Pay what you want'}
              ></H2AndLead>
              <div className='self-center'>
                <p>
                  We offer this service to any Nebraskan. You're welcome to choose how much you can
                  afford.
                </p>
                <Button_Outlined
                  text={'More'}
                  link={'/services/web-hosting'}
                  color={'blue'}
                  chevronDirection='right'
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_More
