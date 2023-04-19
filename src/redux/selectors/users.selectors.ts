import { RootState } from "../reducers";

export const usersSelector = (state: RootState) => {
  return state.usersReducer
}

