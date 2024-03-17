'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from '../../app/themeContext'

const Switch = () => {
  const { theme, toggleTheme } = useTheme()
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedColor, setSelectedColor] = useState(theme)



  const openDropdown = () => {
    setShowDropdown(true)
  }
  const closeDropdown = () => {
    setShowDropdown(false)
  }

  const handleColorSelect = (color) => {
    toggleTheme({ color })
    setSelectedColor(color)
    setShowDropdown(false)
  }

  return (
    <div
      className="flex flex-row gap-2 relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <div className="w-8 h-8 rounded-full border-[1px] border-black flex justify-center items-center bg-white">
        <button
          className="w-4 h-4 border-[1px] border-black rounded-full"
          style={{ backgroundColor: selectedColor }}
        ></button>
      </div>
      {showDropdown && (
        <div className="absolute z-50 flex flex-col gap-1 top-0 left-0 justify-center items-center bg-white border-[1px] border-black p-2 rounded-full">
          <button
            className={`w-4 h-4 border-[1px] border-black rounded-full ${
              selectedColor === '#f8ece4' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#f8ece4' }}
            onClick={() => handleColorSelect('#f8ece4')}
          ></button>
          <button
            className={`w-4 h-4 border-[1px] border-black rounded-full  ${
              selectedColor === '#ffe855' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#ffe855' }}
            onClick={() => handleColorSelect('#ffe855')}
          ></button>
          <button
            className={`w-4 h-4 border-[1px] border-black rounded-full  ${
              selectedColor === '#f54e07' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#f54e07' }}
            onClick={() => handleColorSelect('#f54e07')}
          ></button>
          <button
            className={`w-4 h-4 border-[1px] border-black rounded-full ${
              selectedColor === '#151617' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#151617' }}
            onClick={() => handleColorSelect('#151617')}
          ></button>
        </div>
      )}
    </div>
  )
}

export default Switch
