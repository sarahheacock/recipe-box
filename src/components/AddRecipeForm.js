import React, { Component, PropTypes } from 'react';

export default class AddRecipeForm extends Component {
  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
  };

  state = { title: '' };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  };

  addRecipe = (e) => {
    if (e) e.preventDefault();
    this.props.addRecipe(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addRecipe}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
            placeholder="New Recipe"
          />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}
