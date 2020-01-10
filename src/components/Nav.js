import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import '../styles/_nav.scss';
import Homeicon from '../images/homeicon.png';
import Loginicon from '../images/userimg.png';
import Signupicon from '../images/signimg.png';
import Logouticon from '../images/logout.png';
import Addicon from '../images/plus.png';
  
  
import { logoutUser } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {

const dispatch = useDispatch();
const {isLoggedin} = useSelector((state) => state);

    const signOut = e => {
        e.preventDefault();
        dispatch(logoutUser())
    }

  return (
   <div className='nav'>
      <Link to="/"><img src={Homeicon} alt='home' />Home</Link>
      <div>
      </div>
      <Link to="/login"><img className='userimg' src={Loginicon} alt='login' />Chef Login</Link>
      <div>
      </div>
      <Link to="/signup"><img className='loginimg' src={Signupicon} alt='signup' />Chef Signup</Link> 
      
      {isLoggedin && <span>
      <Link onClick={signOut}><img className='logout' src={Logouticon} alt='logout' />Signout</Link>
      <Link to="/newrecipe"><img className='addrecipe' src={Addicon} alt='add recipe' />Add Recipe</Link>
      <Link to="/chefuser">My Portfolio</Link>
      </span>}
    </div>
  );
}
export default Nav;
