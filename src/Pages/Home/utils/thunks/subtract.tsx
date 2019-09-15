import { Dispatch } from "redux";

import { fetchPage } from "Pages/Home/utils/api/page";
import { failure, request, success } from "Pages/Home/utils/actions/subtract";

export const subtractAmount = (amount: Number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(request());
    await fetchPage();
    dispatch(success(amount));
  } catch (e) {
    dispatch(failure());
  }
};
