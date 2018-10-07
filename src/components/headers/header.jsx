import React, { Component } from 'react';
import { changePage } from '../../helpers'
import Logo from '../../images/logo.png';

import './styles/header.css';

function Header() {
  return (
    <header>
      <img onClick={() => changePage("/discover")} src={Logo} alt=""/>
      <a onClick={() => changePage("/discover")}>Discover</a>
      <a onClick={() => changePage("/create")}>Create</a>
      <a onClick={() => changePage("/profile")}>Profile</a>
      <a className="logout" onClick={() => changePage("/")}>logout</a>
    </header>
  )
}

export default Header;
