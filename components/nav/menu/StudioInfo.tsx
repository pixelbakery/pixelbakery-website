import { H3 } from '@typography/index'
import Link from 'next/link'

interface StudioInfoProps {
  className?: string
}

const StudioInfo = ({ className = '' }: StudioInfoProps) => {
  return (
    <div className={`hidden xl:block ${className}`}>
      <div className='max-w-xs border-b-4 border-blue-dark text-bold md:pr-4 md:mr-4'>
        <H3 className='text-3xl font-extrabold text-center md:text-left' color='blue-dark'>
          studio
        </H3>
      </div>
      <ul className='mt-3 text-center md:text-left'>
        <li className='relative duration-100 origin-left hover:scale-98'>
          <a
            className='text-xl text-blue-dark'
            target='_blank'
            href='https://g.page/pixelbakery?share'
            rel='noreferrer'
          >
            2124 y st ste 122
            <br />
            lincoln, ne 68503
          </a>
        </li>
        <li className='relative mt-3 text-xl duration-100 origin-left text-blue-dark hover:scale-98'>
          <Link href='tel:402-302-0323' className='text-blue-dark'>
            402 957 3995
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default StudioInfo
