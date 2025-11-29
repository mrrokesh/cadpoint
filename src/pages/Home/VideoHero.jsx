import React, { useEffect, useState } from "react";
import "./VideoHero.css";

export default function VideoHero({ showPopup }) {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Trigger hero content only after popup closes
    if (!showPopup) {
      const timer = setTimeout(() => setShowHero(true), 300); // slight delay
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section id="home" className="hero">
      {/* Hero video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Hero content */}
      <div className={`hero-content ${showHero ? "show-hero" : ""}`}>
        <h1>
          Welcome to the Future of Tech, Design & Multimedia Excellence
        </h1>
        <p>
          Dive into our immersive ecosystem where cutting-edge AI, multimedia innovation, and creative design converge.  
          Experience hands-on projects, expert mentorship, and next-gen training that shapes your skills for tomorrow’s industries.  
          From advanced CAD & design solutions to dynamic multimedia and academic programs, we empower you to create, innovate, and lead.  
          Join us and explore a world of limitless possibilities, where technology meets imagination.
        </p>
      </div>
    </section>
  );
}
