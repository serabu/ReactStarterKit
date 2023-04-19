import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/state/state";
import { AsyncThunk } from "@reduxjs/toolkit";

const NotFoundCheck =
  (Component: React.FC, handler: AsyncThunk<any, any, any>, param: string) =>
  () => {
    const search = useLocation().search;
    const queryParam = new URLSearchParams(search).get(param);

    const dispatch = useAppDispatch();

    useEffect(() => {
      if (param) {
        dispatch(handler(queryParam));
      }
    }, [param]);
    return <Component />;
  };

export default NotFoundCheck;
