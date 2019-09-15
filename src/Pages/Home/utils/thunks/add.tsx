import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { InitialState, ActionTypes } from "Pages/Home/utils/actionTypes/add";
import { fetchPage } from "Pages/Home/utils/api/page";
import { failure, request, success } from "Pages/Home/utils/actions/add";

export const addAmount = (
  amount: Number
): ThunkAction<Promise<void>, InitialState, null, ActionTypes> => async (
  dispatch: ThunkDispatch<InitialState, any, ActionTypes>
) => {
  try {
    dispatch(request());
    await fetchPage();
    dispatch(success(amount));
  } catch (e) {
    dispatch(failure());
  }
};
