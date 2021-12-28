/* eslint-disable react/prop-types */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pill from '../../parts/Pill'
import DateFormatter from './date-formatter'
import Author from '../../../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  categories: Array<string>
  excerpt: string
  author: Author
  slug: string
  aspectW: string
  aspectY: string
}

const Recipes_FeaturedPost = ({
  title,
  coverImage,
  date,
  categories,
  author,
  slug,
  ...props
}: Props) => {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY
  return (
    <Link as={`/recipes/${slug}`} href='/recipes/[slug]'>
      <article
        className={
          'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
          aspectW +
          aspectH
        }
      >
        <Image
          alt={`cover photo for ${title}`}
          src={coverImage}
          layout='fill'
          objectFit='cover'
          blurDataURL='true'
          quality={100}
          className=''
        />
        <div className={'absolute w-100 h-100 bg-gradient-to-r from-blue-dark  opacity-25'}></div>
        <div
          className={
            'absolute w-100 h-100 bg-gradient-to-t via-transparent from-blue-dark  opacity-50'
          }
        ></div>
        <div className=' z-20 h-100 p-6 flex flex-col justify-between'>
          <div className='-py-3 flex flex-wrap flex-row  gap-4'>
            <Pill text={categories[0]} bgColor={'blue'} textColor={'cream'} size='md' />
          </div>
          <div className=''>
            <h3 className='text-2xl md:text-3xl text-white leading-none drop-shadow-lg'>{title}</h3>
            <div className='text-sm text-white'>
              <span className='hidden md:inline'>{author.name} – </span>{' '}
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Recipes_FeaturedPost
