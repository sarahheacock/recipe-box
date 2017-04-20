import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RecipeActionCreators from '../actions/recipe';
import Header from '../components/Header';
import Recipe from '../components/Recipe';
import AddRecipeForm from '../components/AddRecipeForm';
//import './App.css';

//initialize recipes
//add recipes
//delete recipes
//edit recipes
class RecipeBox extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  };

  render() {
    const{ dispatch, recipes} = this.props;
    const addRecipe = bindActionCreators(RecipeActionCreators.addRecipe, dispatch);

    const recipeArray = recipes.map((recipe, index) => (
      <Recipe
        key={index}
        title={recipe.title}
      />
    ));
    return (
      <div>
        <Header/>
        <div>
          {recipeArray}
        </div>
        <AddRecipeForm addRecipe={addRecipe} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    recipes: state.recipes
  }
);

export default connect(mapStateToProps)(RecipeBox);
