import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/conule-logo.png";
import { Link } from "react-router-dom";
import Urls from "../assets/urls.json";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a className="home" href={Urls.home}>
            Home
          </a>
        </li>
        <li>
          <a className="home" href={Urls.product}>
            Products
          </a>
        </li>
        <li>
          <a className="home" href={Urls.partner}>
            Partners
          </a>
        </li>
        <li>
          <a className="home" href={Urls.investor}>
            Investor
          </a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="button-primary sign-in-btn">Book a Meeting</button>
        <a href={Urls.register}>
          <button className="button-primary sign-up-btn btn-sign">
            {" "}
            Sign Up{" "}
          </button>
        </a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
    </nav>
  );
};
