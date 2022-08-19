import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moviesReducer from './Store/Reducers/moviesReducer';

// source for the following 2 line: https://create-react-app.dev/docs/adding-bootstrap/
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    //@ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(moviesReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);