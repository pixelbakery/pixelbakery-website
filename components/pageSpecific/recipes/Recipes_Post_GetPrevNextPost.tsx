import { ChevronRightIcon } from '@images/UI_Icons'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'
import Link from 'next/link'

function Recipes_Post_GetPrevNextPost({ prev, next }) {
  return (
    <PageSection color={'pink-lighter'} id={'next-post'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between gap-x-12'>
          <div className='w-1/2'>
            <Link
              hrefLang={'en-US'}
              as={`/recipes/${prev.filePath.replace(/\.mdx?$/, '')}`}
              href={`/recipes/[slug]`}
            >
              <div className='flex'>
                <div className='w-12 self-center text-peach rotate-180 h-full flex flex-col justify-center'>
                  <i className='text-3xl p-2'>
                    <ChevronRightIcon />
                  </i>
                </div>
                <div className='self-center'>
                  <Lead
                    className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full '
                    noMargins={true}
                  >
                    {prev.data.title}
                  </Lead>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {prev.data.author.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='w-1/2'>
            <Link
              hrefLang={'en-US'}
              as={`/recipes/${next.filePath.replace(/\.mdx?$/, '')}`}
              href={`/recipes/[slug]`}
            >
              <div className='flex'>
                <div className='self-center w-fit'>
                  <Lead
                    className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full '
                    noMargins={true}
                  >
                    {next.data.title}
                  </Lead>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {next.data.author.name}
                  </p>
                </div>
                <div className=' text-peach self-center h-full flex flex-col justify-center'>
                  {' '}
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
export default Recipes_Post_GetPrevNextPost
