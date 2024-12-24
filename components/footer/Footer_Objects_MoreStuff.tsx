import { nav_footer_sub } from '@data'
import { Footer_UI_SmallLinkList } from '@footer'
import { H3 } from '@typography'

const Footer_Objects_MoreStuff = () => {
  return (
    <div className='hidden md:pr-4 lg:block'>
      <div className='hidden max-w-xs mx-auto mb-4 ml-0 border-b-4 lg:block border-cream md:pr-4'>
        <H3
          className='mt-0 text-3xl font-extrabold leading-none text-center md:text-left'
          color='cream'
        >
          more stuff
        </H3>
      </div>
      <nav className=''>
        <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
          {nav_footer_sub.map((navitem, i) => (
            <Footer_UI_SmallLinkList key={i} text={navitem.text} url={navitem.url} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Footer_Objects_MoreStuff
