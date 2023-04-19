import { Slider } from "../../../Slider/Slider";
import "./PriceSlider.scss";

export const PriceSlider = () => {
  return (
    <div className="priceSlider">
      <div className="priceSlider__title">
        {/* TODO Why do you use double underscore after name of element? */}
      <h1 className="priceSlider__title__h1">Featured Properties</h1>
      <h2 className="priceSlider__title__h2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        incidiunt ut labore et dolore magna aliqua.
      </h2>
      </div>
      <Slider >
      <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве "  alt={'car'}/>
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'}/>
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
    <img className="slider__carPicture" src={"https://mastera-remonta.com/wp-content/uploads/2019/09/1-2.png"} aria-label="На фото бемельве " alt={'car'} />
      </Slider>  
    </div>
  );
};
