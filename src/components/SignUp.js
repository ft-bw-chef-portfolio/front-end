import React from 'react';
import useFormValidation from '../Hooks/useFormValidation';
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
  const { handleChange, values, handleSubmit } = useFormValidation(
    initialState
  );

  return (
    <div className="container">
      <div className="signupBox">
        <h1>SignUp!</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
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
            value={values.email}
            type="password"
            placeholder="Your email"
          />
          <input
            onChange={handleChange}
            name="password"
            value={values.password}
            placeholder="Your password"
          />
          <input
            onChange={handleChange}
            name="location"
            value={values.location}
            placeholder="Your location"
          />
          <input
            onChange={handleChange}
            name="website"
            value={values.website}
            placeholder="Your website"
          />

          <input
            onChange={handleChange}
            name="phone"
            value={values.phone}
            placeholder="Your phone number"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
