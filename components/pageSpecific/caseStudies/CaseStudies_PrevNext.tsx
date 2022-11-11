import PageSection from '@parts/PageSection'

import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons'
function CaseStudies_PrevNext({ prev, next }) {
  // const temp = allCaseStudies.sort((post1, post2) => (post1.data.title > post2.data.date ? -1 : 1))
  // temp.forEach((cs, index) => {
  //   console.log(index, cs.data.client, cs.data.title)
  // })

  // allActiveCaseStudies.forEach((cs, index) => {
  //   console.log(index, ':', cs.data.title, cs.data.date)
  // })
  // console.log('index: ', index)

  return (
    <PageSection className='bg-pink-lighter py-2' id={'prev-next'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between'>
          <Link
            as={`/work/case-studies/${prev.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            passHref
            hrefLang={'en-US'}
            className='flex'
            legacyBehavior
          >
            <div>
              <div className='w-20 self-center text-peach rotate-180'>
                <ChevronRightIcon />
              </div>
              <div className='self-center'>
                <p className='text-wine-400 font-medium text-md leading-none mb-1 mt-0 pt-0'>
                  {prev.data.client}
                </p>

                <p className='text-peach font-semibold text-xl leading-none mt-1 mb-0 pb-0'>
                  {prev.data.title}
                </p>
              </div>
            </div>
          </Link>
          <Link
            as={`/work/case-studies/${next.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            passHref
            hrefLang={'en-US'}
            className='flex justify-end'
            legacyBehavior
          >
            <>
              <div className='self-center'>
                <p className='text-wine-400 font-medium text-md leading-none mb-1 mt-0 pt-0'>
                  {next.data.client}
                </p>

                <p className='text-peach font-semibold text-xl leading-none mt-1 mb-0 pb-0'>
                  {next.data.title}
                </p>
              </div>
              <div className='w-20 text-peach self-center'>
                <ChevronRightIcon />
              </div>
            </>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_PrevNext
