import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navigation'
import Meta from './Meta'
import Nav_HamWrapper from './Nav/Nav_HamWrapper'
type Props = {
  preview?: boolean
  children: React.ReactNode
}
// Layout includes the standard navbar at the top
export const Layout__HasNav = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

//Layout has no navbar on the top (used store page)
export const Layout__NoNav = ({ children }: Props) => {
  return (
    <div className='content'>
      {children}
      <Footer />
    </div>
  )
}

//Layout has no navbar on the top, except for a hamb on mobile
export const Layout__NavMobile = ({ children }: Props) => {
  return (
    <div className='content'>
      <Nav_HamWrapper />
      {children}
      <Footer />
    </div>
  )
}

//TODO: layout has a shopping cart icon instead of the standard navbar. issue #32
export const Layout__ShoppingCart = ({ children }) => {
  return (
    <div className='content'>
      {children}
      <Footer />
    </div>
  )
}
