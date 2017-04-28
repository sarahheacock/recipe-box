import * as RecipeActionTypes from '../actiontypes/recipe';
import loadState from '../localStorage';

const initialState = {
  recipes: [
  {
    title: 'Sugar-Free No-Bake Cocoa Balls',
    image: 'http://www.chocolatecoveredkatie.com/wp-content/uploads/low-fat-chocolate-truffles_CCD6/nut-free-chocolate-truffles.jpg?x71133',
    ingredients: ['1 cup of chopped pitted dates',
    'water for soaking',
    '1 cup walnuts or cashews',
    '1/4 cup cocoa powder',
    '1 T peanut butter',
    '1/4 cup coconut flakes'],
    directions: 'Cover dates in water and soak for about 10 minutes,until softend. Drain.\n Process dates, nuts, cocoa powder, peanut butter, and coconut flakes in a food processor until coarse.\n Shape into balls and chill.'
  },
  {
    title: 'Red Curry Sauce',
    image: 'https://joegraff.files.wordpress.com/2012/08/frying_curry_paste.jpg',
    ingredients: [
      '1 can coconut milk',
      '2 T peanut butter',
      '2 T curry paste',
      '1 1/2 T soy sauce',
      '2 T lime juice',
      '3 T sugar',
      '1 t garlic',
      '1/2 cup water'
    ],
    directions: 'Simmer ingredients for 20 minutes'
  }],

  selectedRecipeIndex: -1,
  modalVisible: false,
};

const initial = (loadState !== 'undefined') ? {recipes:[...JSON.parse(localStorage.recipes)], selectedRecipeIndex: -1, modalVisible: false} : initialState;

export default function Recipe(state=initial, action){
  console.log(JSON.parse(localStorage.recipes));
  switch(action.type) {

    case RecipeActionTypes.ADD_RECIPE: {
      const imageUrl = (action.recipe.image === '') ? 'https://image.flaticon.com/icons/svg/194/194404.svg' : action.recipe.image;
      const addRecipeList = [...state.recipes,

        {title: action.recipe.title,
        image: imageUrl,
        ingredients: action.recipe.ingredients,
        directions: action.recipe.directions}
      ];

      const removeOld = [
        ...state.recipes.slice(0, action.index),
        ...state.recipes.slice(action.index + 1),
        {title: action.recipe.title,
        image: imageUrl,
        ingredients: action.recipe.ingredients,
        directions: action.recipe.directions},
      ]

      const list = (action.index === -1) ? addRecipeList : removeOld;

      return {
        ...state,
        recipes: list,
        selectedRecipeIndex: -1,
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
      };
    }
    case RecipeActionTypes.SELECT_RECIPE:{
      return {
        ...state,
        selectedRecipeIndex: action.index,
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
