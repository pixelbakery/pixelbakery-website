import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Link from 'next/link'

const Industries_MoreIndustries = () => {
  return (
    <PageSection id='more-industries'>
      <InnerWrapper>
        <H2 color='blue-dark'>Other Industries</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4'>
          <Link
            href={'/industries/corporate-video-production'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            Corporate Video Production →
          </Link>
          <Link
            href={'/industries/cpg-video-production'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            Consumer Packaged Goods →
          </Link>
          <Link
            href={'/industries/nonprofit-video'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            Nonprofit Video Production →
          </Link>
          <Link
            href={'/industries/saas-video-production'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            SaaS/Startup Video Production →
          </Link>
          <Link
            href={'/industries/agency-video-production'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            Agency Video Production →
          </Link>
          <Link
            href={'/industries/education-video-production'}
            hrefLang='en-us'
            className='bg-cream py-6 px-4 rounded-lg text-blue font-semibold text-xl hover-99 hover-shadow-none text-center'
          >
            Education Video Production →
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_MoreIndustries
