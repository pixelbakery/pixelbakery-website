import LottiePatternPlayer from '@parts/LottiePatternPlayer'
import H1 from '@typography/H1'
import Link from 'next/link'

const Industries_Header = ({ title, children }) => {
  return (
    <section className='relative lander-services my-4 grid grid-cols-5 w-full'>
      <div className='bg-blue absolute lg:relative top-0 left-0 w-full h-full col-span-1 sm:col-span-2 z-0  lottie-blue-dark'>
        <LottiePatternPlayer />
      </div>
      <div className='bg-white col-span-4 sm:col-span-3  pt-24 lg:pt-12  h-full w-full overflow-hidden flex flex-col justify-center  z-10'>
        <div className='max-w-xl mx-auto px-8  py-8'>
          <Link
            hrefLang={'en-US'}
            href='/work#industries'
            className='relative z-10 block text-blue text-md cursor-pointer mb-0 pb-0 font-bold'
          >
            ← Back to Industries
          </Link>
          <H1 className='text-5xl lg:text-7xl text-blue-dark leading-none mt-0 pt-0'>{title}</H1>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Industries_Header
