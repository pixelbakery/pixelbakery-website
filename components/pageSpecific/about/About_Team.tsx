import { Fragment } from 'react'
import Link from 'next/link'
import { H2, Lead } from '@typography'
import About_Team_Headshot from '@about/About_Team_Headshot'
import type { Person } from '@types'

interface AboutTeamProps {
  allPeople: Person[]
}

interface PeopleCardProps {
  allPeople: Person[]
  leadIndex2: number
}

const Header = () => {
  return (
    <div className='relative flex flex-col justify-center w-full col-span-1 px-8 bg-blue'>
      <H2 color='blue-dark' className='py-0 my-0 mb-0'>
        Who we are
      </H2>
    </div>
  )
}

const Leader1 = () => {
  return (
    <div className='relative flex flex-col justify-center w-full h-full px-10 bg-pink first-letter:col-span-1 aspect-3/4'>
      <Lead color='blue-dark' className='pt-4'>
        we&apos;re a ragtag team of scrappy designers, animators, and producers
      </Lead>
    </div>
  )
}

const Leader2 = () => {
  return (
    <div className='relative flex flex-col justify-center w-full h-full col-span-2 px-8 bg-blue-dark sm:col-span-1 aspect-3/4'>
      <Lead color='blue' className='pb-0 mb-0'>
        we create intentional and beautiful moments for exciting people that share our beliefs and
        passions.
      </Lead>
    </div>
  )
}

const PastEmployees = () => {
  return (
    <Link
      href={'/about/past-employees'}
      className='relative flex flex-col justify-center w-full h-full col-span-1 px-8 bg-cream aspect-3/4 hover-99 hover-shadow-none'
    >
      <Lead color='wine-300' className='pb-0 mb-0'>
        View all of the bakers that came before →
      </Lead>
    </Link>
  )
}

const PeopleCard = ({ allPeople, leadIndex2 }: PeopleCardProps) => {
  const leadIndex1 = 5

  return (
    <>
      {allPeople.map((person, index) => (
        <Fragment key={index}>
          {index === leadIndex1 && <Leader1 />}
          {index === leadIndex2 && <Leader2 />}
          <About_Team_Headshot person={person} />
        </Fragment>
      ))}
      <PastEmployees />
    </>
  )
}

const About_Team = ({ allPeople }: AboutTeamProps) => {
  let leadIndex2 = allPeople.length - 3

  return (
    <section className='my-4' id='team'>
      <div className='grid grid-cols-2 gap-1 md:grid-cols-3 2xl:grid-cols-4'>
        <Header />
        <PeopleCard allPeople={allPeople} leadIndex2={leadIndex2} />
      </div>
    </section>
  )
}

export default About_Team
