import React from 'react'
import About_Team_Headshot from './About_Team_Headshot'
import Person from '../../types/person'
import H2 from '../H2'
import Lead from '../Lead'

type Props = {
  people: Person[]
}

function About_Team({ people }) {
  const headerIndex = 2
  const leadIndex1 = (people.length * -1 - 5) * 1
  const leadIndex2 = (people.length - 2) * 1
  function Header() {
    return (
      <div className='relative w-full  aspect-w-3 aspect-h-4 bg-blue flex flex-col justify-center px-8'>
        <H2 color='blue-dark'>Who we are</H2>
      </div>
    )
  }
  function Leader1() {
    return (
      <div className='relative w-full bg-blue-dark col-span-1 flex flex-col justify-center px-8'>
        <Lead color='blue' className='pt-4'>
          we&apos;re a ragtag team of scrappy designers, animators, and producers
        </Lead>
      </div>
    )
  }
  function Leader2() {
    return (
      <div className='relative w-full bg-blue-dark col-span-1 flex flex-col justify-center px-8'>
        <Lead color='blue' className='mb-0 pb-0'>
          we create intentional and beautiful moments for exciting people that share our beliefs and
          passions
        </Lead>
      </div>
    )
  }

  const shifted = people
  shifted.splice(headerIndex, 0, <Header />)
  shifted.splice(leadIndex1, 0, <Leader1 />)
  shifted.splice(leadIndex2, 0, <Leader2 />)
  console.log(shifted)
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        {shifted.map((person, index) => {
          if (index === headerIndex) {
            return <Header />
          } else if (index === leadIndex1) {
            return <Leader1 />
          } else if (index === leadIndex2) {
            return <Leader2 />
          } else {
            if (person.active === true) {
              return (
                <About_Team_Headshot
                  key={person.name}
                  name={person.name}
                  headshot={person.photos.headshotSerious}
                  headshotSmiling={person.photos.headshotSmiling}
                  url={person.slug}
                />
              )
            } else {
              return
            }
          }
        })}
      </div>
    </section>
  )
}
export default About_Team
