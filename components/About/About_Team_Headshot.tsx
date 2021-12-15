/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function About_Team_Headshot({ ...props }) {
  const headshot = props.headshot
  const headshotSmiling = props.headshotSmiling

  const [hover, setHover] = useState(!false)
  const handleHover = () => setHover(!hover)

  return (
    <Link href={`/about/${props.url}`} passHref>
      <a className='relative w-full  aspect-w-3 aspect-h-4'>
        <Image
          src={hover ? headshot : headshotSmiling}
          layout={'fill'}
          objectFit='cover'
          className='w-full h-full object-cover'
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          // onMouseOver={(e) => console.log(props.headshotSmiling)}
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
