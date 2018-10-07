import React, { Component } from 'react';

import { getRandomAction } from '../../helpers';

import './Card.css'

function Card(props) {
  const { name, picture, gender, location } = props;
  return (
    <div className="profile">
        <img src={`https://picsum.photos/200/300/?random/${Math.ceil(Math.random() * Math.floor(10000))}`} className="background"/>
        <div className="info">
          <img src={picture} className="picture"/>
          <h1>{getRandomAction()}</h1>
        </div>
    </div>
  )
}

export default Card;
