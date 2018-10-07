import _ from 'lodash';
import React, { Component } from 'react';

import Manager from '../manager/Manager';

class Discover extends Component {

  constructor(props) {
    super(props);

    this.manager = new Manager();
  }

  componentDidMount() {
    this.manager.init(this.rootNode);
  }

  render() {
    return (
      <div className="App"
           ref={(n => this.rootNode = n)}>
      </div>
    );
  }
}

export default Discover;
