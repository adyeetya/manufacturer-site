'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('#f8ece4') // Initial theme color

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', theme)

    // Set text color based on theme
    const textColor = theme === '#151617' ? '#f54e07' : '#000'
    document.documentElement.style.setProperty('--text-color', textColor)

    const contactBg = theme === '#151617' ? '#f54e07' : '#000'
    document.documentElement.style.setProperty('--contact-bg-color', contactBg)
    const buttonBg = theme === '#f54e07' ? '#fff' : '#f54e07'
    document.documentElement.style.setProperty('--button-bg-color', buttonBg)
    const buttonText = theme === '#151617' ? '#fff' : '#151617'
    document.documentElement.style.setProperty('--button-text-color', buttonText)

  }, [theme])
 

  const toggleTheme = ({ color }) => {
    setTheme(color)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
