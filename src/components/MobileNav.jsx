'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Mobilemenu/Links'
import Link from 'next/link'
import ToggleButton from './Mobilemenu/ToggleButton'
const variants = {
  animate: {
    // clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 1,
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
      className="sm:hidden flex flex-col items-center justify-center overflow-y-auto"
      animate={open ? 'open' : 'closed'}
    >
      <div className="flex justify-between w-full">
        <div className="w-1/3 h-14 flex justify-center items-center">
          <Link href="/">LOGO</Link>
        </div>
        <ToggleButton setOpen={setOpen} />
      </div>

      {open && (
        <motion.div
          className="mb-16"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Links />
        </motion.div>
      )}
    </motion.div>
  )
}

export default MobileNav
