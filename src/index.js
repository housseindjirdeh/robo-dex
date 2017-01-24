import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers';

import createLogger from 'redux-logger';

const logger = createLogger();
import reduxThunk from 'redux-thunk';

const store = createStore(appReducer, applyMiddleware(logger, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
