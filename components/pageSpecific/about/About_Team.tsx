import About_Team_Headshot from '@about/About_Team_Headshot'

import H2 from '@typography/H2'

import Lead from '@typography/Lead'
import { useState } from 'react'

function About_Team({ people }) {
  const [shuffled, setShuffle] = useState(Shuffle(people))
  function Shuffle(arr) {
    let j, x, index
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1))
      x = arr[index]
      arr[index] = arr[j]
      arr[j] = x
    }
    return arr
  }

  function Header() {
    return (
      <div className='relative w-full  col-span-1 bg-blue flex flex-col justify-center px-8'>
        <H2 color='blue-dark' className='my-0 py-0 mb-0'>
          Who we are
        </H2>
      </div>
    )
  }
  function Leader1() {
    return (
      <div className='relative w-full bg-pink col-span-2  aspect-1/1 md:aspect-3/4 md:col-span-1  flex flex-col justify-center px-10'>
        <Lead color='blue-dark' className='pt-4'>
          we&apos;re a ragtag team of scrappy designers, animators, and producers
        </Lead>
      </div>
    )
  }
  function Leader2() {
    return (
      <div className='flex relative w-full bg-blue-dark col-span-2 lg:col-span-1 aspect-1/1 md:aspect-3/4 flex-col justify-center px-8'>
        <Lead color='blue' className='mb-0 pb-0'>
          we create intentional and beautiful moments for exciting people that share our beliefs and
          passions
        </Lead>
      </div>
    )
  }

  const shifted = people.map((person) => {
    if (person.active === true) {
      return person
    } else return
  })
  shifted.forEach((person) => {
    console.log(person)
  })
  // const headerIndex = 0

  // shifted.splice(headerIndex, 0, <Header />)

  // const leadIndex1 = 6

  // shifted.splice(leadIndex1, 0, <Leader1 />)

  // const leadIndex2 = (shifted.length - 4) * 1

  // shifted.splice(leadIndex2, 0, <Leader2 />)

  // console.log(shifted)

  return (
    <section className='my-4' id='team'>
      {/* <div className='grid gap-1 -4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
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
      </div> */}
    </section>
  )
}
export default About_Team
