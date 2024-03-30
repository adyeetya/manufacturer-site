'use client'
import React, { useState, useEffect } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'

import CallIcon from '@mui/icons-material/Call'
const Assistance = () => {
  const [isShowing, setIsShowing] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isRotated, setIsRotated] = useState(false)
  useEffect(() => {
    const hideTextTimeout = setTimeout(() => {
      setIsShowing(false)
    }, 5000)

    const showTextTimeout = setTimeout(() => {
      setIsShowing(true)
    }, 10000)

    // Clean up timeouts to avoid memory leaks
    return () => {
      clearTimeout(hideTextTimeout)
      clearTimeout(showTextTimeout)
    }
  }, [isShowing])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
    setIsRotated(!isRotated)
  }
  return (
    <div
      className="fixed bottom-0 right-4 flex flex-col items-center mb-4"
      style={{ zIndex: '800' }}
    >
      <div className="flex flex-row justify-center items-start">
        <div>
          {isShowing && ( // Render text only if isVisible is true
            <h1 className="text-center bg-white px-4 py-2 rounded-full">
              Get interior Assistance?
            </h1>
          )}
        </div>
        <div
          onClick={toggleVisibility}
          className={`relative border-2 bg-white cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center transform ${
            isRotated ? 'rotate-360' : ''
          }`}
        >
          {isVisible ? (
            <CloseRoundedIcon sx={{ fontSize: 40 }} />
          ) : (
            <ForumRoundedIcon sx={{ fontSize: 40 }} />
          )}

          {/* <FontAwesomeIcon
            icon={faComment}
            size="4x"
            className="text-white w-8 h-8"
            onClick={toggleVisibility}
          /> */}
        </div>
      </div>

      {isVisible && (
        <div className="absolute bottom-12 right-[-8px] rounded-lg p-2">
          {' '}
          {/* Adjusted positioning */}
          <div className="border-2 cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center">
            {/* <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="text-white w-8 h-8"
            /> */}

            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="border-2 cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center">
            {/* <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-white w-8 h-8"
            /> */}
            <InstagramIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="border-2 cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center">
            {/* <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              className="text-white w-8 h-8"
            /> */}
            <CallIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Assistance
