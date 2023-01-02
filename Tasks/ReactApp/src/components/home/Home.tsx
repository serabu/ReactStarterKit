import React, { Dispatch } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateCountAction } from "../../action/action";
import { UseTypedSelector } from "../../hooks/useTypsSelector";
import { ICoutAction } from "../../Interface/Action";


import style from "./Style.module.scss";

const Home: React.FC = () => {
  const countSelector = UseTypedSelector((state) => state.toolkit.count);

  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={style.home__header}>home page</h2>
      <h1>счет {countSelector} </h1>
      <Button
        variant="primary"
        onClick={() => dispatch(updateCountAction(countSelector + 1))}
      >
        Плюс
      </Button>
      <Button
        variant="primary"
        onClick={() => dispatch(updateCountAction(countSelector - 1))}
      >
        Минус
      </Button>
    </div>
  );
};

export default Home;
