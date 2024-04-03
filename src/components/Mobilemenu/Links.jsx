'use client'
import React from 'react'
import { motion } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import SwitchMobile from '../ColorSwitch/SwitchMobile'
const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: 'spring',
      stiffness: 50,
    },
  },
}
const itemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: 'spring',
      stiffness: 50,
    },
  },
}
const Links = () => {
  const items = ['Work', 'Get Quotes', 'Visit Us', 'Our Story', 'The Latest']
  const links = [
    {
      name: 'Modular Interiors',
      slug: '/modular-interiors',
      text: 'What we do.',
    },
    { name: 'Get Quotes', slug: '/get-quote', text: 'Get free estimates.' },
    { name: 'Collaborate', slug: '/join-us', text: 'Join us.' },
    { name: 'Our Story', slug: '/about-us', text: 'Know the brand.' },
    { name: 'The Magazine', slug: '/magazine', text: 'The latest blogs.' },
  ]

  return (
    <motion.div
      className="w-[100vw] min-h-[100vh] z-50 flex flex-col bg-[var(--theme-color)] gap-8 px-4 pt-4"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {links.map((item) => (
        <>
          <motion.div
            key={item}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative py-2"
          >
            <div className=" flex ">
              <motion.a
                href={item.slug}
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl flex-1"
              >
                {item.name}
              </motion.a>
              <p className="flex justify-center items-end pb-1">{item.text}</p>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-lef"></span>
          </motion.div>
        </>
      ))}
      {/* for theme changer */}
      <motion.div className="flex" variants={itemVariants}>
        <div className="flex-1">
          {/* theme changer */}

          <SwitchMobile />
        </div>
        <p className="flex justify-center items-end pb-1">Change Theme</p>
      </motion.div>

      {/* get in touch */}
      <motion.div
        className="inline-block relative py-2"
        variants={itemVariants}
      >
        <div className="flex">
          <motion.a
            href="/contact-us"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl flex-1"
          >
            Get In Touch
          </motion.a>
          <div className="flex justify-center items-center px-4">
            <svg
              width="47"
              height="40"
              viewBox="0 0 75 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.4062 30.4242L31.982 0H41.1744L72.5505 31.3761L74.8486 33.6742L72.5505 35.9723L41.1729 67.3499H31.9805L62.4062 36.9242H0V30.4242H62.4062Z"
                fill="#F54E07"
              ></path>
            </svg>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-300 origin-lef"></span>
        </div>
      </motion.div>
      {/* social links */}
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className="flex justify-evenly items-center mb-16"
      >
        <a href="tel:+91 9899264978">
          <CallIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://wa.me/9899264978">
          <WhatsAppIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.instagram.com/designindiankitchen/">
          <InstagramIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="mailto:your-email-address">
          <MailOutlineIcon sx={{ fontSize: 40 }} />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Links
