import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions';
import { Redirect } from 'react-router';

const Login = () => {
    const dispatch = useDispatch();
    //dispatch can be used to pull actions instead of connect
    const {isLoggedin, isLogging} = useSelector((state) => state);
    //useSelector can be used to pull state from reducers

    const [info, setInfo] = useState({
        username: "",
        password: ""
    });

    if (isLogging) {
        return <h2>Logging In...</h2>;
      }

    const handleChanges = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
        console.log(e.target)
    }

    const submitForm = e => {
        e.preventDefault();
        dispatch(loginUser(info))
        console.log(info)
    }

if (isLoggedin) return <Redirect to="/"/>

    // function myfunction() {
    //     var x = document.getElementById('password');
    //     if (x.type === 'password'){
    //         x.type = 'text';
    //     } else {
    //         x.type = 'password';
    //     }
    // }
    return (
        <div className='login-container'>
        <form className='form' onSubmit={submitForm}>
            <h1 className='login-header'>Log in!</h1>
            <div className='form-content'>
                <div className='username-content'>
                    <label className='username' htmlFor='username'>username: </label>
                </div>
                <input
                    id='username'
                    type='text'
                    placeholder='Enter username'
                    name='username'
                    onChange={handleChanges}
                />
                <div className='password-content'>
                    <label className='password' htmlFor='password'>Password: </label>
                </div>
                <input
                    id='password'
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    onChange={handleChanges}
                />
                {/* <input
                        id='checkbox' 
                        type='checkbox' 
                        value=''
                        onClick='myfunction()' />Show Password */}
            </div>
            <button type='submit'>Submit</button>
            <Link className='link-signup' to='/signup'>Don't have an account? Sign-up here!</Link>
        </form>
        </div>
    )
}

  export default Login;