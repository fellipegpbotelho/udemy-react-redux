import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import reducers from './main/Reducers';

import App from './main/App';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise)(createStore)(reducers, reduxDevTools);

const MyMoney = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<MyMoney />, global.document.getElementById('app'));