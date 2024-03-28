'use client'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import { useState, useEffect } from 'react'
const AnalogClock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="analog-clock">
      <Clock value={date} renderNumbers={true} />
    </div>
  )
}

function Time() {
  const [liveTime, setLiveTime] = useState('')

  useEffect(() => {
    const updateLiveTime = () => {
      const currentTime = new Date().toLocaleTimeString()
      setLiveTime(currentTime)
    }

    // Update the time every second
    const intervalId = setInterval(updateLiveTime, 1000)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <ul className="border-l-4 border-black pl-2">
        <li className="mb-2 font-bold">ORGANIZATION & INDUSTRIAL BUSINESS</li>
        <li className="mb-2 font-bold">OPERATED SINCE 2008.</li>
        <li className="mb-2 font-bold">ALL RIGHTS RESERVED.</li>
        <li className="mb-2 font-bold">ALL WRONGS REVERSED.</li>
        <li className="mb-2 font-bold">DATA PRIVACY</li>
        <li className="mb-2 mt-8">
          <AnalogClock />
        </li>
        <li className="mb-2 text-sm mt-4 ml-6">{liveTime}</li>
      </ul>
    </div>
  )
}

export default Time
