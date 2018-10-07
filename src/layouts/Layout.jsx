import React from 'react';
import Loading from '../components/loading/Loading';

import './layouts.css';

var Style = {
  width: "100%",
  // backgroundImage: `url(${Background})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundAttachment: 'fixed',
};

const Layout = (props) => {
    return (
        <div className="layout" style={Style}>
           <Loading/>
           {props.children}
        </div>
    )
};

export default Layout
