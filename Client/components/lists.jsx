import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: 'very good data',
    };
  }

  render() {
    return (
      <div id="list">
        <p>list works!</p>
      </div>
    );
  }
}

export default List;
