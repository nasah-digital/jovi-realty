import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryFormTwo.css';
import inquirySec2Img from './../../../../assets/Images/inquiry-sec-2.png';

const InquiryFormTwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    inquiry: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with API call or other logic
    // Optional: Navigate to a thank-you page
    navigate('/thank-you');
  };

  return (
    <section className="inquiry-sec position-relative">
      <img src={inquirySec2Img} className="position-absolute inquiry-sec-image d-md-block d-none" alt="Inquiry background" />
      <div className="inquiry-con container">
        <div className="row row-gap-50">
          {/* Left Side Image */}
          <div className="col-md-6">
            <img src={inquirySec2Img} className="inquiry-sec-image-mob d-block d-md-none w-100" alt="Inquiry mobile" />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="inquiry-sec-form-2 w-100">
              <h3 className="main-h3 mb-4">Ready to Maximize Your Property's Potential?</h3>

              <form onSubmit={handleSubmit}>
                <div className="inquiry-form">
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="mobile">Mobile Number</label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="form-label" htmlFor="inquiry">Inquiry For</label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        className="form-control form-select"
                        value={formData.inquiry}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Please Choose an Option</option>
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-group">
                    <label className="form-label" htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control"
                      placeholder="Enter Location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field-group">
                    <button type="submit" className="btn btn-primary w-100">
                      Request A Personal <i className="bi bi-arrow-right-short"></i>
                    </button>
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

export default InquiryFormTwo;