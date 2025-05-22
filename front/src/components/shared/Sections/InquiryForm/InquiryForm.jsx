import React  from 'react';
import './InquiryForm.css';
import inquirySecImg from './../../../../assets/Images/inquiry-sec.png';
// import emailjs from 'emailjs-com';

const InquiryForm = () => {

  return (
    <section className="inquiry-sec position-relative">
      <img src={inquirySecImg} className="position-absolute inquiry-sec-image d-md-block d-none" />
      <div className="inquiry-con container">
        <div className="row row-gap-50">
          {/* Left Side Image */}
          <div className="col-md-6">
            <img src={inquirySecImg} className="inquiry-sec-image-mob d-block d-md-none w-100" />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="inquiry-sec-form w-100">
              <h3 className="main-h3 mb-4">Real Estate Inquiry Form</h3>
              <p className="mb-lg-5 mb-4">Reach out today and let us help you find your perfect property.</p>

              <form>
                <div className="inquiry-form">
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter Full Name" required />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="mobile-number">Mobile Number</label>
                      <input type="text" className="form-control" placeholder="Enter Mobile Number" required />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input type="email" className="form-control" placeholder="Enter Email Address" required />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="inquiry">Inquiry For</label>
                      <select className="form-control form-select" defaultValue="" required>
                        <option value="" disabled>Please Choose an Option</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-control" rows="4" placeholder="Enter a Brief Description"></textarea>
                  </div>

                  <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default InquiryForm;