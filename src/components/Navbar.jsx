'use client'
import React, { useEffect, useRef } from 'react'

import Link from 'next/link'
import Switch from './ColorSwitch/Switch'
import MobileNav from './MobileNav'
const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-[var(--theme-color)] transition-all">
      <div className="hidden sm:flex h-14 items-center justify-between border-b xl:px-20">
        {/* for left margin */}
        <div className="w-14 h-14"></div>

        <div className="w-1/3 h-14 items-center flex justify-between space-x-6">
          <Link
            href="/modular-interiors"
            className="font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Work
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>

          <Link
            href="/get-quote"
            className="font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Get Quotes
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/book-visit"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Visit Us
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="w-1/3 h-14 flex justify-center items-center">
          <Link href="/">LOGO</Link>
        </div>
        <div className=" w-1/3 h-14 items-center flex justify-between space-x-6">
          <Link
            href="/about-us"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Our Story
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/magazine"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            The Latest
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-900 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/contact-us"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base bg-[var(--contact-bg-color)] rounded px-2 py-1 text-gray-50 hover:bg-orange-500 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>

        {/* for theme changer */}
        <div className="w-14 h-14 flex justify-center items-center ">
          <Switch />
        </div>
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar
