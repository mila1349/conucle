import React from "react";
import "./Footer.scss";
import logo2 from "../assets/conule-logo-white.png";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentDate = format(new Date(), "MMMM d, yyyy");
  return (
    <footer>
      <div className="subscribe-section">
        <div className="subscribe-content">
          <h1>What are you waiting for?</h1>
          <p>
            Stay ahead of the curve! Subscribe to our newsletter for the latest
            updates, exclusive insights, and industry news delivered right to
            your inbox.
          </p>
          <form>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="subscribe-image">
          <img
            src="assets/mountain.png"
            max-width="330px"
            height="200px"
            alt=""
          />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={logo2} width="200px" height="50" alt="" />
          <p>
            Est suspendisse risus viverra potenti posuere aliquam. Malesuada
            tellus suspendisse tristique ornare erat tempor.
          </p>
          <div className="social-icons">
            <div classNameName="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section small">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Download</li>
          </ul>
        </div>
        <div className="footer-section small">
          <h4>Company</h4>
          <ul>
            <li>How We Work</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="footer-section small">
          <h4>Company</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
        <div className="footer-section address">
          <h4>Address</h4>
          <p>2947 Dundas St. W, #345, Toronto, ON, Canada, M6P 1Z2</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentDate} Concule.io. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
