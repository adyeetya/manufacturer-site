'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Mobilemenu/Links'
import Link from 'next/link'
import Image from 'next/image'
import ToggleButton from './Mobilemenu/ToggleButton'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const variants = {
  animate: {
    // clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 0.1,
      staggerChildren: 0.1,
    },

    y: 0,
  },
  initial: {
    y: -500,
  },
}
const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="sm:hidden flex flex-col items-center justify-center"
      animate={open ? 'open' : 'closed'}
    >
      <div className="flex justify-between w-full">
        <div className=" h-14 flex justify-start p-4 items-center">
          <Link href="/">
            {/* <video
              src="/videos/logo-manufacturing.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-14"
            /> */}
            <div className="flex flex-row h-14 justify-center items-center">
              {/* <h1
                className={`${lora.className} tracking-tighter font-extrabold text-xl italic`}
              >
                <span className="italic">Modular Manufacturing</span>
              </h1> */}
              <Image
                src="/images/dik-logo.png"
                alt=""
                width={1000}
                height={1000}
                className="w-14 h-14"
              />
            </div>
          </Link>
        </div>
        <div className="m-2 border-2 border-gray-800 rounded-[10px] flex justify-center items-center">
          <ToggleButton setOpen={setOpen} />
        </div>
      </div>

      {open && (
        <div className="h-[calc(100vh-3rem)] overflow-y-auto scroll-smooth">
          <Links />
        </div>
      )}
    </motion.div>
  )
}

export default MobileNav
{
  /* <motion.div
          className="h-[calc(100vh-3rem)] overflow-y-auto scroll-smooth"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Links />
        </motion.div> */
}
