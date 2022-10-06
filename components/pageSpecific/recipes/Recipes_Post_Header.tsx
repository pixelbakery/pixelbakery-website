import DateFormatter from '@lib/date-formatter'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '@parts/Pill'
import cn from 'classnames'
import Video from '@parts/Video'
import Loading from '@utility/Loading'

type Props = {
  date?: string
  forwardedRef: any
  frontMatter: any
  readTime: any
  matchingBio: any
}

const Recipes_Post_Header = ({ date, frontMatter, matchingBio, forwardedRef, readTime }: Props) => {
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
              // If there's a matching bio, use their headshot and link to their bio page
              <Link
                as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                href={`/about/[slug]`}
                passHref
              >
                <a
                  hrefLang={'en-US'}
                  className='w-12 h-12 rounded-full relative cursor-pointer overflow-hidden'
                >
                  <Image
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.headshotSmiling}`}
                    layout='fill'
                    objectFit='cover'
                    alt={frontMatter.author.name}
                    quality={20}
                    className='object-top scale-175 sc'
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.headshotSmiling}`}
                  />
                </a>
              </Link>
            ) : (
              // If there isn't a match, use a placeholder image and don't link anywhere
              <div className='w-12 h-12 rounded-full relative overflow-hidden'>
                <Image
                  placeholder='blur'
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                  layout='fill'
                  objectFit='cover'
                  alt={frontMatter.author.name}
                  quality={25}
                  className='object-top scale-175 sc'
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
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
                    <a hrefLang={'en-US'} className='text-peach'>
                      {' '}
                      {frontMatter.author.name}
                    </a>
                  </Link>
                </div>
              ) : (
                <div className='text-sm text-wine'>Written by {frontMatter.author.name}</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className=' md:max-w-6xl mx-auto mb-24 '>
        {frontMatter.video != null ? (
          <div className='w-full   bg-peach mx-auto'>
            <Video url={frontMatter.video} poster={frontMatter.coverImage} />
          </div>
        ) : (
          <div className='relative w-full  aspect-w-4 aspect-h-3  mx-auto'>
            <Image
              layout='fill'
              objectFit='cover'
              className='object-center'
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
              alt={`${frontMatter.title}, by ${frontMatter.author.name}`}
              placeholder='blur'
              blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
              quality={100}
            />
            <Loading />
          </div>
        )}
      </div>
    </header>
  )
}

export default Recipes_Post_Header
