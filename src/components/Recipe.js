import React, { PropTypes } from 'react';

const Recipe = (props) => (
  <div>
    {props.title}
  </div>
);

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Recipe;
