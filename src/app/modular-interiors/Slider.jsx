'use client'
import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './Slider.css'
const Gallery = ({
  images,
  initialSlide,
  showSlider,
  setShowSlider,
  onNextSlide,
  onPrevSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide)
  const sliderRef = useRef(null)
  console.log('images', images)
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    initialSlide: initialSlide,
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
    onNextSlide() // Call the onNextSlide callback
  }
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
    onPrevSlide() // Call the onPrevSlide callback
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    Intrested: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false)
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
  const handleWhatsapp = (e) => {
    e.preventDefault()
    console.log('whatsapp')
    if (currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex]

      // Encode the filename before constructing the URL
      const encodedFilename = encodeURIComponent(currentImage.filename)

      const imageUrl = `https://api.designindianwardrobe.com/uploads/${encodedFilename}`

      // Construct the WhatsApp share link
      const whatsappLink = `https://wa.me/?text=${encodeURIComponent(imageUrl)}`

      // Open WhatsApp with the pre-filled message
      window.open(whatsappLink, '_blank')
    } else {
      console.error('Invalid currentIndex:', currentIndex)
    }
  }
  const handleInstagram = (e) => {
    e.preventDefault()
    console.log('whatsapp')
    if (currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex]

      // Encode the filename before constructing the URL
      const encodedFilename = encodeURIComponent(currentImage.filename)

      const imageUrl = `https://api.designindianwardrobe.com/uploads/${encodedFilename}`

      // Construct the WhatsApp share link
      const whatsappLink = `https://wa.me/?text=${encodeURIComponent(imageUrl)}`

      // Open WhatsApp with the pre-filled message
      window.open(whatsappLink, '_blank')
    } else {
      console.error('Invalid currentIndex:', currentIndex)
    }
  }

  const handleFacebook = (e) => {
    e.preventDefault()
    console.log('facebook')
    if (currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex]

      // Encode the filename before constructing the URL
      const encodedFilename = encodeURIComponent(currentImage.filename)

      const imageUrl = `https://api.designindianwardrobe.com/uploads/${encodedFilename}`

      // Construct the Facebook Share link
      const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        imageUrl
      )}`

      // Open the Facebook Share dialog in a new window
      window.open(facebookShareLink, '_blank', 'width=600,height=400')
    } else {
      console.error('Invalid currentIndex:', currentIndex)
    }
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }

  return (
    <div>
      <Modal
        isOpen={showSlider}
        onRequestClose={handleCloseSlider}
        contentLabel="Image Slider Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="relative z-10">
          <button
            onClick={handleCloseSlider}
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

        {/* Your card component or other content */}
        <div className="h-full flex flex-col justify-between rounded-lg">
          {/* top section with slider and image */}
          <div className="h-full  w-full flex flex-col md:flex-row items-center justify-center rounded-t-lg ">
            {/* Image slider content */}
            <div className="relative md:w-3/5 w-full sm:h-full overflow-hidden">
              {/* Replace the following div with your image slider component */}
              <div className="">
                <Slider {...sliderSettings} ref={sliderRef}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="h-[45vh] md:h-[100vh] overflow-hidden"
                    >
                      <Image
                        src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                        alt={image.filename}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-fit"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
              >
                &gt;
              </button>
            </div>

            {/* Form content */}
            <div className="md:w-2/5 w-full h-full overflow-auto flex justify-center">
              <div className="h-auto  md:mx-4">
                {/* This div will enable scrolling if the content exceeds the modal height */}
                <div className="h-auto overflow-y-auto">
                  {formSubmitted ? (
                    <div className="grid grid-cols-1 justify-items-center">
                      <p className="text-center text-lg">
                        Thank you for your submission!
                      </p>
                      <Image
                        alt="thank you"
                        src={
                          'https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg'
                        }
                        width={400}
                        height={300}
                      />
                      <h1 className="text-center font-bold">
                        {' '}
                        FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO
                        CALL US OR WHATSAPP US ON 9899264978, 9582827928
                      </h1>

                      <button
                        onClick={handleClose}
                        className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form
                      className="w-full max-w-md p-2 rounded-lg shadow-md overflow-y-auto"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <h2 className="sm:text-2xl text-xl font-bold pt-2 text-gray-700">
                        Our Designer will call you to help with your Interior
                        Requirements .
                      </h2>

                      <div className="flex items-center my-2">
                        <h2 className="flex-1 text-md py-2 text-center text-black uppercase">
                          Book a Visit Today
                        </h2>
                      </div>
                      {/* social share  */}
                      <div className="border-t border-b rounded-lg -mx-2 my-4">
                        <p className="mt-2 ml-2">Share this Design</p>
                        <div className="social-share my-4 flex gap-4 items-center ">
                          <button
                            onClick={handleWhatsapp}
                            type="button"
                            className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                          >
                            <Image
                              width={1000}
                              height={1000}
                              src="/images/gallery/whatsapp.png"
                              alt="Button 1"
                              className="w-full h-full object-cover"
                            />
                          </button>
                          <button
                            type="button"
                            onClick={handleInstagram}
                            className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                          >
                            <Image
                              width={1000}
                              height={1000}
                              src="/images/gallery/instagram.png"
                              alt="Button 2"
                              className="w-full h-full object-cover"
                            />
                          </button>
                          <button
                            type="button"
                            onClick={handleFacebook}
                            className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                          >
                            <Image
                              width={1000}
                              height={1000}
                              src="/images/gallery/facebook.png"
                              alt="Button 3"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-evenly my-4 mt-6">
                        <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                          <Image
                            width={1000}
                            height={1000}
                            src="/images/gallery/top.png"
                            alt=""
                            className="w-12 self-center"
                          />
                          <p className="text-[8px] text-center text-gray-700">
                            Top
                            <br /> Quality
                          </p>
                        </div>

                        <div className="flex justify-content-center flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                          <Image
                            width={1000}
                            height={1000}
                            src="/images/gallery/guarantee.png"
                            alt=""
                            className="w-12 self-center"
                          />
                          <p className="text-[8px] text-center text-gray-700">
                            7 year <br /> warranty
                          </p>
                        </div>
                        <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                          <Image
                            width={1000}
                            height={1000}
                            src="/images/gallery/save.png"
                            alt=""
                            className="w-12 self-center"
                          />
                          <p className="text-[8px] text-center text-gray-700">
                            Affordable Prices
                          </p>
                        </div>
                        <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                          <Image
                            width={1000}
                            height={1000}
                            src="/images/gallery/fast-delivery.png"
                            alt=""
                            className="w-12 self-center"
                          />
                          <p className="text-[8px] text-center text-gray-700">
                            25 Day
                            <br /> Delivery
                          </p>
                        </div>
                      </div>
                      <div className="my-8">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                          placeholder="Enter your name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-8">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                          placeholder="Enter your email"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-8">
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                          placeholder="Enter your mobile number"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-8">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                          placeholder="Enter your address"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-8">
                        <select
                          id="Interest"
                          name="Interest"
                          className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                          required
                          onChange={handleChange}
                        >
                          <option
                            className="text-gray-400"
                            value=""
                            disabled
                            selected
                          >
                            Interested in
                          </option>
                          <option value="Complete Modular Interiors">
                            Complete Modular Interiors
                          </option>
                          <option value="End to End Interiors">
                            End to End Interiors
                          </option>
                          <option value="Architectural Consultancy">
                            Architectural Consultancy
                          </option>
                          <option value="Modular Kitchens">
                            Modular Kitchens
                          </option>
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
                          <option value="Luxury Interiors">
                            Luxury Interiors
                          </option>

                          {/* Add more options as needed */}
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="mb-8 bg-green-500 hover:bg-green-600 hover:shadow-lg text-white py-3 px-6 rounded-md  w-full"
                      >
                        Book Design Session
                      </button>
                      <hr />
                      <div>
                        <Link href="/">
                          <button
                            type="button"
                            className="border-[1px] border-black bg-white hover:bg-gray-200 hover:shadow-lg py-6  px-2 rounded-md  w-full text-gray-700 my-8 flex justify-between items-center"
                          >
                            <Image
                              width={1000}
                              height={1000}
                              src="/images/gallery/calculator.png"
                              alt="Calc"
                              className="w-8 h-8 mr-2"
                            />
                            <span className="mr-auto">
                              Calculate your renovation cost
                            </span>
                            <span>
                              <ChevronRight />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* section bottom with buttons */}
          {/* <div className="sm:h-[15%] h-[20%] w-full flex flex-col sm:flex-row justify-between gap-2 rounded-b-lg my-2 mb-4">
            <div className="md:w-2/5 w-full h-full">
              <Link href="/interior-designing-estimates-pricing">
                <button className="w-full rounded-full bg-red-400 px-4 py-4 text-white hover:bg-red-500">
                  Get Quote
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  )
}

export default Gallery
