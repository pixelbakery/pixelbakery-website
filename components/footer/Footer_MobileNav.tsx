import { nav_footer_main, nav_footer_sub } from '@data'
import { Footer_UI_LargeLinkList, Footer_UI_SmallLinkList } from '@footer'
const Footer_MobileNav = () => {
  return (
    <div className='grid self-center w-full max-w-md grid-cols-2 mx-4 mt-4 lg:hidden gap-y-0 gap-x-3'>
      <ul className='flex flex-col h-full text-xl font-extrabold gap-y-2 '>
        {nav_footer_main.map((navitem, index) => (
          <Footer_UI_LargeLinkList key={index} navitem={navitem} />
        ))}
      </ul>
      <ul className='flex flex-col mb-0 text-center gap-y-3'>
        {nav_footer_sub.map((navitem, index) => (
          <Footer_UI_SmallLinkList key={index} url={navitem.url} text={navitem.text} />
        ))}
      </ul>
    </div>
  )
}

export default Footer_MobileNav
