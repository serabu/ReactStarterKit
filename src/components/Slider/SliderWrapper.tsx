import React, {
} from "react";
import * as images from "../../images/slider";
import { Slider } from "./Slider";

export const SliderWrapper: React.FC = () => (
  <Slider>
    <img className="slider__carPicture" src={images.bmw} aria-label="На фото бемельве "  alt={'car'}/>
    <img className="slider__carPicture" src={images.mercedes} aria-label="На фото бемельве " alt={'car'}/>
    <img className="slider__carPicture" src={images.audi} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.ford} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.honda} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.toyota} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.chevrolet} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.dodge} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.subaru} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={images.accord} aria-label="На фото бемельве " alt={'car'} />
  </Slider>
)