import React, { Component } from 'react';

import './Grid.css';

class App extends Component {
  render() {
    return (
      <ul className="Grid">
        {this.props.children}
      </ul>
    );
  }
}

export default App;
