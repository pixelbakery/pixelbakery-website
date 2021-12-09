import React from 'react'
import Pill from '../parts/pill'
import Link from 'next/link'
import Image from 'next/image'

import Scrim from '../../components/parts/scrim'

function RecentlyAddedCard({ props }) {
  return (
    <article className='  w-3/5 '>
      <div
        className={
          'relative home-portfolio aspect-w-16 aspect-h-9 z-10 ' + bgColor + ' ' + bgPosition
        }
      >
        <div className='absolute w-full h-full rounded overflow-hidden'>
          <Link href={link} passHref>
            <Image
              src={image}
              layout='fill'
              objectFit='cover'
              className=' object-center '
              placeholder='blurDataUrl'
              quality={50}
              alt=''
            />
          </Link>
        </div>
      </div>

      <div className='mt-12'>
        <h3 className='text-pink text-2xl font-bold mb-0 pb-0 leading-none'>{client}</h3>
        <h4 className='text-wine font-extrabold text-6xl leading-none mt-0 pt-0'>{title}</h4>
        <p className='text-wine opacity-60 text-md font-bold w-2/3 leading-snug pt-4'>
          {description}
        </p>
        <div className='flex justify-start gap-4 flex-wrap mt-6'>
          {tags.map((tag) => (
            <Pill text={tag} key={tag} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default RecentlyAddedCard
