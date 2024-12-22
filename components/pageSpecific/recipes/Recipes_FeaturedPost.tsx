import Link from 'next/link'
import Pill from '@parts/Pill'
import DateFormatter from '../../../lib/date-formatter'
import CustomImage from '@parts/CustomImage'
import Image from 'next/image'
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
    <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`}>
      <article>
        <div
          className={
            'bg-blue relative cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
            aspectW +
            aspectH
          }
        >
          <Image
            src={`${coverImage}`}
            placeholder='blur'
            width={width}
            height={height}
            blurDataURL={`${coverImage}`}
            quality={75}
            className='object-cover object-center w-full h-full'
            alt={`cover photo for ${title}, written by ${author}`}
          />

          <div className='mt-2 ml-2'>
            <Pill text={categories[0]} bgColor={'blue'} textColor={'cream'} size='xs' />
          </div>
        </div>
        <div className='z-20 flex flex-col justify-between p-2 mt-2 h-100'>
          <div className=''>
            <div className='text-sm text-opacity-75 text-wine'>
              <span className='hidden md:inline'>{author} – </span>{' '}
              <DateFormatter dateString={date} />
            </div>
            <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
              {title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Recipes_FeaturedPost
