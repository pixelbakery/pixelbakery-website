import { useState } from 'react'
import Nav_FullscreenMenu from './Nav_FullscreenMenu'
import Nav_HamburgerNav from './Nav_HamburgerMenu'

const Nav_HamWrapper = () => {
  const [isHamActive, setHamToggle] = useState(false)
  return (
    <div className=' fixed right-0 top-0 mr-6 mt-6 z-50 md:hidden'>
      <Nav_HamburgerNav isActive={isHamActive} onModalUpdate={setHamToggle} />
      <Nav_FullscreenMenu isActive={isHamActive} onModalUpdate={setHamToggle} />
    </div>
  )
}
export default Nav_HamWrapper
