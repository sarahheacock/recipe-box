import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RecipeActionCreators from '../actions/recipe';
//import promiseMiddleware from 'redux-promise';
//import axios from 'axios';
import Header from '../components/Header';
import Recipe from '../components/Recipe';
import AddRecipeForm from '../components/AddRecipeForm';


class RecipeBox extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    selectedRecipeIndex: PropTypes.number.isRequired,
    modalVisible: PropTypes.bool.isRequired
  };


  render() {
    const{ dispatch, recipes, selectedRecipeIndex, modalVisible} = this.props;
    const addRecipe = bindActionCreators(RecipeActionCreators.addRecipe, dispatch);
    const deleteRecipe = bindActionCreators(RecipeActionCreators.deleteRecipe, dispatch);
    const selectRecipe = bindActionCreators(RecipeActionCreators.selectRecipe, dispatch);
    const toggleModal = bindActionCreators(RecipeActionCreators.toggleModal, dispatch);

    let selectedRecipe;
    if(selectedRecipeIndex !== -1) {
      selectedRecipe = recipes[selectedRecipeIndex];
      selectedRecipe['index'] = selectedRecipeIndex;
    }
    else {
      selectedRecipe = {title: '', index: selectedRecipeIndex};
    }


    const recipeArray = recipes.map((recipe, index) => (
      <Recipe
        index={index}
        key={index}
        title={recipe.title}
        deleteRecipe={deleteRecipe}
        selectRecipe={selectRecipe}
        toggleModal={toggleModal}
      />
    ));
    console.log("main", selectedRecipe);
    return (
      <div>
        <Header/>
        <div>
          {recipeArray}
        </div>
        <button onClick={() => {toggleModal(modalVisible);}}>Add Recipe</button>
        <AddRecipeForm
          addRecipe={addRecipe}
          selectedRecipe={selectedRecipe}
          modalVisible={modalVisible}
          toggleModal={toggleModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    recipes: state.recipes,
    selectedRecipeIndex: state.selectedRecipeIndex,
    modalVisible: state.modalVisible,
  }
);

export default connect(mapStateToProps)(RecipeBox);
