import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { updateCountAction } from "../action/action";
import { ICountState } from "../types/Counter.types";

 const initialState: ICountState = {
  count: 0,
};

export default createReducer(initialState , (builder) => {
  builder.addCase(
    updateCountAction, ( state = initialState, { payload }: PayloadAction<number>): ICountState => ({
      ...state,
      count: payload,
    })
  );
});

export  type initialState = typeof initialState