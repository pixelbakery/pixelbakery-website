import dynamic from 'next/dynamic'
import Link from 'next/link'

import { PageSection_FullWidth } from '@parts'
import { H2AndLead } from '@typography'

const Button_Outlined = dynamic(() => import('@parts/Button_Outlined'), {
  ssr: false,
})

const ServicesOverview_More = () => {
  return (
    <PageSection_FullWidth id='more-services'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-1'>
        <Link hrefLang={'en-US'} href={'/services/web-hosting'}>
          <div className='flex flex-col justify-center bg-cream'>
            <div
              className='grid max-w-2xl grid-cols-1 px-12 py-12 mx-auto cursor-pointer lg:grid-cols-2 gap-x-24'
              id='web-hosting'
            >
              <H2AndLead
                headerColor='blue'
                className='self-center mb-6 2xl:mb-10 '
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
