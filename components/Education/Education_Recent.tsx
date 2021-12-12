//build

import React from 'react'

import Image from 'next/image'

//data
import recentlyAdded from '../../data/edu-reccentlyAdded'

//parts
import Part__RecentlyAdded from '../parts/card-rounded'

function Education_Recent() {
  const getRecentlyAdded = () => {
    return recentlyAdded.map((content) => {
      return (
        <div className='col-span-1 ' key={content.title}>
          <Part__RecentlyAdded
            head={content.title}
            url={content.url}
            subhead={content.series}
            img={content.image}
            imgAlt={content.title}
            tags={content.tags}
            tagBgColor={'egg'}
            tagTextColor={'wine'}
            aspectW={'3'}
            aspectY={'2'}
          />
        </div>
      )

      // return <h1 key={project.name}>{i}</h1>
    })
  }
  return (
    <section className='pt-16 pb-24  my-4 ' id='recentlyAdded'>
      <div className=' max-w-md lg:max-w-7xl  mx-auto px-4'>
        <h2 className='text-blue mb-16'> recently added</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>{getRecentlyAdded()}</div>
      </div>
    </section>
  )
}

export default Education_Recent
