import { PageSection, InnerWrapper } from '@parts'

import Link from 'next/link'
import { ChevronRightIcon } from '@icons'

interface CaseStudyData {
  client: string
  title: string
}

interface CaseStudyProps {
  filePath: string
  data: CaseStudyData
}

interface CaseStudiesPrevNextProps {
  prev: CaseStudyProps
  next: CaseStudyProps
}
function CaseStudies_PrevNext({ prev, next }: CaseStudiesPrevNextProps) {
  return (
    <PageSection className='py-2 bg-pink-lighter' id={'prev-next'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between'>
          <Link
            as={`/work/case-studies/${prev.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            hrefLang={'en-US'}
            aria-label={`${prev.data.client} –  ${prev.data.title}`}
          >
            <div className='flex'>
              <div className='self-center w-20 rotate-180 text-peach'>
                <ChevronRightIcon />
              </div>
              <div className='self-center'>
                <p className='pt-0 mt-0 mb-1 font-medium leading-none text-wine-400 text-md'>
                  {prev.data.client}
                </p>

                <p className='pb-0 mt-1 mb-0 text-xl font-semibold leading-none text-peach'>
                  {prev.data.title}
                </p>
              </div>
            </div>
          </Link>
          <Link
            as={`/work/case-studies/${next.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            hrefLang={'en-US'}
            aria-label={`${next.data.client} –  ${next.data.title}`}
          >
            <div className='flex justify-end'>
              <div className='self-center'>
                <p className='pt-0 mt-0 mb-1 font-medium leading-none text-wine-400 text-md'>
                  {next.data.client}
                </p>

                <p className='pb-0 mt-1 mb-0 text-xl font-semibold leading-none text-peach'>
                  {next.data.title}
                </p>
              </div>
              <div className='self-center w-20 text-peach'>
                <ChevronRightIcon />
              </div>
            </div>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_PrevNext
