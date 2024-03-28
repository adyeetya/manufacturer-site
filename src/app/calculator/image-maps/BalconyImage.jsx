'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSpaceData } from '../../../components/redux/actions/secondStepActions'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
const SvgMap = ({ data, name }) => {
  const router = useRouter()
  const pricing = {
    premium: {
      Walls: { pricePerSqFt: 55 },
      Door: { price: 20000 },
      StudyTables: { pricePerSqFt: 800 },
      upvcWindow: { pricePerSqFt: 750 },
      FalseCeiling: { pricePerSqFt: 170 },
      Electrical: { price: 1300 },
      Flooring: { pricePerSqFt: 170 },
    },
    luxury: {
      Walls: { pricePerSqFt: 65 },
      Door: { price: 25000 },
      StudyTables: { pricePerSqFt: 1100 },
      upvcWindow: { pricePerSqFt: 1050 },
      FalseCeiling: { pricePerSqFt: 195 },
      Electrical: { price: 3000 },
      Flooring: { pricePerSqFt: 210 },
    },
    ultraLuxury: {
      Walls: { pricePerSqFt: 90 },
      Door: { price: 36000 },
      StudyTables: { pricePerSqFt: 1500 },
      upvcWindow: { pricePerSqFt: 1450 },
      FalseCeiling: { pricePerSqFt: 235 },
      Electrical: { price: 4000 },
      Flooring: { pricePerSqFt: 450 },
    },
  }

  const initialSquareFootage = {
    FalseCeiling: 50,
    electrical: 10,
    Flooring: 50,
    StudyTables: 50,
    Door: 0,
    upvcWindow: 80,
    Walls: 122,
  }
  console.log('data: ', data)
  console.log('name: ', name)
  const [selectedPolygon, setSelectedPolygon] = useState([])
  const [selectedPackage, setSelectedPackage] = useState('premium') // Default to premium
  const [spaceSquareFootage, setSpaceSquareFootage] = useState({}) // New state for square footage

  const [updatedData, setUpdatedData] = useState(data)
  const [roomPrice, setRoomPrice] = useState(0)

  // to reset the selectedPolygon and roomPrice to back to inital state when package is changed
  // useEffect(() => {
  //   // Reset selectedPolygon to an empty array
  //   setSelectedPolygon([])

  //   // Reset roomPrice to 0
  //   setRoomPrice(0)
  // }, [selectedPackage])

  console.log('roomPrice: ', roomPrice)
  const updateData = () => {
    setUpdatedData((prevData) =>
      prevData.map((item) =>
        item.name === name
          ? { ...item, selectedPolygon, selectedPackage, roomPrice }
          : item
      )
    )
  }
  useEffect(() => {
    updateData()
  }, [selectedPolygon, selectedPackage, roomPrice])

  const [editableSquareFootage, setEditableSquareFootage] =
    useState(initialSquareFootage)

  const handlePolygonClick = (polygonId) => {
    const isSelected = selectedPolygon.includes(polygonId)

    // Check if the polygon is already selected
    if (isSelected) {
      // Polygon is already selected, remove it from the selected polygons
      setSelectedPolygon((prevSelected) =>
        prevSelected.filter((id) => id !== polygonId)
      )

      // Subtract the price of the deselected polygon from the room price
      const priceOfDeselectedPolygon = calculateSpacePrice(
        polygonId,
        selectedPackage
      )
      setRoomPrice(
        (prevRoomPrice) => prevRoomPrice - parseFloat(priceOfDeselectedPolygon)
      )
    } else {
      // Polygon is not selected, add it to the selected polygons
      setSelectedPolygon((prevSelected) => [...prevSelected, polygonId])

      // Add the price of the selected polygon to the room price
      const priceOfSelectedPolygon = calculateSpacePrice(
        polygonId,
        selectedPackage
      )
      setRoomPrice(
        (prevRoomPrice) => prevRoomPrice + parseFloat(priceOfSelectedPolygon)
      )
    }

    // Update the data
    updateData()
  }

  const calculateSpacePrice = (polygonId, selectedPackage) => {
    const component = pricing[selectedPackage]?.[polygonId]
    if (!component) return 0 // Return 0 if the component doesn't exist

    // Check if the component has price per square foot
    if ('pricePerSqFt' in component) {
      const pricePerSqFt = component.pricePerSqFt || 0
      const squareFootage = editableSquareFootage[polygonId] || 0

      return (pricePerSqFt * squareFootage).toFixed(2)
    } else {
      // If not, return the fixed price directly

      return component.price.toFixed(2)
    }
  }

  const handleEditSquareFootage = (polygonId) => {
    const newSquareFootage = prompt(
      `Enter new square footage for ${polygonId}:`,
      editableSquareFootage[polygonId]
    )

    if (!isNaN(newSquareFootage) && newSquareFootage !== null) {
      const updatedSquareFootage = {
        ...editableSquareFootage,
        [polygonId]: parseFloat(newSquareFootage),
      }
      setEditableSquareFootage(updatedSquareFootage)

      // Recalculate room price
      const priceOfSelectedPolygon = calculateSpacePrice(
        polygonId,
        selectedPackage
      )
      const updatedRoomPrice =
        parseFloat(roomPrice) - parseFloat(priceOfSelectedPolygon) // subtract old price
      setRoomPrice(
        updatedRoomPrice +
          parseFloat(newSquareFootage) *
            parseFloat(pricing[selectedPackage][polygonId].pricePerSqFt)
      ) // add new price
      updateData() // Update the data after room price is updated
    }
  }
  const handleSquareFootageChange = (polygonId, value) => {
    setSpaceSquareFootage((prevSquareFootage) => ({
      ...prevSquareFootage,
      [polygonId]: parseFloat(value) || 0,
    }))
    updateData()
  }
  const handleTabChange = (selectedTab) => {
    setSelectedPackage(selectedTab)

    // Recalculate room price based on the newly selected package
    let newRoomPrice = 0
    selectedPolygon.forEach((polygon) => {
      newRoomPrice += parseFloat(calculateSpacePrice(polygon, selectedTab))
    })

    setRoomPrice(newRoomPrice)

    // Update the data
    updateData()
  }
  const renderTab = (tabName) => {
    const isActive = selectedPackage === tabName

    return (
      <button
        key={tabName}
        onClick={() => handleTabChange(tabName)}
        className={`border px-4 py-3 text-base focus:outline-none rounded ${
          isActive ? 'bg-green-500 text-white' : 'bg-white text-black'
        } ${
          isActive
            ? 'hover:bg-green-600 hover:text-white'
            : 'hover:bg-gray-200 hover:text-black'
        }`}
      >
        {tabName}
      </button>
    )
  }

  console.log('updatedData: ', updatedData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateSpaceData(updatedData))
  }, [dispatch, updatedData])

  const spaceData = useSelector((state) => state.secondStep.spaceData)
  console.log('Space Data from redux:', spaceData)

  const handleSave = () => {
    // Retrieve existing spaceData from localStorage
    const localStorageSpaceData = localStorage.getItem('spaceData')

    // Check if there is existing spaceData in localStorage
    if (localStorageSpaceData) {
      // Parse the existing spaceData
      const parsedSpaceData = JSON.parse(localStorageSpaceData)

      // Find the index of the item with the same name as the current page
      const index = parsedSpaceData.findIndex((item) => item.name === name)

      // If an item with the same name exists, update its data
      if (index !== -1) {
        parsedSpaceData[index] = {
          ...parsedSpaceData[index],
          selectedPolygon,
          selectedPackage,
          roomPrice,
        }

        // Update the localStorage with the updated spaceData
        localStorage.setItem('spaceData', JSON.stringify(parsedSpaceData))
        alert('Space data updated successfully!')
      } else {
        // If no item with the same name exists, show an alert
        alert(`No data found for ${name} in localStorage`)
      }
    } else {
      // If no spaceData exists in localStorage, set it with the current data
      localStorage.setItem('spaceData', JSON.stringify(spaceData))
      alert('Space data saved successfully!')
    }
    router.push('/calculator?step=2')
  }

  return (
    <>
      <div className="p-4 m-4 bg-blue-500 flex justify-between rounded shadow-lg text-white">
        <div>
          <p className="text-xs">Room budget</p>
          <h3>₹{roomPrice}</h3>
          <p className="text-xxs">
            *All prices are inclusive of material and labour charges
          </p>
        </div>
      </div>
      <div className="m-4">
        <p>
          First select your Package then Tap the desired components and add to
          your project&apos;s scope
        </p>
      </div>
      <div>
        <div className="flex justify-center sm:text-3xl text-xl font-bold mt-8">
          <h2>Select Your Packages</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-12 gap-4 justify-center my-4 mb-8  bg-white px-8 py-4">
          {renderTab('premium')}
          {renderTab('luxury')}
          {renderTab('ultraLuxury')}
        </div>

        <div className="flex justify-center sm:text-3xl text-xl font-bold my-4">
          <h2>Select Your Components</h2>
        </div>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 3069 2035"
          style={{
            backgroundImage: 'url("/images/calculator/balcony.jpg")',
            backgroundSize: 'cover',
          }}
        >
          {/* false ceiling*/}
          <polygon
            points="514,5,2295,0,1856,371,1053,369"
            fill={
              selectedPolygon.includes('FalseCeiling') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('FalseCeiling')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="1419.5"
            y="143.25"
            width="339.6063995361328"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>

          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="1484.5"
            y="186.25"
            fontSize={40}
            id="FalseCeiling"
            onClick={() => handlePolygonClick('FalseCeiling')}
            className="cursor-pointer"
            style={{ color: 'black' }}
          >
            False Ceiling
          </text>

          {/* ------Electrical----------------- */}

          <polygon
            points="2734,631,2975,593,2967,778,2731,723"
            fill={
              selectedPolygon.includes('Electrical') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Electrical')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="2841.75"
            y="638.25"
            width="272.3408508300781"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="2906.75"
            y="681.25"
            fontSize={40}
            className="cursor-pointer"
            id="Electrical"
            onClick={() => handlePolygonClick('Electrical')}
            style={{ color: 'black' }}
          >
            Electrical
          </text>
          {/* ---Flooring---------- */}
          <polygon
            points="1106,962,1860,967,2134,1152,2063,1265,1993,1244,1898,1228,1849,1230,1800,1244,1770,1268,1754,1287,1738,1306,1730,1325,1659,1298,1648,1320,1643,1358,1640,1401,1640,1439,1638,1469,1635,1507,1638,1545,1635,1569,1638,1601,1638,1629,1635,1656,1627,1683,1662,1691,1711,1694,1705,1653,1757,1661,1833,1672,1868,1675,1917,1680,1971,1694,1963,1734,1993,1734,2042,1734,2069,1729,2077,1691,2117,1675,2234,1225,3047,1769,3045,2032,0,2032,3,1707,694,1241,830,1585,811,1618,830,1634,895,1631,917,1637,914,1607,998,1615,1063,1618,1158,1615,1174,1615,1188,1648,1272,1645,1266,1596,1266,1490,1444,1488,1441,1531,1383,1539,1359,1561,1369,1593,1402,1601,1440,1615,1475,1612,1508,1607,1529,1577,1516,1545,1483,1536,1483,1466,1486,1414,1486,1333,1536,1325,1590,1301,1614,1263,1601,1236,1563,1222,1482,1203,1433,1203,1400,1211,1354,1222,1322,1244,1316,1284,1338,1303,1365,1317,1398,1328,1444,1330,1444,1363,1446,1398,1444,1431,1444,1461,1446,1488,1267,1490,1262,1295,1192,1290,1170,1260,1145,1241,1110,1225,1080,1222,1042,1217,991,1217,948,1211,923,1209,896,1214,880,1190,863,1165,845,1141"
            fill={
              selectedPolygon.includes('Flooring') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Flooring')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="1455.1100917431193"
            y="1406.2477064220184"
            width="252.86639404296875"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="1520.1100917431193"
            y="1449.2477064220184"
            fontSize={40}
            className="cursor-pointer"
            id="Flooring"
            onClick={() => handlePolygonClick('Flooring')}
            style={{ color: 'black' }}
          >
            Flooring
          </text>

          {/* -------------- UPVC Window ----------- */}
          <polygon
            points="2021,463,2024,921,2601,1225,2615,298"
            fill={
              selectedPolygon.includes('upvcWindow') ? 'green' : 'transparent'
            }
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('upvcWindow')}
            style={{ cursor: 'pointer' }}
          />
          <rect
            x="2305.25"
            y="683.75"
            width="372.3712463378906"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="2370.25"
            y="726.75"
            fontSize={40}
            id="upvcWindow"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('upvcWindow')}
            style={{ color: 'black' }}
          >
            UPVC Window
          </text>
          {/* -------------- Walls ----------- */}

          <polygon
            points="1861,366,2309,-3,3060,-3,3065,588,2975,591,2734,626,2612,612,2615,290,2021,463,2024,927,2604,1230,2612,612,2734,626,2731,729,2748,729,2970,778,2975,591,3065,588,3051,1767,2238,1222,2257,1127,2230,1097,2192,1084,2162,1108,2135,1149,1864,967"
            fill={selectedPolygon.includes('Walls') ? 'green' : 'transparent'}
            fillOpacity="0.2"
            onClick={() => handlePolygonClick('Walls')}
            style={{ cursor: 'pointer' }}
          />

          <rect
            x="2522.4615384615386"
            y="720.8846153846154"
            width="177.46387481689453"
            height="60"
            fill="#282828"
            rx="30"
            opacity="0.3"
            ry="30"
            class="dynamic-rectangle cursor-pointer"
          ></rect>
          <text
            fill="white"
            opacity="0.75"
            fontWeight={400}
            x="2587.4615384615386"
            y="763.8846153846154"
            fontSize={40}
            id="Walls"
            className="cursor-pointer"
            onClick={() => handlePolygonClick('Walls')}
            style={{ color: 'black' }}
          >
            Walls
          </text>

          {/* -------------------------------------- */}
        </svg>

        <div className="mt-8">
          {selectedPolygon.map((polygon) => (
            <div
              className="flow-root"
              key={polygon}
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '10px',
                marginLeft: '20px',
                marginRight: '20px',
                backgroundColor: 'white',
                marginTop: '10px',
              }}
            >
              <div className="float-left">
                <span>{polygon} </span>
                {polygon === 'FalseCeiling' ||
                polygon === 'Flooring' ||
                polygon === 'Walls' ||
                polygon === 'crockeryUnit' ||
                polygon == 'upvcWindow' ||
                polygon === 'falseCeiling' ||
                polygon === 'StudyTables' ? (
                  <span
                    style={{ cursor: 'pointer', fontSize: '12px' }}
                    onClick={() => handleEditSquareFootage(polygon)}
                  >
                    ✏️ Edit
                  </span>
                ) : null}
              </div>
              <div></div>
              <div className="float-right">
                {pricing[selectedPackage]?.[polygon]?.pricePerSqFt ? (
                  <span style={{ color: 'green', fontSize: '20px' }}>
                    ₹{calculateSpacePrice(polygon, selectedPackage)}
                  </span>
                ) : (
                  <span style={{ color: 'green', fontSize: '20px' }}>
                    ₹{pricing[selectedPackage]?.[polygon]?.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div>
        Selected Polygon:{' '}
        {selectedPolygon.map((polygon) => `${polygon},`) || 'None'}
      </div> */}
      </div>
      <div className="m-4">
        <p className="text-blue-500 text-xs">Disclaimer:</p>
        <p className="text-xs">
          Indicative rates based on market averages. Actual costs vary based on
          professional choice, measurements, materials, and additional charges
          like taxes, design fees, appliances, and site expenses.
        </p>
      </div>
      <div className="bg-white flex justify-center py-4 sm:px-12 w-full rounded-b-lg shadow-lg">
        <button
          onClick={handleSave}
          className="text-lg shadow-md hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Save
        </button>
      </div>
    </>
  )
}

export default SvgMap
