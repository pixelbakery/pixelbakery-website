import Pill from '@parts/Pill'
import Link from 'next/link'
import Image from 'next/image'

function Education_RecentlyAdded_Card({ props }) {
  return (
    <article className='  w-3/5 '>
      <div
        className={
          'relative home-portfolio aspect-w-16 aspect-h-9 z-10 ' +
          props.bgColor +
          ' ' +
          props.bgPosition
        }
      >
        <div className='absolute w-full h-full rounded overflow-hidden'>
          <Link href={props.link} passHref>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.image}`}
              layout='fill'
              objectFit='cover'
              className=' object-center '
              placeholder='blur'
              blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.image}`}
              quality={50}
              alt={props.title}
            />
          </Link>
        </div>
      </div>

      <div className='mt-12'>
        <h3 className='text-pink text-2xl font-bold mb-0 pb-0 leading-none'>{props.client}</h3>
        <h4 className='text-wine font-extrabold text-6xl leading-none mt-0 pt-0'>{props.title}</h4>
        <p className='text-wine opacity-60 text-md font-bold w-2/3 leading-snug pt-4'>
          {props.description}
        </p>
        <div className='flex justify-start gap-4 flex-wrap mt-6'>
          {props.tags.map((tag: React.Key) => (
            <Pill text={tag[0]} key={tag[0]} bgColor={'white'} textColor={'wine'} size={'sm'} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default Education_RecentlyAdded_Card
