import { LottiePatternPlayer } from '@parts'
import { H1 } from '@typography'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IndustriesHeaderProps {
  title: string
  children?: ReactNode
}

const Industries_Header = ({ title, children }: IndustriesHeaderProps) => {
  return (
    <section className='relative grid w-full grid-cols-5 my-4 lander-services'>
      <div className='top-0 left-0 z-0 w-full h-full col-span-5 md:absolute bg-blue lg:relative sm:col-span-2 lottie-blue-dark'>
        <LottiePatternPlayer />
      </div>
      <div className='z-10 flex flex-col justify-center w-full h-full col-span-5 pt-24 overflow-hidden bg-white sm:col-span-3 lg:pt-12'>
        <div className='max-w-xl px-8 py-8 mx-auto'>
          <Link
            hrefLang={'en-US'}
            href='/work#industries'
            className='relative z-10 block pb-0 mb-0 font-bold cursor-pointer text-blue text-md'
          >
            ← Back to Industries
          </Link>
          <H1 className='mt-2 lg:text-4xl' color='blue-dark'>
            {title}
          </H1>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Industries_Header
