import {
  SUBTRACT_REQUEST,
  SUBTRACT_SUCCESS,
  SUBTRACT_FAILURE,
  ActionTypes
} from "Pages/Home/utils/actionTypes/subtract";

export const request = (): ActionTypes => ({
  type: SUBTRACT_REQUEST
});

export const success = (amount: Number): ActionTypes => ({
  type: SUBTRACT_SUCCESS,
  payload: { amount }
});

export const failure = (): ActionTypes => ({
  type: SUBTRACT_FAILURE
});
