import React, { Component } from 'react';
import { changePage } from '../helpers';
import { connect } from 'react-redux';
import { alertActions } from '../actions'
import Header from '../components/headers/header';
import Fisherman from '../images/fisherman.jpg';
import Halloween from '../images/halloween.jpg';
import Vegas from '../images/vegas.jpg';
import './styles/create.css';

class Page extends Component {
   constructor(props) {
     super(props);
     this.state = {
       title: '',
       description: '',
       image: '',
       duration: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
     const { dispatch } = this.props;
     event.preventDefault();
     dispatch(alertActions.success("Experience created!"))
   }

   render() {
     return (
       <div className="create">
          <Header/>
          <form onSubmit={this.handleSubmit}>
            <h1>Create a New Experience</h1>
            <label>title</label><input placeholder="Chess Match"/>
            <label>description</label><input className="extended" placeholder="join me on wednesday for chess"/>
            <label>date</label><input placeholder="10/20/2018"/>
            <label>duration</label><input placeholder="2 hours"/>
            <label>select your picture</label>
            <div className="select-pic">
              <img src={Fisherman} alt=""/>
              <img src={Halloween} alt=""/>
              <img src={Vegas} alt=""/>
            </div>
            <button>submit</button>
          </form>
       </div>
     );
   }
}


export default connect()(Page);
