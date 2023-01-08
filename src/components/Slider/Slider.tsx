import React, { ReactElement, ReactHTMLElement, ReactNode } from "react";
import './Slider.scss';

import { SliderProps } from './types';
import { SliderText } from './constants';

const Slider: React.FC<SliderProps> = ({ children, count = 1 }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="slideShow" id="slider-1" role="list">
          <div className="slideShow__wrapper" role="listbox">
            <ul className="slideShow__container" role="listbox">
              {
                Array.isArray(children)
                  ?
                  children.map(slide => (
                    <li className="slideShow__slide">
                      {slide}
                    </li>
                  ))
                  : children
              }
            </ul>
          </div>
          <div className="slideShowPanel" role="tablist">
            <button className="slideShow__button slideShow__button--back" aria-label={SliderText.PREVIOUS_SLIDE} role="button"
            >{SliderText.PREVIOUS_SLIDE}</button>
            <button className="slideShow__button slideShow__button--next" aria-label={SliderText.NEXT_SLIDE} role="button"
            >{SliderText.NEXT_SLIDE}</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Slider;