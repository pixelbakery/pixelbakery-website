import { nav_footer_main } from '@data'
import { Footer_UI_LargeLinkList } from '@footer'

const Footer_Objects_PrimaryNavigation = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='grid grid-cols-1 pb-0 mt-0 mb-0 text-xl font-semibold text-left lg:grid-cols-1 md:text-3xl xl:text-4xl gap-x-2 xl:gap-y-2 lg:font-black'>
        {nav_footer_main.map((navitem) => (
          <Footer_UI_LargeLinkList navitem={navitem} key={navitem.text} />
        ))}
      </ul>
    </nav>
  )
}

export default Footer_Objects_PrimaryNavigation
