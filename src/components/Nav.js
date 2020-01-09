import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { logoutUser } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';



function Nav() {

const dispatch = useDispatch();
const {isLoggedin} = useSelector((state) => state);

    const signOut = e => {
        e.preventDefault();
        dispatch(logoutUser())
    }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Chef Login</Link>
      <Link to="/signup">Chef Signup</Link> 
      
      {isLoggedin && <span>
      <Link onClick={signOut}>Signout</Link>
      <Link to="/newrecipe">Add Recipe</Link>
      <Link to="/chefuser">My Portfolio</Link>
      </span>}
    </div>
  );
}
export default Nav;
