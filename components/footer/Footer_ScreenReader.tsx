import Link from 'next/link'
const Footer_ScreenReader = () => {
  return (
    <nav className='sr-only'>
      <Link className='sr-only' href={'/'}>
        Home
      </Link>
      <Link className='sr-only' href={'/about'}>
        Who We Are
      </Link>
      <Link className='sr-only' href={'/work'}>
        What We Make
      </Link>
      <Link className='sr-only' href={'/services'}>
        Services
      </Link>
      <Link className='sr-only' href={'/onboarding'}>
        Start A Project
      </Link>
      <Link className='sr-only' href={'/education'}>
        Education
      </Link>
      <Link className='sr-only' href={'/recipes'}>
        Mom's Recipes
      </Link>
      <Link className='sr-only' href={'/contact'}>
        Contact Us
      </Link>
    </nav>
  )
}

export default Footer_ScreenReader
