import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Nav(){

    return(
        <div>
            <Link to >Home</Link>
            <Link to >Chef Login</Link>
            <Link to >Chef Signup</Link>
            <Link to >Signout</Link>
            <Link to >Add Recipe</Link>
        </div>
    )
}
export default Nav;
