import React from 'react'
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
          ABOUT US
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
      <div className=" pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <h1 className="sm:text-3xl text-2xl font-bold text-center mb-8">
          India’s No.1 Modular Interior Brand
        </h1>
        <h1 className="sm:text-5xl text-3xl font-bold text-center mb-16 ">
          THE{' '}
          <span className="bg-red-500 px-4 py-2 rounded">
            DESIGN INDIAN HOMES
          </span>{' '}
          WAY
        </h1>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          More than a Decade
        </h2>
        <p className="mb-4">
          The Design Indian Homes company is a more than a decade old company,
          we were into production of kitchen materials since few years and
          initiated into the retail kitchen segment when we felt that average
          customer was not getting the justified quality and was moving towards
          low-quality products due to overly-priced kitchen quotes by many
          dealers and sub-standard material implementation even by renowned
          brands. People generally required our services as we provided them the
          three basic necessities which they found missing in the prevalent
          markets, namely; quality , affordability & reliability.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Design Indian Homes Today
        </h2>
        <p className="mb-4">
          We today stand as the most Trusted Brand in the Modular Kitchen
          industry with producing and supplying over 2000 Kitchens per year. We
          accept selected work and are most referred company in Delhi- NCR and
          India. With Customers across India and increasing, we have initiated
          exports to our neighboring countries. With dedicated and devoted Team
          members, Our Motive is to make your kitchen as Tasty and Delicious as
          your Food. Your Support and Love has made us India&#39;s Largest
          Modular Kitchen Agency.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Elegance Redefined
        </h2>
        <p className="mb-4">
          We believe in making the kitchens and its interiors elegant, It should
          be noted that elegance means focussing on the simplified approach. It
          is therefore recommend to have a kitchen that gives you more space,
          makes you feel energetic and also looks new everyday. We try to make
          all our designs clutter free, aesthetically beautified and also fresh.
          We give importance to the basic kitchen structure and use advance
          materials which are trendy, extremely useful and without which modular
          kitchen is incomplete. Elegant Kitchens gives room to positive
          vibrations and also beautify the entire atmosphere. All our designs
          carry a distinct look of elegance and once installed, they give a
          complete makeover of your Interior.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Quality & Integrity
        </h2>
        <p className="mb-4">
          All are kitchen material have to pass through our righteous testing
          processes. Once they are tested through sampling techniques, we test
          their strength through our tensity test. Once all tests are passed,
          the material is packed for further installation. We do not compromise
          a single bit on our quality. Our Integrity has made us the most
          Reliable Brand for Modular Kitchen across New Delhi - NCR and India.
          Our materials are also tested, and we only use standard kitchen
          equipment which are used worldwide and which have been significantly
          approved by thousand of customers and widely used by the Modular
          Kitchen Fraternity across Globe.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Values and Vision
        </h2>
        <p className="mb-4">
          We abide by the dictum of &#39; Love All - Serve All &#39; , whether
          you go ahead with our work or not ; we shall suggest you what we know
          is the most efficient solution for your Modular Kitchen. We do make
          profits, but not at the cost of our Integrity,Principles and our
          Goodwill. What you pay, We make sure you get the best. We will justify
          every penny you spend on your Modular Kitchen. Our Vision to make
          modular kitchens affordable for the Middle Class segment, Not everyone
          can afford a 1 Million Rupee Kitchen, hence we want the people at the
          grassroots level to afford our Products and get their kitchens
          implemented or re-designed. There can be no house without a Kitchen,
          hence it is a necessary to have a kitchen which is sturdy and durable
          for a good amount of time. Each day millions across our Country, spend
          lot of their time and energy in Kitchens, hence to have a robust
          kitchen where you get the &#39;feel good factor&#39; is must and duly
          deserved by the Homemakers.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Environment and Safety
        </h2>
        <p className="mb-4">
          Special consideration is made regarding environment, we manufacture
          cabinets in mostly all variety. Even the wood particles are not wasted
          at our Industrial Unit. All our kitchens are designed to ensure safety
          to the users including the kids at home. We take special care about
          the sharp bends and the material used are to provide extra comfort and
          thus usage is nearly effortless.
        </p>
      </div>
      <ScheduleChatSection />
    </>
  )
}

export default page
