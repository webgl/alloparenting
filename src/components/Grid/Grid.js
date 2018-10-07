import _ from 'lodash';
import React, { Component } from 'react';

import './Grid.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: [],
      sphere: [],
      helix: [],
      grid: []
    };
  }

  render() {
    return (
      <ul className="Grid">
        {this.props.children}
      </ul>
    );
  }
}

export default App;
