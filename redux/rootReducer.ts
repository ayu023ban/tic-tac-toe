import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import result from "./result/reducer";
const combinedReducer = combineReducers({ result });

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
