import React from 'react';

function Login (){
    console.log();
    return(
        <form>
            <h1>Log in!</h1>
           
                <label htmlFor='email'>Email: </label>
                <input 
                id='email'
                type='text'
                placeholder='email'
                name='email'
                /> 
                <label htmlFor='password'>Password: </label>
                <input 
                id='password'
                type='text'
                placeholder='password'
                name='password'
                />
                <button type='submit'>Submit</button>
                <p>Don't have an account? Sign-up here!</p>
        </form>
    )
}

export default Login;