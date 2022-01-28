import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '../parts/Pill'
import DateFormatter from './date-formatter'

import Author from '../../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  categories: Array<string>
  author: Author
  href: string
  as: string
}
const Recipes_SmallPost = ({
  title,
  categories,
  coverImage,
  date,
  excerpt,
  author,

  as,
  href,
}: Props) => {
  return (
    <Link as={`${as}`} href={`${href}`} passHref>
      <a aria-label={title}>
        <article className='border-t border-wine-100 my-6 pb-4 pt-8 cursor-pointer transition-scale duration-500 hover:scale-98'>
          <div className='flex flex-row gap-4 md:gap-10'>
            <div className='hidden sm:block sm:w-2/5 2xl:w-2/5 '>
              <div className='w-full h-full md:aspect-4/3  relative'>
                <Image
                  layout='fill'
                  src={coverImage}
                  objectFit='cover'
                  className='rounded-md'
                  alt={`Cover image for ${title}`}
                />
              </div>
            </div>
            <div className='sm:w-3/5 flex flex-col '>
              <div className=' flex justify-start '>
                {/* <div className='relative overflow-hidden rounded-full h-full aspect-1 mr-4'>
                  <Image
                    layout='fill'
                    objectFit='cover'
                    src={author.picture}
                    className=''
                    alt={`written by  ${author.name}`}
                  />
                </div> */}
                <span className='self-center  lg:mx-4 text-xs md:text-base text-wine-300  lg:order-1'>
                  {author.name} <br className=' md:hidden' />
                  <span className='hidden md:inline'> – </span> <DateFormatter dateString={date} />
                </span>
              </div>
              <h2 className='my-1 py-1 text-xl md:text-2xl font-semibold leading-none md:leading-tight text-blue-dark'>
                {title}
              </h2>
              <div className='flex-grow 2xl:flex-initial'>
                <p className='line-clamp-2 md:line-clamp-3 text-wine '>{excerpt}</p>
              </div>
              <div className=' mt-4'>
                <Pill text={categories[0]} bgColor='blue' textColor='cream' size={'sm'} />
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}
export default Recipes_SmallPost
