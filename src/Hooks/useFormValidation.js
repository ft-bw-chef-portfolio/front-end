import React from 'react';
import axios from 'axios';
import {useDispatch } from 'react-redux';
import { registerUser } from '../store/actions';



export default function useFormValidation(initialState, validate) {
  

  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (isSubmitting) {
  //     const noErrors = Object.keys(errors).length === 0;
  //     if (noErrors) {
  //       console.log('hello, chef', values);
  //       axios
  //         .post('https://bw4-chef-test.herokuapp.com/chefs', values)
  //         .then(response => {
  //           console.log(response);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //       setSubmitting(false);
  //     } else {
  //       setSubmitting(false);
  //     }
  //   }
  // }, [errors, isSubmitting, values]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    dispatch(registerUser(values));
    // axios
    //   .post('https://bw4-chef-api.herokuapp.com/api/auth/register', values)
    //   .then(res => {
    //     debugger;
    //   })
    //   .catch();
    /*     setSubmitting(true);
     */
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    values
  };
}
