import React from 'react'

import Customer from './Customer'
import CustomerVideos from './CustomerVideos'
import ArchitectSpeak from './ArchitechSpeak'
import Link from 'next/link'
import Image from 'next/image'

const ScheduleChatSection = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: 'url("images/footer_BG_01.jpg")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.51)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="text-center mx-auto text-white">
        <h1 className="text-4xl">
          Get Custom Interiors / Modular Interiors/ Architectural Services at
          Most Affordable Prices with Our Team.
        </h1>
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=9899264978&amp;text=MODULAR KITCHEN DELHI - INDIA | MODULAR KITCHEN MANUFACTURERS"
          className="schedule-btn font-bold bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500"
        >
          SCHEDULE A CHAT
        </a>
      </div>
    </section>
  )
}

const SectionWithImage = () => {
  return (
    <div className="p-4 sm:p-16 bg-gray-300">
      <section className="flex flex-col md:flex-row items-center">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">
            JOIN US - FREELANCE WITH US- REFER & EARNS WITH US- BE AN ASSOCIATE
            PARTNER WITH US
          </h2>
          <p className="text-gray-700 mb-4 text-center sm:text-left mx-auto">
            We’re thrilled to know our customers loved the Design indian kitchen
            experience. This truly keeps us going!
          </p>
          <div className="mb-12 flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full shadow-lg">
              CONNECT TODAY
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            src="/images/reviews-mouthshut.jpg"
            alt="Description of your image"
            className="w-full rounded"
          />
        </div>
      </section>
    </div>
  )
}

const SocialReviews = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">SOCIAL REVIEWS</h2>
      </section>

      <div className="flex flex-wrap justify-evenly">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/justDail.jpg"
            alt="Description for Image 1"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.justdial.com/Delhi/Design-Indian-Kitchen-Near-Dwarka-Sector-10-Metro-Station-Palam/011PXX11-XX11-141108151600-E1L5_BZDET/reviews"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/Sulekha.jpg"
            alt="Description for Image 2"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.sulekha.com/design-indian-kitchen-connaught-place-delhi-contact-address"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/facebookReview.jpg"
            alt="Description for Image 3"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.facebook.com/designindiankitchen"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const page = () => {
  return (
    <>
      <div className=" mt-16 lg:mt-36 mb-16 sm:mx-8">
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto uppercase">
          Design Indian kitchen reviews
        </h1>
        <p className="uppercase text-md font-bold text-center mb-16">
          Experience the comfort and aesthetics of a #Design Indian Kitchen
          before you get yours! With looks for every room, furniture for each
          corner, material samples on display, and a dedicated interior designer
          to take you through it, your quest for the best home interiors ends
          here. And it is ready and safe for your visit.
        </p>
      </div>
      <CustomerVideos />
      <SectionWithImage />
      <SocialReviews />
      <ArchitectSpeak />
      <Customer />
      <ScheduleChatSection />
    </>
  )
}

export default page
