import React from "react";
import Greething from "./Greething";

const LoginPage = () => {
  const name = "KARTA"
  return (
    <div>
      <h1>Login page</h1>
      <Greething name={name}/>
    </div>
  );
}; 
export default LoginPage;
