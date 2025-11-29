import React from "react";
import about from "../../assets/Images/About/CADintro.avif";
import { useNavigate } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <section className="about-section">
      <div className="about-container">


        <div className="text-block animate-left">
          <h2>About CADPOINT</h2>

          <p>
            CADPOINT is a premier training and design institute that blends
            creativity, technology, and innovation. We specialize in
            CAD/CAM/BIM, IT, Digital Media, and Accounting — empowering learners
            through industry-level projects and skill-based learning.
          </p>

          <ul>
            <li>✔ Real Industry Projects & Case Studies</li>
            <li>✔ Corporate-Level Tools & Software Training</li>
            <li>✔ Professional Certification & Profile Building</li>
            <li>✔ Internship + Placement Assistance</li>
          </ul>

          <button onClick={handleKnowMore}>Know More →</button>
        </div>


        <div className="image-block animate-right">
          <div className="image-box">
            <a href="/about"><img src={about} alt="About CADDPOINT" /></a>
            <div className="shine-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
