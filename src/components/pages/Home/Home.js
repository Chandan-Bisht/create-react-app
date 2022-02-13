import React from 'react'
import Footer from '../../elements/Footer'
import Navbar from '../../elements/Navbar'

export default function Home({children}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}
