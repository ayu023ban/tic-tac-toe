import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import result from "./result/reducer";
import settings from "./settings/reducers";
const combinedReducer = combineReducers({ result, settings });

const rootReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default rootReducer;
