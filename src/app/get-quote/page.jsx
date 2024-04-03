import React from 'react'
import Form from './form'
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
        <h1
          className={`sm:text-[90px] drop-shadow-xl text-4xl font-[900] ${lora.className}`}
        >
          Get Quotes
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

const page = () => {
  return (
    <>
      <FullWidthSection />
      <div className="pt-8 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold text-center">
          100% Guaranteed Quotes
        </h1>

        <p className=" text-center mb-8">Get Quotes</p>
        <p className="sm:px-16 text-center mb-8">
          Transform your living space with bespoke interior solutions tailored
          to your unique style. At Design Indian Homes, we specialize in
          crafting custom kitchen, bedroom, and wardrobe designs that elevate
          the functionality and aesthetics of your home. Our team of experienced
          designers meticulously curates modular interiors that seamlessly
          integrate form and function, ensuring every corner of your space
          reflects your individual taste and lifestyle. Contact us today to
          receive 100% personalized quotes and embark on a journey to transform
          your living space into a masterpiece of modern design.
        </p>
        <Form />
      </div>
      <ScheduleChatSection />
    </>
  )
}

export default page
