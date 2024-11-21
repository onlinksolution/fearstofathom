'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const Preloader = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <>
      {loading ? <div className="w-full h-screen fixed z-[100] bg-nav flex flex-col gap-5 justify-center items-center transition-all duration-300">
        <Image src="/f2f-logo.png" width={150} height={100} alt="logo" className="animate-pulse" />
        <span className="font-load text-xl animate-pulse text-white">LOADING...</span>
      </div> : ''}


    </>
  )
}

export default Preloader