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
      <div className="recipe">
        {this.props.name} {this.props.time} {this.props.rating}
      </div>
    );
  }
}

export default oneRecipe;
