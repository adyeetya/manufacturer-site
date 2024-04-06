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
          className={`sm:text-7xl drop-shadow-xl xs:text-4xl 2xs:text-2xl font-[900] ${lora.className}`}
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
      <head>
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
          href={`https://www.modularkitchenmanufacturer.com/refer-and-earn`}
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
          content={`https://www.modularkitchenmanufacturer.com/refer-and-earn`}
        />
        <meta
          property="og:title"
          content={`Top Interior Designers & Architects - Delhi - Gurgaon - India`}
        />
        <meta
          property="og:description"
          content={`Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors & architectural works.`}
        />
      </head>
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
