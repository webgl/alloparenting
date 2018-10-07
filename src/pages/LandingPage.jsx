
import React, { Component } from 'react';
import { changePage } from '../helpers';
import Family from '../images/family.jpg';
import Parents from '../images/parents.jpg';
import CryingBaby from '../images/cryingbabyonplane.gif';

import './styles/landing-page.css';

class Page extends Component {
   render() {
     return (
       <div className="landing-page">
         <h1>alloparent.io</h1>
         <article>
           <h3>What if we gave our children a more engaging environment?</h3>
           <p>
             alloparenting encompasses the benefits from a communal effort of raising children.
             <br/>
             <b>The availability of diverse beliefs, influences, and characteristics nurtures a more adaptable individual.</b>
           </p>
           <img className="picture family" src={Family} alt=""/>
         </article>
         <article>
           <h3>What is alloparenting?</h3>
           <p>
              When we are on a plane and we hear a child crying we cringe and recoil, expecting the mother
              to sush their child. Why don't we have the urge the help the mother? This question comes from the unique perspective
              humans have gained in the recent century. Our early ancestors were increasingly cared for and provisioned not just by their
              parents, but also by other group members called alloparents. Caring for someone else's child seems to defy evolutionary
              logic. <b>The hypothesis is that not relying on consistent nourishment of one parent(s), a child becomes self-sustainable much faster.</b>
              In our modern era, we are increasingly sheltering our children, completely defying the benefits of alloparenting.
           </p>
           <img className="picture parents" src={CryingBaby} alt=""/>
         </article>
         <article>
           <h3>our idea</h3>
           <p>
             We've created a platform that encourages discovery of <b>new</b> experiences for children.
             <br/>
             The point is to put your child in a variety of cultures and experiences not easily accessible without
             our platform. <b>The platform for parents who want a more stimulating environment for their children.</b>
             <br/>
           </p>
           <img className="picture parents" src={Parents} alt=""/>
         </article>
         <article>
           <h3>join us</h3>
           <button onClick={()=>changePage('/authenticate')}>signup</button>
         </article>
       </div>
     );
   }
}


export default Page;
