import React, { Component } from 'react';

import { Grid, Card } from '../components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
      </div>
    );
  }
}

export default App;
