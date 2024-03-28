'use client'
import { useState } from 'react'
import Image from 'next/image'
const LetsConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })
  const [btnText, setBtnText] = useState('Send Message')
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
  return (
    <>
      {formSubmitted ? (
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-center text-lg">Thank you for your submission!</p>
          <Image
            alt="thank you image"
            src="/images/thankyou.png"
            width={400}
            height={300}
          />
          <h1 className="text-center font-bold w-[200px]">
            {' '}
            FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR
            WHATSAPP US ON 9899264978, 9582827928
          </h1>

          <button
            onClick={handleClose}
            className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <input
            type="text"
            name="contactNumber"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required
            className="w-full mb-8 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />
          <button
            type="submit"
            // className="py-2 px-6 hover:text-white hover:bg-black"
            // style={{ border: "1px solid black" }}
            className="w-full rounded-full border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 transition-all duration-300 bg-gradient-to-r from-lime-300 to-green-400"
          >
            {btnText}
          </button>
        </form>
      )}
    </>
  )
}

export default LetsConnectForm
