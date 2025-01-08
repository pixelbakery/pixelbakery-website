// components/pageSpecific/recipes/Recipes_FeaturedPost.tsx
import Link from 'next/link'
import Pill from '@parts/Pill'
import type { PostData } from '@/types/general'
import Image from 'next/image'

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
  onClick,
  ...props
}: PostData) => {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY

  return (
    <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`}>
      <article onClick={onClick}>
        <div
          className={
            'bg-blue relative cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
            aspectW +
            aspectH
          }
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
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
              <span className='hidden md:inline'>
                {typeof author === 'string' ? author : author.name} –{' '}
              </span>
            </div>
            <h3 className='font-semibold leading-none font-geologica text-md md:text-xl text-wine line-clamp-3'>
              {title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Recipes_FeaturedPost
