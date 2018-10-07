import React from 'react';
import { connect } from 'react-redux';

import './loading.css';

function LoadingScreen(props) {
   if (props.page.loading) {
      return (
         <div className="loading-screen">
            <div className="loading-message">
               Loading
            </div>
            <div className="loading-container">
               <div className="ball"></div>
               <div className="ball"></div>
               <div className="ball"></div>
               <div className="ball"></div>
               <div className="ball"></div>
               <div className="ball"></div>
               <div className="ball"></div>
            </div>
       </div>

      );
    } else {
      return <div/>
   }
}

function mapStateToProps(state) {
    const { page } = state;
    return {
        page
    };
}

const ConnectedComponent = connect(mapStateToProps)(LoadingScreen);

export default ConnectedComponent;
