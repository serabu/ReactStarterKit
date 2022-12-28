import React from "react";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { updateCountAction } from "../../action/action";

import style from "./Style.Module.scss";
function Home() {
  const countSelector = useSelector(state => state.toolkit.count)
  
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className={style.home}>home page</h2>
      <h1>счет {countSelector} </h1>
      <Button variant="primary" onClick={() => dispatch(updateCountAction(countSelector + 1))}>Плюс</Button>
      <Button variant="primary" onClick={() => dispatch(updateCountAction(countSelector - 1))}>Минус</Button>
    </div>
  );
}

export default Home;

