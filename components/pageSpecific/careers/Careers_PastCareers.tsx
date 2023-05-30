import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '@typography/H3'
import Link from 'next/link'

interface Props {
  jobs: any
}
const Careers_PastCareers = ({ jobs }: Props) => {
  return (
    <PageSection id='past-careers'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='col-span-1'>
            <H3 color='wine-500'>Closed Positions</H3>
          </div>
          <ul className='grid grid-cols-1 relative gap-2 col-span-1 mx-auto'>
            {jobs.map((job, i) => (
              <Link
                key={i}
                hrefLang={'en-US'}
                as={`/careers/${job.filePath.replace(/\.mdx?$/, '')}`}
                href={`/careers/[slug]`}
                className=' col-span-1 text-left'
              >
                <li className='relative hover-99 origin-left italic text-wine-300 hover-shadow-none'>
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
