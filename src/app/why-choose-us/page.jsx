import React from 'react'

import Form from './form'
import Image from 'next/image'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center ">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-3xl text-2xl font-bold">
          India’s No.1 Modular Kitchen Wardrobe Brand
        </h1>
        <h1 className="sm:text-5xl text-2xl font-bold py-4  ">CHOOSE WISELY</h1>
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
          We can build you the kitchen <br />
          of your dreams
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

const page = () => {
  return (
    <>
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <p className="text-2xl text-center mb-16">
          Compare Quotes With us & We assure you 100% Guaranteed prices than any
          vendor. With over 283+ architects, interior designers and builders
          partnered with us, we assure you better quotes with better materials
          than the rest.
        </p>
      </div>
      <Form />
      <div className="my-12">
        <h1 className="text-2xl sm:text-4xl text-center mb-8 font-bold ">
          WHY US
        </h1>
        <div className="flex justify-center items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/whyus-big.jpg"
            alt=""
          />
        </div>
      </div>
      <ScheduleChatSection />
    </>
  )
}

export default page
