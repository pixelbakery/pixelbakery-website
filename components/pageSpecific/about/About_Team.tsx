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
      <div className='relative w-full bg-pink  h-full first-letter:col-span-1 aspect-3/4   flex flex-col justify-center px-10'>
        <Lead color='blue-dark' className='pt-4'>
          we&apos;re a ragtag team of scrappy designers, animators, and producers
        </Lead>
      </div>
    )
  }
  function Leader2() {
    return (
      <div className='flex relative w-full h-full bg-blue-dark col-span-2 sm:col-span-1 aspect-3/4 flex-col justify-center px-8'>
        <Lead color='blue' className='mb-0 pb-0'>
          we create intentional and beautiful moments for exciting people that share our beliefs and
          passions
        </Lead>
      </div>
    )
  }

  const filtered = shuffled.filter((person) => person.active)
  const addHeadshot = filtered.map((person, index) => {
    return (
      <About_Team_Headshot
        key={index}
        name={person.name}
        title={person.title}
        headshot={person.photos.headshotSerious}
        headshotSmiling={person.photos.headshotSmiling}
        url={person.slug}
      />
    )
  })
  const headerIndex = 0

  addHeadshot.splice(headerIndex, 0, <Header />)

  const leadIndex1 = 5

  addHeadshot.splice(leadIndex1, 0, <Leader1 />)

  let leadIndex2
  if (addHeadshot.length % 2 === 0) {
    leadIndex2 = addHeadshot.length - 3
  } else leadIndex2 = addHeadshot.length - 3

  addHeadshot.splice(leadIndex2, 0, <Leader2 />)
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        {addHeadshot.map((person, index) => {
          return person
        })}
      </div>
    </section>
  )
}
export default About_Team
