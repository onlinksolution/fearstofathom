import { RiArrowUpLine, RiDiscordFill, RiGiftFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='main_container py-8'>
          <div className='grid gap-3 lg:grid-cols-3 items-center'>
            <div className='flex justify-center gap-4 lg:order-3 lg:justify-end'>
              <Link href="https://www.linkedin.com/company/rayll-studios" className='hover:text-button transition-all duration-300'><RiLinkedinBoxFill size={35} /></Link>
              <Link href="https://twitter.com/theRayll" className='hover:text-button transition-all duration-300'><RiTwitterXLine size={35} /></Link>
              <Link href="https://www.instagram.com/themukulnegi/" className='hover:text-button transition-all duration-300'><RiInstagramLine size={35} /></Link>
              <Link href="https://discord.gg/V4HdJpAzZP" className='hover:text-button transition-all duration-300'><RiDiscordFill size={35} /></Link>
            </div>

            <span className='text-center text-sm lg:order-2'>&copy; 2024 All rights reserved to <Link href="https://www.rayllstudios.com/" className='hover:text-button transition-all duration-300'>rayll studios</Link>.</span>
            <span className='text-center text-sm inline-flex gap-1 items-center justify-center lg:order-1 lg:justify-start'>Developed by <Link href="https://fazildev.online/" className='hover:text-button transition-all duration-300'>Fazil Dev</Link></span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer