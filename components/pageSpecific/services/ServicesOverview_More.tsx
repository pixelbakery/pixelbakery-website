import { Lottie_Animation } from '@lib/lottie_helpers'
import Button_Outlined from '@parts/Button_Outlined'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'
import H2AndLead from '@typography/H2AndLead'
import Link from 'next/link'

function ServicesOverview_More() {
  return (
    <PageSection_FullWidth id='more-services'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Link href={'/services/web-hosting'} passHref>
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
        <Link href={'/services/ui-ux'} passHref>
          <div className='bg-cream flex flex-col justify-center'>
            <div
              className='px-12 py-12 cursor-pointer mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-x-24'
              id='ui-ux'
            >
              <H2AndLead
                headerColor='blue'
                className='mb-6 2xl:mb-10 self-center'
                headerText={'UI + UX Design'}
                leadText={'Breathe new life into your digital storefront'}
              ></H2AndLead>
              <div className='self-center'>
                <p>I think our dope website speaks for itself</p>
                <Button_Outlined
                  text={'More'}
                  link={'/services/ui-ux'}
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
