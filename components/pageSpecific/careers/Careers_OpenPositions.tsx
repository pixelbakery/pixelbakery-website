import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Careers_Card from './Careers_Card'
import cn from 'classnames'
function Careers_OpenPositions({ jobs, header, subheader }) {
  return (
    <PageSection className='lg:py-12'>
      <InnerWrapper>
        <div className='mb-12'>
          <div className=''>
            <h2
              className={cn(
                'font-bold max-w-md mt-0 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-3xl leading-none mb-4 text-blue',
              )}
            >
              {header}
            </h2>
            <p
              className={cn('text-2xl lg:text-3xl mt-0 font-bold leading-none max-w-lg text-wine')}
            >
              {subheader}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4'>
          {jobs.map((job) => {
            return <Careers_Card job={job} />
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_OpenPositions
