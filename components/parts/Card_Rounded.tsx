/* eslint-disable react/prop-types */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pill from './Pill'

//PROPS:
// link={'/'} head={''} subhead={''} aspectW={''} aspectY={''} img={''} imgAlt={''} tags={["something", "something else"]} tagBgColor={"bg-cream"} tagTextColor={'text-wine'}

function Card_Rounded(props) {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY
  return (
    <Link href={props.link} passHref>
      <article
        className={
          'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
          aspectW +
          aspectH
        }
      >
        <Image
          alt={props.imgAlt}
          src={props.img}
          layout='fill'
          objectFit='cover'
          blurDataURL='true'
          quality={100}
          className=''
        />
        <div className={'absolute w-100 h-100 bg-gradient-to-r from-blue-dark  opacity-25'}></div>
        <div
          className={
            'absolute w-100 h-100 bg-gradient-to-t via-transparent from-blue-dark  opacity-25'
          }
        ></div>
        <div className=' z-20 h-100 p-6 flex flex-col justify-between'>
          <div className='-py-3 flex flex-wrap flex-row  gap-4'>
            {props.tags.map((tag) => (
              <Pill
                text={tag}
                bgColor={props.tagBgColor}
                textColor={props.tagtextColor}
                size='sm'
                key={tag}
              />
            ))}
          </div>
          <div className=''>
            <div className='text-sm text-white'>{props.subhead}</div>
            <h3 className='text-2xl text-white'>{props.head}</h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Card_Rounded
