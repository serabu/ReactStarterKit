import { UserState } from "../../types/users.types";
import { createReducer } from "@reduxjs/toolkit";
import { fetchUsers, getUserById } from "../actions/users.action";

const initialState: UserState = {
  currentUser: {
    id: 0,
    first_name: "",
    second_name: "",
    age: 0,
    email: "",
    position: "",
  },
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(initialState, {
  [fetchUsers.fulfilled as unknown as string]: (state, { payload }) => {
    return {
      ...state,
      users: payload,
    };
  },
  [getUserById.fulfilled as unknown as string]: (state, { payload }) => {
    return {
      ...state,
      currentUser: payload,
    };
  },
});
