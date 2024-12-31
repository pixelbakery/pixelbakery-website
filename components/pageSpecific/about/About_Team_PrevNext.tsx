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
      <PageSection className='py-2 bg-pink-lighter' id={'bio-nextPerson'}>
        <InnerWrapper className='py-2 my-2'>
          <div className='grid grid-cols-2 gap-x-6'>
            <Link
              as={`/about/${prev.filePath.replace(/\.mdx?$/, '')}`}
              href={`/about/[slug]`}
              hrefLang={'en-US'}
            >
              <div className='flex justify-start'>
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
                    {prev.data.name}
                  </Lead>
                  <p className='py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
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
                    className='h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                    noMargins={true}
                  >
                    {next.data.name}
                  </Lead>
                  <p className='py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                    {next.data.title}
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
        </InnerWrapper>
      </PageSection>
    )
  } else {
    return (
      <PageSection className='py-2 bg-pink-lighter' id={'bio-dismissed'}>
        <InnerWrapper className='flex flex-col justify-center py-2 my-2'>
          <H2
            color={'blue-dark'}
            className='self-center mb-6 text-center font-geologica'
          >{`${firstName} has since moved on from PB.`}</H2>
          <Lead className='self-center text-center'>And we miss them very much.</Lead>
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
