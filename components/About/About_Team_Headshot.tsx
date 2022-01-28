/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

function About_Team_Headshot({ ...props }) {
  const headshot = props.headshot
  const headshotSmiling = props.headshotSmiling

  const [hover, setHover] = useState(false)
  const handleHover = () => setHover(!hover)

  return (
    <Link href={`/about/${props.url}`} passHref>
      <a
        className='relative w-full  aspect-w-3 aspect-h-4 col-span-1'
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
      >
        <Image
          src={headshot}
          layout={'fill'}
          objectFit='cover'
          className={cn('absolute top-0 left-0 w-full h-full object-cover z-20', {
            ['opacity-0']: hover,
          })}
          alt={'pixel bakery ' + props.name}
        />
        <Image
          src={headshotSmiling}
          layout={'fill'}
          objectFit='cover'
          className='absolute top-0 left-0  w-full h-full object-cover z-10'
          alt={'pixel bakery ' + props.name}
        />
      </a>
    </Link>
  )
}
export default About_Team_Headshot

// <Image
//           layout='fill'
//           objectFit='cover'
//           blurDataURL='true'
//           className='w-full h-full object-cover '
//           alt={value.name}
//           src={{value.image_headshot}}
//
//         />
