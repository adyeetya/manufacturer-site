import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls flex justify-end">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((card, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex flex-col items-start">
                <img
                  src={card.imageUrl}
                  alt={card.heading}
                  className="w-full h-auto rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{card.heading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
