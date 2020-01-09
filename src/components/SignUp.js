import React from 'react';
import useFormValidation from '../Hooks/useFormValidation';
import validateAuth from '../Hooks/validateAuth';
//import '../styles/signup.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { registerUser } from '../store/actions';

const initialState = {
  username: '',
  name: '',
  email: '',
  password: '',
  location: '',
  website: '',
  phone: ''
};

const SignUp = () => {
  
  const dispatch = useDispatch();
  const {userLogged} = useSelector((state) => state);

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    isSubmitting
  } = useFormValidation(initialState, validateAuth);

  const submitForm = e => {
    e.preventDefault();
    dispatch(registerUser(initialState))
  }

  if (userLogged) return <Redirect to="/login"/>

  return (
    <div className="container">
      <div className="signupBox">
        <h3>SignUp, Chef!</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
            className="username"
            value={values.username}
            placeholder="Your username"
            type="text"
          />
          <input
            onChange={handleChange}
            name="name"
            value={values.name}
            type="text"
            placeholder="Your name"
          />
          <input
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
            value={values.email}
            type="email"
            placeholder="Your email"
          />
          {errors.email && <p className="errors-text">{errors.email}</p>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            type="password"
            value={values.password}
            placeholder="Your password"
          />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="location"
            value={values.location}
            placeholder="Your location"
          />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="website"
            value={values.website}
            placeholder="Your website"
          />

          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="phone"
            value={values.phone}
            placeholder="Your phone number"
          />
          <button disabled={isSubmitting} type="submit">
            SignUp
          </button>
        </form>
        <Link className="login">Already have an account? Sign here!</Link>
      </div>
    </div>
  );
};

export default SignUp;
