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
    <PageSection>
      <div className='w-full  grid gap-y-16 grid-cols-2'>
        <div className='bg-peach aspect-3/4  w-full col-span-2'>
          <div className='relative w-full h-full overflow-hidden'>
            <video
              muted
              autoPlay
              loop
              preload='true'
              className='absolute object-cover w-full h-full'
            >
              <source src='/img/Pixel-Bakery_3D-Oven-Render.mp4' />
            </video>
          </div>
        </div>
        <div className='bg-egg col-span-2'>
          <div className=' max-w-md h-full flex flex-col mx-auto justify-center'>
            <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Services</span>
            <H1 className='mt-0 pt-0 mb-3 text-blue-dark'>{serviceName}</H1>
            {children}
          </div>
        </div>
      </div>
    </PageSection>
  )
}
export default Services_Header
