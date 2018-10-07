import React, { Component } from 'react';
import faker from 'faker';

import './Card.css'

function Card(props) {
  const { name, picture, gender, location } = props;
  return (
    <div className="profile">
      <div className="top-part">
        <img src={`https://picsum.photos/200/300/?random/${Math.ceil(Math.random() * Math.floor(10000))}`} className="background"/>
        <img src={picture} className="picture"/>
      </div>
    </div>
  )
}

export default Card;
