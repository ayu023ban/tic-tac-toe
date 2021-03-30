import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};


const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));
const initStore = () => {
  return store;
};

export const wrapper = createWrapper(initStore);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch