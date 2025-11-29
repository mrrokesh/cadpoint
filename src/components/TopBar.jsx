import React from "react";
import "./TopBar.css";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Mobile Icon Row */}
      <div className="topbar-icons">
        <a href="tel:+919566679928" aria-label="Call">
          <FaPhoneAlt />
        </a>
        <a href="mailto:support@cadpoint.co.in" aria-label="Email">
          <FiMail />
        </a>
        <a href="https://www.facebook.com/share/p/1BauKWFCSr/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/cadpoint_salem?igsh=MWpwdGIwdjE5M2g3Nw==" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/9566679928" target="_blank" rel="noreferrer" aria-label="Whatsapp">
          <FaWhatsapp />
        </a>
      </div>

      {/* Desktop Layout */}
      <div className="topbar-desktop">
        <div className="topbar-left">
          <a href="tel:+919566679928">
            <FaPhoneAlt className="icon" />
            <span className="phone-text">+91 - 9566679928</span>
          </a>
          <a href="mailto:support@cadpoint.co.in">
            <FiMail className="icon" />
            <span className="email-text">support@cadpoint.co.in</span>
          </a>
        </div>

        <div className="topbar-right">
          <a href="https://wa.me/9566679928" target="_blank" rel="noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.facebook.com/share/p/1BauKWFCSr/" target="_blank" rel="noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.instagram.com/cadpoint_salem?igsh=MWpwdGIwdjE5M2g3Nw==" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
