'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'

import Link from 'next/link'

// import Card from './Card'

import Image from 'next/image'
const Page = ({}) => {
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    106: 'mandir',
    107: 'chest-of-drawers',
    108: 'bar-units',
    109: 'side-tables',
    110: 'foldable-beds',
    111: 'foyer-cabinets',
    112: 'bathroom-vanities',
    69: 'crockery-units',
    70: 'glass-partiton',
    67: 'dressers',
    65: 'wardrobe',
    68: 'tv-unit-designs',
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [
          106, 107, 108, 109, 110, 111, 112, 69, 70, 67, 65, 68,
        ] // Add the category IDs you want to fetch

        // Fetch category data
        const categoryPromises = categoryIds.map(async (categoryId) => {
          const response = await fetch(
            `https://api.designindianwardrobe.com/api/categories/${categoryId}?timestamp=${timestamp}`
          )
          if (response.ok) {
            const data = await response.json()
            return data
          } else {
            console.error(
              `Error fetching data for category ${categoryId}:`,
              response.statusText
            )
            return {}
          }
        })

        const categoryDataArray = await Promise.all(categoryPromises)

        // Fetch image data for each category
        const imageDataPromises = categoryDataArray.map(
          async (categoryData) => {
            const imageResponse = await fetch(
              `https://api.designindianwardrobe.com/api/images/${categoryData.id}?timestamp=${timestamp}`
            )
            if (imageResponse.ok) {
              const imageData = await imageResponse.json()
              // Assuming you want only one image per category
              const selectedImage = imageData[0]
              return selectedImage
            } else {
              console.error(
                `Error fetching image for category ${categoryData.id}:`,
                imageResponse.statusText
              )
              return {}
            }
          }
        )

        const imageDataArray = await Promise.all(imageDataPromises)

        // Combine category data with corresponding image data
        const mergedDataArray = categoryDataArray.map(
          (categoryData, index) => ({
            ...categoryData,
            image: imageDataArray[index],
          })
        )

        setCategoryDataArray(mergedDataArray)
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchCategoryData()
  }, [])

  return (
    <>
      <div className="mb-16 mx-auto sm:mx-16 p-4">
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Modular Interiors</span>
        </div>

        <div className="flex items-center p-4">
          <div
            aria-hidden="true"
            className=" h-8 rounded bg-green-500 mr-2"
            style={{ width: '4px' }}
          ></div>
          <h1 className="text-3xl font-bold">Modular Interiors</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We make your Modular Interiors look good, just as you dress up to look
          up, we are your modular interiors Makeover Specialist. All Our Modular
          Interiors are very affordable and we have more than 1000+ wardrobe
          designs to showcase, book a site visit with us and see the design
          magic, and we assure you 100% guaranteed quotes across Delhi NCR, we
          stake claim since past 9 years, that you bring us any Quote and we
          offer you Flat 7% off. Check out our designs for best Wardrobe Ideas
          and Inspirations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <Link
              key={categoryData.id}
              href={`/modular-interiors/${
                categoryFolderMapping[categoryData.id]
              }`}
            >
              <div className="bg-white rounded shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out hover:scale-105">
                <div className="relative overflow-hidden rounded h-64 w-full ">
                  {categoryData.image ? (
                    <Image
                      fill
                      src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                      alt={categoryData.image.filename}
                      className="rounded"
                    />
                  ) : (
                    <div className="bg-gray-200 h-full flex items-center justify-center rounded">
                      <span className="text-gray-400 text-lg">No Image</span>
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-semibold mt-4">
                  {categoryData.name}
                </h2>
                <p className="text-gray-600 mt-2">{categoryData.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Page
