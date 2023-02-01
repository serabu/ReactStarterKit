import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout/Layout";
import { Slider } from "./components/Slider/Slider";
import * as images from "./images/slider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Slider" element={<Slider>
            <img className="slider__carPicture" src={images.bmw} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.mercedes} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.audi} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.ford} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.honda} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.toyota} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.chevrolet} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.dodge} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.subaru} aria-label="На фото бемельве " />
            <img className="slider__carPicture" src={images.accord} aria-label="На фото бемельве " />
          </Slider>}></Route>
          <Route path="Canvas" element={<Canvas />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
