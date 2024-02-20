import { ChevronRightIcon } from 'components/icons/Icons_UI'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'
import Link from 'next/link'

function Education_MadeToOrder_GetPrevNextPost({ prev, next }) {
  return (
    <PageSection color={'pink-lighter'} id={'next-post'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='grid grid-cols-2 gap-x-12'>
          <div className='h-full self-start'>
            <Link
              as={`/education/tutorials/${prev.filePath.replace(/\.mdx?$/, '')}`}
              href={`/education/tutorials/[slug]`}
              hrefLang={'en-US'}
            >
              <div className='flex justify-start h-full'>
                <div className='text-peach self-center h-full flex flex-col justify-center rotate-180'>
                  <i className='text-3xl p-2'>
                    <ChevronRightIcon />
                  </i>
                </div>
                <div className='self-center w-fit'>
                  <Lead
                    className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full text-left'
                    noMargins={true}
                  >
                    {prev.data.title}
                  </Lead>
                </div>
              </div>
            </Link>
          </div>
          <div className='h-full self-start'>
            <Link
              as={`/education/tutorials/${next.filePath.replace(/\.mdx?$/, '')}`}
              href={`/education/tutorials/[slug]`}
              hrefLang={'en-US'}
            >
              <div className='flex justify-end h-full'>
                <div className='self-center w-fit'>
                  <Lead
                    className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full text-right'
                    noMargins={true}
                  >
                    {next.data.title}
                  </Lead>
                </div>
                <div className='text-peach self-center h-full flex flex-col justify-center'>
                  <i className='text-3xl p-2'>
                    <ChevronRightIcon />
                  </i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Education_MadeToOrder_GetPrevNextPost
