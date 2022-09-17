import { ChevronRightIcon } from '@images/UI_Icons'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'

function Education_MadeToOrder_GetPrevNextPost({ prev, next }) {
  return (
    <PageSection color={'pink-light'} id={'next-post'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between'>
          <Link
            as={`/education/tutorials/${prev.filePath.replace(/\.mdx?$/, '')}`}
            href={`/education/tutorials/[slug]`}
          >
            <a className='flex'>
              <div className='w-20 self-center text-peach rotate-180'>
                <ChevronRightIcon />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-peach font-semibold text-xl leading-none my-0 py-0 max-w-md'>
                  {prev.data.title}
                </p>
              </div>
            </a>
          </Link>
          <Link
            as={`/education/tutorials/${next.filePath.replace(/\.mdx?$/, '')}`}
            href={`/education/tutorials/[slug]`}
          >
            <a className='flex'>
              <div className='flex flex-col justify-center'>
                <p className='text-peach font-semibold text-right text-xl leading-none my-0 py-0 max-w-md'>
                  {next.data.title}
                </p>
              </div>

              <div className='w-20 self-center text-peach'>
                <ChevronRightIcon />
              </div>
            </a>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Education_MadeToOrder_GetPrevNextPost
