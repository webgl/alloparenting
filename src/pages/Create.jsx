import React, { Component } from 'react';
import { changePage } from '../helpers';
import { connect } from 'react-redux';
import { alertActions } from '../actions'
import Header from '../components/headers/header';
import Fisherman from '../images/fisherman.jpg';
import Halloween from '../images/halloween.jpg';
import Vegas from '../images/vegas.jpg';
import './styles/create.css';

const FISHERMAN = "FISHERMAN";
const HALLOWEEN = "HALLOWEEN";
const VEGAS = "VEGAS";

class Page extends Component {
   constructor(props) {
     super(props);
     this.state = {
       title: '',
       description: '',
       image: '',
       duration: '',
       picture: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.selectPic = this.selectPic.bind(this);
   }

   handleSubmit(event) {
     const { dispatch } = this.props;
     event.preventDefault();
     dispatch(alertActions.success("Experience created!"))
   }

   selectPic(select) {
     const { picture } = this.state;
     if (select === picture) {
         this.setState({
           picture: ''
         })
     } else {
       this.setState({
         picture: select
       })
     }
   }

   render() {
     const { picture } = this.state;
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
              <img className={(picture === FISHERMAN)? "selected":""} onClick={() => this.selectPic(FISHERMAN)} src={Fisherman} alt=""/>
              <img className={(picture === HALLOWEEN)? "selected":""} onClick={() => this.selectPic(HALLOWEEN)} src={Halloween} alt=""/>
              <img className={(picture === VEGAS)? "selected":""} onClick={() => this.selectPic(VEGAS)} src={Vegas} alt=""/>
            </div>
            <button>submit</button>
          </form>
       </div>
     );
   }
}


export default connect()(Page);
