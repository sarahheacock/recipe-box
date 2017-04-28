import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore} from 'redux';
import RecipeReducer from './reducers/recipe';
import RecipeBox from './containers/RecipeBox';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import './index.css';

 export const saveState = (state) => {
   try {
     const serializedState = JSON.stringify(state);
     localStorage.setItem('recipes', serializedState);
   } catch (err) {
     // Ignore write errors.
   }
 };

const store = createStore(
  RecipeReducer,
);

store.subscribe(() => {
  saveState(store.getState().recipes);
});

ReactDOM.render(
  <Provider store={store}>
    <RecipeBox />
  </Provider>,
  document.getElementById('root')
);
