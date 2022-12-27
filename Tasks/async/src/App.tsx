import React from "react";
import Home from "./components/home";
import "./App.scss";
import {Route, Routes} from "react-router-dom"
import LoginPage from "./components/auth/login";
import PrivateRoute from "./utils/router/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        </Route>    
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
