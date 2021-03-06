import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./Counter";
import CounterReducer from "./CounterReducer";

const reducers = combineReducers({
  counter: CounterReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>, 
  document.getElementById("app")
);