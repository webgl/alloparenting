import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/Card/Card';
import Header from '../components/headers/header';
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
    axios.get('https://randomuser.me/api/?results=100')
    .then(response => {
        this.setState({ users: response.data.results });
    })
    .then(() => {
        this.manager.createCards(this.cards);
    })
    .catch(console.error)
  }

  render() {
    const { users } = this.state;
    this.cards = [];
    return (
      <div className="App"
           ref={(n => this.rootNode = n)}>
        <Header/>
        {users.map((user, i) => (
          <div key={i} ref={n => this.cards[i] = n}>
            <Card key={user.email} name={user.name.first}
                  picture={user.picture.large} gender={user.gender}
                  location={user.location} />
          </div>
        ))}
      </div>
    );
  }
}

export default Discover;
