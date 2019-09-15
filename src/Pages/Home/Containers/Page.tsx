import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import Page from "Pages/Home/Components/Page";

import { InitialState, ActionTypes } from "Pages/Home/utils/actionTypes/add";

import { getCounter } from "Pages/Home/utils/selectors/counter";

import { addAmount } from "Pages/Home/utils/thunks/add";
import { subtractAmount } from "Pages/Home/utils/thunks/subtract";

const mapStateToProps = (state: InitialState) => ({
  counter: getCounter(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState, any, ActionTypes>
) => ({
  add: (amount: Number) => dispatch(addAmount(amount)),
  subtract: (amount: Number) => dispatch(subtractAmount(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
