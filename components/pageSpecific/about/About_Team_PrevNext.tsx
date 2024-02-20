import PageSection from '@parts/PageSection'

import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
import { ChevronRightIcon } from 'components/icons/Icons_UI'
import Lead from '@typography/Lead'
import Button_Filled from '@parts/Button_Filled'
import H2 from '@typography/H2'
interface PrevNext {
  active: boolean
  prev: any
  next: any
  name: string
}

function About_Team_PrevNext({ active, prev, next, name }: PrevNext) {
  // eslint-disable-next-line no-unused-vars
  const [firstName, lastName] = name.split(' ')
  if (active) {
    return (
      <PageSection className='bg-pink-lighter py-2' id={'bio-nextPerson'}>
        <InnerWrapper className='py-2 my-2'>
          <div className='grid grid-cols-2 gap-x-6'>
            <Link
              as={`/about/${prev.filePath.replace(/\.mdx?$/, '')}`}
              href={`/about/[slug]`}
              hrefLang={'en-US'}
            >
              <div className='flex justify-start'>
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
                    {prev.data.name}
                  </Lead>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {prev.data.title}
                  </p>
                </div>
              </div>
            </Link>
            <Link
              as={`/about/${next.filePath.replace(/\.mdx?$/, '')}`}
              href={`/about/[slug]`}
              hrefLang={'en-US'}
            >
              <div className='flex justify-end h-full'>
                <div className='self-center w-fit'>
                  <Lead
                    className='text-peach font-semibold text-lg md:text-md leading-none  my-0 py-0 h-full '
                    noMargins={true}
                  >
                    {next.data.name}
                  </Lead>
                  <p className='text-wine-400 font-medium text-xs md:text-sm italic leading-none mb-0 py-0 mt-1'>
                    {next.data.title}
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
        </InnerWrapper>
      </PageSection>
    )
  } else {
    return (
      <PageSection className='bg-pink-lighter py-2' id={'bio-dismissed'}>
        <InnerWrapper className='py-2 my-2 flex flex-col justify-center'>
          <H2
            color={'blue-dark'}
            className='self-center mb-6 font-gilroy text-center'
          >{`${firstName} has since moved on from PB.`}</H2>
          <Lead className='text-center self-center'>And we miss them very much.</Lead>
          <Button_Filled
            text={'See All Past Employees'}
            link={'/about/past-employees'}
            center={true}
            bgColor={'blue'}
            textColor={'cream'}
            chevronDirection={'right'}
          />
        </InnerWrapper>
      </PageSection>
    )
  }
}
export default About_Team_PrevNext
