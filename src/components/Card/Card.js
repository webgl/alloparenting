import React, { Component } from 'react';

import './Card.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastName: '',
      img:'',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };
  }

  render() {

    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
      

    return (
      <div className="Card" >
          <div className="firstHalf">
            <img src={this.props.obj.image} alt="hello image" height="200" width="200"/>
            <h1>{firstname}{lastName}</h1>
            
          </div>
      </div>
    );
  }
}


export default App;
