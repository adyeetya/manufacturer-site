import React from 'react'
import ScrollToTopButton from '../components/ScrollToTop'
import Link from 'next/link'
import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import LocationsTabs from './LocationsTabs'
import MyForm from './Form'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import Image from 'next/image'
import LetsConnectForm from './LetsConnect'
import Time from './Clock'
import Typed from 'typed.js'
const TrinityBrand = () => {
  return (
    <div>
      <h1 className="text-4xl md:text font-semibold text-center pt-16">
        Know The Trinity Brands
      </h1>

      <div className="flex flex-col items-center md:flex-row justify-center gap-6 md:gap-32 w-full mt-5">
        {/* Brand 1 */}
        <a
          href="https://www.designindiankitchen.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src="/images/Footer/dkilogo.png"
              alt=""
              width={200}
              height={80}
            />
            <p className=" text-2xl font-medium">Design Indian Kitchen</p>
          </div>
        </a>

        {/* Brand 2 */}
        <a
          href="https://www.designindianhomes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src="/images/Footer/desig indian homes.gif"
              alt=""
              width={200}
              height={80}
            />
            <p className=" text-2xl font-medium">Design Indian Home</p>
          </div>
        </a>

        {/* Brand 3 */}
        <a
          href="https://www.designindianwardrobes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src="/images/Footer/footer-logo-multi.png"
              alt=""
              width={300}
              height={80}
            />
            <p className=" text-2xl font-medium">Design Indian Wardrobe</p>
          </div>
        </a>
      </div>
    </div>
  )
}

const FeatureSection = () => {
  return (
    <div
      className="flex flex-col items-center md:flex-row justify-center    p-10 gap-6 mt-10 "
      style={{ alignItems: 'center' }}
    >
      {/* Feature 1 */}
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src="/images/Footer/warranty.png"
            alt=""
            width={108}
            height={80}
          />
        </div>

        <h1 className="font-bold text-center text-sm">Flat 10 year warranty</h1>
        <p className="text-sm">
          Choose interiors designed with superior quality material, leaving no
          room for defects.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="text-center mt-4 md:mt-0">
        <div className="flex justify-center">
          <Image
            src="/images/Footer/fast-delivery.png"
            alt=""
            width={128}
            height={80}
          />
        </div>

        <h1 className="font-bold text-center text-sm">45-day delivery</h1>
        <p className="text-sm">
          Get beautiful interiors for your new home in just 45 days. That’s our
          delivery guarantee.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="text-center mt-4 md:mt-0">
        <div className="flex justify-center">
          <Image
            src="/images/Footer/team-building.png"
            alt=""
            width={128}
            height={80}
          />
        </div>
        <h1 className="font-bold text-center text-sm">600+ design experts</h1>
        <p className="text-sm">
          Explore design ideas and co-create your dream home with our
          experienced designers
        </p>
      </div>

      {/* Feature 4 */}
      <div className="text-center mt-4 md:mt-0">
        <div className="flex justify-center">
          <Image
            src="/images/Footer/customer-service.png"
            alt=""
            width={128}
            height={80}
          />
        </div>
        <h1 className="font-bold text-center text-sm">
          Post-installation service
        </h1>
        <p className="text-sm">
          Complete your design journey and get unwavering support from our
          dedicated care team.
        </p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center"
      style={{ gap: '110px', marginTop: '100px' }}
    >
      <div style={{ width: '300px' }}>
        <h1 className="font-bold text-2xl uppercase">Contact Us</h1>
        <div className="mt-8 text-sm">
          <p className="font-extrabold mb-2 underline">
            DESIGNING & OPERATIONS OFFICE -
          </p>
          <p className="mb-6">
            25/42, A BLOCK, MIDDLE CIRCLE, CONNAUGHT PLACE, NEW DELHI - 110001
            NEAR RAJIV CHOWK METRO STN, GATE NO.8{' '}
          </p>
          <p className="font-extrabold mb-2 underline">
            {' '}
            CORPORATE INDUSTRIAL UNIT -
          </p>
          <p className="mb-6">
            G - 984, NARELA DSIIDC INDUSTRIAL AREA, NEW DELHI - 110040
          </p>
          <p className="font-extrabold mb-2 underline">MOBILE PHONE NUMBER -</p>
          <p className="mb-6">0-9899264978 / 0-9582827928/ 0-9899239097</p>
          <p className="font-extrabold mb-2 underline">LANDLINE NUMBER -</p>
          <p className="mb-6">01144127897</p>
          <p className="font-extrabold mb-2 underline">EMAIL -</p>
          <p className="mb-6">ENQUIRY@DESIGNINDIANKITCHEN.COM</p>
          <p className="font-extrabold mb-2 underline">TIMING -</p>
          <p className="mb-6">
            MONDAY - SATURDAY:
            <br /> 10:30 AM - 7:30 PM <br />
            SUNDAY:
            <br /> 11:00 AM - 7:00 PM ONLY FOR SITE VISITS
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">OTHER BUSINESS SITES</h1>
        <ul className="mt-8 text-sm">
          <li className="mb-4 font-bold">
            <a href="https://designindianhomes.com/" target="_blank">
              DESIGN INDIAN HOMES
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://designindiankitchen.com/" target="_blank">
              DESIGN INDIAN KITCHEN
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://designindianwardrobe.com/" target="_blank">
              DESIGN INDIAN WARDROBE
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://modularkitchenindelhi.com/" target="_blank">
              MODULAR KITCHEN IN DELHI
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://modular-kitchen-gurgaon.com/" target="_blank">
              MODULAR KITCHEN IN GURGAON
            </a>
          </li>
          {/* <li className="mb-4 font-bold">
                      <a>DESIGN INDIAN HOMES</a>
                    </li> */}
          <li className="mb-4 font-bold">
            <a href="https://modularkitcheninnoida.com/" target="_blank">
              MODULAR KITCHEN IN NOIDA
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://thedesignerlounge.com/" target="_blank">
              THE DESIGNER LOUNGE
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://devotionalindia.com/" target="_blank">
              DEVOTIONAL INDIA
            </a>
          </li>
          <li className="mb-4 font-bold">
            <a href="https://tallysolution.net/">TALLY SOLUTION</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-2xl">CHECK US OUT</h1>
        <ul className="mt-8 text-sm">
          {/* <li className="mb-4 font-bold">
            <Link href="/customer-reviews-interior-designs">
              CUSTOMER REVIEWS
            </Link>
          </li> */}
          <li className="mb-4 font-bold">{/* <a>THE MODULAR PROCESS</a> */}</li>

          <li className="mb-4 font-bold">
            <Link href="/contact-us">CONTACT US</Link>
          </li>
          <li className="mb-4 font-bold">
            <Link href="/book-visit">BOOK A VISIT TODAY</Link>
          </li>

          <li className="mb-4 font-bold">
            <Link href="/get-quote">GET QUOTES</Link>
          </li>
        </ul>

        <div className="flex">
          <div>
            <Time />
          </div>
          {/* <div>
            <ul>
              <li className="mb-2 font-bold">WORK</li>
              <li className="mb-2 font-bold">
                <Link href="/about-best-interior-designers-architects">
                  {' '}
                  ABOUT{' '}
                </Link>
              </li>
              <li className="mb-2 font-bold">CAREERS</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

const LetsConnectSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-36 mt-16 ">
      <div>
        <h1 className="text-4xl font-bold ">THE BRAND</h1>
        <ul className="text-lg font-bold mt-4">
          <li className="mb-2">
            <Link href="https://designindianhomes.com/home-renovation-services">
              Renovation
            </Link>
          </li>
          <Link href="/schedule-videocall">
            <li className="mb-2">Book a Virtual Meeting</li>
          </Link>
          <Link href="/about-us">
            <li> About Us</li>
          </Link>
          {/* <Link href="/largest-interior-designing-brand">
                      <li className="mb-2">The Team</li>
                    </Link> */}
          <Link href="/join-us">
            <li>Collaborate with Us</li>
          </Link>
          <Link href="/reviews">
            {' '}
            <li className="mb-2">Reviews</li>
          </Link>
          <Link href="/architects-speak">
            <li className="mb-2"> Architects Speak </li>
          </Link>
          <Link href="/why-choose-us">
            <li className="mb-2">Why Choose Us</li>
          </Link>
          <Link href="/join-us">
            <li className="mb-2">Join As a Designer</li>
          </Link>
          <Link href="/book-visit">
            <li className="mb-2">Book a Design Visit</li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold">COLLABORATE</h1>
        <ul className="text-lg font-bold mt-4">
          <Link href="/join-us">
            <li className="mb-2"> PARTNER WITH US</li>
          </Link>
          <Link href="/refer-and-earn">
            <li className="mb-2">REFER FOR REWARDS</li>
          </Link>
          <Link href="/join-us">
            <li className="mb-2"> JOIN AS-A DESIGNER</li>
          </Link>
          <Link href="/careers">
            <li className="mb-2"> CAREERS</li>
          </Link>
          <Link href="/careers">
            <li className="mb-2">
              FOR - ARCHITECTS & <br /> INTERIOR DESIGNERS
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold">LETS CONNECT</h1>
        <LetsConnectForm />
      </div>
    </div>
  )
}

const Footer = () => {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['HOMES', 'KITCHEN', 'WARDROBE'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  return (
    <div className="w-full  mt-24 px-1 sm:px-4">
      <div className=" border-gray-300 border-2 border-b-0 rounded-t-xl h-full sm:p-4">
        <h1 className="text-4xl tracking-tight sm:text-6xl text-right sm:text-center font-extrabold my-4">
          DESIGN INDIAN <br className="sm:hidden" />{' '}
          <span ref={el} className="" />
        </h1>
        <div className="flex my-12 sm:my-36 w-full justify-center items-center">
          <Link
            // href="https://designindianhomes.com/get-free-estimate-by-top-interior-brand-in-dehli-gurgaon-noida-india"
            // target="_blank"
            // rel="noopener noreferrer"
            href="/calculator"
            className={`whitespace-nowrap text-md md:text-5xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
          >
            Calculate Your Estimates
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:justify-evenly my-24">
          <div className=" font-bold text-xs sm:text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>What we&apos;re good at</p>
            <Link href="/modular-interiors" className="">
              <h1
                className={`text-left text-xl sm:text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Modular Interiors
              </h1>
            </Link>
          </div>
          <div className="font-bold text-xs sm:text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>What we do</p>
            <Link href="/get-quote" className="">
              <h1
                className={`text-left text-xl sm:text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Get Quotes
              </h1>
            </Link>
          </div>
          <div className="font-bold text-xs sm:text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>How we deliver</p>
            <Link href="/book-visit" className="">
              <h1
                className={`text-left text-xl sm:text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Visit Us
              </h1>
            </Link>
          </div>
          <div className="font-bold text-xs sm:text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>Who we are</p>
            <Link href="/about-us" className="">
              <h1
                className={`text-left text-xl sm:text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Our Story
              </h1>
            </Link>
          </div>
          <div className="font-bold text-xs sm:text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>The blog</p>
            <Link href="/magazine" className="">
              <h1
                className={`text-left text-xl sm:text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                The Magazine
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <MyForm />
        </div>

        <div>
          <div className="flex my-12 w-full justify-end items-center">
            <Link
              href="/contact-us"
              className={`whitespace-nowrap text-lg sm:text-3xl px-2 py-1 rounded text-[var(--button-text-color)] bg-[var(--button-bg-color)] font-semibold uppercase hover:bg-black hover:text-white ${lora.className}`}
            >
              GET IN TOUCH
            </Link>
          </div>
          <div className="flex flex-row sm:gap-8 gap-2 justify-between sm:justify-center items-center p-4">
            {' '}
            <a href="tel:+91 9899264978">
              <CallIcon sx={{ fontSize: 40 }} />
            </a>
            <a href="https://wa.me/9899264978">
              <WhatsAppIcon sx={{ fontSize: 40 }} />
            </a>
            <a href="https://www.instagram.com/designindiankitchen/">
              <InstagramIcon sx={{ fontSize: 40 }} />
            </a>
            <a href="mailto:your-email-address">
              <MailOutlineIcon sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>

        <div className="my-24">
          <TrinityBrand />
        </div>
        <div className="my-24">
          <FeatureSection />
        </div>
        <div className="my-24">
          <LetsConnectSection />
        </div>
        <div className="my-24">
          <Contact />
        </div>
        {/* <div className="my-24 max-w-[600px] sm:mx-auto">
          <h1 className="text-4xl md:text font-semibold text-center text-black my-16">
            Lets Connect
          </h1>
          <LetsConnectForm />
        </div> */}

        <div className="my-8">
          <ScrollToTopButton />
        </div>
        <div className="my-24 ">
          {' '}
          {/* <h1 className="text-4xl md:text font-semibold text-center  pt-16">
            Our Locations
          </h1> */}
          <LocationsTabs />
        </div>
        <div>
          <div className="w-full text-center text-white text-sm  py-4 bg-black mt-16 sm:mb-0">
            <p>
              MODULAR KITCHEN MANUFACTURING | ALL RIGHTS RESERVED 2024-25
              CRAFTED WITH LOVE BY IN HOUSE BRAND -{' '}
              <a
                href="https://www.designerlounge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f54e07] font-bold underline"
              >
                THE DESIGNER LOUNGE
              </a>{' '}
              <br />{' '}
              <span className="text-blue-500 underline">
                <Link href="/privacy">PRIVACY</Link>
              </span>{' '}
              |{' '}
              <span className="text-blue-500 underline">
                <Link href="/privacy#legal">LEGAL</Link>
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
