import PageSection from '@parts/PageSection'

import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons'
interface PrevNext {
  active: boolean
  prev: any
  next: any
}
function About_Team_PrevNext({ active, prev, next }: PrevNext) {
  if (active) {
    return (
      <PageSection className='bg-pink-light py-2'>
        <InnerWrapper className='py-2 my-2'>
          <div className='grid grid-cols-2 gap-x-6'>
            <Link
              as={`/about/${prev.filePath.replace(/\.mdx?$/, '')}`}
              href={`/about/[slug]`}
              passHref
            >
              <a className='flex justify-start'>
                <div className='w-12 self-center text-peach rotate-180 h-full flex flex-col justify-center'>
                  <ChevronRightIcon />
                </div>

                <div className='self-center'>
                  <p className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full '>
                    {prev.data.name}
                  </p>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {prev.data.title}
                  </p>
                </div>
              </a>
            </Link>
            <Link
              as={`/about/${next.filePath.replace(/\.mdx?$/, '')}`}
              href={`/about/[slug]`}
              passHref
            >
              <a className='flex justify-end h-full'>
                <div className='self-center w-fit'>
                  <p className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full '>
                    {next.data.name}
                  </p>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {next.data.title}
                  </p>
                </div>

                <div className='w-12 text-peach self-center h-full flex flex-col justify-center'>
                  <ChevronRightIcon />
                </div>
              </a>
            </Link>
          </div>
        </InnerWrapper>
      </PageSection>
    )
  } else return
}
export default About_Team_PrevNext
