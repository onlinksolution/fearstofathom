import Image from 'next/image'
import React from 'react'
import { EPISODES } from '../constant'
import Link from 'next/link'

const episodes = () => {
  return (
    <section className='bg-epi'>
      <div className='main_container py-24'>
        <h2 className='text-white text-center text-4xl lg:text-4xl xl:text-5xl'>Latest Episodes</h2>

        <div className='mt-10 xl:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {EPISODES.map((link, i) => (
            <Link href={link.link} key={i}>
              <article className='bg-art pb-8 rounded-3xl'>
                <div className='overflow-hidden rounded-t-3xl'>
                  <Image src={link.img} width={0} height={0} sizes='100vw' className='w-full h-auto rounded-t-3xl hover:scale-105 transition-all duration-300' alt='episodes' />
                </div>
                <div className='mt-5 px-5'>
                  <h3 className='text-white text-xl'>{link.label}</h3>
                </div>
              </article>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}

export default episodes