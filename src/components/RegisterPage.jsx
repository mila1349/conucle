import React, { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phoneNumber: "",
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setIsSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      phoneNumber: "",
      terms: false,
    });
  };

  return (
    <>
      <div className="rg-container">
        <div className="rg-image-container">
          <img src="assets/banner-1.png" alt="Scenic Image" />
        </div>
        <div className="rg-form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="rg-form-row">
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                className="rg-half-width"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="rg-half-width"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              required
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              name="organization"
              placeholder="Organization Name"
              value={formData.organization}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className="rg-form-row rg-checkbox-row">
              <input
                required
                type="checkbox"
                id="rg-terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="rg-terms">I'm over 18 years old</label>
            </div>
            <button type="submit" className="rg-signup-btn">
              Sign Up
            </button>
            {isSubmitted && (
              <p className="rg-success-message">
                Your registration was successful!
              </p>
            )}
            <p className="rg-login-link">
              Don't Have an account? <a href="#">Sign Up</a>
            </p>
            <div className="rg-social-login">
              <span>or</span>
              <div className="rg-social-icons">
                <a href="#">
                  <img
                    src="https://w7.pngwing.com/pngs/477/596/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-thumbnail.png"
                    style={{ width: "40px", height: "40px" }}
                    alt="Google"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    style={{ width: "40px", height: "40px" }}
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg"
                    style={{ width: "40px", height: "40px" }}
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
