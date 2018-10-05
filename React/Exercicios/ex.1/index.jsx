import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Field from "./Field";
import FieldReducer from "./FieldReducer";

const reducers = combineReducers({
  field: FieldReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue="Teste" />
  </Provider>, 
  document.getElementById("app")
);