import About_Team_Headshot from './About_Team_Headshot'
import Person from '@types/person'
import H2 from '@parts/H2'
import Lead from '@parts/Lead'

type Props = {
  people: Person[]
}

function About_Team({ people }) {
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
        <Lead color='peach' className='pt-4 md:hidden'>
          we create intentional and beautiful moments for exciting people that share our beliefs and
          passions
        </Lead>
      </div>
    )
  }
  function Leader2() {
    return (
      <div className='hidden md:flex relative w-full bg-blue-dark col-span-1 aspect-h-4 md:flex-col justify-center px-8'>
        <Lead color='blue' className='mb-0 pb-0'>
          we create intentional and beautiful moments for exciting people that share our beliefs and
          passions
        </Lead>
      </div>
    )
  }

  const shifted = people
  const headerIndex = 0

  shifted.splice(headerIndex, 0, <Header />)
  const leadIndex1 = (shifted.length - 7) * 1
  console.log(leadIndex1, ' – ', shifted.length)
  shifted.splice(leadIndex1, 0, <Leader1 />)

  const leadIndex2 = (shifted.length - 2) * 1
  console.log(leadIndex2)
  shifted.splice(leadIndex2, 0, <Leader2 />)

  return (
    <section className='my-4' id='team'>
      <div className='grid gap-1 -4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
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
