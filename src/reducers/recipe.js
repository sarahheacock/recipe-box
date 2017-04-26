import * as RecipeActionTypes from '../actiontypes/recipe';

// var response = require('reponse');
// var error = require('error');

const initialState = {

  recipes: [
    {
      title: 'apple pie',
    },
    {
      title: 'soup',
    },
  ],
  selectedRecipeIndex: -1,
  modalVisible: false,
}

export default function Recipe(state=initialState, action){

  switch(action.type) {
    case RecipeActionTypes.ADD_RECIPE: {
      const addRecipeList = [...state.recipes, {
        title: action.title,
      }];
      //const addTitle = {title: action.title};
      const removeOld = [
        ...state.recipes.slice(0, action.index),
        ...state.recipes.slice(action.index + 1),
        {title: action.title},
      ]
      //const edit = (state.selectedRecipeIndex === -1);
      const list = (action.index === -1) ? addRecipeList : removeOld;

      return {
        ...state,
        recipes: list,
        selectedRecipeIndex: -1,
        //modalVisible: false
      };
    }
    case RecipeActionTypes.DELETE_RECIPE: {
      const removeRecipeList = [
        ...state.recipes.slice(0, action.index),
        ...state.recipes.slice(action.index+1)
      ];
      return {
        ...state,
        recipes: removeRecipeList,
        //selectedRecipeIndex: -1,
        //modalVisible: false
      };
    }
    case RecipeActionTypes.SELECT_RECIPE:{
      return {
        ...state,
        selectedRecipeIndex: action.index,
        //modalVisible: true
      }
    }
    case RecipeActionTypes.TOGGLE_MODAL: {
      return {
        ...state,
        modalVisible: !(action.visible)
      }
    }
  default:
    return state;
  }
}
