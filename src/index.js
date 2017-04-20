import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RecipeReducer from './reducers/recipe';
import RecipeBox from './containers/RecipeBox';

const store = createStore(
  RecipeReducer
);

ReactDOM.render(
  <Provider store={store}>
    <RecipeBox />
  </Provider>,
  document.getElementById('root')
);
