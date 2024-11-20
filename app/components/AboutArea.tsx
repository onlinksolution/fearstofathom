import { RiArrowRightSLine } from '@remixicon/react'
import React from 'react'
import Footer from './Footer'
import Link from 'next/link'

const AboutArea = () => {
  return (
    <section>
      <div className='bg-gray-100'>
        <div className='main_container py-24'>
          <h1 className='text-3xl lg:text-5xl'>Who We Are?</h1>
          <p className='mt-5 lg:text-lg'>Fears to Fathom was born out of a passion for storytelling and an admiration for the human capacity to endure the unthinkable. We are a team of dedicated developers, designers, and storytellers united by a love for horror. Together, we aim to craft games that don’t just entertain but also resonate deeply with players by drawing from authentic, real-world experiences.</p>
        </div>
      </div>

      <div className='bg-gray-200'>
        <div className='main_container py-24'>
          <h1 className='text-3xl lg:text-5xl'>Our Mission</h1>
          <p className='mt-5 text-lg mb-5'>Our mission is simple:</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine /> Bring Real Stories to Life: We believe the most terrifying stories are the ones rooted in reality.</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />  Build Immersive Experiences: Every game we create is a deeply atmospheric journey where players feel truly immersed in the narrative. </p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />  Empower Story telling: By giving individuals a platform to share their personal experiences, we honor their stories and present them to the world.</p>
        </div>
      </div>

      <div className='bg-gray-300'>
        <div className='main_container py-24'>
          <h1 className='text-3xl lg:text-5xl'>What Makes Us Unique?</h1>
          <p className='mt-5 text-lg mb-5'>Fears to Fathom is not your typical horror game series. Here’s what sets us apart:</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Real-Life Inspirations: Every episode is based on true stories submitted by individuals who’ve lived through harrowing experiences.</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Episodic Format: Each standalone episode delivers a complete story, making it accessible for newcomers and returning players.</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Community-Centric: We actively involve our community in the storytelling process, ensuring that our games reflect a shared passion for authentic horror.</p>
        </div>
      </div>

      <div className='bg-gray-400'>
        <div className='main_container py-24'>
          <h1 className='text-3xl lg:text-5xl'>How You Can Be Part of the Journey</h1>
          <p className='mt-5 text-lg mb-5'>Fears to Fathom thrives because of its community. You can get involved in multiple ways:</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Share Your Story: Have a chilling real-life experience? Submit it to us, and it might inspire a future episode.</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Play and Explore: Dive into our episodes and discover the blend of fear, suspense, and survival.</p>
          <p className='inline-flex gap-5'><RiArrowRightSLine />Join the Discussion: Connect with fellow players, share your thoughts, and speculate on upcoming episodes.</p>

          <p className='text-lg mt-5 lg:text-3xl'><span className='text-white'>Send Your Story: </span><Link href='mailto:FearstoFathomStories@gmail.com'>FearstoFathomStories@gmail.com</Link></p>
        </div>
      </div>
    </section>
  )
}

export default AboutArea