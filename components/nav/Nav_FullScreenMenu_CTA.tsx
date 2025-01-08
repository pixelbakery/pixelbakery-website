import Button_Filled from '@parts/Button_Filled'
import Nav_SocialLinks from './Nav_SocialLinks'
import type { MenuComponentBaseProps } from '@/types/general'

const Nav_FullScreenMenu_CTA = ({ update }: MenuComponentBaseProps) => {
  return (
    <div className=''>
      <div className='flex justify-center w-full mt-4 lg:mt-8 2xl:mt-3' onClick={update}>
        <Button_Filled
          center={true}
          text={'Start a New Project'}
          link={'/onboarding'}
          bgColor={'peach'}
          textColor={'pink-light'}
          chevronDirection='right'
        />
      </div>
      <div className='mx-auto mt-2'>
        <Nav_SocialLinks color={'blue-dark'} textSize={'2xl'} />
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_CTA
