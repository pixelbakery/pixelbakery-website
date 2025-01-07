import Link from 'next/link'
import { ChevronRightIcon } from '@icons'
import { Lead, H2 } from '@typography'
import { usePlausible } from 'next-plausible'
import type { Person } from '@/types/people'
import { Button_Filled, Button_Outlined, PageSection, InnerWrapper } from '@parts'

export interface PersonWithBioLink extends Person {
  bioLink: string 
}

interface PrevNextProps {
  active: boolean
  prev: PersonWithBioLink
  next: PersonWithBioLink
  name: string
}


function About_Team_PrevNext({ active, prev, next, name }: PrevNextProps) {
  const [firstName, lastName] = name.split(' ') || []
  const plausible = usePlausible()

  if (active) {
    return (
      <PageSection disableSpacing className='my-4 py-12 px-6 bg-pink-lighter' id={'bio-nextPerson'}>
        <InnerWrapper className='py-2 my-2'>
          <div className='grid grid-cols-2 gap-x-6'>
            {/* Previous Person */}
            <Link
              as={prev.bioLink}
              href='/about/[slug]'
              hrefLang='en-US'
              className='flex justify-start hover:scale-99 relative ease-in-out duration-300'
              onClick={() =>
                plausible('cycle-team-profile-click', {
                  props: { direction: 'previous', name: prev.name },
                })
              }
            >

                <div className=' flex flex-col self-center justify-center w-12 h-full rotate-180 text-peach'>
                  <i className='p-2 text-3xl '>
                    <ChevronRightIcon />
                  </i>
                </div>
                <div className='self-center'>
                  <Lead
                    className=' font-geologica h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                    noMargins={true}
                  >
                    {prev.name}
                  </Lead>
                  {prev.title && (
                    <p className='font-geologica py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                      {prev.title}
                    </p>
                  )}
                </div>
            </Link>

            {/* Next Person */}
            <Link
              as={next.bioLink}
              href='/about/[slug]'
              hrefLang='en-US'
              className='hover:scale-99 ease-in-out duration-300 flex justify-end h-full'
              onClick={() =>
                plausible('cycle-team-profile-click', {
                  props: { direction: 'next', name: next.name },
                })
              }
            >

                <div className='self-center w-fit'>
                  <Lead
                    className='font-geologica h-full py-0 my-0 text-lg font-semibold leading-none text-peach md:text-md '
                    noMargins={true}
                  >
                    {next.name}
                  </Lead>
                  {next.title && (
                    <p className='font-geologica py-0 mt-1 mb-0 text-xs italic font-medium leading-none text-wine-400 md:text-sm'>
                      {next.title}
                    </p>
                  )}
                </div>
                <div className='flex flex-col self-center justify-center h-full text-peach'>
                  <i className='p-2 text-3xl'>
                    <ChevronRightIcon />
                  </i>
                </div>

            </Link>
          </div>
          <div className='flex flex-row justify-end mt-16'>
            <Link href='/about/past-employees' className='font-geologica group relative  italic text-blue-dark text-lg flex flex-row justify-end align-middle' hrefLang='en-US'
              onClick={() =>
                plausible('cycle-team-past-employees-click', {
                  props: { source: next.name },
                })
              }>
                <span className='group-hover:scale-99 group-hover:underline inline leading-none self-center'>See Past Employees</span>
                <i className='p-2 text-sm group-hover:scale-99'>
                  <ChevronRightIcon />
                </i>
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
          >{`${firstName || 'This Person'} has since moved on from PB.`}</H2>
          <Lead className='self-center text-center'>And we miss them very much.</Lead>
          <Button_Filled
            text={'See All Past Employees'}
            link={'/about/past-employees'}
            center={true}
            bgColor={'blue'}
            textColor={'cream'}
            chevronDirection={'right'}
            className='w-full'
          />
          <Button_Outlined className='w-full' text={'Current Employees'} link={'/about#team'} center={true} color={'blue-dark'} chevronDirection={'right'} />
        </InnerWrapper>
      </PageSection>
    )
  }
}

export default About_Team_PrevNext