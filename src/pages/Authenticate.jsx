import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../actions'
import { changePage } from '../helpers';

import './styles/auth.css';

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
    const { dispatch } = this.props;
    const { login } = this.state;
    if (login) {
      const { email, password } = this.state;
      changePage("/discover")
      dispatch(alertActions.succes("Welcome!"))
    }
  }

  render() {
      const {login} = this.state;
      if (login) {
        return (
          <div className="auth">
            <form>
              <h1>Login</h1>
              <p>Never been here? <button onClick={this.toggleLogin}>Signup</button></p>
              <label>email</label><input placeholder="user@x.com"/>
              <label>password</label><input type="password" placeholder="******" />
            </form>
          </div>
        );
      } else {
         return (
           <div className="auth">
             <form>
               <h1>Signup</h1>
               <p>Been here before? <button onClick={this.toggleLogin}>Login</button></p>
                  <label>first name</label><input placeholder="Dr. Shrimp"/>
                  <label>last name</label><input placeholder="Puerto Rico"/>
                  <label>email</label><input placeholder="shrimp@dill.com"/>
                  <label>zipcode</label><input placeholder="44444"/>
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
