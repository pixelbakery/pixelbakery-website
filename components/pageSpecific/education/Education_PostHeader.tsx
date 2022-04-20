import DateFormatter from '../../../lib/date-formatter'
import Author from 'types/author'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '@parts/Pill'
import PersonType from 'types/person'
import cn from 'classnames'
import Video from 'react-player'
import ReactPlayer from 'react-player'
type Props = {
  title: string
  subtitle: string
  coverImage: string
  author: string
  date?: string
  person: PersonType
  category: string
  forwardedRef: any
  readTime: any
  video: string
}

const PostHeader = ({
  title,
  subtitle,
  category,
  coverImage,
  date,
  author,
  video,
  person,
  forwardedRef,
  readTime,
}: Props) => {
  let profilePic
  if (person.slug && person.photos.headshotSmiling != typeof undefined) {
    profilePic = person.photos.headshotSmiling
  } else {
    profilePic = '/img/placeholder01.png'
  }
  return (
    <header className='mt-44'>
      <section className='px-6 md:max-w-3xl mx-auto '>
        <div className='' id='blog-body-intro'>
          <div className='mb-6'>
            <div className='mb-6'>
              <Pill text={category} bgColor={'blue'} textColor={'cream'} size={'md'} />
            </div>
            <h1 className='text-blue-dark text-4xl md:text-6xl mt-3'>{title}</h1>
          </div>
          <div className='flex mt-3 mb-16'>
            <div className='w-12 h-12 rounded-full relative cursor-pointer overflow-hidden'>
              <Image
                blurDataURL='true'
                layout='fill'
                objectFit='cover'
                alt={author}
                quality={25}
                className='object-top scale-175 sc'
                src={'/img/placeholder02.jpg'}
              />
            </div>
            <div className={cn('ml-8 flex flex-col justify-center self-center')}>
              <div className='text-sm text-wine'>
                <DateFormatter dateString={date} />
                <span className='mx-2'>|</span>
                <span ref={forwardedRef}>{readTime}</span>
              </div>

              <div className='text-sm text-wine'>Written by {author}</div>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-6xl mx-auto'>
        <div className=' w-full aspect-w-16 aspect-h-9  mx-auto bg-peach'>
          <ReactPlayer
            width={'100%'}
            height={'100%'}
            url={video}
            poster={coverImage}
            controls={true}
          />
        </div>
      </div>
    </header>
  )
}

export default PostHeader
