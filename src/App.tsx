import React from "react";
import Home from "./components/home/Home";
import "./App.scss";
import CollapsibleExample from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Home />
    </div>
  );
}

export default App;
