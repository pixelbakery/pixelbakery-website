import Footer from '@footer/Footer'
import Nav_HamWrapper from '@nav/Nav_HamWrapper'
import Main from '@parts/Main'
import Meta from '@parts/Meta'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import BackToTop from '@utility/BackToTop'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  id?: string
  className?: string
}

const Layout_Home = ({ children, id, className }: Props) => {
  return (
    <Main id={id} className={className}>
      <NextSEO_DefaultSEO />
      <Meta />
      <Nav_HamWrapper />
      {children}

      <Footer />
      <BackToTop />
    </Main>
  )
}

export default Layout_Home
