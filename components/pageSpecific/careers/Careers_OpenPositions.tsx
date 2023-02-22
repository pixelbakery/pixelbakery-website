import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Careers_Card from './Careers_Card'
import cn from 'classnames'
import H2 from '@typography/H2'
import Link from 'next/link'
import H2AndLead from '@typography/H2AndLead'
function Careers_OpenPositions({ jobs, header, subheader }) {
  return (
    <PageSection className='lg:py-12' id={'open-positions'}>
      <InnerWrapper>
        <div className='mb-12'>
          <div className=''>
            <H2AndLead
              className={cn(
                'font-bold max-w-md mt-0 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-3xl leading-none mb-4 text-blue',
              )}
              headerText={header}
              leadText={subheader}
            ></H2AndLead>
            <p
              className={cn('text-2xl lg:text-3xl mt-0 font-bold leading-none max-w-lg text-wine')}
            ></p>
          </div>
        </div>
        {jobs.length === 0 ? (
          <p className='italic text-wine-300'>
            Sorry, we don't currently have any {header}. Be sure to check our{' '}
            <Link hrefLang={'en-US'} href={'https://instagram.com/pixelbakery'}>
              Instagram
            </Link>{' '}
            on a regular basis to find out when we do.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {jobs
              // .filter((job) => !job.internship)
              .map((job, i) => {
                return (
                  <div key={i}>
                    <Careers_Card job={job} />
                  </div>
                )
              })}
          </div>
        )}
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_OpenPositions
