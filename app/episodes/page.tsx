import React from 'react'
import Navbar from '../components/Navbar'
import Episodes from '../components/Episodes'
import YourStory from '../components/YourStory'
import Footer from '../components/Footer'

const page = () => {
  return (
    <section>
      <Navbar />
      <Episodes />
      <YourStory />
      <Footer />
    </section>
  )
}

export default page