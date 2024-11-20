import React from 'react'
import Navbar from '../components/Navbar'
import ContactUsHero from '../components/ContactUsHero'
import Location from '../components/Location'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
      <Navbar />
      <ContactUsHero />
      {/* <Location /> */}
      <Footer />
    </main>
  )
}

export default page