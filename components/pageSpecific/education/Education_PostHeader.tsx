import Image from 'next/image'
import { Pill } from '@parts'
import cn from 'classnames'
import Link from 'next/link'
import { TutorialFrontMatter } from '@/types/tutorials'
import { ReadTime } from '@/types/general'

interface EducationPostHeaderProps {
  title: TutorialFrontMatter['title']
  author: TutorialFrontMatter['author']['name']
  category: TutorialFrontMatter['category']
  readTime: ReadTime
  authorUrl?: TutorialFrontMatter['author']['url']
}
const Education_PostHeader = ({
  title,
  category,
  author,
  authorUrl,
  readTime,
}: EducationPostHeaderProps) => {
  return (
    <header className='mt-44'>
      <section className='px-6 mx-auto md:max-w-3xl '>
        <div className='' id='blog-body-intro'>
          <div className='mb-6'>
            <div className='mb-6'>
              <Pill text={category} bgColor={'blue'} textColor={'cream'} size={'md'} />
            </div>
            <h1 className='font-geologica font-bold text-pretty mt-3 text-4xl text-blue-dark md:text-6xl'>
              {title}
            </h1>
          </div>
          <div className='relative flex mt-3 mb-16 gap-x-3'>
            <div className='relative w-12 h-12 overflow-hidden rounded-full animate-spin-slow'>
              <Image
                placeholder='blur'
                blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder02.jpg`}
                width={1280}
                height={1920}
                alt={author}
                quality={25}
                className='relative object-cover object-top '
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder02.jpg`}
              />
            </div>
            <div className={cn(' flex flex-col justify-center self-center')}>
              <div className='text-sm text-wine'>
                <span>
                  {readTime && readTime.minutes != null ? readTime.minutes.toString() : '0'} min
                  read
                </span>
              </div>

              <div className='text-sm text-wine'>
                Written by{' '}
                <span>
                  {authorUrl ? (
                    <Link
                      hrefLang={'en-US'}
                      href={authorUrl}
                      passHref
                      className='underline text-blue'
                    >
                      {author}
                    </Link>
                  ) : (
                    author
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Education_PostHeader
