import React from 'react'

import layoutStyles from '../styles/Layout.module.css'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={layoutStyles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout