/* eslint-disable react/prop-types */

import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import Author from 'types/author'

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

const Education_MadeToOrder_Card = ({ title, coverImage, date, category, as, href, ...props }) => {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY
  return (
    <Link as={`${as}`} href={`${href}`} passHref>
      <a>
        <article
          className={
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
            aspectW +
            aspectH
          }
        >
          <Image
            priority
            src={coverImage}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={coverImage}
            quality={50}
            className='bg-blue'
            alt={`cover photo for ${title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill text={category} bgColor={'blue'} textColor={'cream'} size='xs' />
          </div>
        </article>
        <div className='mt-2 z-20 h-100 p-2 flex flex-col justify-between'>
          <div className=''>
            <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
              {title}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  )
}
export default Education_MadeToOrder_Card
