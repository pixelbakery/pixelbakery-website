import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'

type Props = {
  children?: ReactNode
  color?: string
  serviceName: string
  className?: string
}

function Services_Header({ serviceName, children, className }: PropsWithChildren<Props>) {
  return (
    <section className='lander-education my-4  overflow-hidden'>
      <div className=' grid gap-y-16 md:gap-3 grid-cols-1 lg:grid-cols-2 h-full'>
        <div className='relative bg-peach col-span-1 h-[50vh] lg:h-full'>
          {/* <div className='relative w-full overflow-hidden h-full'> */}
          {/* */}
          {/* </div> */}
          <video
            muted
            autoPlay
            loop
            playsInline
            controls={false}
            preload='true'
            className='absolute object-cover  w-full h-full hideControls'
          >
            <source src='/img/Pixel-Bakery_3D-Oven-Render.mp4' />
          </video>
        </div>
        <div className='col-span-1 flex flex-col justify-center py-6 px-10 '>
          <div className=' max-w-md mx-auto'>
            <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Services</span>
            <H1 className='mt-0 pt-0 mb-3 text-blue-dark'>{serviceName}</H1>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services_Header
