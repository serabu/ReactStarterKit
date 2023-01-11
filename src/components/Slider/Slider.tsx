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

const clearSlider = (container, buttonLeft, buttonRight) => {
  container.style.left = "0px";
  buttonLeft.style.display = "none";
  buttonRight.style.display = "block";
};
// TODO: Add types
const Slider: React.FC<SliderProps> = ({ children, count = 1, dots = false, responsible=false }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // TODO: All hanlders here
  // TODO: Implement one method for find of width of slider like getSliderWidth(<props what you need!>)
  useEffect(() => {
    if (sliderRef !== null) {
      const buttonLeft = sliderRef?.current?.querySelector<HTMLElement>(".slideShow__button--back");
      // TODO: find other elements
      
      // TODO use getSliderWidth here;
    }
  }, [sliderRef]);

  return (
    <div ref={sliderRef}>
      <div className="container">
        <div className="row">
          <div className="slideShow" id="slider-1" role="list">
            <div className="slideShow__wrapper" role="listbox">
              <ul className="slideShow__container" role="listbox">
                {Array.isArray(children)
                  ? children.map((slide) => (
                      <li className="slideShow__slide">{slide}</li>
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
              >
                {SliderText.NEXT_SLIDE}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
