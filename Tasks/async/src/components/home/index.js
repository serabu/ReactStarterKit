import React from "react";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../../store/reducer";

import style from "./style.module.scss";
function Home() {
  const count = useSelector(state => state.toolkit.count)
  
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className={style.header__home}>home page</h2>
      <h1>счет {count} </h1>
      <Button variant="primary" onClick={() => dispatch(plus())}>Плюс</Button>
      <Button variant="primary" onClick={() => dispatch(minus())}>минус</Button>
    </div>
  );
}

export default Home;

