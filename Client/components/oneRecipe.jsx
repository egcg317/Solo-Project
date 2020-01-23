import React, { Component } from 'react';

class oneRecipe extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: 'very good data',
    };
  }

  render() {
    return (
      <div className="recipeRow">
        <div className="recipe" id="recipeName">
          {this.props.name}
        </div>
        <div className="recipe" id="recipeTime">
          {this.props.time} 
        </div>
        <div className="recipe" id="recipeRating">
          {this.props.rating}
        </div>
      </div>
    );
  }
}

export default oneRecipe;
