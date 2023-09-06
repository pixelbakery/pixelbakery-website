import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import DateFormatter from '../../../lib/date-formatter'

interface Props {
  title: string
  coverImage: string
  date: string
  categories: Array<string>
  excerpt: string
  author: any
  as: string
  href: string
  aspectW: string
  aspectY: string
  width: number
  height: number
}

const Recipes_FeaturedPost = ({
  title,
  coverImage,
  date,
  categories,
  author,
  as,
  width,
  height,
  href,
  ...props
}: Props) => {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY

  return (
    <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`} passHref legacyBehavior>
      <>
        <article
          className={
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
            aspectW +
            aspectH
          }
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
            placeholder='blur'
            width={width}
            height={height}
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
            quality={25}
            className='object-cover w-full h-full bg-blue'
            alt={`cover photo for ${title}, written by ${author}`}
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
      </>
    </Link>
  )
}
export default Recipes_FeaturedPost
