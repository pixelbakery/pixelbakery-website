import React from 'react'
import roster from '../../data/team'

function Team() {
  return (
    <section className='my-4' id='team'>
      <div className='grid gap-4 grid-cols-4'>
        {roster.map((value, index) => {
          return (
            <div key={index} className='w-full aspect-w-3 aspect-h-4'>
              <a href={`/about/${value['url']}`}>
                <img className='w-full h-full object-cover' src={value['image_headshot']} />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Team
