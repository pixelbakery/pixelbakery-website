import Navigation from '@nav/Navigation'
import Footer from '@footer/Footer'
import Meta from '@parts/Meta'
import BackToTop from '@utility/BackToTop'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import type { ReactNode } from 'react'
import Main from '@parts/Main'

type Props = {
  children: ReactNode
  id?: string
}

const Layout_Defaualt = ({ children, id }: Props) => {
  return (
    <Main id={id}>
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
