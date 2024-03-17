'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Slider from '../Slider'
import Tabs from '../Tabs'

import Image from 'next/image'

const Page = ({}) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )
  useEffect(() => {
    const categoryIds = [111] // Add the category IDs you want to fetch
    const fetchImages = async () => {
      try {
        const timestamp = Date.now()
        const response = await fetch(
          `https://api.designindianwardrobe.com/api/images/${categoryIds}?timestamp=${timestamp}`
        )
        if (response.ok) {
          const data = await response.json()
          setImages(data)
        } else {
          console.error('Error fetching images:', response.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchImages()
  }, [])
  const handleImageClick = (index: number) => {
    setPhotoIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }

  return (
    <>
      <div className=" mb-16 mx-auto sm:mx-16 p-4">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/modular-interiors">Modular Interiors</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Foyer Cabinets</span>
        </div>

        {/* tabs */}
        <Tabs id={5} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                width={1000}
                height={1000}
                src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                alt={image.filename}
                style={{
                  width: '450px',
                  height: '250px',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <Slider
        showSlider={showSlider}
        setShowSlider={setShowSlider}
        images={images}
        initialSlide={photoIndex}
        onNextSlide={() =>
          setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        onPrevSlide={() =>
          setPhotoIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      />
    </>
  )
}

export default Page
