import React from 'react';
import Loading from '../components/loading/Loading';
import Cards from '../components/Cards/Cards';
import './layouts.css';

const Layout = (props) => {
  return (
    <div className="layout">
      <Loading />
      {props.children}
    </div>
  )
};

export default Layout
