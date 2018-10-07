import React, { Component } from 'react';

import './alert.css';

class Alert extends Component {

   constructor(props) {
      super(props)
      this.state = {
         open : 'open'
      }
   }

   render() {
     return (
         <div style={{display: this.state.open}} className={`alert ${this.props.alertType}`} onClick={() => this.setState({open: 'none'})}>
            {this.props.children}
         </div>

     )
   }
}


export default Alert;
