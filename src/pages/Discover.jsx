import _ from 'lodash';
import React, { Component } from 'react';

import Manager from '../manager/Manager';

class Discover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.cards = [];
    this.manager = new Manager();
  }

  componentDidMount() {
    this.manager.init(this.rootNode);
    axios.get("https://randomuser.me/api/?results=100").then(
      response => {
        this.setState({ users: response.data.results })
      }, error => {
        console.log(error);
      }
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App"
           ref={(n => this.rootNode = n)}>
           {users.map((user, i) => (
             <div ref={n => this.cards[i] = n}>
               <Card key={user.email} name={user.name.first.toUpperCase()}
                     picture={user.picture.large} gender={user.gender}
                     location={user.location} />
             </div>
           ))}
      </div>
    );
  }
}

export default Discover;
