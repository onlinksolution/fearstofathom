import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <section className='welcome_bg'>
      <div className='main_container py-24 grid gap-8 lg:grid-cols-2 items-center'>
        <div>
          <Image src="/welcome-img.png" width={0} height={0} sizes='100vw' alt='welcome' className='w-full h-auto' />
        </div>
        <div>
          <h1 className='text-3xl lg:text-5xl font-bold'>WELCOME TO <br />
            <span className='text-button'>FEARS TO FATHOM</span></h1>
          <p className='mt-7'>Step into the unsettling world of Fears to Fathom, an episodic psychological horror experience that blurs the line between reality and nightmare. Each episode is inspired by real-life accounts, drawing you into chilling tales of survival and suspense where every choice matters.
            Here, you’ll discover haunting stories, explore behind-the-scenes insights, and connect with a community of players who dare to confront their fears. Whether you’re reliving terrifying memories from Home Alone, hitching a dangerous ride in Norwood Hitchhike, or uncovering the dark secrets of Carson House, the horrors are waiting for you.</p>
        </div>
      </div>
    </section>
  )
}

export default Welcome