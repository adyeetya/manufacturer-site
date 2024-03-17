'use client'
import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when user scrolls down 200px
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the initial visibility
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="sm:fixed sm:bottom-8 sm:left-8 sm:bg-black sm:text-white sm:px-4 py-2 rounded sm:shadow-md flex justify-center items-center font-bold"
        >
          Back To Top
          <ArrowUp className="ml-4" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
