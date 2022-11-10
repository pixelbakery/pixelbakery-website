import nav_main from '@data/nav_main'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'
import Nav_FullScreenMenu_CTA from './Nav_FullScreenMenu_CTA'

function Nav_FullScreenMenu_MiddleCol({ update }) {
  return (
    <div className=' w-full self-start flex flex-col justify-center lg:w-2/3  xl:w-1/2'>
      <ul className='self-center w-max my-0 text-center lg:text-left flex flex-col lg:justify-between leading-none font-extrabold text-blue-dark text-3xl md:text-5xl xl:text-6xl 2xl:text-6xl lowercase gap-y-2 md:gap-y-3 lg:gap-y-4'>
        {nav_main.map((nav_item, index) => {
          return (
            <li
              className='relative duration-300 ease-in-out hover:scale-98 hover:opacity-95 origin-left'
              key={nav_item.text}
            >
              <Link hrefLang={'en-US'} href={nav_item.url} passHref legacyBehavior>
                <a className='' onClick={update}>
                  {nav_item.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='block xl:hidden'>
        <Nav_FullScreenMenu_CTA update={update} />
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_MiddleCol
