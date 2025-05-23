import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      setErrorMessage('Please fill out all required fields.');
      form.reportValidity();
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
    form.reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className='container d-flex justify-content-center'>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="jovi-form">

          <h2 className="jovi-heading">Welcome Back!</h2>
          <p className="jovi-subtext">
            Hi there agents, login to manage your listing, check inquiries and much more.
          </p>

          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="eg: john_william_0125" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="************" required />
          </div>

          <div className="social-separator">
            <hr />
          </div>

          {/* Success/Error Messages */}
          {(isSubmitted || errorMessage) && (
            <div className="mt-4">
              {isSubmitted && (
                <div className="alert alert-success" role="alert">
                  Login Successful!
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          )}

          <button className="continue-btn btn btn-primary w-100 mt-3" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
