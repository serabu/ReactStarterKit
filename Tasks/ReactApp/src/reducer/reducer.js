import { createReducer } from "@reduxjs/toolkit";
import { updateCountAction } from "../action/action";
// дефолтное состояние туть
const initialState = {
    count: 0,
  };

export default createReducer(initialState, {
    [updateCountAction]: function (state, action) {
      state.count = action.payload
    },
  });