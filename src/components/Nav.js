import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../images/userimg.png';
import '../styles/styles.scss';

function Nav(){

    return(
        <div className='nav'>
            <Link to="/">Home</Link>
            {/* {!isLoggedin} */}
            {/* <div>
            <img className='userimg' src='src\images\userimg.png' alt='user' />
            </div> */}
            <Link to="/login" >Chef Login</Link>
            {/* <div>
            <img className='loginimg' src='src\images\loginimg.png' alt='user' />
            </div> */}
            <Link to="/signup">Chef Signup</Link>
            <Link to >Signout</Link>
            <Link to >Add Recipe</Link>
        </div>
    )
}
export default Nav;
