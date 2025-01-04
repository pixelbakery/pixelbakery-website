import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX
import type { AboutTeamHeadshotProps } from '@types'

const About_Team_Headshot = ({ person }: AboutTeamHeadshotProps) => {
  const [hover, setHover] = useState(false)
  const handleHover = () => setHover(!hover)

  return (
    <Link
      hrefLang={'en-US'}
      as={`/about/${person.filePath.replace(/\.mdx?$/, '')}`}
      href={`/about/[slug]`}
      className='relative w-full col-span-1 aspect-w-3 aspect-h-4 bg-blue'
      onMouseOver={handleHover}
      onMouseLeave={handleHover}
    >
      <>
        <Image
          src={`${ImgPrefix}${person.data.headshotSerious}`}
          width={720}
          height={980}
          className={cn('absolute top-0 left-0 w-full h-full object-cover z-20', {
            ['opacity-0']: hover,
          })}
          alt={'pixel bakery ' + person.data.name + ', ' + person.data.title}
          placeholder={'blur'}
          blurDataURL={`${ImgPrefix}${person.data.headshotSerious}`}
        />
        <Image
          src={`${ImgPrefix}${person.data.headshotSmiling}`}
          width={720}
          height={980}
          className='absolute top-0 left-0 z-10 object-cover w-full h-full'
          alt={'pixel bakery ' + person.data.name + ', ' + person.data.title + ' company headshot'}
          placeholder={'blur'}
          blurDataURL={`${ImgPrefix}${person.data.headshotSmiling}`}
        />
      </>
    </Link>
  )
}
export default About_Team_Headshot
