'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const CustomerReviewSection = () => {
  const MAX_CHARACTERS = 120 // Maximum characters to display before truncating

  //   const [expandedReviews, setExpandedReviews] = useState([])
  const [expandedReviews, setExpandedReviews] = useState(null)
  const handleReadMoreToggle = (customerId) => {
    setExpandedReviews((prevExpanded) =>
      prevExpanded === customerId ? null : customerId
    )
  }
  const customerData = [
    {
      id: 1,
      name: 'Reena Batra',
      photo: '/images/customers/customer1.jpg', // Replace with the actual path to customer photo
      comment:
        'Design Indian Kitchen made my beautiful bathroom Vanities, extensively elegant wardrobes and the Kitchen which actually tastes good, my guests always compliment us for the beautiful decor of home which is represented by the designs and ideas from the highly efficient team. Perfect job !',
    },
    {
      id: 2,
      name: 'Sandeep Verma',
      photo: '/images/customers/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    {
      id: 3,
      name: 'Kavita Bajaj',
      photo: '/images/customers/customer3.jpg', // Replace with the actual path to customer photo
      comment:
        'I loved the way the team works with full enthusiasm. Highly professional and skilled labour, their work made my kitchen like "a dream come true" and its like "Oh wow!". Design Indian Kitchen, having you in my house really made a huge difference.',
    },
    {
      id: 4,
      name: 'Sheeba Bhatia ',
      photo: '/images/customers/customer4.jpg', // Replace with the actual path to customer photo
      comment:
        'Praise to Design Indian Kitchen for handling all my stress !! I earlier felt that it would be so difficult and time consuming to get my interiors done however I thankfully contacted Mr Saurabh through their website who assured me timely delivery of Kitchen and wardrobes with the beautiful designs which could match my criteria, and yes the best quality. My wife and I love it.',
    },
    {
      id: 5,
      name: 'Gurpreet Kaur ',
      photo: '/images/customers/ku6.jpg', // Replace with the actual path to customer photo
      comment:
        'You have a great Choice ! - is the exact compliment I often get from every guest who visits my home and I pass on the same to Design Indian Kitchen for showing extra efforts in handling my project on making it from a house to the home sweet home. I owe you my big thanks for the modular kitchen, wardrobes and the wooden tiles that you suggested to me and then applied the same.',
    },
    {
      id: 6,
      name: 'Kanvi Rawat',
      photo: '/images/customers/ku7.jpg', // Replace with the actual path to customer photo
      comment:
        'I am so fortunate to have a young talented man working for my house to help in making it a big dream project and your well behaved team who is working with complete focus. I had no idea my kitchen could look this good!',
    },
    {
      id: 7,
      name: 'Gayatri Chopra',
      photo: '/images/customers/ku8.jpg', // Replace with the actual path to customer photo
      comment:
        ' Design Indian Kitchen is a leading modular kitchen brand in Delhi and Gurgaon and they are providing the timely delivery of materials with the beautiful finishings. Good job !',
    },
    {
      id: 8,
      name: 'Karan Arora',
      photo: '/images/customers/ku9.jpg',
      comment:
        ' I just wanted to let you know that its been a great experience to have you working for my home, with the modular Kitchen and Vanities that you have installed in my house, it now looks like a miracle which could have not been completed without the best efforts of Design Indian Kitchen.',
    },
    {
      id: 9,
      name: 'Adhiti Sen ',
      photo: '/images/customers/ku10.jpg',
      comment:
        'Well done for installing your ideas in my kitchen , everything is completed within the perfect time frame and in a perfect manner. I appreciate your quality, service and best efforts. I will look forward to have you working for my house in future.',
    },
    {
      id: 10,
      name: 'Renu Singh',
      photo: '/images/customers/ku11.jpg',
      comment:
        ' I am so fortunate to have a young talented man working for my house to help in making it a big dream project and your well behaved team who is working with complete focus. I had no idea my kitchen could look this good!',
    },
    {
      id: 11,
      name: 'Rita Malhotra ',
      photo: '/images/customers/ku12.jpg',
      comment:
        'Thank you for pulling everyone/everything together on such short notice. I got my wardrobes manufactured and installed within such a short time-span. Also, it was so elegant and budget-friendly.',
    },
    {
      id: 12,
      name: 'Pooja Gabba  ',
      photo: '/images/customers/ku13.jpg',
      comment:
        'I got my "Modular Wardrobes" done and LOVE IT. The size and length are perfect. The design is amazing and looks exactly what I wanted. Thankyou for such amazing work.',
    },
    // Add more customer data as needed
  ]

  return (
    <section className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto">
        <h2 className="sm:text-3xl uppercase font-bold text-center mb-8">
          CUSTOMERS RECOMMENDATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className={`bg-white p-6 rounded-lg shadow-md ${
                expandedReviews === customer.id
                  ? 'h-auto'
                  : 'h-auto md:h-[350px]'
              }`}
            >
              <Image
                width={1000}
                height={1000}
                src={customer.photo} // Replace with the actual path to customer photo
                alt={customer.name}
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 text-center font-semibold">
                {customer.name}
              </p>
              <p className="text-gray-600 text-center">
                {expandedReviews === customer.id
                  ? customer.comment
                  : `${customer.comment.slice(0, MAX_CHARACTERS)}${
                      customer.comment.length > MAX_CHARACTERS ? '...' : ''
                    }`}
              </p>
              {customer.comment.length > MAX_CHARACTERS && (
                <div className="flex justify-center items-center">
                  <button
                    className="text-green-500 hover:bg-green-500 hover:text-white border border-green-500 px-3 py-1 rounded mt-2 transition-all duration-300 ease-in-out"
                    onClick={() => handleReadMoreToggle(customer.id)}
                  >
                    {expandedReviews === customer.id
                      ? 'Read Less'
                      : 'Read More'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviewSection
