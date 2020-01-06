import React from 'react';

function Login (){
    console.log();
    return(
        <form className='form'>
            <h1 className='login-header'>Log in!</h1>
                <div className='form-content'>
                   <div>
                        <label className='email' htmlFor='email'>Email: </label>
                    </div>
                        <input 
                        id='email'
                        type='text'
                        placeholder='email'
                        name='email'
                        />
                        <div>
                            <label className='password' htmlFor='password'>Password: </label>
                        </div>
                        <input 
                        id='password'
                        type='text'
                        placeholder='password'
                        name='password'
                        />
         
                </div>
                <button type='submit'>Submit</button>
                <p>Don't have an account? Sign-up here!</p>
        </form>
    )
}

export default Login;