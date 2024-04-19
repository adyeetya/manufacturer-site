import React from 'react'
import { cn } from '../lib/utils'

const MaxWidthWrapper = ({ className, children }) => {
  // className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`} idk why we didnt use this but ill use cn function to merge
  // the classes
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-3xl px-2.5 xl:px-4',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
