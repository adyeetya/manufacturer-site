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
const Footer = () => {
  return (
    <div className="w-full  mt-24 px-1 sm:px-4">
      <div className=" border-gray-300 border-2 border-b-0 rounded-t-xl h-full sm:p-4">
        <h1 className="text-4xl sm:text-7xl text-right sm:text-center font-extrabold my-4">
          MODULAR KITCHEN MANUFACTURING
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-evenly my-24">
          <div className=" font-bold text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>What we're good at</p>
            <Link href="/modular-interiors" className="">
              <h1
                className={`text-left text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Work
              </h1>
            </Link>
          </div>
          <div className="font-bold text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>What we do</p>
            <Link href="/get-quote" className="">
              <h1
                className={`text-left text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Get Quotes
              </h1>
            </Link>
          </div>
          <div className="font-bold text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>How we deliver</p>
            <Link href="/book-visit" className="">
              <h1
                className={`text-left text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Visit Us
              </h1>
            </Link>
          </div>
          <div className="font-bold text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>Who we are</p>
            <Link href="/about-us" className="">
              <h1
                className={`text-left text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                Our Story
              </h1>
            </Link>
          </div>
          <div className="font-bold text-sm flex sm:flex-col flex-row sm:gap-4 justify-between items-center sm:items-start w-full sm:w-fit">
            <p>The blog</p>
            <Link href="/magazine" className="">
              <h1
                className={`text-left text-2xl font-bold ${lora.className} hover:drop-shadow-lg text-[var(--text-color)] hover:text-black`}
              >
                The Latest
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
            <CallIcon sx={{ fontSize: 40 }} />
            <WhatsAppIcon sx={{ fontSize: 40 }} />
            <InstagramIcon sx={{ fontSize: 40 }} />
            <MailOutlineIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="my-8">
          <ScrollToTopButton />
        </div>
        <div className="my-24 ">
          {' '}
          <LocationsTabs />
        </div>
        <div>
          <div className="w-full text-center text-black text-sm  py-4 bg-white mt-16 sm:mb-0">
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
