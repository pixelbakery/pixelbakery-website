import { H3 } from '@typography'
import Link from 'next/link'

const Footer_Objects_StudioInfo = () => {
  return (
    <div className='self-center hidden w-full lg:block'>
      <div className='max-w-xs mx-auto border-b-4 border-cream text-bold md:pr-4 md:mr-4'>
        <H3 className='text-3xl font-extrabold text-center md:text-left' color='cream'>
          studio
        </H3>
      </div>
      <div>
        <ul className='mt-3 text-center md:text-left'>
          <li className='relative duration-100 ease-in-out origin-left hover:scale-98 hover:opacity-95'>
            <Link
              className='text-xl text-cream'
              target='_blank'
              href='https://g.page/pixelbakery?share'
              rel='noreferrer'
            >
              <>
                2124 y st ste 122
                <br />
                lincoln, ne 68503
              </>
            </Link>
          </li>
          <li className='mt-3 text-xl text-cream '>
            <address className='relative duration-100 ease-in-out origin-left hover:scale-98 hover:opacity-95'>
              <Link href={'tel:402-302-0323'} className={'text-cream  '}>
                402 302 0323
              </Link>
            </address>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer_Objects_StudioInfo
