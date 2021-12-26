import React from 'react'

import DateFormatter from './date-formatter'
import Avatar from './avatar'
import Author from '../../../types/author'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '../../parts/Pill'

type Props = {
  title: string
  subtitle: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, subtitle, coverImage, date, author }: Props) => {
  return (
    <main className='mt-44'>
      <section className='md:max-w-3xl mx-auto '>
        <div className='' id='blog-body-intro'>
          <div className='mb-6'>
            <Pill text={'Announcements'} bgColor={'blue'} textColor={'cream'} size={'md'} />
            <h1 className='text-blue-dark text-6xl mt-3'>{title}</h1>
            <div
              className='my-3 inline-block text-xl font-semibold text-wine opacity-80'
              role='doc-subtitle '
            >
              {subtitle}
            </div>
          </div>
          <div className='flex mt-12 mb-8'>
            <Link href={author.profileURL} passHref>
              {/* <Avatar name={author.name} picture={author.picture} /> */}
              <Image
                blurDataURL='true'
                layout='fixed'
                width={'48px'}
                height={'48px'}
                alt={author.name}
                quality={80}
                className='rounded-full cursor-pointer'
                src={author.picture}
              />
            </Link>
            <div className='ml-8 flex flex-col justify-center self-center'>
              <div className='text-sm text-wine'>
                <DateFormatter dateString={date} /> <span className='mx-4'>|</span>Read Time: 4
                minutes
              </div>
              <div className='text-sm text-wine'>
                Written by the one and only
                <Link href='/' passHref>
                  <a className='text-peach'> {author.name}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' md:max-w-6xl mx-auto'>
        <div className='w-full  aspect-w-16 aspect-h-9 bg-peach mb-24 mx-auto'>
          <Image
            layout='fill'
            objectFit='cover'
            className='object-center'
            src={coverImage}
            alt={title}
          />
        </div>
      </div>
      <div className='relative mb-24 w-full md:max-w-6xl mx-auto bg-peach z-10'>
        <div className='relative top-0 left-0 w-full block h-full bg-peach z-10'>
          <Image
            layout='fill'
            objectFit='cover'
            className='object-center block'
            src={coverImage}
            alt={title}
          />
        </div>
      </div>
      {/* 
      <div className='hidden md:block md:mb-12'>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'></div>
      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className='mb-6 text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </main>
  )
}

export default PostHeader
