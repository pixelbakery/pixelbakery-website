import Link from 'next/link'
const Logo_Type = () => {
  return (
    <div>
      <div>
        <Link passHref href='/' hrefLang={'en-US'}>
          <a className='block text-center text-cream text-4xl font-extrabold leading-9 '>
            <span className='tracking-wider'>pixel bakery</span> <br />{' '}
            <span className='tracking-normal'>design studio</span>{' '}
          </a>
        </Link>
      </div>
    </div>
  )
}
export default Logo_Type
