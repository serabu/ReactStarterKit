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

const Slider: React.FC<SliderProps> = ({ children, count = 3, dots = false, responsible=false }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const buttonRight = useRef<HTMLDivElement | null>(null);
  const buttonLeft = useRef<HTMLDivElement | null>(null);
  const [sliderContainer, setContainer] = useState<HTMLDivElement | null>(null);
  const [width, setWidth] = useState();
  const [showDots, setShowDots] = useState();
  const [dotsCount, setDotsCount] = useState(0);
  const [widthSlide, setWidthSlide] = useState(0);
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const [availableSlidesCount, setAvailableSlidesCount] = useState(count);
  
  const getWidth = (slider: HTMLDivElement) => {
    const container = slider.querySelector('.slideShow__container');
    const wrapper = slider.querySelector('.slideShow__wrapper');
    setWidthOfContainer((slider.querySelector('.slideShow__slide') as unknown as HTMLElement)?.offsetWidth);
    const checkCounts = Math.round((slider.offsetWidth - 200) / widthSlide);
    setWidthOfContainer(widthSlide * checkCounts);
    setAvailableSlidesCount(count < availableSlidesCount ? count : availableSlidesCount);
    setDotsCount(container ? Math.ceil(container.children.length / checkCounts) : 0);
  }
  
  const moveRight = (): void => {
        // const [width, setWidth] = useState(0)
        // const onClick = () => setWidth(getSliderWidth(widthSlide?.offsetWidth, count))
        // container.style.left = setWidth
  }
  
  useEffect(() => {
    if (sliderRef.current) {
      getWidth(sliderRef.current);
    }
  }, [sliderRef]);

  return (
    <div ref={sliderRef}>
      <div className="container" style={{width: width}}>
        <div className="row">
          <div className="slideShow" id="slider-1" role="list">
            <div className="slideShow__wrapper" ref={sliderWrapperRef}  role="listbox">
              <ul className="slideShow__container" role="listbox">
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
          { showDots && (<Dots dots={dotsCount} />) }
        </div>
      </div>
    </div>
  );
};

export default Slider;
