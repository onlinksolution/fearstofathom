'use client'

import { RiLinksLine, RiMailLine, RiMapPinLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactUsHero = () => {

  const notify = () => toast("Yay! Your message has been sent", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const error = () => toast.error('Oops! Message not sent.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0ff18fd9-3ea4-4663-979c-bc2f992f378c",
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      e.target.reset();
      notify()
    } else {
      error()
    }
  }

  return (
    <section>
      <div className='contact_hero'>
        <div className='main_container pt-40 pb-20'>
          <h2 className='text-white text-center text-4xl lg:text-5xl'>Contact Us</h2>

          <div className='mt-5 md:grid md:grid-cols-2 md:mt-16 '>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-5 items-center'>
                <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                  <RiMailLine className='text-black' size={30} />
                </div>
                <Link href="mailto:rayll@rayllstudios.com" className='text-white text-lg'>rayll@rayllstudios.com</Link>
              </div>
              <div className='flex gap-5 items-center'>
                <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                  <RiMapPinLine className='text-black' size={30} />
                </div>
                <Link href="https://maps.app.goo.gl/J3LjpM8biM3hfL3X7" className='text-white text-lg'>South Delhi, Delhi 110057, IN</Link>
              </div>
              <div className='flex gap-5 items-center'>
                <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                  <RiLinksLine className='text-black' size={30} />
                </div>
                <Link href="https://rayllstudios.com" className='text-white text-lg'>rayllstudios.com</Link>
              </div>
            </div>

            <div className='max-md:mt-10 bg-orange-950 p-4 rounded-3xl'>
              <h2 className='text-center text-white text-xl'>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className='mt-5 grid gap-4'>
                  <input type="text" name="name" required className='w-full h-14 px-5 outline-none border-none rounded-full' placeholder='Your full name' />
                  <input type="email" name="email" required className='w-full h-14 px-5 outline-none border-none rounded-full' placeholder='Your email' />
                  <input type="text" name="subject" required className='w-full h-14 px-5 outline-none border-none rounded-full' placeholder='Your subject' />
                  <textarea rows={5} name="message" required className='py-4 px-5 outline-none border-none rounded-2xl' placeholder='Your message' />
                </div>

                <div className='flex justify-center mt-5'>
                  <button type='submit' className='bg-button py-3 px-5 rounded-full text-white hover:bg-white hover:text-button transition-all duration-300'>Send</button>
                  <ToastContainer />
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUsHero