import Nav_FullScreenMenu_CTA from './Nav_FullScreenMenu_CTA'
import type { MenuComponentBaseProps } from '@types'
import { StudioInfo, MoreLinks } from './menu'

export function Nav_FullScreenMenu_RightCol({ update }: MenuComponentBaseProps) {
  return (
    <div className='flex-col justify-between hidden w-full xl:flex xl:w-1/3'>
      <StudioInfo />
      <MoreLinks update={update} />
      <div className='hidden xl:block'>
        <Nav_FullScreenMenu_CTA update={update} />
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_RightCol
