'use client'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { Lora } from 'next/font/google'
import {
  Stars,
  Arrow,
  Star,
  Globe,
  Web,
  Design,
} from '../components/icons/Icons'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import EmblaCarousel from '../components/Carousel/EmblaCarousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../components/ui/carousel'

import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
  BrandsCarouselPrevious,
  BrandsCarouselNext,
} from '../components/ui/brandsCarousel'
import Image from 'next/image'
import axios from 'axios'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const SectionWithVideos = () => {
  return (
    <section className="bg-gray-900 my-12 w-full rounded-xl">
      <div className="mx-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Image column 1 */}
          <div className="relative group rounded-xl overflow-hidden aspect-square">
            <img
              className="w-full h-full object-cover object-center"
              src="/images/img-1.jpg"
              alt="Modular Interiors"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                className="w-[90%] object-cover object-center rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/vid3.mp4"
              ></video>
            </div>
            <div
              className={`absolute bottom-4 left-4 text-amber-50 text-xl sm:text-3xl ${lora.className}`}
            >
              Modular Interiors
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                href="/modular-interiors"
                className="text-amber-50 border border-amber-50 py-1 px-2 rounded text-md flex items-center group-hover:bg-amber-50 group-hover:text-gray-900"
              >
                View all work
                <span className="ml-2">
                  <Arrow />
                </span>{' '}
              </Link>
            </div>
          </div>
          {/* Image column 2 */}
          <div className="relative group rounded-xl overflow-hidden aspect-square">
            <img
              className="w-full h-full object-cover object-center"
              src="/images/img-2.jpg"
              alt="Modular Kitchen"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                className="w-[90%] object-cover object-center rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/vid2.mp4"
              ></video>
            </div>
            <div
              className={`absolute bottom-4 left-4 text-amber-50 text-xl sm:text-3xl ${lora.className}`}
            >
              Modular Kitchens
            </div>
            <div className="absolute bottom-4 right-4">
              <Link
                href="/modular-interiors"
                className="text-amber-50 border border-amber-50 py-1 px-2 rounded text-md flex items-center group-hover:bg-amber-50 group-hover:text-gray-900"
              >
                View all work
                <span className="ml-2">
                  <Arrow />
                </span>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionForComponent = () => {
  const variants = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="relative flex my-6 flex-col items-center justify-center w-full"
    >
      <motion.p
        variants={variants}
        className="text-sm my-12 font-semibold flex justify-center items-center"
      >
        <span className="mx-2">
          <Star />
        </span>
        Our bread & butter{' '}
        <span className="mx-2">
          <Star />
        </span>
      </motion.p>
      <div className="text-center flex justify-center flex-col items-center">
        <h1 className={`text-7xl tracking-tighter font-bold ${lora.className}`}>
          {' '}
          <span className="italic">Some </span> <br />
          Exquisite Work
        </h1>
        <div className="group -my-3 w-48 h-16 border border-black rounded-full flex items-center justify-center z-10 bg-[#f8ece4] hover:bg-black hover:text-white cursor-pointer">
          <span className="group-hover:hidden">FOR</span>
          <span className="hidden group-hover:block">
            <Link href="/modular-interiors">VIEW OUR WORKS</Link>
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="sm:absolute sm:top-48 sm:right-4 flex justify-between ">
            <img
              src="/images/a3.jpg"
              alt="Image 1"
              className="w-64 h-full object-cover rounded"
            />
          </div>
          <div className="sm:absolute sm:top-48 sm:left-4 flex justify-between ">
            <img
              src="/images/a4.jpg"
              alt="Image 1"
              className="w-64 h-full object-cover rounded"
            />
          </div>
        </div>
        <h1 className={`text-7xl font-bold tracking-tighter ${lora.className}`}>
          <span className="italic">Some </span> <br />
          Exquisite People
        </h1>
      </div>
      <motion.p
        variants={variants}
        className="text-sm mt-8 sm:my-16 flex justify-center items-center w-full sm:max-w-96"
      >
        With over 950+ architects, interior designers collaborating with us and
        serving their clients, why don’t you come direct and save more than 30%
        of the middleman cost. Think About you, perhaps 🤔the saving could be an
        Abroad Trip’s Worth 😉.
      </motion.p>
    </motion.div>
  )
}

const TiltedCards = () => {
  return (
    <div className="flex my-6 flex-col justify-center items-center w-full">
      <p className="text-sm my-12 font-semibold flex justify-center items-center">
        <span className="mx-2">
          <Star />
        </span>
        Stand Out{' '}
        <span className="mx-2">
          <Star />
        </span>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 items-center justify-center  w-full">
        <div className="relative w-full sm:w-64 h-64 sm:h-80 border sm:-rotate-12 sm:hover:-rotate-6 sm:hover:shadow-lg transition-transform duration-1000 ease-in-out border-black overflow-hidden rounded">
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8">
                <Web />
                <h2 className={`text-2xl font-extrabold ${lora.className}`}>
                  Top Class <br className="hidden sm:block" /> Machinery
                </h2>
              </div>
              <p className="text-xs">
                All Are Modular Furniture Machines are German Made to give you
                the top class precision and Premium Finishes of shutters and
                cabinets.
              </p>
              <div className="w-full h-[2px] bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="relative w-full sm:w-64 h-64 sm:h-80 border border-black overflow-hidden rounded sm:mb-16 sm:hover:h-[19rem] hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8">
                <Design />
                <h2 className={`text-2xl font-extrabold ${lora.className}`}>
                  Best in <br className="hidden sm:block" /> Quality
                </h2>
              </div>
              <p className="text-xs">
                Our Brand Uses some of the finest materials available in the
                Indian Markets, all our products are custom made as per design &
                carry limited 8 warranty as per the components selected.
              </p>
              <div className="w-full h-[2px] bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="relative w-full sm:w-64 h-64 sm:h-80 border sm:rotate-12 sm:hover:rotate-6 sm:hover:shadow-lg transition-transform duration-1000 ease-in-out border-black overflow-hidden rounded">
          {' '}
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8">
                <Globe />
                <h2 className={`text-2xl font-extrabold ${lora.className}`}>
                  Always on Time <br className="hidden sm:block" /> Delivery
                </h2>
              </div>
              <p className="text-xs">
                We ensure commitments are met, whether we work day in or day
                out. We have multiple facilities & make sure that your
                deliveries are always on time.
              </p>
              <div className="w-full h-[2px] bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-12">
        <Link
          href="#"
          className={`whitespace-nowrap text-lg sm:text-3xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
        >
          Our Capabilities
        </Link>
      </div>
    </div>
  )
}

const CardCarousel = () => {
  const [categoryDataArray, setCategoryDataArray] = useState([])
  const categoryFolderMapping = {
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

  // const cardData = [
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://assets-global.website-files.com/6511c52c9873b5ce4d47a9c9/652ef5753c6165256c8f0c0b_egglife-thumb-p-1080.webp',
  //     heading: 'Card 1 Heading',
  //     content: 'Content for card 1',
  //   },
  //   {
  //     id: 2,
  //     imageUrl:
  //       'https://assets-global.website-files.com/6511c52c9873b5ce4d47a9c9/652ef5753c6165256c8f0c0b_egglife-thumb-p-1080.webp',
  //     heading: 'Card 2 Heading',
  //     content: 'Content for card 2',
  //   },
  //   {
  //     id: 3,
  //     imageUrl:
  //       'https://assets-global.website-files.com/6511c52c9873b5ce4d47a9c9/652ef5753c6165256c8f0c0b_egglife-thumb-p-1080.webp',
  //     heading: 'Card 3 Heading',
  //     content: 'Content for card 3',
  //   },
  //   {
  //     id: 4,
  //     imageUrl:
  //       'https://assets-global.website-files.com/6511c52c9873b5ce4d47a9c9/652ef5753c6165256c8f0c0b_egglife-thumb-p-1080.webp',
  //     heading: 'Card 4 Heading',
  //     content: 'Content for card 4',
  //   },
  //   {
  //     id: 5,
  //     imageUrl:
  //       'https://assets-global.website-files.com/6511c52c9873b5ce4d47a9c9/652ef5753c6165256c8f0c0b_egglife-thumb-p-1080.webp',
  //     heading: 'Card 5 Heading',
  //     content: 'Content for card 5',
  //   },
  //   // Add more card data as needed
  // ]
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="w-full my-24 sm:px-8 px-4">
      <h1
        className={`text-left text-4xl sm:text-5xl sm:ml-20 mb-4 font-bold ${lora.className}`}
      >
        <span className="italic">Our Complete Collection</span>
      </h1>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="">
          {categoryDataArray.map((categoryData) => (
            <CarouselItem
              key={categoryData.id}
              className="md:basis-1/2 lg:basis-1/3 "
            >
              <Link
                key={categoryData.id}
                href={`/modular-interiors/${
                  categoryFolderMapping[categoryData.id]
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="relative overflow-hidden rounded w-80 h-72 ">
                    {categoryData.image ? (
                      <Image
                        fill
                        src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                        alt={categoryData.image.filename}
                        className="rounded-2xl"
                      />
                    ) : (
                      <Image
                        fill
                        src="/images/error.jpg"
                        alt="No image found"
                        className="rounded-2xl"
                      />
                    )}
                  </div>
                  <h3 className={`text-3xl mt-2 font-bold ${lora.className}`}>
                    {categoryData.name}
                  </h3>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex my-12 w-full justify-center items-center">
        <Link
          href="/modular-interiors"
          className={`whitespace-nowrap text-lg sm:text-3xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
        >
          Explore Our Works
        </Link>
      </div>
    </div>
  )
}

const BrandsSection = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: '/images/brands-nobg/b1.png',
    },
    {
      id: 2,
      imageUrl: '/images/brands-nobg/b4.png',
    },
    {
      id: 3,
      imageUrl: '/images/brands-nobg/b6.png',
    },

    {
      id: 5,
      imageUrl: '/images/brands-nobg/b8.png',
    },
    {
      id: 6,
      imageUrl: '/images/brands-nobg/b9.png',
    },
    {
      id: 7,
      imageUrl: '/images/brands-nobg/b10.png',
    },
    {
      id: 8,
      imageUrl: '/images/brands-nobg/c1.png',
    },
    {
      id: 9,
      imageUrl: '/images/brands-nobg/c2.png',
    },
    {
      id: 10,
      imageUrl: '/images/brands-nobg/c4.png',
    },
    {
      id: 11,
      imageUrl: '/images/brands-nobg/c5.png',
    },
    {
      id: 12,
      imageUrl: '/images/brands-nobg/c6.png',
    },
    {
      id: 13,
      imageUrl: '/images/brands-nobg/c8.png',
    },
    {
      id: 14,
      imageUrl: '/images/brands-nobg/c10.png',
    },

    // Add more card data as needed
  ]

  const variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    initialL: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="w-full bg-[var(--text-color)] text-[var(--theme-color)] py-24 rounded-xl">
      <div className="max-w-screen-2xl  mx-auto">
        <h1 className={`text-left text-6xl mb-8 font-bold ${lora.className} `}>
          Our Brands Collection
        </h1>
        <BrandsCarousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className=" bg-white  w-full overflow-hidden"
        >
          <BrandsCarouselContent>
            {cardData.map((card) => (
              <BrandsCarouselItem
                key={card.id}
                className="basis-1/2 lg:basis-1/5 "
              >
                <div className="flex flex-col justify-center items-start w-[200px] h-[100px] ">
                  <img
                    src={card.imageUrl}
                    alt={card.heading}
                    className="w-full h-auto rounded object-cover"
                  />
                </div>
              </BrandsCarouselItem>
            ))}
          </BrandsCarouselContent>
        </BrandsCarousel>
        <section className="flex flex-col sm:flex-row gap-4 mt-24 mb-8">
          <motion.div
            variants={variants}
            initial="initialL"
            whileInView="animate"
            className="flex flex-col items-center w-full sm:w-1/2 rounded"
          >
            <Image
              src="/images/temp.webp"
              alt="Your Image"
              className="max-w-full h-auto rounded"
              height={1000}
              width={1000}
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center items-center w-full sm:w-1/2 bg-[var(--theme-color)] p-4 rounded"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="mb-12">
                {' '}
                <Stars />
              </div>
              <h1
                className={`text-left text-6xl mb-8 font-bold text-[var(--text-color)] ${lora.className} `}
              >
                We do work worth doing.
              </h1>
            </div>
            <div className="flex-grow"></div>
            <div className="flex my-12 w-full justify-center items-center">
              <Link
                href="/modular-interiors"
                className={`whitespace-nowrap text-lg sm:text-xl px-2 py-1 rounded border-2 border-[var(--text-color)] text-[var(--text-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
              >
                Explore Our Works
              </Link>
            </div>
          </motion.div>
        </section>
        <div className="flex flex-col sm:flex-row px-8">
          <div className="w-full sm:w-1/2 text-center px-4 my-8 sm:my-0">
            <p className="text-lg sm:text-2xl">Value exists on a spectrum.</p>
          </div>
          <div className="w-full sm:w-1/2 px-4">
            <p className="text-lg sm:text-2xl text-left">
              {<Stars />}{' '}
              <span className="ml-8 sm:ml-16">
                Drive engagement (i.e. conversions) with branding, content, and
                websites that surpass loopy creativity to solve real problems
                and resonate with your people.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogsSection = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // Fetch all posts by default or posts by selected category
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed'
        )
        // Extract the first three posts
        const Posts = response.data.slice(4, 7)
        setPosts(Posts)
      } catch (error) {
        console.error('Error fetching WordPress posts:', error)
      }
    }

    fetchPosts()
  }, [])
  console.log(posts)
  return (
    <div className="w-full my-24 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className={`text-left text-6xl mb-8 font-bold ${lora.className} `}>
          The <span className="italic"> Latest</span>
        </h1>
        <p className="text-sm max-w-sm">
          {<Stars />}{' '}
          <span className="ml-8 sm:ml-16">
            Drive engagement (i.e. conversions) with branding, content, and
            websites that surpass loopy creativity to solve real problems and
            resonate with your people.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((card) => (
          <Link key={card.id} href={`/magazine/${card.slug}/${card.id}`}>
            <div className=" overflow-hidden">
              {card._embedded && card._embedded['wp:featuredmedia'] && (
                <Image
                  width={1000}
                  height={1000}
                  src={card._embedded['wp:featuredmedia'][0].source_url}
                  alt={card._embedded['wp:featuredmedia'][0].alt_text}
                  className="mb-2 w-full h-52 object-cover rounded-t"
                />
              )}
              <div className="my-4">
                <h1
                  className={`text-left text-3xl mb-8 font-bold ${lora.className} `}
                >
                  {card.title.rendered.split(' ').slice(0, 3).join(' ')}
                  {card.title.rendered.split(' ').length > 3 ? ' ...' : ''}
                </h1>
                <p className="text-gray-600 mb-4"> {card.title.rendered}</p>
                {/* <div className="flex items-center">
                <img
                  src={card.author.avatarUrl}
                  alt={card.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-700">{card.author.name}</span>
              </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex my-12 w-full justify-center items-center">
        <Link
          href="/magazine"
          className={`whitespace-nowrap text-lg sm:text-3xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
        >
          The Latest Blogs
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scaleD = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scaleM = useTransform(scrollYProgress, [0, 1], [1, 0])

  const variants = {
    initial: {
      x: 10,
      opacity: 0,
    },
    initialL: {
      x: -10,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <div ref={ref}>
        {/* /for larger */}
        <motion.div
          style={{ scale: scaleD }}
          className="mx-auto pt-8 hidden sm:flex  items-center justify-center "
        >
          <h1
            className={`sm:text-[7vw] tracking-tighter font-bold ${lora.className}`}
          >
            <span className="">Modular Interior</span>{' '}
            <span className="italic"> Manufacturers</span>
          </h1>
        </motion.div>
        {/* for mobile */}
        <motion.div
          style={{ scale: scaleM }}
          className="mx-2 py-4 pt-8 flex sm:hidden flex-col justify-center "
        >
          <h1
            className={` inline text-5xl font-bold text-left ${lora.className}`}
          >
            <span className="italic">Modular Interior</span>
          </h1>
          <h1
            className={` inline text-5xl font-bold text-left ${lora.className}`}
          >
            <span className="italic">Manufacturers</span>
          </h1>
        </motion.div>
      </div>

      <MaxWidthWrapper className="mb-12 mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-20 lg:gap-48">
          <motion.div
            variants={variants}
            initial="initialL"
            whileInView="animate"
            className="flex flex-wrap content-center"
          >
            <p className="text-lg sm:text-xl text-left">
              {<Stars />}{' '}
              <span className="ml-8 sm:ml-16">
                Design Indian Kitchen is the Largest Modular Kitchens -
                Wardrobes - Interiors manufacturing Brand, we are manufacturing
                extensive range of modular interior projects & serving to our
                direct customers, architects, interior designers, builders &
                project developers across New Delhi - Gurgaon - Noida - NCR.
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="flex w-full justify-end"
          >
            <Link
              href="/contact-us"
              className={`whitespace-nowrap text-lg sm:text-3xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        {/* --------------------------- */}
        <SectionWithVideos />
        {/* --------------------------- */}
        <SectionForComponent />
        {/* --------------------------- */}
        <TiltedCards />
        {/* --------------------------- */}
      </MaxWidthWrapper>
      <div className="">
        <CardCarousel />
      </div>
      {/* --------------------------- */}
      <BrandsSection />
      {/* --------------------------- */}
      <MaxWidthWrapper>
        <BlogsSection />
        {/* --------------------------- */}
      </MaxWidthWrapper>

      {/* --------------------------- */}
    </>
  )
}
