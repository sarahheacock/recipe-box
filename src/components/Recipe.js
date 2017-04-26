import React, { PropTypes } from 'react';
//import EditRecipeForm from '../components/EditRecipeForm';

const Recipe = (props) => (
  <div>
    {props.title}
    <button onClick={() => props.deleteRecipe(props.index)}>Delete</button>
    <button onClick={() => {
      props.selectRecipe(props.index);
      props.toggleModal(false);
    }
  }>Edit</button>

  </div>
);

Recipe.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  //addEditForm: PropTypes.func.isRequired,
  //editRecipe: PropTypes.func.isRequired
}

export default Recipe;
