import React from 'react'
import Navbar from '../components/Navbar'
import Company from '../components/Company'
import AboutArea from '../components/AboutArea'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
      <Navbar />
      <Company />
      <AboutArea />
      <Footer />
    </main>
  )
}

export default page