import React from "react";
import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = ({ className = '' }) => {
    return (
        <div className={`cta-section text-center text-white ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column row-gap-20 align-items-center">
                        <h2 className="main-h2 mb-md-2 mb-0">Stay Ahead in Real Estate</h2>
                        <p className="mb-md-3 mb-0">Get exclusive market insights, expert tips, and the latest property listings delivered to your inbox</p>
                        <Link to="/contact" className="btn btn-tertiary">
                            Subscribe Now
                            <i className="bi bi-arrow-right-short"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;