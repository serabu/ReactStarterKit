import React, {
  ReactElement,
  ReactHTMLElement,
  ReactNode,
  useEffect,
  useRef, useState
} from "react";
import "./Slider.scss";
import { SliderProps } from "./types";
import { SliderText } from "./constants";
import { Dots } from "./Dots/Dots.";

const Slider: React.FC<SliderProps> = ({ children, count = 3, dots = true, responsible=false }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const buttonRight = useRef<HTMLDivElement | null>(null);
  const buttonLeft = useRef<HTMLDivElement | null>(null);
  const [displyBtmLeft, setDisplyBtmLeft ] = useState(false)
  const [displyBtmRight, setDisplyBtmRight ] = useState(true)
  const [sliderContainer, setContainer] = useState(0);
  const [width, setWidth] = useState();
  const [showDots, setShowDots] = useState(dots);
  const [dotsCount, setDotsCount] = useState(3);
  const [widthSlide, setWidthSlide] = useState(200);
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const [availableSlidesCount, setAvailableSlidesCount] = useState(count);
  
  const getWidth = (slider: HTMLDivElement) => {
    const container = slider.querySelector('.slideShow__container');
    const wrapper = slider.querySelector('.slideShow__wrapper');
    setWidthOfContainer((slider.querySelector('.slideShow__slide') as unknown as HTMLElement)?.offsetWidth); 
    const checkCounts = Math.round((slider.offsetWidth - 200) / widthSlide); // smt wrong here
    // setWidthOfContainer(widthSlide * availableSlidesCount);
    setAvailableSlidesCount(count < availableSlidesCount ? count : availableSlidesCount);
    // setDotsCount(container ? Math.ceil(container.children.length / checkCounts) : 0); 
  }
  
  const moveRight = (): void => {
    const isHide = availableSlidesCount <= 2
    setContainer( sliderContainer - widthOfContainer * availableSlidesCount )
    if (sliderContainer <= 0) setDisplyBtmRight(false)
    if (isHide) setDisplyBtmRight(true)
  }

  const moveLeft = (): void => {
    setContainer( sliderContainer + widthOfContainer  * availableSlidesCount )
    if (widthOfContainer + sliderContainer === 0)setDisplyBtmLeft(false);
    if (sliderContainer < 0) setDisplyBtmLeft(true);
  }

  useEffect(() => {
    if (sliderRef.current) {
      getWidth(sliderRef.current);
    }
  }, [sliderRef]);

  return (
    <div ref={sliderRef}>
      <div style={{width: width}}>
          <div className="slideShow" id="slider-1" role="list">
            <div className="slideShow__wrapper" ref={sliderWrapperRef}  role="listbox">
              <ul className="slideShow__container" role="listbox" style={{left: sliderContainer}}>
                {Array.isArray(children)
                  ? children.map((slide, i) => (
                      <li key={`item-${i}`} className="slideShow__slide">{slide}</li>
                    ))
                  : children}
              </ul>
            </div>
            <div className="slideShowPanel" role="tablist">
              <button
                className="slideShow__button slideShow__button--back"
                aria-label={SliderText.PREVIOUS_SLIDE}
                role="button"
                onClick={() => moveLeft()}
                // style={displyBtmRight? {display: block} : {display: none}}
              >
                {SliderText.PREVIOUS_SLIDE}
              </button>
              <button
                className="slideShow__button slideShow__button--next"
                aria-label={SliderText.NEXT_SLIDE}
                role="button"
                onClick={() => moveRight()}
              >
                {SliderText.NEXT_SLIDE}
              </button>
            </div>
          </div>
          { showDots && (<Dots dotsCount={dotsCount} />) }
        </div>
    </div>
  );
};

export default Slider;
