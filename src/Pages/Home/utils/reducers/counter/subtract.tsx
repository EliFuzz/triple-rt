import {
  SUBTRACT_REQUEST,
  SUBTRACT_SUCCESS,
  SUBTRACT_FAILURE,
  InitialState
} from "Pages/Home/utils/actionTypes/subtract";

const INITIAL_STATE: InitialState = {
  amount: 0,
  isLoading: false
};

export const reducer = (
  state: InitialState = INITIAL_STATE,
  action: any
): InitialState => {
  switch (action.type) {
    case SUBTRACT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SUBTRACT_SUCCESS:
      return {
        ...state,
        amount: state.amount - action.payload.amount,
        isLoading: false
      };
    case SUBTRACT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
