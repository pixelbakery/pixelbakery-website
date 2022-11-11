import Link from 'next/link'
const Logo_Type = () => {
  return (
    <div>
      <div>
        <Link href='/' hrefLang={'en-US'}>
          <div className='block text-center text-cream text-4xl font-extrabold leading-9 '>
            <span className='tracking-wider'>pixel bakery</span> <br />{' '}
            <span className='tracking-normal'>design studio</span>{' '}
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Logo_Type
