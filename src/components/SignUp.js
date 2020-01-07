import React from 'react';
import useFormValidation from '../Hooks/useFormValidation';
import validateAuth from '../Hooks/validateAuth';
import '../styles/signup.scss';

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
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    isSubmitting
  } = useFormValidation(initialState, validateAuth);

  return (
    <div className="container">
      <div className="signupBox">
        <h1>SignUp!</h1>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
