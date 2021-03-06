/* eslint-disable react/prop-types */

import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import Author from 'types/author'
import cn from 'classnames'
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

const Education_MadeToOrder_Card = ({ tutorial, aspectW, aspectH }) => {
  return (
    <Link
      as={`/education/tutorials/${tutorial.filePath.replace(/\.mdx?$/, '')}`}
      href={`/education/tutorials/[slug]`}
      passHref
    >
      <article>
        <article
          className={cn(
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ',
            `aspect-w-${aspectW}`,
            `aspect-h-${aspectH}`,
          )}
        >
          <Image
            src={tutorial.data.coverImage}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={tutorial.data.coverImage}
            quality={50}
            className='bg-blue'
            alt={`cover photo for ${tutorial.data.title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill text={tutorial.data.category} bgColor={'blue'} textColor={'cream'} size='xs' />
          </div>
        </article>
        <div className='mt-2 z-20 h-100 p-2 flex flex-col justify-between'>
          <div className=''>
            <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
              {tutorial.data.title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Education_MadeToOrder_Card
