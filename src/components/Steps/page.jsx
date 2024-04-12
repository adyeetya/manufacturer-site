'use client'
import './try.css'
import React, { useState } from 'react'
import {
  HeartHandshake,
  Gem,
  MousePointer2,
  Wrench,
  Users,
  Component,
  ChevronRight,
} from 'lucide-react'
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import Image from 'next/image'
import { Tangerine } from 'next/font/google'
const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Steps = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    pincode: '',
    agree: '',
    Interest: '',
    requirements: '',
    file: '',
  })
  const [btnText, setBtnText] = useState('Book A Visit Today')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitting form...')
    setFormSubmitted(true)

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    try {
      console.log(
        'Form Data to Send:',
        Object.fromEntries(formDataToSend.entries())
      )
      console.log('Uploading data...')
      const response = await fetch(
        'https://m.designindianhomes.com/submitForm',
        {
          method: 'POST',
          body: formDataToSend,
        }
      )

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      console.log('Response body:', await response.text())

      if (response.ok) {
        console.log('Form data submitted successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
        setBtnText('Done')
      } else {
        console.error('Form data submission failed. Response:', response)
        setBtnText('Something Went Wrong')
      }
    } catch (error) {
      console.error('Error during form data submission:', error)
      setBtnText('Something Went Wrong')
    }

    setFormSubmitted(true)
  }
  const handleClose = () => {
    setFormSubmitted(false)
    // Add any additional logic you want to perform when closing the thank-you page
  }
  return (
    <div className="my-24">
      <div className="flex flex-col lg:flex-row justify-between mx-auto p-0 sm:p-16 md:px-20 gap-x-16">
        <div>
          <div className="sticky top-[20%]">
            {' '}
            <div className="h-full w-full">
              <h1
                className={`sm:text-5xl text-3xl text-center mt-8 ${cinzel.className}`}
              >
                Design Indian Homes
              </h1>
              <h1
                className={`text-[7vw] text-center font-extralight  ${tangerine.className}`}
              >
                Journey
              </h1>
              <div className="flex justify-center items-center sm:my-16">
                <button
                  onClick={openModal}
                  className="sm:px-8 px-4 sm:py-4 py-2 text-gray-200 sm:text-3xl text-xl font-light rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#ba8a35] hover:from-[#f59e0b] hover:to-[#805ad5]"
                >
                  Book A Visit Today
                </button>
              </div>
            </div>{' '}
          </div>
        </div>
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full">
                <div className="">
                  {' '}
                  <HeartHandshake color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 1</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Finally Found Us</h2>
                <p className="text-sm text-gray-600">
                  After long searches, you finally reached the right
                  destination, where all works will be done from Source, right
                  from manufacturing modulars to end to interiors & Structures.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Gem color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 2</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Booking The First Visit</h2>
                <p className="text-sm text-gray-600">
                  You Book a Visit with Our Modular Coordinator or Architect
                  Coordinator, very sorry we dont have field running staff to
                  waste your time and ours ☺. *A nominal Adjustable first Visit
                  Charge shall be taken for Either of the meet.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <MousePointer2 color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 3</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Understanding Requirements</h2>
                <p className="text-sm text-gray-600">
                  We Show you Concepts, understand requirements, & give our
                  expert advices followed by a thorough evaluation.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card4">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Users color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 4</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl mb-2">Visit Our Boutique Office</h2>
                <p className="text-sm text-gray-600">
                  You Visit Our Boutique Office, we show your the presentation
                  as per understanding of works, show tentative estimates & give
                  further details on design execution.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card5">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Component color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 5</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl mb-2">
                  Initiating Designing & Planning
                </h2>
                <p className="text-sm text-gray-600">
                  We start your detailed designing & planning incl MEP if
                  required, of course it will be hands on Approach. All
                  designing & planning will be at a affordable quote ( mostly
                  its 10% of tentative estimate ).
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card6">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Wrench color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 6</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">
                  Approvals & Initiating Execution as per Timelines
                </h2>
                <p className="text-sm text-gray-600">
                  We start the Modular, End to End Or Structural Works and
                  Deliver as per Assured Time.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal Form"
        >
          <div className="relative z-10">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-gray-600 hover:text-red-600 focus:outline-none bg-red-200 sm:bg-transparent hover:bg-red-200 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 h-[400px] overflow-y-auto">
            <h1 className="text-2xl sm:text-3xl text-center">Contact Us</h1>
            <div className="p-4 flex overflow-y-auto">
              {formSubmitted ? (
                <div className="grid grid-cols-1 justify-items-center">
                  <p className="text-center text-lg">
                    Thank you for your submission!
                  </p>
                  <Image
                    alt="thank you image"
                    src={'/images/thankyou.png'}
                    width={400}
                    height={300}
                  />
                  <h1 className="text-center font-bold">
                    {' '}
                    FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL
                    US OR WHATSAPP US ON 9899264978, 9582827928
                  </h1>

                  <button
                    onClick={handleClose}
                    className=" text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium "
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
                      Email ID*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium "
                    >
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      id="number"
                      onChange={handleChange}
                      name="number"
                      className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium "
                    >
                      Pincode*
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      onChange={handleChange}
                      className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="Interest"
                      className="block text-sm font-medium "
                    >
                      Interested in
                    </label>
                    <select
                      id="Interest"
                      name="Interest"
                      className="mt-1 p-2 w-full border-b border-gray-500 text-sm focus:outline-none rounded bg-"
                      required
                      onChange={handleChange}
                    >
                      {/* <option className="" value="" disabled selected>
                  Interested in
                </option> */}
                      <option value="Complete Modular Interiors">
                        Complete Modular Interiors
                      </option>
                      <option value="End to End Interiors">
                        End to End Interiors
                      </option>
                      <option value="Architectural Consultancy">
                        Architectural Consultancy
                      </option>
                      <option value="Modular Kitchens">Modular Kitchens</option>
                      <option value="Wardrobes">Wardrobes</option>
                      <option value="Living or Bedroom Renovation">
                        Living or Bedroom Renovation
                      </option>
                      <option value="Bathroom or Balcony Renovation">
                        Bathroom or Balcony Renovation
                      </option>
                      <option value="Commercial Interiors">
                        Commercial Interiors
                      </option>
                      <option value="Luxury Interiors">Luxury Interiors</option>

                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="requirements"
                      className="block text-sm font-medium "
                    >
                      Are you
                    </label>
                    <select
                      required
                      id="requirements"
                      name="requirements"
                      className="mt-1 p-2 w-full  border-b border-gray-500 text-sm focus:outline-none rounded bg-"
                      onChange={handleChange}
                      defaultValue="Architect"
                    >
                      <option value="Architect" selected>
                        an Architect
                      </option>
                      <option value="Client">a Direct Client</option>
                      <option value="Designer">an Interior Designer</option>
                      <option value="Builder">a Builder</option>
                      <option value="Company">a Company</option>
                      <option value="Freelancer ">a Freelancer </option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium "
                    >
                      Attach Your Project
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="agree" className="flex items-center">
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        className="mr-2"
                        onChange={handleChange}
                      />
                      <span className="text-sm ">
                        Yes, I would like to receive important updates and
                        notifications on WhatsApp
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 bg-[#f54e07] hover:border-white hover:border-[1px] text-lg py-3 px-6 rounded-full hover:text-white flex justify-center items-center "
                  >
                    {btnText} <ChevronRight className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Steps
