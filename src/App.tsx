import React from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider/Slider";
import * as images from './images/slider';

function App() {
  return (
    <div className="App">
      <Slider count={3} >
          <img className="slideShow__carPicture" src={images.bmw} aria-label="На фото бемельве " />
          <img className="slideShow__carPicture" src={images.audi} aria-label="На фото бемельве " />
      </Slider>
    </div>
  );
}

export default App;
