import React, { Component, PropTypes } from 'react';
import '../index.css';
import $ from 'jquery';

export default class AddRecipeForm extends Component {
  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    selectedRecipe: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired
    //modalVisible: PropTypes.bool.isRequired
    //deleteRecipe: PropTypes.func.isRequired,
  };


  constructor(props){
    super(props);
    this.state = {
      title: props.selectedRecipe.title,
      index: props.selectedRecipe.index,
      modalVisible: props.modalVisible
    };
  }

  componentDidMount(){
    //$(".modal").css('display', 'block');
    $(".modal").css({height: 0, opacity: 0});
  }

//only receive props if edit or add recipe is clicked
  componentWillReceiveProps(nextProps){
    //if(nextProps.selectedRecipe.modalVisible === true){
      this.setState({
        title: nextProps.selectedRecipe.title,
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
    const title = e.target.value;
    this.setState({ title });
  };

  addRecipe = (e) => {
    if (e) e.preventDefault();
    this.props.addRecipe(this.state.title, this.state.index);
    this.props.toggleModal(this.state.modalVisible);
    //this.setState({ title: '', index: -1, modalVisible: false });
  };

  render() {
    console.log("form", this.state);
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
        <form onSubmit={this.addRecipe}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
            placeholder="Add Recipe"
            required
          />
          <input type="submit" value="Save" />
        </form>
        </div>
      </div>
    );
  }
}
