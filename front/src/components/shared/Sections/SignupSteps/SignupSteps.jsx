import React from "react";
import "./SignupSteps.css"
import { Link } from "react-router-dom";
import boldArrow from './../../../../assets/Images/bold-arrow.svg'
import semiboldArrow from './../../../../assets/Images/semi-bold-arrow.svg'
import lightArrow from './../../../../assets/Images/light-arrow.svg'
import addAddress from './../../../../assets/Images/Add-Address.svg'
import addSigners from './../../../../assets/Images/Add-Signers.svg'
import signContract from './../../../../assets/Images/Sign-Contract.svg'
import getListed from './../../../../assets/Images/Get-Listed.svg'


const SignupSteps = ({ title, showButton, buttonText, buttonLink, className = '' }) => {
    return (
        <section className={`signup-steps-section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-h2 text-center mb-5">{title}</h2>


                        <div className="signup-steps-grid d-flex justify-content-between gap-40">
                            <div className="signup-step-card">
                                <img src={addAddress} alt="Submit Address" className="signup-step-icon" />
                                <p className="mb-0">Submit Address</p>
                            </div>

                            <div className="signup-arrow">
                                <img src={boldArrow} alt="Next step" />
                            </div>

                            <div className="signup-step-card">
                                <img src={addSigners} alt="Add Signers" className="signup-step-icon" />
                                <p className="mb-0">Add Signers</p>
                            </div>

                            <div className="signup-arrow">
                                <img src={semiboldArrow} alt="Next step" />
                            </div>

                            <div className="signup-step-card">
                                <img src={signContract} alt="Sign Contract" className="signup-step-icon" />
                                <p className="mb-0">Sign Contract</p>
                            </div>

                            <div className="signup-arrow">
                                <img src={lightArrow} alt="Next step" />
                            </div>

                            <div className="signup-step-card">
                                <img src={getListed} alt="Get Listed" className="signup-step-icon" />
                                <p className="mb-0">Get Listed</p>
                            </div>
                        </div>
                        {showButton && (
                            <div className="text-center mt-5">
                                <div className="signup-steps-search">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Property Address"
                                        className="signup-steps-search-input"
                                    />
                                    <Link to={buttonLink} className="signup-steps-search-button">
                                        {buttonText} <i className="bi bi-arrow-right-short"></i>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupSteps;

