import { createStore, applyMiddleware, AnyAction } from "redux";
import { Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import thunkMiddleware, { ThunkAction, ThunkMiddleware } from "redux-thunk";

const bindMiddleware = (
  middleware: ThunkMiddleware<{}, AnyAction, undefined>[]
) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(
  rootReducer,
  bindMiddleware([thunkMiddleware])
);
const initStore = () => {
  return store;
};

export const wrapper = createWrapper(initStore);
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
