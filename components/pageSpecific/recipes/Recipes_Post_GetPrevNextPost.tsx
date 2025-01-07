import { ChevronRightIcon } from 'components/icons/Icons_UI'
import { InnerWrapper, PageSection } from '@parts'
import Lead from '@typography/Lead'
import Link from 'next/link'

interface Props {
  prevTitle: string
  prevFilePath: any
  prevAuthor: string
  nextTitle: string
  nextFilePath: any
  nextAuthor: string
  as: string
}

function Recipes_Post_GetPrevNextPost({
  prevTitle,
  prevFilePath,
  prevAuthor,
  nextTitle,
  nextFilePath,
  nextAuthor,
  as,
}: Props) {
  return (
    <PageSection color={'pink-lighter'} id={'next-post'}>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between gap-x-12'>
          <div className='w-1/2'>
            <Link
              hrefLang={'en-US'}
              as={`/${as}/${prevFilePath.replace(/\.mdx?$/, '')}`}
              href={`/${as}/[slug]`}
            >
              <div className='flex'>
                <div className='flex flex-col self-center justify-center w-12 h-full rotate-180 text-peach'>
                  <i className='p-2 text-3xl'>
                    <ChevronRightIcon />
                  </i>
                </div>
                <div className='self-center'>
                  <Lead
                    className='h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                    noMargins={true}
                  >
                    {prevTitle}
                  </Lead>
                  <p className='py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                    {prevAuthor}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='w-1/2 '>
            <Link
              hrefLang={'en-US'}
              as={`/${as}/${nextFilePath.replace(/\.mdx?$/, '')}`}
              href={`/${as}/[slug]`}
              className={'w-full flex flex-row justify-end'}
            >
              <div className='flex'>
                <div className='self-center w-fit'>
                  <Lead
                    className='h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                    noMargins={true}
                  >
                    {nextTitle}
                  </Lead>
                  <p className='py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                    {nextAuthor}
                  </p>
                </div>
                <div className='flex flex-col self-center justify-center h-full text-peach'>
                  {' '}
                  <i className='p-2 text-3xl'>
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
