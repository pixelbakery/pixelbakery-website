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
    >
      <>
        <div
          className={cn(
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ',
            `aspect-w-${aspectW}`,
            `aspect-h-${aspectH}`,
          )}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${tutorial.data.coverImage}`}
            fill={true}
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${tutorial.data.coverImage}`}
            quality={50}
            className='bg-blue object-cover w-full h-full'
            alt={`cover photo for ${tutorial.data.title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill
              text={tutorial.data.category.toString()}
              bgColor={'blue'}
              textColor={'cream'}
              size='xs'
            />
          </div>
        </div>
        <div className='cursor-pointer mt-2 z-20 h-100 p-2 flex flex-col justify-between'>
          <div className=''>
            <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
              {tutorial.data.title}
            </h3>
          </div>
        </div>
      </>
    </Link>
  )
}
export default Education_MadeToOrder_Card
