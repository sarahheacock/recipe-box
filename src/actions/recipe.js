import * as RecipeActionTypes from '../actiontypes/recipe';

export const addRecipe = (recipe, index) => {
  return {
    type: RecipeActionTypes.ADD_RECIPE,
    recipe,
    index
  };
};

export const deleteRecipe = (index) => {
  return {
    type: RecipeActionTypes.DELETE_RECIPE,
    index
  };
};

export const selectRecipe = (index) => {
  return {
    type: RecipeActionTypes.SELECT_RECIPE,
    index,
  };
};

export const toggleModal = (visible) => {
  return {
    type: RecipeActionTypes.TOGGLE_MODAL,
    visible,
  };
};
