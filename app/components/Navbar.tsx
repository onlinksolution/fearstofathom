'use client'

import { RiCloseLine, RiMenuFill } from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constant'
import { useState } from 'react'

const Navbar = () => {

  const [navBa, setNavBar] = useState(false);

  const toggleMenuShow = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("max-md:right-full");
    menu?.classList.add("max-md:right-0");
  }

  const toggleMenuHide = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("max-md:right-0");
    menu?.classList.add("max-md:right-full");
  }

  return (
    <header className='w-full bg-nav fixed py-2 z-50 top-0 left-0'>
      <nav className='main_container h-[4rem] flex justify-between items-center'>
        <Link href="/">
          <Image src="/f2f-logo.png" width={60} height={60} alt='logo' />
        </Link>

        <div className='max-md:top-0 max-md:right-full max-md:fixed max-md:w-full max-md:h-full max-md:bg-black max-md:flex max-md:justify-center max-md:items-center transition-all duration-300 fill' id='menu-bar'>
          <ul className='flex gap-10 flex-col max-md:text-center md:flex-row lg:gap-16'>
            {NAV_LINKS.map((link, i) => (
              <li key={i}><Link href={link.link} className='text-white text-2xl md:text-lg link'>{link.label}</Link></li>
            ))}
            <li><Link href='/contact-us' className='text-black text-2xl bg-white py-2 px-5 rounded-full md:text-lg hover:bg-button hover:text-white transition-all duration-500'>Contact Us</Link></li>
          </ul>

          <div>
            <RiCloseLine className='text-white absolute top-10 right-10 md:hidden cursor-pointer' onClick={toggleMenuHide} size={30} />
          </div>
        </div>

        <div className='md:hidden cursor-pointer'>
          <RiMenuFill className='text-white' onClick={toggleMenuShow} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar