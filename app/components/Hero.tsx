import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiAppStoreLine, RiSteamFill } from '@remixicon/react'

const Hero = () => {
  return (
    <section>
      <div className='w-full h-full flex justify-center items-center absolute flex-col gap-8 z-40'>
        <Image src="/f2ftext.png" width={0} height={0} sizes='100vw' className='lg:w-2/4 w-5/6 h-auto' alt='logo' />
        <p className='text-white lg:w-2/4 w-4/5 text-center'>Fears to Fathom is an episodic psychological horror game where each episode unveils a short story narrated by the ones who survived.</p>
        <div className='flex gap-8 flex-col md:flex-row'>
          <Link href="https://store.steampowered.com/franchise/f2f" className='text-white flex gap-4 bg-button px-4 py-3 rounded-full hover:bg-white hover:text-button transition-all duration-500'><RiSteamFill /> Play Now on Steam</Link>
          <Link href="https://apps.apple.com/in/developer/rayll-studios-private-limited/id1718175903" className='text-white flex gap-4 bg-button px-4 py-3 rounded-full hover:bg-white hover:text-button transition-all duration-500'><RiAppStoreLine /> Play Now on iOS</Link>
        </div>

      </div>

      <video src="/hero-bg.mp4" autoPlay loop muted className="hero_video" />
    </section>
  )
}

export default Hero