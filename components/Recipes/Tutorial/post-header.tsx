import React from 'react'

import DateFormatter from './date-formatter'
import Avatar from './avatar'
import Author from '../../../types/author'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '../../parts/Pill'
import PersonType from '../../../types/person'
import { match } from 'assert'
import cn from 'classnames'
type Props = {
  title: string
  subtitle: string
  coverImage: string
  author: Author
  date: string
  matchingAuthor: PersonType[]
  person: PersonType
  category: string
}

const PostHeader = ({ category, title, subtitle, coverImage, date, author, person }: Props) => {
  // const test = matchingAuthor
  console.log(person.title)
  return (
    <main className='mt-44'>
      <section className='px-6 md:max-w-3xl mx-auto '>
        <div className='' id='blog-body-intro'>
          <div className='mb-6'>
            <div className='mb-6'>
              <Pill text={category} bgColor={'blue'} textColor={'cream'} size={'md'} />
            </div>
            <h1 className='text-blue-dark text-4xl md:text-6xl mt-3'>{title}</h1>
            <div
              className='my-3 inline-block text-lg md:text-xl font-bold md:font-semibold text-wine opacity-80 max-w-lg'
              role='doc-subtitle '
            >
              {subtitle}
            </div>
          </div>
          <div className='flex mt-3 mb-16'>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
            {person.slug ? (
              <Link href={'/about/' + person.slug} passHref>
                <div className='w-12 h-12 rounded-full relative cursor-pointer overflow-hidden'>
                  <Image
                    blurDataURL='true'
                    layout='fill'
                    objectFit='cover'
                    width={'48px'}
                    height={'48px'}
                    alt={author.name}
                    quality={25}
                    className='object-top scale-175 sc'
                    src={person.headshotSmiling}
                  />
                </div>
              </Link>
            ) : null}

            <div
              className={cn('flex flex-col justify-center self-center', {
                ['ml-8']: person.slug,
              })}
            >
              <div className='text-sm text-wine'>
                <DateFormatter dateString={date} /> <span className='mx-4'>|</span>Read Time: 4
                minutes
              </div>

              {person.slug ? (
                <div className='text-sm text-wine'>
                  Written by the one and only
                  <Link href={'/about/' + person.slug} passHref>
                    <a className='text-peach'> {author.name}</a>
                  </Link>
                </div>
              ) : (
                <div className='text-sm text-wine'>Written by {author.name}</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className=' md:max-w-6xl mx-auto'>
        <div className='w-full  aspect-w-4 aspect-h-3 bg-peach mb-24 mx-auto'>
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
            blurDataURL='true'
            quality={100}
            className='object-top top-0 w-full h-full'
            src={coverImage}
            alt={title}
          />
        </div>
      </div>
    </main>
  )
}

export default PostHeader
