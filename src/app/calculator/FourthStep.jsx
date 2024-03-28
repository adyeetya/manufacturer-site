import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Download } from 'lucide-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Modal from 'react-modal'
import FormWithOTPVerification from './FormWithOTPVerification'
import Image from 'next/image'
import './modal.css'
const FourthStep = () => {
  const [spaceData, setSpaceData] = useState([])
  const [firstStepData, setFirstStepData] = useState([])
  const [totalRoomPrice, setTotalRoomPrice] = useState(0)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
    },
  }

  // Fetch spaceData and firstStepData from localStorage on component mount
  useEffect(() => {
    const localStorageSpaceData = localStorage.getItem('spaceData')
    const localStorageFirstStepData = localStorage.getItem('firstStepData')

    if (localStorageSpaceData && localStorageFirstStepData) {
      const parsedSpaceData = JSON.parse(localStorageSpaceData)
      const parsedFirstStepData = JSON.parse(localStorageFirstStepData)

      setSpaceData(parsedSpaceData)
      setFirstStepData(parsedFirstStepData)

      const total = parsedSpaceData.reduce(
        (acc, room) => acc + (room.roomPrice || 0),
        0
      )
      setTotalRoomPrice(total)
    }
  }, [])

  // Function to generate and download PDF

  const handleDownloadPDF = (event) => {
    event.preventDefault() // Prevent default form submission behavior
    console.log(event.target)
    const formData = {
      name: event.target.elements.nameInput.value,
      address: event.target.elements.addressInput.value,
      number: event.target.elements.numberInput.value,
      email: event.target.elements.emailInput.value,
      interestedIn: event.target.elements.interestedInInput.value,
    }
    // Log form data
    console.log('Form Data:', formData)
    // Reset the select element to its default value
    event.target.elements.interestedInInput.value = ''

    // download pdf part
    const doc = new jsPDF()

    // Add company logo
    const companyLogo = '/logo.png'
    doc.addImage(companyLogo, 'PNG', 10, 10, 25, 25)

    // Add company name
    const companyName = 'Design Indian Homes'
    doc.setFontSize(32)
    doc.setTextColor(40, 40, 150) // Set color to dark blue
    doc.setFont('helvetica', 'bold')
    doc.text(companyName, 50, 30)

    doc.setDrawColor(0) // Reset draw color to black

    // Add Your Details section
    const yourDetailsData = Object.entries(firstStepData)
      .filter(([key]) => key !== 'selectedOptionSet4')
      .map(([key, value]) => ({
        Label:
          key === 'selectedOptionSet1'
            ? 'House Type'
            : key === 'selectedOptionSet2'
            ? 'Number of Bedrooms'
            : key === 'selectedOptionSet3'
            ? 'New or Renovation'
            : key === 'textInput'
            ? 'City'
            : key.replace(/([A-Z])/g, ' $1').trim(),
        Value: value,
      }))

    const yourDetailsColumns = [
      { header: 'Label', dataKey: 'Label' },
      { header: 'Value', dataKey: 'Value' },
    ]

    doc.setFontSize(16)
    doc.setTextColor(100) // Set text color to gray
    doc.text('Your Details-', 10, 70)
    doc.autoTable({
      startY: 80,
      body: yourDetailsData,
      columns: yourDetailsColumns,
      theme: 'grid', // Use grid theme for a stylish look
    })

    // Add Your Requirements section
    const yPosition = doc.autoTable.previous.finalY + 10
    doc.setFontSize(16)
    doc.setTextColor(100) // Set text color to gray
    doc.text('Your Requirements-', 10, yPosition)

    const requirementsColumns = [
      { header: 'Rooms', dataKey: 'Rooms' },
      { header: 'Area', dataKey: 'Area' },
      { header: 'Package', dataKey: 'Package' },
      { header: 'Room Price Estimation', dataKey: 'Room Price Estimation' },
      { header: 'Selected Features', dataKey: 'Selected Features' },
    ]

    const spaceDataFormatted = spaceData.map((room, index) => ({
      Rooms: room.name,
      Area: room.area,
      Package: room.selectedPackage || '-',
      'Room Price Estimation': room.roomPrice ? `Rs. ${room.roomPrice}` : '-',
      'Selected Features': room.selectedPolygon
        ? room.selectedPolygon
            .map(
              (feature) => feature.charAt(0).toUpperCase() + feature.slice(1)
            )
            .join(', ')
        : '-',
    }))
    doc.autoTable({
      startY: yPosition + 10,
      body: spaceDataFormatted,
      columns: requirementsColumns,
      theme: 'grid', // Use grid theme for a stylish look
    })

    // Add horizontal line
    const hrPosition = doc.autoTable.previous.finalY + 10
    doc.setDrawColor(150) // Set draw color to light gray
    doc.line(10, hrPosition, 200, hrPosition)

    // Add Total Price Estimate
    const totalPricePosition = hrPosition + 20
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(40, 40, 150) // Set text color to dark blue
    doc.text('Total Price Estimate', 10, totalPricePosition)
    doc.setTextColor(0) // Reset text color to black
    doc.text(`Rs. ${totalRoomPrice}`, 100, totalPricePosition)

    // Save the PDF
    doc.save('Project_Scope.pdf')
  }

  return (
    <div>
      <div>
        <div className="p-4 mx-4 bg-blue-500 flex justify-between rounded shadow-lg text-white">
          <div>
            <p className="sm:text-lg">Estimated budget</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg">₹{totalRoomPrice}</h3>
            <p className="text-xxs">
              *All prices are inclusive of material and labour charges
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold m-4">Selected components</h2>
        <div className="rounded-xl sm:m-4">
          {spaceData.map((room, index) => (
            <Accordion key={index} className="mb-4">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <img
                  src="/images/bed-square.svg"
                  alt={`Accordion ${index + 1}`}
                  className="h-6 mr-4 self-center"
                />
                <div>
                  <h6 className="text-lg font-bold">{room.name}</h6>
                  <p className="text-gray-400 text-xs">{room.area} SqFt.</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className="shadow-lg">
                <div className="flex flex-col space-y-4 sm:mx-10">
                  {room.selectedPolygon &&
                    room.selectedPackage &&
                    room.roomPrice && (
                      <>
                        <div className="border-b-[1px] border-b-gray-300">
                          <h6 className="font-semibold text-lg">
                            Selected Package
                          </h6>
                          <p className="text-gray-400 text-xs capitalize">
                            {room.selectedPackage}
                          </p>
                        </div>
                        <div className="border-b-[1px] border-b-gray-300">
                          <h6 className="font-semibold text-lg">
                            Room Price Estimate
                          </h6>
                          <p className="text-gray-400 text-xs">
                            ₹{room.roomPrice}
                          </p>
                        </div>
                        <div className="border-b-[1px] border-b-gray-300">
                          <h6 className="font-semibold text-lg">
                            Selected Features
                          </h6>
                          <ul>
                            {room.selectedPolygon.map((polygon, index) => (
                              <li key={index}>
                                <p className="capitalize">{polygon}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <h2 className="text-xl font-bold m-4">Documents</h2>
        <div>
          {/* <div className="bg-white rounded flex justify-between p-4 m-4">
          <p>Project Budget</p>
          <button className="flex items-center text-blue-500">
            <span className="mr-2">
              <Download className="h-4 w-4" />
            </span>
            Download
          </button>
        </div> */}
          <div className="bg-white rounded flex justify-between p-4 m-4">
            <p>Project Scope</p>
            <button
              onClick={() => setEditModalOpen(true)}
              className="flex items-center text-blue-500"
            >
              <span className="mr-2">
                <Download className="h-4 w-4" />
              </span>
              Download
            </button>
          </div>
        </div>
        <div className="m-4">
          <p className="text-blue-500 text-xs">Disclaimer:</p>
          <p className="text-xs">
            Indicative rates based on market averages. Actual costs vary based
            on professional choice, measurements, materials, and additional
            charges like taxes, design fees, appliances, and site expenses.
          </p>
        </div>
      </div>
      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        contentLabel="Edit SpaceName Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <button
            onClick={() => setEditModalOpen(false)}
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Add your form inputs for editing the spaceName */}
        <FormWithOTPVerification handleDownloadPDF={handleDownloadPDF} />
        {/* <form className="space-y-4" onSubmit={handleDownloadPDF}>
          <div>
            <input
              type="text"
              id="nameInput"
              placeholder="Enter your name"
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <input
              type="text"
              id="addressInput"
              placeholder="Enter your address"
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <input
              type="text"
              id="numberInput"
              placeholder="Enter your number"
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email"
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="interestedInInput" className="text-gray-600 block">
              Interested In:
            </label>
            <select
              id="interestedInInput"
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select an option</option>
              <option value="Renovation">Renovation</option>
              <option value="Kitchen Work">Kitchen Work</option>
              <option value="Wardrobe Work">Wardrobe Work</option>
              <option value="House Work">House Work</option>
            </select>
          </div>

          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full"
            >
              Download
            </button>
          </div>
        </form> */}
      </Modal>
    </div>
  )
}

export default FourthStep
