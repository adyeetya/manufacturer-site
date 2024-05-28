'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const ScrollProgressCircle = () => {
  const scrollY = useMotionValue(0)
  const pathLength = useTransform(scrollY, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const totalScrollHeight = document.body.scrollHeight - window.innerHeight
      const scrollProgress =
        totalScrollHeight > 0 ? currentScrollY / totalScrollHeight : 0
      scrollY.set(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-20 sm:bottom-5 left-4 w-14 h-14 z-10">
      <motion.svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="stroke-gray-200 fill-none stroke-[2.8]"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="stroke-blue-500 fill-none stroke-[2.8] stroke-linecap-round origin-center -rotate-90"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          style={{ pathLength }}
        />
      </motion.svg>
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={scrollToTop}
      >
        <svg
          className="w-8 h-8 text-[#f54e07]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19V6m-7 7l7-7 7 7"
          />
        </svg>
      </div>
    </div>
  )
}

export default ScrollProgressCircle
