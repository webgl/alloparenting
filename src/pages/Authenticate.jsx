import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../actions'
import { changePage, handleInputChange } from '../helpers';

import './styles/auth.css';

class Page extends Component {
  constructor(props) {
    super(props)
    this.state ={
      login: false
    }
    this.handleInputChange = handleInputChange.bind(this);
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
      dispatch(alertActions.success("Welcome!"))
    } else {
      const { email, password, confirm, zipcode, first, last } = this.state;
      changePage("/discover")
      dispatch(alertActions.success("Welcome Back"))
    }
  }

  render() {
      const {login, email, password, confirm, zipcode, first, last} = this.state;
      if (login) {
        return (
          <div className="auth">
            <form onSubmit={this.handleSubmit}>
              <h1>Login</h1>
              <p>Never been here? <button onClick={this.toggleLogin}>Signup</button></p>
              <label>email</label><input placeholder="user@x.com"/>
              <label>password</label><input type="password" placeholder="******" />
              <button>submit</button>
            </form>
          </div>
        );
      } else {
         return (
           <div className="auth">
             <form onSubmit={this.handleSubmit}>
               <h1>Signup</h1>
               <p>Been here before? <button onClick={this.toggleLogin}>Login</button></p>
                  <label>first name</label>
                  <input name="first" value={first} placeholder="Dr. Shrimp" onChange={this.handleInputChange}/>
                  <label>last name</label><input name="last" value={last} placeholder="Puerto Rico" onChange={this.handleInputChange}/>
                  <label>email</label><input name="email" value={email} placeholder="shrimp@dill.com" onChange={this.handleInputChange}/>
                  <label>zipcode</label><input name="zipcode" value={zipcode} placeholder="44444" onChange={this.handleInputChange}/>
                  <label>password</label><input name="password" value={password} type="password" placeholder="*****" onChange={this.handleInputChange}/>
                  <label>confirm</label><input type="password" name="confirm" value={confirm} placeholder="*****" onChange={this.handleInputChange}/>
                  <button>submit</button>
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
