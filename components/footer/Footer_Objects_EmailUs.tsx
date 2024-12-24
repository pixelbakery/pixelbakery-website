import Link from 'next/link'

const Footer_Objects_EmailUs = () => {
  return (
    <div className='hidden text-center lg:block lg:mt-3'>
      <Link
        href={'mailto:hello@pixelbakery.com'}
        className={'text-cream  text-2xl font-extrabold mb-0 pb-0 leading-none'}
      >
        hello@pixelbakery.com
      </Link>
    </div>
  )
}

export default Footer_Objects_EmailUs
