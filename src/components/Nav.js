import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../styles/_nav.scss';

function Nav(){

    return(
        <div className='nav'>
            <Link to="/"><img className='homeimg' src='src\images\homeicon.png' alt='home' />Home</Link>
            {/* {!isLoggedin} */}
            <div>
            
            </div>
            <Link to="/login" ><img className='userimg' src='src\images\userimg.png' alt='login' />Chef Login</Link>
            <div>
            </div>
            <Link to="/signup"><img className='loginimg' src='src\images\loginimg.png' alt='signup' />
Chef Signup</Link>
            <Link to ><img className='logout' src='src\images\logout.png' alt='logout' />Signout</Link>
            <Link to ><img className='addrecipe' src='src\images\add.png' alt='add recipe' />Add Recipe</Link>
        </div>
    )
}
export default Nav;
