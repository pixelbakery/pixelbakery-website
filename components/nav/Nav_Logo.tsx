import Link from 'next/link'

function Nav_NavLogo() {
  return (
    <div id='logo' className='opacity-0 origin-top-left hidden xl:block  '>
      <Link href={'/'} passHref>
        <a className='pointer-events-auto block relative  h-full w-full z-50 px-4 py-4 '>
          <div
            id='logo-wrapper'
            className='relative z-20 top-0 bg-none text-peach text-center font-extrabold rounded-md  text-5xl leading-none inline-block'
          >
            <div id='logo-line-1' className='tracking-normal text-left'>
              <span id='p' className='inline-block'>
                p
              </span>
              <span id='ixel' className='inline-block'>
                ixel{' '}
              </span>
              <span id='b' className='inline-block ml-3'>
                b
              </span>
              <span id='akery' className='inline-block'>
                akery
              </span>
            </div>
            <div id='logo-line-2' className='tracking-wide -mt-2 -ml-1 text-left '>
              <span id='d' className='inline-block'>
                d
              </span>
              <span id='esign' className='inline-block'>
                esign{' '}
              </span>
              <span id='s' className='inline-block ml-3'>
                s
              </span>
              <span id='tudio' className='inline-block'>
                tudio
              </span>
            </div>
          </div>
          <div id='logo-bg' className='absolute z-10 top-0 left-0 bg-cream block rounded-md'></div>
        </a>
      </Link>
    </div>
  )
}

export default Nav_NavLogo
