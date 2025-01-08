import nav_main from '@data/nav_main'
import Link from 'next/link'
import Nav_FullScreenMenu_CTA from './Nav_FullScreenMenu_CTA'
import type { MenuComponentBaseProps } from '@/types/general'

function Nav_FullScreenMenu_MiddleCol({ update }: MenuComponentBaseProps) {
  return (
    <div className='flex flex-col self-start justify-center w-full lg:w-2/3 xl:w-1/2'>
      <ul className='flex flex-col self-center my-0 text-3xl font-extrabold leading-none text-center lowercase w-max lg:text-left lg:justify-between text-blue-dark md:text-5xl xl:text-6xl 2xl:text-6xl gap-y-2 md:gap-y-3 lg:gap-y-4'>
        {nav_main.map((nav_item) => {
          return (
            <li
              className='relative duration-300 ease-in-out origin-left hover:scale-98 hover:opacity-95'
              key={nav_item.text}
            >
              <Link hrefLang={'en-US'} href={nav_item.url} onClick={update}>
                {nav_item.text}
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
