import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Company = () => {
  return (
    <section className='bg-com'>
      <div className='main_container py-24 flex justify-center items-center flex-col gap-5'>
        <Link href="https://www.rayllstudios.com/">
          <Image src="/rayll-studio-logo.png" width={0} height={0} sizes='100vw' className='w-[20rem] h-auto md:w-[26rem] lg:w-[32rem] animate-pulse' alt='company-logo' />
        </Link>

        <h1 className='text-white text-xl text-center md:text-3xl'>CREATORS OF <span className='text-button'>FEARS TO FATHOM</span>.</h1>
      </div>
    </section>
  )
}

export default Company