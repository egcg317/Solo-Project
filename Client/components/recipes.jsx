import React, { Component } from 'react';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: 'very good data',
    };
  }

  componentDidMount() {
    fetch('/api/recipes', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
  }

  render() {
    return (
      <div id="list">
        <p>recipe works!</p>
      </div>
    );
  }
}

export default Recipes;
