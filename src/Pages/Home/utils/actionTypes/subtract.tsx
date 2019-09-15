import { pageIndex } from "Pages/Home/settings";

export const SUBTRACT_REQUEST: String = `RA\\${pageIndex}\\SUBTRACT_REQUEST`;
export const SUBTRACT_SUCCESS: String = `RA\\${pageIndex}\\SUBTRACT_SUCCESS`;
export const SUBTRACT_FAILURE: String = `RA\\${pageIndex}\\SUBTRACT_FAILURE`;

export interface InitialState {
  readonly amount: number;
  readonly isLoading: Boolean;
}

interface Request {
  readonly type: typeof SUBTRACT_REQUEST;
}

interface Success {
  readonly type: typeof SUBTRACT_SUCCESS;
  readonly payload: { amount: Number };
}

interface Failure {
  readonly type: typeof SUBTRACT_FAILURE;
}

export type ActionTypes = Request | Success | Failure;
