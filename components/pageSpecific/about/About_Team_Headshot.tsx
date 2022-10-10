import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX

const About_Team_Headshot = ({ person }) => {
  const [hover, setHover] = useState(false)
  const handleHover = () => setHover(!hover)

  return (
    <Link
      hrefLang={'en-US'}
      as={`/about/${person.filePath.replace(/\.mdx?$/, '')}`}
      href={`/about/[slug]`}
      passHref
    >
      <a
        className='relative w-full  aspect-w-3 aspect-h-4 col-span-1 bg-blue'
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
      >
        <Image
          src={`${ImgPrefix}${person.data.headshotSerious}`}
          layout={'fill'}
          objectFit='cover'
          className={cn('absolute top-0 left-0 w-full h-full object-cover z-20', {
            ['opacity-0']: hover,
          })}
          alt={'pixel bakery ' + person.data.name + ', ' + person.data.title}
          placeholder={'blur'}
          blurDataURL={`${ImgPrefix}${person.data.headshotSerious}`}
        />
        <Image
          src={`${ImgPrefix}${person.data.headshotSmiling}`}
          layout={'fill'}
          objectFit='cover'
          className='absolute top-0 left-0  w-full h-full object-cover z-10'
          alt={'pixel bakery ' + person.data.name + ', ' + person.data.title + ' company headshot'}
          placeholder={'blur'}
          blurDataURL={`${ImgPrefix}${person.data.headshotSmiling}`}
        />
      </a>
    </Link>
  )
}
export default About_Team_Headshot
