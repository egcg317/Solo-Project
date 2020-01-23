import React, { Component } from 'react';
import List from './components/lists.jsx';
import Recipes from './components/recipes.jsx';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: 'very good data',
    };
  }

  render() {
    return (
      <div id="main">
        <List />
        <Recipes />
      </div>
    );
  }
}

export default Main;
