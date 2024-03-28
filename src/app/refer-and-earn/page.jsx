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
          Refer & Earn
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
      <div className="pt-8 sm:pt-16 pb-8">
        <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">
          WE WILL REWARD YOU WHOLEHEARTEDLY
        </h1>
        <p className=" text-center mb-16">
          At Design Indian Kitchen, we most graciously offer rewards to all our
          interior designer, builder and architect partners. The Monetary value
          per project can be discussed beforehand and we will surely offer the
          best in the Industry, this shall be our assurance. All Our Partners
          are closely working with us and are getting their projects timely
          delivered with our efficient resource networking and well coordinated
          manufacturing units across New Delhi - NCR. All Values of the Refer
          and Earn can be once discussed, so feel free and Call us Today or
          Whats up for All details. Happy Collaborating.
        </p>
        <h1 className="sm:text-3xl text-2xl font-bold text-center my-12">
          REFER US
        </h1>
        <Form />
      </div>
      <ScheduleChatSection />
    </>
  )
}

export default page
