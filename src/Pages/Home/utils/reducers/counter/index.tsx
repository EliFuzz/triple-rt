import { reduceReducers } from "common/reduceReducers";

import { reducer as addReducer } from "Pages/Home/utils/reducers/counter/add";
import { reducer as subtractReducer } from "Pages/Home/utils/reducers/counter/subtract";

export const counter = reduceReducers(addReducer, subtractReducer);
