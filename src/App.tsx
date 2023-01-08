import React from "react";
import Home from "./components/home/Home";
import "./App.scss";
import NavBar from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
