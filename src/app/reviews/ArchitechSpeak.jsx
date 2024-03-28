'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import YouTube from 'react-youtube'

const StyledYouTube = ({ videoId, opts }) => (
  <div className="rounded overflow-hidden">
    <YouTube videoId={videoId} opts={opts} />
  </div>
)

const YoutubeCarouselSection = () => {
  // Replace with your YouTube video IDs
  const videoIds = ['aErmAFhwES0', 'aErmAFhwES0', 'aErmAFhwES0']

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const youtubeOptions = {
    height: '300', // Adjust the height as needed
    width: '100%', // Take full width
  }

  return (
    <section className="pt-16 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold uppercase text-center mb-8">
          ARCHITECTS SPEAK ABOUT OUR BRAND
        </h2>

        <Carousel responsive={responsive} infinite>
          {videoIds.map((embedUrl, index) => (
            <div key={index} className="p-4">
              <StyledYouTube videoId={embedUrl} opts={youtubeOptions} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default YoutubeCarouselSection
