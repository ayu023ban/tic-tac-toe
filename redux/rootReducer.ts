import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import result from "./result/reducer";
import settings from "./settings/reducers";
import sounds from "./sounds/reducers";

const combinedReducer = combineReducers({ result, settings, sounds });

export default combinedReducer;
