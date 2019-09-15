import {
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILURE,
  ActionTypes
} from "Pages/Home/utils/actionTypes/add";

export const request = (): ActionTypes => ({
  type: ADD_REQUEST
});

export const success = (amount: Number): ActionTypes => ({
  type: ADD_SUCCESS,
  payload: { amount }
});

export const failure = (): ActionTypes => ({
  type: ADD_FAILURE
});
