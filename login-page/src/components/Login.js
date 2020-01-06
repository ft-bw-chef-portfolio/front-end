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
                
        </form>
    )
}

export default Login;