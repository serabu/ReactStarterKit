import { createReducer, createAction } from "@reduxjs/toolkit";

// дефолтное состояние туть
const initialState = {
  count: 0,
  todos: ["состояние 1", "состояние 2", "состояние 3"],
};

export const plus = createAction("INCREMENT");
export const minus = createAction("DECREMENT");

export default createReducer(initialState, {
  [plus]: function (state) {
    state.count = state.count + 1;
  },
  [minus]: function (state) {
    state.count = state.count - 1;
  },
});
