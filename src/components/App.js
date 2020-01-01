import React from 'react';
import _ from 'lodash';
import ViewController from 'components/ViewController';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'Increment':
      _.set(state, 'data.count', _.get(state, 'data.count') + 1);
      return {
        ...state
      };
    case 'SAVE': 
      _.set(state, action.dataPath, action.data);
      return {
        ...state
      };
    default:
      return state;
  }
}

const preloadedState = {
  data: {
    count: 0
  }
};

export const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const App = (props) => (
  <Provider store={store}>
    <ViewController />
  </Provider>
);

export default App;