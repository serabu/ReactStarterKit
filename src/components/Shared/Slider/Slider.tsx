import React, {
  useEffect,
  useRef, 
  useState, 
} from "react";
import "./Slider.scss";
import { SliderProps } from "./types";
import { SliderText, SliderMoveAction } from "./constants";
import { Dots } from "./Dots/Dots.";
import { debounce } from "../../../helpers/helpers";

export const Slider: React.FC<SliderProps> = ({ children, count = 4, dots = true }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderListRef = useRef<HTMLUListElement>(null);
  const sliderDotsListRef = useRef<HTMLDivElement>(null);
  const buttonRight = useRef<HTMLButtonElement | null>(null);
  const buttonLeft = useRef<HTMLButtonElement | null>(null);

  const [width, setWidth] = useState(0);
  const [isRightButton, setRightButton] = useState(true);
  const [isLeftButton, setLeftButton] = useState(false);
  const [dotsCount, setDotsCount] = useState(0);
  const [availableSlidesCount, setAvailableSlidesCount] = useState(count);
  const [left, setLeft] = useState(0);
  const [dotActive, setDotActive] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: 0, height: 0
  });

  const getWidth = (slider: HTMLDivElement) => {
    const list = slider.querySelector('.slider__list');
    const slideWidth = (slider.querySelector('.slider__slide') as unknown as HTMLElement)?.offsetWidth;
    const checkCountSlides = Math.round((slider.offsetWidth - 200) / slideWidth);
    const availableSlides = count < checkCountSlides ? count : checkCountSlides;
    setAvailableSlidesCount(availableSlides);
    setWidth(slideWidth * availableSlides);
    setDotsCount(list ? Math.ceil(list.children.length / availableSlides) : 0);
  }

  const calcIndex = (step: SliderMoveAction) => {
    if (sliderDotsListRef.current) {
      const dotsList = [...(sliderDotsListRef?.current?.querySelector('ul') as HTMLUListElement).children];
      const dot = dotsList
        .find(el => [...el.classList]
          .includes('active'));
      const index = dotsList.indexOf(dot as HTMLElement);
      setDotActive(step === SliderMoveAction.RIGHT ? index + 1 : index - 1);
    }
  }

  const moveRight =  (): void => {
    if (sliderListRef?.current) {
      const list = sliderListRef?.current as unknown as HTMLElement;
      const leftPosition = list.offsetLeft;
      const isShowleft = left <= 0;
      const isShowRight = availableSlidesCount <= 2
        ? leftPosition + (list.offsetWidth - width) - width === 0
        : list.offsetWidth + leftPosition - width < width;
      setLeft(leftPosition - width);
      setRightButton(!isShowRight);
      setLeftButton(isShowleft);
      calcIndex(SliderMoveAction.RIGHT);
    }
  }

  const moveLeft =  (): void => {
    if (sliderListRef?.current) {
      const list = sliderListRef?.current as unknown as HTMLElement;
      const leftPosition = list.offsetLeft;
      const isShowleft =  -width === leftPosition;
      const isShowRight = true;
      setLeft(leftPosition + width);
      setLeftButton(!isShowleft);
      setRightButton(isShowRight);
      calcIndex(SliderMoveAction.LEFT);
    }
  }

  const dotHandler = (index: number) => { 
    const dotsList = [...(sliderDotsListRef?.current?.querySelector('ul') as HTMLUListElement).children];
    const isShowleft = index === 0;
    const isShowRight = index === dotsList.length - 1;
    setDotActive(index);
    setLeft(-width * index);
    setRightButton(!isShowRight);
    setLeftButton(!isShowleft);
  }

  const updateDimensions = () => {
    if(sliderRef.current) {
        setDimensions({
            width: sliderRef.current.offsetWidth,
            height: sliderRef.current.offsetHeight
        });
    }
}

  useEffect(() => {
    const handleResize = () => {
    if (sliderRef.current) {  
      updateDimensions()   
      getWidth(sliderRef.current);
      }
    }
    window.addEventListener('resize',debounce(handleResize, 500))
  }, [dimensions])
  
 
  useEffect(() => {
    if (sliderRef.current) {
      getWidth(sliderRef.current);
    }
  }, [sliderRef]);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider__wrapper" style={{ width }}>
        <ul className="slider__list" style={{left}} ref={sliderListRef}>
          {Array.isArray(children)
            ? children.map((slide, i) => (
              <li key={`item-${i}`} className="slider__slide">{slide}</li>
            ))
            : children}
        </ul>
      </div>
      <div className="slider__buttons" role="tablist">
      {isLeftButton && (
        <button
          className="slider__button slider__button--back"
          aria-label={SliderText.PREVIOUS_SLIDE}
          role="button"
          onClick={debounce(() => moveLeft(), 250)}
          ref={buttonLeft}
        >
          {SliderText.PREVIOUS_SLIDE}
        </button>
        )}
        {isRightButton && (
          <button
            className="slider__button slider__button--next"
            aria-label={SliderText.NEXT_SLIDE}
            role="button"
            onClick={debounce(() => moveRight(), 250)}
            ref={buttonRight}
          >
            {SliderText.NEXT_SLIDE}
          </button>
        )}
      </div>
      {dots && (
        <div className="slider__dots" ref={sliderDotsListRef}>
          <Dots dotsCount={dotsCount} indexOfActive={dotActive} dotHandler={dotHandler}/>
        </div>
      )}
    </div>
  );
};
