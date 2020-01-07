import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {
    console.log(props)
    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const handleChanges = e =>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
        console.log(e.target)
    }

    const submitForm = e => {
        e.preventDefault();
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
    return(
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

export default Login;