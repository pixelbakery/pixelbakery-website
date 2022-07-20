import DateFormatter from '../../../lib/date-formatter'
import Author from 'types/author'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '@parts/Pill'
import PersonType from 'types/person'
import cn from 'classnames'
import { useState } from 'react'
type Props = {
  date?: string
  forwardedRef: any
  frontMatter: any
  readTime: any
  allPeople: any
}

const Recipes_Post_Header = ({ date, frontMatter, allPeople, forwardedRef, readTime }: Props) => {
  const matchingBio = allPeople.find(
    (p) => p.data.name.toUpperCase() === frontMatter.author.name.toUpperCase(),
  )

  // let profilePic
  // if (matchingBio.slug && matchingBio.data.headshotSmiling != typeof undefined) {
  //   profilePic = matchingBio.headshotSmiling
  //   console.log('found it')
  // } else {
  //   profilePic = '/img/placeholder01.png'
  // }

  //figure out author bio link for JSON schema
  // let authorURL
  // if (ourPerson.slug && ourPerson.photos.headshotSmiling != typeof undefined) {
  //   authorURL = `https://pixelbakery.com/about/${ourPerson.slug}`
  // } else {
  //   authorURL = 'https://pixelbakery.com/recipes'
  // }
  return (
    <header className='mt-44'>
      <section className='px-6 md:max-w-3xl mx-auto '>
        <div className='' id='blog-body-intro'>
          <div className='mb-6'>
            <div className='mb-6'>
              <Pill
                text={frontMatter.categories[0]}
                bgColor={'blue'}
                textColor={'cream'}
                size={'md'}
              />
            </div>
            <h1 className='text-blue-dark text-4xl md:text-6xl mt-3'>{frontMatter.title}</h1>
            <div
              className='my-3 inline-block text-lg md:text-xl font-bold md:font-semibold text-wine opacity-80 max-w-lg'
              role='doc-subtitle '
            >
              {frontMatter.subtitle}
            </div>
          </div>
          <div className='flex mt-3 mb-16'>
            {matchingBio ? (
              <Link
                as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                href={`/about/[slug]`}
                passHref
              >
                <div className='w-12 h-12 rounded-full relative cursor-pointer overflow-hidden'>
                  <Image
                    blurDataURL='true'
                    layout='fill'
                    objectFit='cover'
                    alt={frontMatter.author.name}
                    quality={25}
                    className='object-top scale-175 sc'
                    src={matchingBio.data.headshotSmiling}
                  />
                </div>
              </Link>
            ) : (
              <div className='w-12 h-12 rounded-full relative overflow-hidden'>
                <Image
                  blurDataURL='true'
                  layout='fill'
                  objectFit='cover'
                  alt={frontMatter.author.name}
                  quality={25}
                  className='object-top scale-175 sc'
                  src={`/img/placeholder01.png`}
                />
              </div>
            )}

            <div className={cn('ml-8 flex flex-col justify-center self-center')}>
              <div className='text-sm text-wine'>
                <DateFormatter dateString={date} />
                <span className='mx-2'>|</span>
                <span ref={forwardedRef}>{readTime}</span>
              </div>

              {matchingBio ? (
                <div className='text-sm text-wine'>
                  Written by the one and only
                  <Link
                    as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/about/[slug]`}
                    passHref
                  >
                    <a className='text-peach'> {frontMatter.author.name}</a>
                  </Link>
                </div>
              ) : (
                <div className='text-sm text-wine'>Written by {frontMatter.author.name}</div>
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
            src={frontMatter.coverImage}
            alt={frontMatter.title}
            placeholder='blur'
            blurDataURL={frontMatter.coverImage}
            quality={100}
          />
        </div>
      </div>
      {/* <div className='relative mb-24 w-full md:max-w-6xl mx-auto bg-peach z-10'>
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
      </div> */}
    </header>
  )
}

export default Recipes_Post_Header
