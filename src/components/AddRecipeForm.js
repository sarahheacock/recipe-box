import React, { Component, PropTypes } from 'react';
import '../index.css';
import $ from 'jquery';

export default class AddRecipeForm extends Component {
  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    selectedRecipe: PropTypes.object.isRequired,
    //index: PropTypes.number.isRequired,
    modalVisible: PropTypes.bool.isRequired
    //modalVisible: PropTypes.bool.isRequired
    //deleteRecipe: PropTypes.func.isRequired,
  };


  constructor(props){
    super(props);
    this.state = {
      recipe: props.selectedRecipe,
      index: props.selectedRecipe.index,
      modalVisible: props.modalVisible
    };
  }

  componentDidMount(){
    $(".modal").css('display', 'block');
    $(".modal").css({height: 0, opacity: 0});
  }

//only receive props if edit or add recipe is clicked
  componentWillReceiveProps(nextProps){
    //if(nextProps.selectedRecipe.modalVisible === true){
      this.setState({
        recipe: nextProps.selectedRecipe,
        index: nextProps.selectedRecipe.index,
        modalVisible: nextProps.modalVisible
      });
    //}
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.modalVisible === true && prevState.modalVisible === false){
      $(".modal").animate({height: '100%', opacity: 1}, 500);
    }
    else if (this.state.modalVisible === false && prevState.modalVisible === true){
      $(".modal").animate({height: 0, opacity: 0}, 500);
    }
  }


  onTitleChange = (e) => {
    //const title = e.target.value;
    this.state.recipe.title = e.target.value;
    this.setState( this.state );
  };

  onImageChange = (e) => {
    //const image =
    this.state.recipe.image = e.target.value;
    this.setState( this.state );
  };

  onIngredientChange = (e) => {
    this.state.recipe.ingredients = e.target.value;
    this.setState( this.state );
  };

  onDirectionChange = (e) => {
    this.state.recipe.directions = e.target.value;
    this.setState( this.state );
  };

  addRecipe = (e) => {
    if (e) e.preventDefault();
    const sentRecipe = {
      title: this.state.recipe.title,
      image: this.state.recipe.image,
      ingredients: this.state.recipe.ingredients.split(','),
      directions: this.state.recipe.directions,
    };
    console.log(sentRecipe);
    this.props.addRecipe(sentRecipe, this.state.index);
    this.props.toggleModal(this.state.modalVisible);
    //this.setState({ title: '', index: -1, modalVisible: false });
  };

  cancel = (e) => {
    if(e) e.preventDefault();
    this.props.toggleModal(this.state.modalVisible);
  }

  render() {
    console.log("form", this.state);
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
        <div className="modal-header">
          <h2>New Recipe</h2>
        </div>
        <div className="modal-body">
        <form className='text-center' onSubmit={this.addRecipe} onReset={this.cancel}>
        <div className="form-group">

          <input className="form-control"
            type="text"
            value={this.state.recipe.title}
            onChange={this.onTitleChange}
            placeholder="Title"
            required
          />



          <input className="form-control"
            type="url"
            value={this.state.recipe.image}
            onChange={this.onImageChange}
            placeholder="Image URL"
          />



          <textarea rows='3' className="form-control form-area"
            type="text"
            value={this.state.recipe.ingredients}
            onChange={this.onIngredientChange}
            placeholder="Ingredients (Separated By Commas)"
            required
          />



          <textarea rows='5' className="form-control form-area"
            type="text"
            value={this.state.recipe.directions}
            onChange={this.onDirectionChange}
            placeholder="Directions"
            required
          />

        </div>
        <div className="modal-footer">
          <input type="submit" value="Save" className="btn btn-success"/>
          <input type="reset" value="Cancel" className="btn btn-danger"/>
        </div>
        </form>
        </div>
        </div>
      </div>
    );
  }
}
