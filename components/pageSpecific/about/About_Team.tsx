import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import { Fragment } from 'react'
import About_Team_Headshot from '@about/About_Team_Headshot'
import Link from 'next/link'

const leadIndex1 = 5

const Leader1 = () => {
  return (
    <div className='relative w-full bg-pink  h-full first-letter:col-span-1 aspect-3/4   flex flex-col justify-center px-10'>
      <Lead color='blue-dark' className='pt-4'>
        we&apos;re a ragtag team of scrappy designers, animators, and producers
      </Lead>
    </div>
  )
}
const Leader2 = () => {
  return (
    <div className='flex relative w-full h-full bg-blue-dark col-span-2 sm:col-span-1 aspect-3/4 flex-col justify-center px-8'>
      <Lead color='blue' className='mb-0 pb-0'>
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
      className='flex relative w-full h-full bg-cream col-span-1 aspect-3/4 flex-col justify-center px-8 hover-99 hover-shadow-none'
    >
      <Lead color='wine-300' className='mb-0 pb-0'>
        View all of the bakers that came before →
      </Lead>
      <p></p>
    </Link>
  )
}
const Header = () => {
  return (
    <div className='relative w-full  col-span-1 bg-blue flex flex-col justify-center px-8'>
      <H2 color='blue-dark' className='my-0 py-0 mb-0'>
        Who we are
      </H2>
    </div>
  )
}
const PeopleCard = ({ allPeople, leadIndex2 }) => (
  <>
    {allPeople.map((person, index) => (
      <Fragment key={index}>
        {index === leadIndex1 ? <Leader1 /> : ''}
        {index === leadIndex2 ? <Leader2 /> : ''}

        <About_Team_Headshot person={person} />
      </Fragment>
    ))}
    <PastEmployees />
  </>
)

const About_Team = ({ allPeople }) => {
  let leadIndex2
  if (allPeople.length % 2 === 0) {
    leadIndex2 = allPeople.length - 3
  } else leadIndex2 = allPeople.length - 3

  return (
    <section className='my-4' id='team'>
      <div className='grid gap-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        <Header />
        <PeopleCard allPeople={allPeople} leadIndex2={leadIndex2} />
      </div>
    </section>
  )
}
export default About_Team
