import React, { Component } from 'react';
import Main from './mainContainer.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 'very good data',
    };
  }

  render() {
    return (
      <div id="app">
        <Main />
      </div>
    );
  }
}

export default App;
