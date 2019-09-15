import { pageIndex } from "Pages/Home/settings";

export const ADD_REQUEST: String = `RA\\${pageIndex}\\ADD_REQUEST`;
export const ADD_SUCCESS: String = `RA\\${pageIndex}\\ADD_SUCCESS`;
export const ADD_FAILURE: String = `RA\\${pageIndex}\\ADD_FAILURE`;

export interface InitialState {
  readonly amount: Number;
  readonly isLoading: Boolean;
}

interface Request {
  readonly type: typeof ADD_REQUEST;
}

interface Success {
  readonly type: typeof ADD_SUCCESS;
  readonly payload: { amount: Number };
}

interface Failure {
  readonly type: typeof ADD_FAILURE;
}

export type ActionTypes = Request | Success | Failure;
