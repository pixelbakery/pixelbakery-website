import React from 'react'
import roster from '../../data/roster'
import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import About_Team_Headshot from './About_Team_Headshot'

function About_Team() {
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        {roster.map((value, index) => {
          return (
            <About_Team_Headshot
              key={index}
              name={value.name}
              headshot={value['image_headshot']}
              headshotSmiling={value['image_headshot_smiling']}
              url={value['url']}
            />
          )
        })}
      </div>
    </section>
  )
}
export default About_Team
