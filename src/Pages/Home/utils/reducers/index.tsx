import { combineReducers } from "redux";

import { counter } from "Pages/Home/utils/reducers/counter";

export const HOME = combineReducers({
  counter
});

export type State = ReturnType<typeof HOME>;
