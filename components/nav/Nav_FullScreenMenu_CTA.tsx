import Button_Filled from '@parts/Button_Filled'
import Nav_SocialLinks from './Nav_SocialLinks'

const Nav_FullScreenMenu_CTA = ({ update }) => {
  return (
    <div className=''>
      <div className='flex justify-center w-full mt-4  lg:mt-8 2xl:mt-3' onClick={update}>
        <Button_Filled
          center={true}
          text={'Start something wonderful'}
          link={'/onboarding'}
          bgColor={'peach'}
          textColor={'pink-lighter'}
          chevronDirection='right'
        />
      </div>
      <div className='mx-auto mt-2'>
        <Nav_SocialLinks color={'blue-dark'} textSize={'text-2xl md:text-3xl'} />
      </div>
    </div>
  )
}

export default Nav_FullScreenMenu_CTA
