import { dateFormatter } from '@lib'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import {Video, Pill} from '@parts'
import {Loading} from '@utility'
import { ReadTime } from '@/types/general'
import { OurMatchingPerson,PostFrontMatter } from '@/types/posts'

type Props = {
  date?: string | Date
  frontMatter: PostFrontMatter
  readTime: ReadTime
  matchingBio?: OurMatchingPerson
}



const Recipes_Post_Header = ({ date, frontMatter, matchingBio, readTime }: Props) => {
  return (
    <header className="mt-44">
      <section className="px-6 mx-auto md:max-w-3xl ">
        <div id="blog-body-intro">
          <div className="mb-6">
            <div className="mb-6">
              <Pill
                text={frontMatter.categories[0]}
                bgColor={'blue'}
                textColor={'cream'}
                size={'md'}
              />
            </div>
            <h1 className="mt-3 text-4xl font-bold font-geologica text-blue-dark md:text-6xl">
              {frontMatter.title}
            </h1>
            <p
              className="max-w-lg my-3 text-xl font-medium font-geologica md:text-xl text-wine opacity-80"
              role="doc-subtitle"
            >
              {frontMatter.subtitle}
            </p>
          </div>
          <div className="flex mt-3 mb-16">
            {matchingBio?.filePath ? (
              <Link
                as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                href={`/about/[slug]`}
                hrefLang="en-US"
                className="relative w-12 h-12 overflow-hidden rounded-full cursor-pointer"
              >
                <Image
                  placeholder="blur"
                  blurDataURL={matchingBio.avatar ?? '/img/placeholder01.png'}
                  width={124}
                  height={124}
                  alt={frontMatter.author.name}
                  quality={75}
                  className="object-cover w-full h-full"
                  src={matchingBio.avatar ?? '/img/placeholder01.png'}
                />
              </Link>
            ) : (
              <div className="relative w-12 h-12 overflow-hidden rounded-full animate-spin-slow">
                <Image
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                  width={300}
                  height={213}
                  alt={frontMatter.author.name}
                  quality={25}
                  className="object-cover object-top scale-175"
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                />
              </div>
            )}

            <div className={cn('ml-4 flex flex-col justify-center self-center')}>
              <div className="text-sm text-wine">
                {date && dateFormatter({ dateString: date })}
                <span className="mx-2">|</span>
                <span>{readTime.minutes.toString()} min read</span>
              </div>

              {matchingBio?.filePath ? (
                <div className="text-sm text-wine">
                  Written by the one and only{' '}
                  <Link
                    as={`/about/${matchingBio.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/about/[slug]`}
                    hrefLang="en-US"
                    className="text-peach"
                  >
                    {frontMatter.author.name}
                  </Link>
                </div>
              ) : (
                <div className="text-sm text-wine">Written by {frontMatter.author.name}</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto mb-24 md:max-w-6xl">
  {typeof frontMatter.video === 'string' && frontMatter.video.trim() ? (
    <div className="w-full mx-auto bg-peach">
      <Video url={frontMatter.video} poster={frontMatter.coverImage} />
    </div>
  ) : (
    <div className="relative w-full mx-auto aspect-w-4 aspect-h-3">
      <Image
        priority={true}
        className="object-cover object-center"
        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`}
        width={1280}
        height={960}
        alt={`${frontMatter.title}, by ${frontMatter.author.name}`}
        placeholder="blur"
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
