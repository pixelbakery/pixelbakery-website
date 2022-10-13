import Logo_Primary from '@images/logo_primary'

import Link from 'next/link'

function Nav_FullScreenMenu_LeftCol({ update }) {
  return (
    <div className='self-center lg:self-start w-32 md:w-48 lg:w-1/3 xl:w-1/6 '>
      <div className='relative duration-300 ease-in hover:scale-98 hover:opacity-95'>
        <Link hrefLang={'en-US'} href='/' passHref>
          <a className='fill-blue-dark text-blue-dark ' onClick={update}>
            <Logo_Primary className='object-contain w-full h-full  ' />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_LeftCol