import Navigation from '@nav/Navigation'
import { Footer } from '@footer'
import { Meta, NextSEO_DefaultSEO, Main } from '@parts'
import BackToTop from '@utility/BackToTop'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  id?: string
}

const Layout_Defaualt = ({ children, id }: Props) => {
  return (
    <Main id={id} className='font-poppins font-dempsey font-geologica'>
      <NextSEO_DefaultSEO />
      <Meta />
      <Navigation />
      {children}
      <Footer />
      <BackToTop />
    </Main>
  )
}

export default Layout_Defaualt
