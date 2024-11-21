import Link from 'next/link'
import React from 'react'

const YourStory = () => {
  return (
    <section className='bg-button'>
      <div className='main_container py-24 flex justify-center lg:gap-5 gap-4 items-center flex-col'>
        <h2 className='text-3xl leading-tight font-bold text-white lg:text-4xl text-center'>Tell Us About Your <span className='bg-black px-2 rotate-3'>Horror</span> Adventure</h2>
        <Link href="mailto:FearstoFathomStories@gmail.com" className='link text-xl hover:underline-offset-4 text-white lg:text-2xl'>FearstoFathomStories@gmail.com</Link>
      </div>
    </section>
  )
}

export default YourStory