import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../styles/_nav.scss';
import Homeicon from '../images/homeicon.png';
import Loginicon from '../images/userimg.png';
import Signupicon from '../images/signimg.png';
import Logouticon from '../images/logout.png';
import Addicon from '../images/plus.png';

function Nav(){

    return(
        <div className='nav'>
            <Link to="/"><img src={Homeicon} alt='home' />Home</Link>
            {/* {!isLoggedin} */}
            <div>
            
            </div>
            <Link to="/login" ><img className='userimg' src={Loginicon} alt='login' />Chef Login</Link>
            <div>
            </div>
            <Link to="/signup"><img className='loginimg' src={Signupicon} alt='signup' />
Chef Signup</Link>
            <Link to ><img className='logout' src={Logouticon} alt='logout' />Signout</Link>
            <Link to ><img className='addrecipe' src={Addicon} alt='add recipe' />Add Recipe</Link>
        </div>
    )
}
export default Nav;
