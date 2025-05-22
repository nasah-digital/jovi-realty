import React from 'react'
import './LoginForm.css'
import logo from "../../../../assets/Images/jovi reality logo 1.svg";
import googleIcon from "../../../../assets/Images/googleIcon.svg"
import facebookIcon from "../../../../assets/Images/fbIcon.svg"
import linkedinIcon from "../../../../assets/Images/linkedinIcon.svg"

const LoginForm = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;

    if (!form.checkValidity()) {
      // Handle empty required fields
      setErrorMessage('Please fill out all required fields.');
      form.reportValidity();
      return;
    }

    // If form is valid, proceed with submission
    setErrorMessage(''); // Clear any existing error message
    setIsSubmitted(true); // Set state to show success message

    // Reset form after submission
    form.reset();

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <div className='container d-flex justify-content-center'>
      <form className="LoginForm">
        <div className="jovi-form">
          <img src={logo} alt="Jovi Logo" className="jovi-logo" />

          <h2 className="jovi-heading">Welcome Back!</h2>
          <p className="jovi-subtext">
            Tell us a bit about yourself—this is how others will see you in the <a href="#">Jovi Realty</a> community.
          </p>
          {/* <div className=''> */}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="eg: john_william_0125" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="************" required />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <div className="separator">
            <hr />
            <span>Or</span>
            <hr />
          </div>


          <div className="social-icons">
            <button type="button"><img src={googleIcon} alt="Google" /></button>
            <button type="button"><img src={facebookIcon} alt="Facebook" /></button>
            <button type="button"><img src={linkedinIcon} alt="LinkedIn" /></button>
          </div>
        </div>

        <div className="social-separator">
          <hr />
        </div>

        <button className="continue-btn btn btn-primary w-100" type="submit">Continue</button>
      </form>
    </div>
  )
}

export default LoginForm

