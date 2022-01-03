import React from 'react'
import Pill from '../parts/Pill'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import cn from 'classnames'
Home_Portfolio_Card.propTypes = {
  bgColor: PropTypes.string,
  bgPosition: PropTypes.string,
  client: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}
function Home_Portfolio_Card({
  bgColor,
  bgPosition,
  client,
  title,
  tags,
  description,
  image,
  link,
}) {
  return (
    <article className='w-full  lg:w-3/5 2xl:w-full px-1'>
      <div
        className={cn('relative home-portfolio aspect-w-16 aspect-h-9 z-10', bgColor, bgPosition)}
      >
        <div className='absolute w-full h-full rounded overflow-hidden'>
          <Link href={link} passHref>
            <a>
              <Image
                src={image}
                layout='fill'
                objectFit='cover'
                quality={66}
                blurDataURL='true'
                className='w-full h-full object-center object-cover'
                alt=''
              />
            </a>
          </Link>
        </div>
      </div>
      <Link href={link} passHref>
        <div className='mt-6 pt-4 lg:mt-12'>
          <h3 className='text-pink text-2xl font-bold mb-0 pb-0 leading-none'>{client}</h3>
          <h4 className='text-wine font-extrabold text-4xl lg:text-6xl leading-none mt-0 pt-0'>
            {title}
          </h4>
          <p className='text-wine opacity-60 text-md font-semibold lg:font-bold lg:w-2/3 leading-snug pt-6 pb-2'>
            {description}
          </p>
          <div className='flex justify-start gap-2 flex-wrap mt-6'>
            {tags.map((tag) => (
              <Pill key={tag} text={tag} bgColor={'blue'} textColor={'cream'} size={'sm'} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
export default Home_Portfolio_Card
