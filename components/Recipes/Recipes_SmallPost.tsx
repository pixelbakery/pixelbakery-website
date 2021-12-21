import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pill from '../parts/Pill'

function Recipes_SmallPost() {
  return (
    <Link href='/' passHref>
      <article className='border-t border-wine-100 my-6 pb-4 pt-8 cursor-pointer transition-scale duration-500 hover:scale-98'>
        <div className='flex flex-row gap-4 md:gap-10'>
          <div className='w-2/5 '>
            <div className='w-full h-full md:aspect-4/3 relative'>
              <Image src='/img/placeholder06.png' />
            </div>
          </div>
          <div className='w-3/5 flex flex-col '>
            <div className=' flex justify-start '>
              <div className='hidden lg:inline-block relative overflow-hidden rounded-full h-6  w-6 '>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/img/team/headshot-dan.png'
                  className=''
                />
              </div>
              <span className='self-center  lg:mx-4 text-xs md:text-base text-wine-300  lg:order-1'>
                Daniel Hinz <br className=' md:hidden' />
                <span className='hidden md:inline'> – </span>December 7th, 2021
              </span>
            </div>
            <h2 className='my-1 py-1 text-xl md:text-2xl font-semibold first-letter:leading-none text-blue-dark'>
              An Introduction to our tech stack
            </h2>
            <div className='flex-grow'>
              <p className='line-clamp-2 md:line-clamp-3 text-wine '>
                a word that refers to a lung disease contracted from the inhalation of very fine
                silica particles, specifically from a volcano; medically, it is the same as
                silicosis.a word that refers to a lung disease contracted from the inhalation of
                very fine silica particles, specifically from a volcano; medically, it is the same
                as silicosis.
              </p>
            </div>
            <div className='justify-self-end  align-self-end mt-4'>
              <Pill text='Education' bgColor='blue-light' textColor='wine' size={'sm'} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Recipes_SmallPost
