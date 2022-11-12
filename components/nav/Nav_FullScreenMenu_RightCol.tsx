import H3 from '@typography/H3'
import Link from 'next/link'
import Obfuscate from 'react-obfuscate'
import Nav_FullScreenMenu_CTA from './Nav_FullScreenMenu_CTA'
function Nav_FullScreenMenu_RightCol({ update }) {
  return (
    <div className='hidden  w-full  xl:flex flex-col justify-between xl:w-1/3'>
      <div className='hidden xl:block'>
        <div className='border-b-4 border-blue-dark text-bold max-w-xs  md:pr-4  md:mr-4'>
          <H3 className='text-center md:text-left font-extrabold text-3xl text-blue-dark'>
            studio
          </H3>
        </div>
        <ul className='mt-3 text-center md:text-left'>
          <li className='relative duration-100 hover:scale-98 origin-left'>
            <a
              className='text-blue-dark text-xl  '
              target='_blank'
              href='https://g.page/pixelbakery?share'
              rel='noreferrer'
            >
              2124 y st ste 122
              <br />
              lincoln, ne 68503
            </a>
          </li>
          <li className='mt-3 text-xl text-blue-dark relative duration-100 hover:scale-98 origin-left'>
            <Obfuscate
              linkText={'tel:000-000-0000'}
              tel={'402-302-0323'}
              className={'text-blue-dark  '}
            >
              402 302 0323
            </Obfuscate>
          </li>
        </ul>
      </div>
      <div className='hidden xl:block'>
        <div className=' '>
          <div className='hidden lg:block lg:mt-4 border-b-4 border-blue-dark mb-4 max-w-xs md:pr-4'>
            <H3 className=' md:text-left font-extrabold text-3xl  leading-none mt-0 text-blue-dark'>
              more stuff
            </H3>
          </div>
          <nav className=''>
            <ul className='mt-3 mb-0 grid grid-cols-1 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3 text-blue-dark'>
              <li className='relative duration-100 hover:scale-98 origin-left ease-in-out hover:opacity-95 '>
                <Link href={'/careers'} onClick={update}>
                  Careers
                </Link>
              </li>
              <li className='relative duration-100 hover:scale-98 origin-left ease-in-out hover:opacity-95 '>
                <Link href={'/careers'} onClick={update}>
                  Motion Mixer
                </Link>
              </li>
              <li className='relative duration-100 hover:scale-98 origin-left ease-in-out hover:opacity-95 '>
                <Link href={'/careers'} onClick={update}>
                  Nebraska Creative
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='hidden xl:block'>
        <Nav_FullScreenMenu_CTA update={update} />
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_RightCol
