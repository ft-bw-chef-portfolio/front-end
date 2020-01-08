import React from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../Hooks/useFormValidation';
import validateAuth from '../Hooks/validateAuth';
import '../styles/styles.scss';


const initialState = {
    email: '',
    password: ''
};

const Login = () => {
    const {
        handleChange,
        values,
        handleSubmit,
        errors,
        handleBlur,
        isSubmitting
      } = useFormValidation(initialState, validateAuth);
    //   console.log(values)

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
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='login-header'>Log in!</h1>
            <div className='form-content'>
                <div className='email-content'>
                    <label className='email' htmlFor='email'>Email: </label>
                </div>
                
                <input
                    id='email'
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                {errors.email}
                <div className='password-content'>
                    <label className='password' htmlFor='password'>Password: </label>
                </div>
                <input
                    id='password'
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                />
                {errors.password}
            </div>
            <button disabled={isSubmitting} type='submit'>Submit</button>
            <Link className='link-signup' to='/signup'>Don't have an account? Sign-up here!</Link>
        </form>
        </div>
    );
};

export default Login;