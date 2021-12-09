import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLink from '../../components/pg-education/edu-part-headerLink'

function EducationL() {
  return (
    <section className='relative lander my-4 grid grid-cols-2'>
      <div className='absolute lg:relative top-0 left-0 w-full h-full col-span-1 z-0  '>
        <Image
          src='/img/polaroid.png'
          alt='polaroid 3d model made in cinema 4d'
          objectFit='cover'
          layout='fill'
          placeholder='blurDataUrl'
          className='filter blur-lg lg:blur-none'
        />
      </div>
      <div className='my-12 self-center px-8 col-span-2 lg:col-span-1 h-full w-full overflow-hidden flex flex-col justify-center relative z-10'>
        <div className='bg-white max-w-lg rounded-lg  lg:max-w-xl px-8 m py-8 x-auto'>
          <h1 className='text-5xl lg:text-7xl text-blue-dark leading-none mt-0 pt-0'>Education</h1>
          <div className='text-peach mb-16 mt-4  pb-0 font-bold text-2xl lowercase leading-tight'>
            Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
            distinctive convergence for stand-alone alignments.{' '}
          </div>
          <div>
            <HeaderLink
              header={'from  scratch'}
              subheader={'complete a to z tutorials'}
              inpageLink={'#fromScratch'}
            />
            <HeaderLink
              header={'made to order'}
              subheader={'one-off tutorials on specific somethings'}
              inpageLink={'#madeToOrder'}
            />
            <HeaderLink
              header={'project files'}
              subheader={'open-source work we’ve made'}
              inpageLink={'#projectFiles'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationL
