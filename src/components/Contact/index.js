import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div className='section row my-1 mx-3'>
      <span className='gutter col-sm-12 col-md-2'></span>
      <div className='section-cta col-sm-12 col-md-8'>
        <div className='contact'>
          <form id='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                className='form-control'
                type='text'
                name='name'
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email address:</label>
              <input
                className='form-control'
                type='email'
                name='email'
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea
                className='form-control'
                name='message'
                rows='5'
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className='error-text'>{errorMessage}</p>
              </div>
            )}
            <button
              className='btn btn-light mt-1'
              data-testid='button'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <span className='gutter col-sm-12 col-md-2'></span>
    </div>
  );
}

export default ContactForm;
