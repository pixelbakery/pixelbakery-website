/* eslint-disable react/prop-types */

import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import DateFormatter from '../../../lib/date-formatter'
import Author from 'types/author'
import H3 from '@typography/H3'

type Props = {
  title: string
  coverImage: string
  date: string
  categories: Array<string>
  excerpt: string
  author: Author
  as: string
  href: string
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
  as,
  href,
  ...props
}) => {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY

  return (
    <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`} passHref>
      <a>
        <article
          className={
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
            aspectW +
            aspectH
          }
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
            quality={25}
            className='bg-blue'
            alt={`cover photo for ${title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill text={categories[0]} bgColor={'blue'} textColor={'cream'} size='xs' />
          </div>
        </article>
        <div className='mt-2 z-20 h-100 p-2 flex flex-col justify-between'>
          <div className=''>
            <div className='text-sm text-wine text-opacity-75'>
              <span className='hidden md:inline'>{author} – </span>{' '}
              <DateFormatter dateString={date} />
            </div>
            <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
              {title}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  )
}
export default Recipes_FeaturedPost
