import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Canvas from "./components/Canvas/Canvas";
import { NotFoundPage } from "./components/ErorPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { SliderWrapper } from "./components/Slider/SliderWrapper";
import { TestPage } from "./components/TestPage/TestPage";
import {  OverviewUserComponent } from "./components/Users/OverviewUser/OverviewUser";

import { UsersList } from "./components/Users/UsersList/UsersList";
import { СreateUser } from "./components/Users/СreateUser/СreateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="form" element={<СreateUser />}></Route>
          <Route path="/userList" element={<UsersList />}></Route>
          <Route path="user" element={<OverviewUserComponent />} />
          <Route path="slider" element={<SliderWrapper />}></Route>
          <Route path="canvas" element={<Canvas />}></Route>
          <Route path="404" element={<NotFoundPage />}></Route>
        </Route>
        <Route path="TestPage" element={<TestPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
