import { InnerWrapper, PageSection } from '@parts'
import { H3 } from '@typography'
import Link from 'next/link'

interface Job {
  filePath: string
  data: {
    title: string
  }
}

interface Props {
  jobs: Job[]
}
const Careers_PastCareers = ({ jobs }: Props) => {
  return (
    <PageSection id='past-careers'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='col-span-1'>
            <H3 color='wine-500'>Closed Positions</H3>
          </div>
          <ul className='relative grid grid-cols-1 col-span-1 gap-2 mx-auto'>
            {jobs.map((job, i) => (
              <Link
                key={i}
                hrefLang={'en-US'}
                as={`/careers/${job.filePath.replace(/\.mdx?$/, '')}`}
                href={`/careers/[slug]`}
                className='col-span-1 text-left'
              >
                <li className='relative italic origin-left hover-99 text-wine-300 hover-shadow-none'>
                  {job.data.title} →{' '}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_PastCareers
