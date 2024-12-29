import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import Link from 'next/link'
interface Props {
  header?: string
}
const Work_Industries = ({ header }: Props) => {
  return (
    <PageSection id='industries'>
      <InnerWrapper>
        <H2 color='blue-dark'>{`${header}`}</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4'>
          <Link
            href={'/industries/corporate-video-production'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            Corporate Video Production →
          </Link>
          <Link
            href={'/industries/cpg-video-production'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            Consumer Packaged Goods →
          </Link>
          <Link
            href={'/industries/nonprofit-video'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            Nonprofit Video Production →
          </Link>
          <Link
            href={'/industries/saas-video-production'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            SaaS/Startup Video Production →
          </Link>
          <Link
            href={'/industries/agency-video-production'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            Agency Video Production →
          </Link>
          <Link
            href={'/industries/education-video-production'}
            hrefLang='en-us'
            className='px-4 py-6 text-xl font-semibold text-center rounded-lg bg-cream text-blue hover-99 hover-shadow-none'
          >
            Education Video Production →
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Work_Industries
