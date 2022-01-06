import React from 'react'
import About_Team_Headshot from './About_Team_Headshot'
import Person from '../../types/person'

type Props = {
  people: Person[]
}
function About_Team({ people }: Props) {
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        {people.map((person) => {
          console.log(person.name)
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
        })}
      </div>
    </section>
  )
}
export default About_Team
