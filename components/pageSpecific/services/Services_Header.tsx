import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  serviceName: string
  className?: string
}

function Services_Header({ serviceName, children, className }: PropsWithChildren<Props>) {
  return (
    <section id='services-lander' className='w-full lander grid grid-cols-2 mt-4 mb-4 '>
      <div className='bg-peach w-full'>
        <div className='relative w-full h-full overflow-hidden'>
          <video muted autoPlay loop preload='true' className='absolute object-cover w-full h-full'>
            <source src='/img/Pixel-Bakery_3D-Oven-Render.mp4' />
          </video>
        </div>
      </div>
      <div className='bg-egg'>
        <div className=' max-w-md h-full flex flex-col mx-auto justify-center'>
          <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Services</span>
          <h1 className='mt-0 pt-0 mb-3 text-blue-dark'>{serviceName}</h1>
          {children}
        </div>
      </div>
    </section>
  )
}
export default Services_Header
