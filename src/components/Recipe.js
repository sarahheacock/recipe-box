import React, { PropTypes } from 'react';
import $ from 'jquery'
import '../index.css'


const Recipe = (props) => (
  <div className="recipe well">
    <div className="text-center recipeHeader">
    <a className="recipe-title" onClick={()=>{
      $("#"+props.index).toggle('slow');
    }}>
      <h4>{props.recipe.title}</h4>
      <img src={props.recipe.image} alt={props.recipe.title}/>
    </a>
    </div>
    <div className="recipeInfo" id={props.index}>
      <div>
        <h4>Ingredients</h4>
        <ul>{props.ingredients}</ul>
      </div>
      <div>
        <h4>Directions</h4>
        {props.recipe.directions}
      </div>
      <div className="row text-center">
      <button className="btn btn-info" onClick={() => {props.selectRecipe(props.index); props.toggleModal(false);}}>Edit</button>

      <button className="btn btn-danger" onClick={() => props.deleteRecipe(props.index)}>Delete</button>
      </div>
    </div>
  </div>
);

Recipe.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
//export default ingredientList;
export default Recipe;
