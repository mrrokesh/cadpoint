import React from "react";
import "./StickyWhatsApp.css";
import whatsappimg from "../assets/whatsapp.png";




const StickyWhatsApp = ({ phoneNumber }) => {
  // Provide fallback default number if none is passed
  const safeNumber = (phoneNumber || "+91 8667630258").replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${safeNumber}`}
      className="sticky-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappimg} alt="WhatsApp" />
    </a>
  );
};

export default StickyWhatsApp;