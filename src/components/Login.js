import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions';

const Login = ({ loginUser, isLogging }) => {
    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        email: "",
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
        loginUser();
        console.log(info)
    }

    // function myfunction() {
    //     var x = document.getElementById('password');
    //     if (x.type === 'password'){
    //         x.type = 'text';
    //     } else {
    //         x.type = 'password';
    //     }
    // }
    return (
        <form className='form' onSubmit={submitForm}>
            <h2 className='login-header'>Log in!</h2>
            <div className='form-content'>
                <div className='email-content'>
                    <label className='email' htmlFor='email'>Email: </label>
                </div>
                <input
                    id='email'
                    type='text'
                    placeholder='email'
                    name='email'
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
    )
}

const mapStateToProps = state => {
    return {
        isLogging: state.isLogging,
        isLoggedin: state.isLoggedin,
        errorLogin: state.errorLogin,
        loginCredentials: state.loginCredentials
    };
};
  
  export default connect(mapStateToProps, { loginUser })(Login);