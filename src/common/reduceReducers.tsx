import { Reducer } from "redux";

export const reduceReducers = (...reducers: any): Reducer<Function, any> => (
  previous: any,
  current: any
): Reducer<Function, any> =>
  reducers.reduce((p: Function, r: any) => r(p, current), previous);
