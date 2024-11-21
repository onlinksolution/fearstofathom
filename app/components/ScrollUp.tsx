'use client'

import { RiArrowUpLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ScrollUp = () => {

  const [backTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrol = document.getElementById('scroll')
      if (window.scrollY > 200) {
        setBackTopButton(true);
        scrol?.classList.add("bottom-8");
        scrol?.classList.remove("-bottom-20");
      } else {
        scrol?.classList.remove("bottom-8");
        scrol?.classList.add("-bottom-20");
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {backTopButton && (
        <Link href="/" className='fixed -bottom-20 right-5 lg:right-10 shadow-sm shadow-slate-500 bg-white p-2 rounded-full hover:bg-button hover:text-white transition-all duration-300' id='scroll' onScroll={scrollUp}><RiArrowUpLine /></Link>
      )}
    </div>
  )
}

export default ScrollUp