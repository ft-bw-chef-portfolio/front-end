import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Nav(){

    return(
        <div>
            <Link to="/">Home</Link>
            {/* {!isLoggedin} */}
            <Link to="/login">Chef Login</Link>
            <Link to="/signup">Chef Signup</Link>
            <Link to >Signout</Link>
            <Link to >Add Recipe</Link>
        </div>
    )
}
export default Nav;
