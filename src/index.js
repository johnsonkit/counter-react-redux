import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/***
 * Reducer
 */
const initialState = {
  counter: 3
}

const reducer = (state = initialState, action) => {
  console.log('state', state, action)

  switch(action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    case 'RESET':
      return {
        counter: 0
      };
    default:
      return state;
  }
  return state;
}

/**
 * Store
 */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
, document.getElementById('root'));