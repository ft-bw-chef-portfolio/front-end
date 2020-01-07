import React from 'react';

export default function useFormValidation(initialState) {
  const [values, setValues] = React.useState(initialState);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello, chef', values);
  }

  return { handleChange, handleSubmit, values };
}
