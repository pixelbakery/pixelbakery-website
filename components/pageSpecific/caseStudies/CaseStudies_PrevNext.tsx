import PageSection from '@parts/PageSection'

import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons'
function CaseStudies_PrevNext({ title, allCaseStudies }) {
  const temp = allCaseStudies.sort((post1, post2) => (post1.data.title > post2.data.date ? -1 : 1))
  temp.forEach((cs, index) => {
    console.log(index, cs.data.client, cs.data.title)
  })
  const index = allCaseStudies.findIndex(
    (project) => project.data.title.toLowerCase() === title.toLowerCase(),
  )

  // console.log('index: ', index)

  const getPrev = (i) => {
    if (i === 0) {
      return allCaseStudies[Object.keys(allCaseStudies).length - 1]
    } else {
      return allCaseStudies[i - 1]
    }
  }

  const getNext = (i) => {
    if (i === Object.keys(allCaseStudies).length - 1) {
      return allCaseStudies[0]
    } else {
      return allCaseStudies[i + 1]
    }
  }

  const prev = getPrev(index)
  const next = getNext(index)

  return (
    <PageSection className='bg-pink-light py-2'>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between'>
          <Link
            as={`/work/case-studies/${prev.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            passHref
          >
            <a className='flex'>
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
            </a>
          </Link>
          <Link
            as={`/work/case-studies/${next.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            passHref
          >
            <a className='flex justify-end'>
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
            </a>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_PrevNext
