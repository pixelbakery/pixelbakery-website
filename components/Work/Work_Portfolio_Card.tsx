import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pill from '../parts/Pill'
import Scrim from '../parts/Scrim'

function Work_Portfolio_Card(props) {
  return (
    <Link href={props.url} passHref>
      <article className='bg-blue aspect-h-9 aspect-w-16 cursor-pointer'>
        <Image
          alt={props.previewImgAlt}
          src={props.previewImg}
          layout='fill'
          objectFit='cover'
          quality={100}
          className=''
        />
        <Scrim />
        <div className=' z-20 h-100 p-6 flex flex-col justify-between'>
          <div className='-py-3 flex flex-wrap flex-row  gap-4'>
            {props.tags.map((tag) => (
              <Pill text={tag} bgColor={'peach'} textColor={'cream'} size='sm' key={tag} />
            ))}
          </div>
          <div className=''>
            <div className='text-sm text-white'>{props.client}</div>
            <h3 className='text-2xl text-white'>{props.name}</h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Work_Portfolio_Card
