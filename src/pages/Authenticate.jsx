import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage } from '../helpers';

import './styles/landing-page.css';

class Page extends Component {
  constructor(props) {
    super(props)
    this.state ={
      login: false
    }
    this.toggleLogin = this.toggleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleLogin(event) {
    event.preventDefault();
    this.setState({login: !this.state.login})
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login } = this.state;
    if (login) {
      
    }
  }

  render() {
      const {login} = this.state;
      if (login) {
        return (
          <div className="auth">
            <h1>Login</h1>
            <form>
              <p>Never been here? <button onClick={this.toggleLogin}>Signup</button></p>
            </form>
          </div>
        );
      } else {
         return (
           <div className="auth">
             <h1>Signup</h1>
             <form>
               <p>Been here before? <button onClick={this.toggleLogin}>Login</button></p>
             </form>
           </div>
         );
      }
   }
}


function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const ConnectedPage = connect(mapStateToProps)(Page);

export default ConnectedPage;
