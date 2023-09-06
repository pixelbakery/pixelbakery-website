import DateFormatter from '@lib/date-formatter'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '@parts/Pill'
import cn from 'classnames'
import Video from '@parts/Video'
import Loading from '@utility/Loading'

type Props = {
  date?: string
  frontMatter: any
  readTime: any
  matchingBio: any
}

const Recipes_Post_Header = ({ date, frontMatter, matchingBio, readTime }: Props) => {
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
                hrefLang={'en-US'}
                className='w-12 h-12 rounded-full relative cursor-pointer overflow-hidden'
              >
                <Image
                  placeholder='blur'
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.avatar}`}
                  width={124}
                  height={124}
                  alt={frontMatter.author.name}
                  quality={75}
                  className='w-full h-full object-cover'
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.avatar}`}
                />
                {matchingBio.data.avatar ? (
                  <Image
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.avatar}`}
                    width={124}
                    height={124}
                    alt={frontMatter.author.name}
                    quality={75}
                    className='object-center object-cover'
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.avatar}`}
                  />
                ) : matchingBio.data.headshotSmiling ? (
                  <Image
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.headshotSmiling}`}
                    fill={true}
                    width={124}
                    height={124}
                    alt={frontMatter.author.name}
                    quality={25}
                    className='object-top scale-175 object-cover'
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${matchingBio.data.headshotSmiling}`}
                  />
                ) : (
                  <Image
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                    fill={true}
                    width={300}
                    height={213}
                    alt={frontMatter.author.name}
                    quality={25}
                    className='object-cover object-top scale-175 sc'
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                  />
                )}
              </Link>
            ) : (
              // If there isn't a match, use a placeholder image and don't link anywhere
              <div className='animate-spin-slow w-12 h-12 rounded-full relative overflow-hidden'>
                <Image
                  placeholder='blur'
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                  width={300}
                  height={213}
                  alt={frontMatter.author.name}
                  quality={25}
                  className='object-cover object-top scale-175'
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                />
              </div>
            )}

            <div className={cn('ml-4 flex flex-col justify-center self-center')}>
              <div className='text-sm text-wine'>
                <DateFormatter dateString={date} />
                <span className='mx-2'>|</span>
                <span>{readTime.minutes.toString()} min read</span>
              </div>

              {matchingBio ? (
                <div className='text-sm text-wine'>
                  Written by the one and only{' '}
                  <Link
                    as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/about/[slug]`}
                    hrefLang={'en-US'}
                    className='text-peach'
                  >
                    {frontMatter.author.name}
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
              priority={true}
              fill={true}
              className='object-cover object-center '
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
              width={1280}
              height={960}
              alt={`${frontMatter.title}, by ${frontMatter.author.name}`}
              placeholder='blur'
              blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
              quality={100}
              // sizes='(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 33vw'
            />
            <Loading />
          </div>
        )}
      </div>
    </header>
  )
}

export default Recipes_Post_Header
