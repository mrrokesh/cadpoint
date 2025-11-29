import React from "react";
import "./AboutPage.css";
import Vision from "./Vision";
import Mission from "./Mission";

const AboutPage = () => {
  return (
    <div id="about" className="about-page">
      <Mission />
      <Vision />
    </div>
  );
};

export default AboutPage;
