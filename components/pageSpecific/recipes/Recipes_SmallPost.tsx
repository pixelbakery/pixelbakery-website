import Link from 'next/link'
import Image from 'next/image'
import Pill from '@parts/Pill'
import DateFormatter from '../../../lib/date-formatter'

import Author from 'types/author'

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
    <article className='border-t border-wine-100 my-2 pb-4 pt-8 cursor-pointer '>
      <div className='flex flex-row gap-4 md:gap-10'>
        <div className='hidden sm:block sm:w-2/5 2xl:w-2/5 '>
          <Link as={`${as}`} href={`${href}`} passHref>
            <a aria-label={title}>
              <div className='w-full h-full md:aspect-4/3  relative'>
                <Image
                  layout='fill'
                  src={coverImage}
                  objectFit='cover'
                  className='rounded-md'
                  placeholder='blur'
                  quality={25}
                  blurDataURL={coverImage}
                  alt={`Cover image for ${title}`}
                />
              </div>
            </a>
          </Link>
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
            <span className='self-center  text-xs md:text-base text-wine-300  lg:order-1'>
              {author.name} <br className=' md:hidden' />
              <span className='hidden md:inline'> – </span> <DateFormatter dateString={date} />
            </span>
          </div>
          <Link as={`${as}`} href={`${href}`} passHref>
            <a aria-label={title}>
              <h2 className='mt-1 mb-0 pt-1 text-xl md:text-2xl font-semibold leading-none xl:leading-tight text-blue-dark'>
                {title}
              </h2>
            </a>
          </Link>
          <div className='flex-grow 2xl:flex-initial'>
            <div className='block'>
              <p className='text-sm pb-0 line-clamp-2 md:line-clamp-3 2xl:line-clamp-4 text-wine '>
                {excerpt}
              </p>
            </div>
          </div>
          <div className=' mt-1'>
            <Pill text={categories[0]} bgColor='blue' textColor='cream' size={'xs'} />
          </div>
        </div>
      </div>
    </article>
  )
}
export default Recipes_SmallPost
