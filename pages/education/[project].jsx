import React, { useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function EducationProject() {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <main id='' className=''>
      <section className='lander my-4 grid grid-cols-2'>
        <div className='col-span-1 h-full w-full overflow-hidden'>
          <img
            src='/img/polaroid.png'
            className='object-cover object-center w-full h-full'
            alt='polaroid 3d model made in cinema 4d'
          />
        </div>
        <div className='col-span-1 h-full w-full overflow-hidden flex flex-col justify-center'>
          <div className='max-w-2xl px-8 mx-auto'>
            <div className='text-peach mb-0 pb-0 font-bold text-3xl lowercase'>Project File</div>
            <h1 className='text-blue-dark leading-none mt-0 pt-0'>polaroid camera</h1>
            <div>
              <ul className='text-wine text-opacity-50 text-sm list-none my-10'>
                <li>Application: After Effects</li>
                <li>File Name: PB_karley_blog_v4-1-1916x1080</li>
                <li>File Size: 305.25 KB</li>
                <li>File Type: 3D Model</li>
                <li>Upload Date: August 18, 2020</li>
              </ul>
              <p className='text-wine text-lg mb-8'>
                Energistically deliver real-time models with wireless quality vectors. Continually
                iterate plug-and-play portals via turnkey quality vectors. Globally build
                intermandated niche markets with equity invested infomediaries. Intrinsicly pursue
                orthogonal growth strategies after multimedia based innovation.{' '}
              </p>
              <Link href={'/'} className={'py-3 rounded-sm px-6 w-full text-center bg-blue'}>
                <div className='text-cream font-extrabold text-xl lowercase flex '>
                  <div className='flex-grow flex flex-col justify-center'>download</div>

                  <i className='h-12 w-12 flex flex-col justify-center'>
                    <ChevronRightIcon className='  text-color' />
                  </i>
                </div>
              </Link>

              <a className='block text-blue underline'>
                <span> ← all project files</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='my-4 bg-pink-light'>
        <div className='max-w-6xl mx-auto'>Comment Section</div>
      </section>
      <section className='my-4 bg-pink-light'>
        <div className='max-w-6xl mx-auto'>Other Projects section</div>
      </section>
    </main>
  )
}

export default EducationProject
