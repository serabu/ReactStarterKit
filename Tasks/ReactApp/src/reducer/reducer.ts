import { createReducer } from "@reduxjs/toolkit";
import { updateCountAction } from "../action/action";
import { ICoutAction } from "../Interface/Action";
import { ICounerTyps } from "../Interface/Counts";


const initialState: ICounerTyps = {
  count: 0,
};

export default createReducer(initialState, {
  [updateCountAction]: (state = initialState, {payload}: ICoutAction ) => ({
    ...state,
    count: payload
  })
});

