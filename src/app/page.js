'use client'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import {
  Stars,
  Arrow,
  Star,
  Globe,
  Web,
  Design,
  AwardLeft,
  AwardRight,
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
import Head from 'next/head'
import axios from 'axios'
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded'

import Steps from '../components/Steps/page'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const SectionWithVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, [])
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
                loop
                autoPlay
                playsInline
                muted
                controls={isPlaying}
                preload="metadata"
                src="/videos/vid3.mp4"
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
                loop
                autoPlay
                playsInline
                muted
                controls={isPlaying}
                preload="metadata"
                src="/videos/vid2.mp4"
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
  const [isHovered, setIsHovered] = useState(false)
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
        <h1
          className={`sm:text-[7vw] text-4xl sm:leading-[5rem] tracking-tighter font-bold ${lora.className}`}
        >
          {' '}
          <span className="italic">Some </span> <br />
          Exquisite Work
        </h1>
        {/* <div className="group -my-3 w-48 h-16 border border-black rounded-full flex items-center justify-center z-10 bg-[#f8ece4] hover:bg-[#f54e07] hover:text-white cursor-pointer"> */}
        {/* <span className="group-hover:hidden transition-all duration-500 ease-in-out">
            FOR
          </span>
          <span className="hidden group-hover:block transition-all duration-500 ease-in-out">
            <Link href="/modular-interiors">VIEW OUR WORKS</Link>
          </span> */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="custom-oval relative group -my-16 sm:-my-28  sm:border-2 border-black hover:border-[#f54e07] py-36 flex items-center justify-center z-10 sm:bg-white sm:hover:bg-[#f54e07] hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
        >
          <h1
            className={`text-2xl whitespace-nowrap ${
              isHovered ? 'sm:text-white' : 'sm:text-black'
            }   cursor-pointer transition-all duration-300 ease-in-out -rotate-90`}
          >
            {isHovered ? (
              <span className="">
                <Link href="/modular-interiors">VIEW OUR WORKS</Link>
              </span>
            ) : (
              <span className="">FOR</span>
            )}
          </h1>
        </div>

        {/* </div> */}
        <div className="flex flex-row gap-2">
          <div className="sm:absolute sm:top-64 sm:right-4 flex justify-between ">
            <img
              src="/images/a3.jpg"
              alt="Image 1"
              className="w-52 h-full object-cover rounded"
            />
          </div>
          <div className="sm:absolute sm:top-36 sm:left-4 flex justify-between ">
            <img
              src="/images/a4.jpg"
              alt="Image 1"
              className="w-52 h-full object-cover rounded"
            />
          </div>
        </div>
        <h1
          className={`sm:text-[7vw] mt-4 sm:mt-0 text-4xl sm:leading-[5rem] font-bold tracking-tighter ${lora.className}`}
        >
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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 items-center justify-center w-full">
        <div className="p-32 relative w-full sm:w-[250px] h-64 sm:h-[430px] border sm:-rotate-12 sm:hover:-rotate-6 sm:hover:shadow-lg transition-transform duration-1000 ease-in-out border-black overflow-hidden rounded-xl">
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8 sm:mt-8">
                <PrecisionManufacturingOutlinedIcon className="h-16 w-16" />
                <h2
                  className={`text-2xl sm:text-4xl font-extrabold ${lora.className}`}
                >
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
        <div className="p-32 relative w-full sm:w-[250px] h-64 sm:h-[430px] border border-black overflow-hidden rounded-xl sm:mb-16 sm:hover:h-[410px] hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8 sm:mt-8">
                <AddTaskRoundedIcon className="h-16 w-16" />
                <h2
                  className={`text-2xl sm:text-4xl font-extrabold ${lora.className}`}
                >
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
        <div className="p-32 relative w-full sm:w-[250px] h-64 sm:h-[430px] border sm:rotate-12 sm:hover:rotate-6 sm:hover:shadow-lg transition-transform duration-1000 ease-in-out border-black overflow-hidden rounded-xl">
          {' '}
          <div className="absolute inset-0 transform">
            <div className="p-4 flex flex-col justify-between items-center h-full">
              <div className="flex flex-col justify-center items-center gap-8 sm:mt-8">
                <LocalShippingOutlinedIcon className="h-16 w-16" />
                <h2
                  className={`text-2xl sm:text-4xl font-extrabold ${lora.className}`}
                >
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
        className={`text-left tracking-tighter text-4xl sm:text-6xl sm:ml-20 mb-4 font-bold ${lora.className}`}
      >
        Our
        <span className="italic">
          {' '}
          Complete <br className="sm:hidden" />
          Collection
        </span>
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
                  <div>
                    <div className="relative overflow-hidden rounded w-80 sm:w-[380px] h-72">
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
                    <h3
                      className={`text-3xl text-left tracking-tighter mt-2 font-bold ${lora.className}`}
                    >
                      {categoryData.name}
                    </h3>
                  </div>
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

const Awards = () => {
  const data = [
    {
      name: 'Best Interior Brand in Delhi - NCR',
      brand: 'Architects Association India',
    },
    { name: 'Award for Best Home Design', brand: 'Times Global' },
    { name: 'Largest Interior Brand in India 2023', brand: 'Jindal Group' },
    { name: 'Top Designers and Architects', brand: 'Architect Digest' },
    {
      name: 'Amazing Minimalistic Designs',
      brand: 'Design and Graphic Association',
    },
    { name: 'Most Trusted Modular Brand', brand: 'Timber Association India' },
  ]
  return (
    <div className="my-12 ">
      <h1
        className={`sm:w-1/2 text-left tracking-tighter text-4xl sm:text-6xl mb-4 mx-4 font-bold ${lora.className}`}
      >
        Hey There,<span className="italic"> Check Out </span>
        Something you dont know About Our <span className="italic">Brand </span>
        !
      </h1>
      <div className="flex flex-col sm:flex-row ">
        <p className="text-xs sm:my-24 my-8 ml-8">
          Awards & <br /> Recognition
        </p>
        <div className="hidden sm:grid mx-auto justify-items-center grid-cols-1 md:grid-cols-3 gap-16 my-8 sm:my-24">
          {data.map((award) => (
            <div key={award.name} className="flex flex-col gap-2 w-[300px]">
              <div className="flex justify-between items-center">
                <div className="w-16">
                  <AwardLeft />
                </div>
                <h1 className={`text-2xl text-center ${lora.className}`}>
                  {award.brand}
                </h1>
                <div className="w-16">
                  <AwardRight />
                </div>
              </div>
              <h1 className="text-md text-center">{award.name}</h1>
            </div>
          ))}
        </div>
        {/* only show in mob */}
        <div className="sm:hidden block">
          <BrandsCarousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full overflow-hidden"
          >
            <BrandsCarouselContent>
              {data.map((award) => (
                <BrandsCarouselItem key={award.id} className="">
                  <div className="flex flex-col gap-2 w-[300px]">
                    <div className="flex justify-between items-center">
                      <div className="w-16">
                        <AwardLeft />
                      </div>
                      <h1 className={`text-2xl text-center ${lora.className}`}>
                        {award.brand}
                      </h1>
                      <div className="w-16">
                        <AwardRight />
                      </div>
                    </div>
                    <h1 className="text-md text-center">{award.name}</h1>
                  </div>
                </BrandsCarouselItem>
              ))}
            </BrandsCarouselContent>
          </BrandsCarousel>
        </div>
      </div>
    </div>
  )
}

const BrandsSection = () => {
  // const news = [
  //   {
  //     id: 1,
  //     imageUrl: '/images/news/bloomberg-1682401474-ArUs1.avif',
  //   },
  //   {
  //     id: 2,
  //     imageUrl: '/images/news/cnbc-1682401476-zldSU.avif',
  //   },
  //   {
  //     id: 3,
  //     imageUrl: '/images/news/entrpreneur-1682677467-7QjOd.avif',
  //   },

  //   {
  //     id: 5,
  //     imageUrl: '/images/news/et-1682401477-NjRCA.avif',
  //   },
  //   {
  //     id: 6,
  //     imageUrl: '/images/news/femina-1682401478-VMDBI.avif',
  //   },
  //   {
  //     id: 7,
  //     imageUrl: '/images/news/global-magazine-1682401479-ikbb6.avif',
  //   },
  //   {
  //     id: 8,
  //     imageUrl: '/images/news/gq-1682401480-K5jcJ.avif',
  //   },
  //   {
  //     id: 9,
  //     imageUrl: '/images/news/india-today-home-1682401481-kqBb2.avif',
  //   },
  //   {
  //     id: 10,
  //     imageUrl: '/images/news/mint-1682401482-d0I7g.avif',
  //   },
  //   {
  //     id: 11,
  //     imageUrl: '/images/news/toi-1682401483-unoIf.avif',
  //   },
  //   {
  //     id: 12,
  //     imageUrl: '/images/news/your-story-1682401484-Lg2DW.avif',
  //   },

  //
  // ]

  const news = [
    {
      id: 1,
      imageUrl: '/images/newsnobg/ad.png',
    },
    {
      id: 2,
      imageUrl: '/images/newsnobg/bb.png',
    },
    {
      id: 3,
      imageUrl: '/images/newsnobg/bf.png',
    },
    {
      id: 4,
      imageUrl: '/images/newsnobg/cnbc.png',
    },
    {
      id: 5,
      imageUrl: '/images/newsnobg/elle.png',
    },
    {
      id: 6,
      imageUrl: '/images/newsnobg/et.png',
    },
    {
      id: 7,
      imageUrl: '/images/newsnobg/gq.png',
    },

    {
      id: 8,
      imageUrl: '/images/newsnobg/vg.png',
    },
    {
      id: 9,
      imageUrl: '/images/newsnobg/ys.png',
    },
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
        {/* awards div */}
        <div className="my-4">
          <Awards />
        </div>
        {/* image section */}
        <h1
          className={`text-center text-2xl sm:text-4xl bold ${lora.className}`}
        >
          Most Loved Brand
        </h1>
        <section className="flex flex-col sm:flex-row gap-4 mt-24 mb-8 px-4 ">
          <motion.div
            variants={variants}
            initial="initialL"
            whileInView="animate"
            className="flex-col items-center hidden sm:flex sm:w-1/2 rounded"
          >
            <Link href="/reviews">
              <Image
                src="/images/undraw_feedback_re_urmj.svg"
                alt="Your Image"
                className="max-w-full h-auto rounded"
                height={1000}
                width={1000}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="flex  flex-col justify-center items-center w-full sm:w-1/2 bg-[var(--theme-color)] p-4 rounded"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="mb-12">
                {' '}
                <Stars />
              </div>
              <h1
                className={`text-left text-3xl mb-8 font-bold text-[var(--text-color)] ${lora.className} `}
              >
                Are You an Architect, Interior Designer, Builder, Society
                Developer, Township Developers or Showroom Vendor ???
              </h1>
            </div>
            <div className="flex-grow"></div>
            <div className="flex my-12 w-full justify-center items-center">
              <Link
                href="/contact-us"
                className={`whitespace-nowrap text-lg sm:text-xl px-2 py-1 rounded border-2 border-[var(--text-color)] text-[var(--text-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
              >
                Connect With Us Today
              </Link>
            </div>
          </motion.div>
        </section>
        <div className="flex flex-col sm:flex-row px-8">
          <div className="w-full sm:w-1/2 text-center px-4 my-8 sm:my-0">
            <p className="text-md sm:text-xl">
              <Link href="/reviews">Check How Much We are Loved 🥰</Link>
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-4">
            <p className="text-md sm:text-xl text-left">
              {<Stars />}{' '}
              <span className="ml-8 sm:ml-16">
                With Over 950+ architects, interior designers, builders, Brands
                Associated with our Production Units, we assure you Top Notch
                Materials at the Most Affordable Quotes across New Delhi -
                Gurgaon - Noida - Faridabad - NCR - Pan India 
              </span>
            </p>
          </div>
        </div>
        {/* news */}
        <div className="my-16">
          <h1
            className={`text-left text-4xl sm:text-6xl  mb-8 font-bold ${lora.className} `}
          >
            In The News
          </h1>
          <BrandsCarousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full overflow-hidden"
          >
            <BrandsCarouselContent>
              {news.map((card) => (
                <BrandsCarouselItem
                  key={card.id}
                  className="basis-1/2 lg:basis-1/5 "
                >
                  <div className="flex p-4 rounded justify-center items-center w-[150px] h-[75px] sm:w-[220px] sm:h-[110px] border-2 border-gray-400">
                    <img
                      src={card.imageUrl}
                      alt={card.heading}
                      className="rounded object-cover  max-h-[70px] sm:max-h-[100px]"
                    />
                  </div>
                </BrandsCarouselItem>
              ))}
            </BrandsCarouselContent>
          </BrandsCarousel>
        </div>
      </div>
    </div>
  )
}

const WhiteStripSection = () => {
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
  const data = [
    {
      id: 1,
      img: '/images/brands-nobg/c1.png',
    },
    {
      id: 2,
      img: '/images/brands-nobg/c2.png',
    },
    {
      id: 3,
      img: '/images/brands-nobg/c3.png',
    },
    {
      id: 4,
      img: '/images/brands-nobg/c4.png',
    },
    {
      id: 5,
      img: '/images/brands-nobg/c5.png',
    },
    {
      id: 6,
      img: '/images/brands-nobg/c6.png',
    },
    {
      id: 7,
      img: '/images/brands-nobg/c7.png',
    },
    {
      id: 8,
      img: '/images/brands-nobg/c8.png',
    },

    {
      id: 10,
      img: '/images/brands-nobg/c10.png',
    },
    {
      id: 11,
      img: '/images/brands-nobg/c1.png',
    },
    {
      id: 12,
      img: '/images/brands-nobg/c2.png',
    },

    {
      id: 13,
      img: '/images/brands-nobg/c3.png',
    },
    {
      id: 14,
      img: '/images/brands-nobg/c4.png',
    },
  ]
  return (
    <div className="w-full flex flex-col bg-white py-24 px-4 rounded-xl mt-24 gap-32">
      <div>
        <h1
          className={`w-fit text-left tracking-tighter text-4xl sm:text-6xl mb-8 sm:mb-16 font-bold relative ${lora.className}`}
        >
          Brands you will find in our products
          <span className="absolute bottom-0 left-24 w-full h-[2px] bg-gray-700 transform translate-x-1"></span>
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
                <div className="flex flex-col justify-center items-start w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] ">
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
      </div>
      <div>
        <h1
          className={`w-fit text-left tracking-tighter text-4xl sm:text-6xl mb-8 sm:mb-16 font-bold relative ${lora.className} `}
        >
          Our Corporate Presence
          <span className="absolute bottom-0 left-24 w-[100%] h-[2px] bg-gray-700 transform translate-x-1"></span>
        </h1>
        <BrandsCarousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className=" bg-white  w-full overflow-hidden"
        >
          <BrandsCarouselContent>
            {data.map((card) => (
              <BrandsCarouselItem
                key={card.id}
                className="basis-1/2 lg:basis-1/5 "
              >
                <div className="flex flex-col justify-center items-start w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] ">
                  <img
                    src={card.img}
                    alt="{card.heading}"
                    className="w-full h-auto rounded object-cover"
                  />
                </div>
              </BrandsCarouselItem>
            ))}
          </BrandsCarouselContent>
        </BrandsCarousel>
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
        <h1
          className={`text-left text-4xl sm:text-6xl mb-8 font-bold ${lora.className} `}
        >
          Our Exclusive <span className="italic"> Interior Magazine</span>
        </h1>
        <p className="text-sm max-w-sm">
          {<Stars />}{' '}
          <span className="ml-8 sm:ml-16">
            Get some amazing insights about interiors, architectural services,
            creating amazing modular kitchens & wardrobes with our experts who
            will take you across some of the best thought 💭 ful advices
            & methodologies.
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
          Check Latest Edition
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
  const [title, setTitle] = useState(
    `Modular Kitchen Manufacturer | Top Modular Interior Company in India - Design Indian Homes`
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors & architectural works.`}
        />

        <meta name="Author" content="Modular Kitchen Manufacturer" />
        <meta name="Generator" content="www.modularkitchenmanufacturer.com" />
        <meta name="Language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="Copyright" content="©www.modularkitchenmanufacturer.com" />
        <meta name="Designer" content="Modular Kitchen Manufacturer Unit" />
        <meta name="Publisher" content="www.modularkitchenmanufacturer.com" />
        <meta name="Distribution" content="Global" />
        <meta name="Rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href={`https://www.modularkitchenmanufacturer.com/`}
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="Yahoobot" content="index, follow" />
        <meta name="MSNbot" content="Index, Follow" />
        <meta name="allow-search" content="yes" />
        <meta name="country" content="India" />
        <meta name="contactNumber" content="+91-98-99-26-49-78" />
        <meta name="dc.language" content="english" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta
          property="og:url"
          content={`https://www.modularkitchenmanufacturer.com/`}
        />
        <meta
          property="og:title"
          content={`Top Interior Designers & Architects - Delhi - Gurgaon - India`}
        />
        <meta
          property="og:description"
          content={`Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors & architectural works.`}
        />
      </Head>
      <div ref={ref}>
        {/* /for larger */}
        <motion.div
          style={{ scale: scaleD }}
          className="mx-auto pt-8 hidden sm:flex  items-center justify-center "
        >
          <h1
            className={` sm:text-[7vw] tracking-tighter font-bold ${lora.className}`}
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
            className={` inline text-3xl font-bold text-left ${lora.className}`}
          >
            <span className="italic">Modular Interior</span>
          </h1>
          <h1
            className={` inline text-3xl font-bold text-left ${lora.className}`}
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
                Design Indian{' '}
                <Link className="hover:underline" href="/">
                  Homes
                </Link>
                /
                <Link className="hover:underline" href="/">
                  Kitchen
                </Link>
                /
                <Link className="hover:underline" href="/">
                  Wardrobe
                </Link>{' '}
                is the Largest Modular Kitchens - Wardrobes - Interiors
                manufacturing Brand, we are manufacturing extensive range of
                modular interior projects & serving to our direct customers,
                architects, interior designers, builders & project developers
                across New Delhi - Gurgaon - Noida - NCR.
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
      <WhiteStripSection />
      {/* --------------------------- */}
      <BrandsSection />
      {/* --------------------------- */}
      <MaxWidthWrapper>
        <BlogsSection />
      </MaxWidthWrapper>
      {/* --------------------------- */}
      <Steps />
      {/* --------------------------- */}

      {/* --------------------------- */}
    </>
  )
}
