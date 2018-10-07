import React, { Component } from 'react';
import { changePage, handleInputChange } from '../helpers';
import Header from '../components/headers/header';

import Profile from '../images/profile.png'

import './styles/profile.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : false,
      description: ' I am a college student at ASU. I was born and raised in Denmark. I am very interested in alloparenting and have been practicing its principles for the last 2 years.'
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInputChange = handleInputChange.bind(this);
  }

  toggleEdit(event) {
    event.preventDefault();
    this.setState({ editing: !this.state.editing })
  }

   render() {
     const { editing, description } = this.state;
     return (
       <div className="page my-profile">
         <Header/>
         <form onSubmit={this.toggleEdit}>
           <img className="profile-picture" src={Profile}/>
           <h2>Miras Ashktorab</h2>
           <p>Active user for 2 days</p>
           {editing?
             <div>
               <label>edit your tag below</label>
               <textarea type="text-area" onChange={this.handleInputChange} value={description} name="description" placeholder="I am ..."/>
               <button>submit</button>
             </div>
             :
             <div>
                 <p>Posted 12 experiences</p>
                 <label>about me</label>
                 <div className="description">
                  {this.state.description}
                 </div>
                <button>edit</button>
             </div>
            }
         </form>
       </div>
     );
   }
}


export default Page;
