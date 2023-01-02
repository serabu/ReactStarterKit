import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { updateCountAction } from "../action/action";
import { CounterActionsList, ICountState } from "../types/Counter.types";

const initialState: ICountState = {
  count: 0,
};

export default createReducer(initialState as ICountState, (builder) => {
  builder.addCase(updateCountAction, (state = initialState, { payload } : PayloadAction<number> ): ICountState => ({
    ...state,
    count: payload
  }))
});

