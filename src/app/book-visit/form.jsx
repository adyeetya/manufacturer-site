'use client'
import Image from 'next/image';
import React from 'react'

const ContactFormSection = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submit clicked')

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      message: document.getElementById('message').value,
      requirement: document.getElementById('requirement').value,
    }
    try {
      setBtnText('Uploading...')
      const response = await fetch('m.designindianhomes.com//upload-postfooter-form', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setBtnText('Done')
        console.log('Form data and file uploaded successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
      } else {
        setBtnText('Something Went Wrong')
        console.error('Form data and file upload failed.')
      }
    } catch (error) {
      setBtnText('Something Went Wrong')
      console.error('Error during form data and file upload:', error)
    }
  };


  return (
    <section className="py-12 bg-gray-100 md:px-28">
      <div className="container mx-auto flex items-center w-2/3">
        {/* Left Image */}
        <div className="w-1/3 pr-8">
          <Image
            width={1000}
            height={1000}
            src="/images/contact-form.avif" // Replace with the path to your image
            alt="Contact Form"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Right Form */}
        <form method="post" onSubmit={handleSubmit} className="w-2/3 pl-8">
          <div className="">
            <h2 className="text-3xl font-bold mb-6 uppercase">Contact Us</h2>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Number
                </label>
                <input
                  id="number"
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Select a Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Second Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  I am Interested in
                </label>
                <select
                  id="requirement"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option> Modular Kitchens
                
                 </option>
                  <option> 
                  Wardrobes
                 </option>
                  <option> 
                  Vanities
                  </option>
                  <option> 
                  Dressers
                  </option>
                  <option>
                  TV Units
                  </option>
                  <option> 
                  Crockery Units
                 </option>
                  <option> 
                  Glass Partitions
                  </option>
                  <option> 
                  Mandir
                  </option>
                  <option>
                  Bar
                 </option>
                  <option> 
                  Side Tables
                  </option>
                  <option>
                    Home Office
                 </option>
                <option>
                  Foyer Cabinets</option>
                 
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="1"
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-500 text-white w-full hover:bg-green-600 rounded-full focus:outline-none focus:ring focus:border-green-300"
              >
                Submit
              </button>
            </div>

            {/* Submit Button */}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
