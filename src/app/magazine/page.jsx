'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

import Link from 'next/link'
import Image from 'next/image'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1
          className={`sm:text-[90px] drop-shadow-xl text-4xl font-[900] ${lora.className}`}
        >
          MAGAZINE
        </h1>
        {/* You can add more content or customize styling here */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/about-us.jpg")',
          backgroundPosition: 'center center', // Center the background image
          filter: 'brightness(70%)', // Reduce brightness of the background image
          opacity: '0.8', // Set opacity of the background image
        }}
      ></div>
    </section>
  )
}

const WordPressPosts = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://homes.devotionalindia.com/wp-json/wp/v2/categories'
        )
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching WordPress categories:', error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    // Fetch all posts by default or posts by selected category
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          selectedCategory
            ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed`
            : 'https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed'
        )
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching WordPress posts:', error)
      }
    }

    fetchPosts()
  }, [selectedCategory])

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  return (
    <>
      <div className="mx-auto w-full mb-16">
        <FullWidthSection />
        <div className="flex items-center mt-16 w-full overflow-x-auto px-4 ">
          <div className="flex items-center mx-auto gap-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-gray-200 shadow-sm'
                }  rounded transition-transform transform hover:scale-105 my-auto mt-4 whitespace-nowrap md:mr-0 px-4 py-2 text-sm`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8 my-4 max-w-[1366px] mx-auto">
          {posts.map((post) => (
            <Link key={post.id} href={`/magazine/${post.slug}/${post.id}`}>
              <div
                key={post.id}
                className="bg-white h-96 p-4 mx-4 border rounded cursor-pointer shadow-md transition-transform transform hover:scale-105"
              >
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <Image
                    width={1000}
                    height={1000}
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                    className="mb-2 w-full h-52 object-cover rounded-t"
                  />
                )}
                <div className="flex flex-col justify-between h-[40%]">
                  <h2 className="text-lg font-bold mb-2">
                    {post.title.rendered}
                  </h2>
                  <p className="text-gray-500 text-sm mb-0">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default WordPressPosts
