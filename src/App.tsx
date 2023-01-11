import React, { useRef } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider/Slider";
import * as images from './images/slider';

function App() {
  return (
    <div className="App">
      <Slider counts={3}>
          <img className="slideShow__carPicture" src={images.bmw} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.mercedes} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.audi} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.ford} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.honda} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.toyota} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.chevrolet} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.dodge} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.subaru} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.accord} aria-label="На фото бемельве " />
      </Slider>
    </div>
  );
}

export default App;
