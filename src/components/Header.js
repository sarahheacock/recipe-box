import React, { PropTypes } from 'react';
//import './App.css';

//initialize recipes
//add recipes
//delete recipes
//edit recipes
const Header = (props) => {
  return (
    <div className="text-center jumbotron">
      <h1>Recipe Box</h1>
      <button className="btn btn-primary" onClick={() => {props.toggleModal(props.modalVisible);}}>Add Recipe</button>
    </div>
  );
}

Header.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Header;
