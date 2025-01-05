import { InnerWrapper, PageSection } from '@parts'
import Careers_Card from './Careers_Card'
import Link from 'next/link'
import H2AndLead from '@typography/H2AndLead'
function Careers_OpenPositions({ jobs, header, subheader }) {
  return (
    <PageSection className='lg:py-12' id={'open-positions'} disableSpacing={true}>
      <InnerWrapper>
        <div className='mb-12'>
          <div className=''>
            <H2AndLead
              headerText={header}
              headerColor={'peach'}
              leadText={subheader}
              leadColor={'blue'}
            />
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
