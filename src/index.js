import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
//import persistState from 'redux-localstorage';
import RecipeReducer from './reducers/recipe';
import RecipeBox from './containers/RecipeBox';
import './index.css';
 // const enhancer = compose(
 //   persistState()
 // );

const store = createStore(
  RecipeReducer,
  //enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <RecipeBox />
  </Provider>,
  document.getElementById('root')
);
