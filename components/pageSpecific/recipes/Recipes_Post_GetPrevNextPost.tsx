import { ChevronRightIcon } from '@icons'
import { InnerWrapper, PageSection } from '@parts'
import { Lead } from '@typography'
import Link from 'next/link'
import type { PrevNextNavigation } from '@/types/general'

interface Props {
  prev: PrevNextNavigation | null
  next: PrevNextNavigation | null
  as: string
}

function Recipes_Post_GetPrevNextPost({ prev = null, next = null, as }: Props) {
  return (
    <PageSection color={'pink-lighter'} id={'next-post'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 justify-between gap-x-12'>
          {prev && (
            <div className='w-full col-span-1'>
              <Link hrefLang={'en-US'} as={`/${as}/${prev.slug}`} href={`/${as}/[slug]`}>
                <div className='flex'>
                  <div className='flex flex-col self-center justify-center w-12 h-full rotate-180 text-peach'>
                    <i className='p-2 text-3xl'>
                      <ChevronRightIcon />
                    </i>
                  </div>
                  <div className='self-center'>
                    <Lead
                      className='text-balance h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                      noMargins={true}
                    >
                      {prev.title}
                    </Lead>
                    <p className='py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                      {prev.author?.name || 'Staff Writer'}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          {next && (
            <div className='col-span-1'>
              <Link
                hrefLang={'en-US'}
                as={`/${as}/${next.slug}`}
                href={`/${as}/[slug]`}
                className={'w-full flex flex-row justify-end'}
              >
                <div className='flex w-full text-right justify-end'>
                  <div className='self-center w-full'>
                    <Lead
                      className='text-balance text-right h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                      noMargins={true}
                    >
                      {next.title}
                    </Lead>
                    <p className='flex-shrink py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                      {next.author?.name || 'Staff Writer'}
                    </p>
                  </div>
                  <div className='flex flex-col self-center justify-center h-full text-peach'>
                    <i className='p-2 text-3xl'>
                      <ChevronRightIcon />
                    </i>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Recipes_Post_GetPrevNextPost
