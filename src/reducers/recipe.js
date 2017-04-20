import * as RecipeActionTypes from '../actiontypes/recipe';

const initialState = {
  recipes: [
    {
      title: 'apple pie',
    },
    {
      title: 'soup',
    },
  ]
}

export default function Recipe(state=initialState, action){

  switch(action.type) {
    case RecipeActionTypes.ADD_RECIPE: {
      const addRecipeList = [...state.recipes, {
        title: action.title,
      }];
      return {
        ...state,
        recipes: addRecipeList
      };
    }
  default:
    return state;
  }
}
