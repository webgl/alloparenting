import React, { Component } from 'react';
import faker from 'faker';
import { getRandomAction, capitalize } from '../../helpers';

import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
    this.url = `https://picsum.photos/200/300/?random/${Math.ceil(Math.random() * Math.floor(10000))}`
  }
  render() {
    const { name, picture, gender, location } = this.props;
    const { clicked } = this.state;
    return (
      <div className="profile">
          <img src={this.url} className="background"/>
          <div onClick={() => this.setState({clicked: !this.state.clicked})} className={ (this.state.clicked)? " star clicked": "star" }>&#9733;</div>
          <div className="info">
            <img src={picture} className="picture"/>
            <h4>{capitalize(name)} - {faker.random.number(10)} miles away</h4>
            <h1>{getRandomAction()}</h1>
          </div>
      </div>
    )
  }
}

export default Card;
