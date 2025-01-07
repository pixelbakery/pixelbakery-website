import Link from 'next/link'
import Image from 'next/image'
import { Pill } from '@parts'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  categories: Array<string>
  author: any
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
    <article className='pt-8 pb-4 my-2 border-t cursor-pointer border-wine-100 '>
      <div className='flex flex-row gap-4 md:gap-10'>
        <div className='hidden sm:block sm:w-2/5 2xl:w-2/5 '>
          <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`} aria-label={title}>
            <div className='relative w-full h-full overflow-hidden md:aspect-4/3'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
                width={445}
                height={334}
                className='object-cover object-center w-full h-full rounded-md bg-blue'
                placeholder='blur'
                quality={50}
                blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${coverImage}`}
                alt={`${title}, by ${author}`}
              />
            </div>
          </Link>
        </div>
        <div className='flex flex-col sm:w-3/5 '>
          <div className='flex justify-start '>
            <span className='self-center text-xs md:text-base text-wine-300 lg:order-1'>
              {`${author}`} <br className=' md:hidden' />
            </span>
          </div>
          <Link hrefLang={'en-US'} as={`${as}`} href={`${href}`} aria-label={title}>
            <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
              {title}
            </h3>
          </Link>
          <div className='flex-grow 2xl:flex-initial'>
            <div className='block'>
              <p className='pb-0 text-sm line-clamp-2 md:line-clamp-3 2xl:line-clamp-4 text-wine '>
                {excerpt}
              </p>
            </div>
          </div>
          <div className='mt-1 '>
            <Pill text={categories[0].toString()} bgColor='blue' textColor='cream' size={'xs'} />
          </div>
        </div>
      </div>
    </article>
  )
}
export default Recipes_SmallPost
