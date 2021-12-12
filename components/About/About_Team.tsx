import React from 'react'
import roster from '../../data/roster'
import next from 'next'
import Link from 'next/link'
import Image from 'next/image'

function About_Team() {
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-4 grid-cols-4'>
        {roster.map((value, index) => {
          return (
            <Link href={`/about/${value['url']}`} key={value.id} passHref>
              <a className='relative w-full  aspect-w-3 aspect-h-4'>
                <Image
                  layout='fill'
                  objectFit='cover'
                  blurDataURL='true'
                  className='w-full h-full object-cover '
                  quality={60}
                  alt={value.name}
                  src={value['image_headshot']}
                />
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
export default About_Team
