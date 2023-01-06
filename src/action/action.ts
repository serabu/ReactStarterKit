import { createAction } from "@reduxjs/toolkit";
import { CounterActionsList } from "../types/Counter.types";

export const updateCountAction = createAction<number, CounterActionsList.UPDATE_COUNT_ACTION>(CounterActionsList.UPDATE_COUNT_ACTION);