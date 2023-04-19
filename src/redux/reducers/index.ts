import { combineReducers } from "redux";
import { usersReducer } from "./users.reducer";


export const rootReducer = combineReducers({
    usersReducer: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>