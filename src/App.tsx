import React from "react";
import Home from "./components/home/Home";
import "./App.scss";
import NavBar from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slaider/Slaider";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Slider />
    </div>
  );
}

export default App;
