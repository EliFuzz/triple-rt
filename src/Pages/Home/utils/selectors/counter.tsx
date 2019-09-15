import { pageIndex } from "Pages/Home/settings";
import { InitialState } from "Pages/Home/utils/actionTypes/add";

export const getCounter = (state: InitialState | any): Number =>
  state[pageIndex].counter.amount;
