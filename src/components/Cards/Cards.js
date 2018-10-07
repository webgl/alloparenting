import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { alertActions } from '../../actions'
import { handleError } from '../../helpers'

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.cards = [];
  }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get("https://randomuser.me/api/?results=100").then(
      response => {
        this.setState({ users: response.data.results })
      }, error => {
        dispatch(alertActions.error(handleError(error)))
      }
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div className="Cards">
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

export default connect()(Cards);
