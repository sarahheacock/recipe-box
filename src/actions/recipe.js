import * as RecipeActionTypes from '../actiontypes/recipe';

export const addRecipe = (title) => {
  return {
    type: RecipeActionTypes.ADD_RECIPE,
    title
  };
};
