import React, { Component } from 'react';

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
        <p>React Works!</p>
      </div>
    );
  }
}

export default App;
