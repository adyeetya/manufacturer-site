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
        <h1
          className={`sm:text-[90px] drop-shadow-xl text-4xl font-[900] ${lora.className}`}
        >
          Careers
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

const ThreeColumnSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Column 1 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            Run by Good will
          </p>
        </div>

        {/* Column 2 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            183 + Partner Network
          </p>
        </div>

        {/* Column 3 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            1600 + Happy Customers
          </p>
        </div>
      </div>
    </section>
  )
}

const ThreeColumnSection2 = () => {
  return (
    <section className="py-16 ">
      <h2 className="text-gray-800 sm:text-4xl text-center font-bold uppercase">
        Synchronizing Hard Work with Happiness
      </h2>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Column 1 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Deliver On Time
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Run on Timelines
          </p>
        </div>

        {/* Column 2 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Taking Expert Inputs
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Hardworking and Sincere
          </p>
        </div>

        {/* Column 3 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            We learn where we Lack
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            We are Team Players
          </p>
        </div>
      </div>
    </section>
  )
}

const SectionWithImage = () => {
  return (
    <div className=" p-4 sm:p-16 bg-gray-300">
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
          href={`https://www.modularkitchenmanufacturer.com/careers`}
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
          content={`https://www.modularkitchenmanufacturer.com/careers`}
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
        <h1 className="sm:text-4xl text-2xl  font-bold text-center mb-16 uppercase">
          Careers Kitchen Designer
        </h1>
        <p className="text-center mb-8">
          The Work culture with Design Indian Kitchen is chilled up, we listen
          to what you say, we also correct mistakes and realize our going the
          other way humbly. We are always willing to take each and every one is
          experience and analyze our plan and implement it.
        </p>
        <p className="text-center mb-16">
          At The Design Indian Kitchen Units we have different allotted teams as
          per areas, each day their schedules are planned as per the work scope.
          The Management give free hand to coordinators and the Supervisors,
          although diligently, to plan and execute. We understand and trust the
          expertise of our Team and work with esprit de corps.
        </p>
        <Form />
      </div>
      <ThreeColumnSection />
      <ThreeColumnSection2 />
      <SectionWithImage />
      <ScheduleChatSection />
    </>
  )
}

export default page
