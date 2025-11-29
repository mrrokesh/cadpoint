import React, { useEffect, useRef, useState } from "react";
import visionImg from "../../assets/images/Vision/vision-banner.jpg";
import futureTechImg from "../../assets/images/Vision/futureTechImg.webp";
import academyImg from "../../assets/images/Vision/academyImg.webp";
import servicesImg from "../../assets/images/Vision/servicesImg.webp";
import "./AboutVision.css";

const Vision = () => {
  const mainRef = useRef(null);
  const futureRef = useRef(null);
  const videoRef = useRef(null);

  const [mainVisible, setMainVisible] = useState(false);
  const [futureVisible, setFutureVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === mainRef.current) setMainVisible(true);
            if (entry.target === futureRef.current) setFutureVisible(true);
            if (entry.target === videoRef.current) setVideoVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (futureRef.current) observer.observe(futureRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">

      {/* Vision Block */}
      <div
        className={`vision-container ${mainVisible ? "slide-in" : ""}`}
        ref={mainRef}
      >
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            We strive to become the most trusted and innovative IT Academy & Service provider,
            empowering learners and businesses with future-ready skills.
          </p>

          <p>
            Our ecosystem covers cutting-edge IT technologies, multimedia courses, CADD services
            across Civil, Mechanical, and Electrical domains, corporate training, and high-end
            mentorship.
          </p>
        </div>

        <div className="vision-image">
          <img src={visionImg} alt="Vision Banner" />
        </div>
      </div>

      {/* Future Section */}
      <div
        className={`future-section ${futureVisible ? "fade-in-5s" : ""}`}
        ref={futureRef}
      >
        <h3>What the Future Holds</h3>

        <div className="Future">
          <p className={`slide-left ${futureVisible ? "visible" : ""}`}>
            As we expand into advanced technology domains, we prioritize strong practical learning.
            Our focus is on hands-on projects that help students apply concepts effectively.
            We provide real-world problem-solving opportunities through internships and production work.
            This ensures every learner gains meaningful experience that prepares them for industry challenges.
          </p>

          <p className={`slide-right ${futureVisible ? "visible" : ""}`}>
            Our curriculum covers modern domains such as AI, Machine Learning, Cloud Computing, and Cybersecurity.
            We also include multimedia and CADD training to broaden student expertise across industries.
            Each module is designed to build strong technical and creative capabilities.
            This comprehensive approach ensures students develop versatile, industry-ready skill sets.
          </p>
        </div>

        <div className="future-items">
          <div className="future-item fade-slide" style={{ animationDelay: "0.5s" }}>
            <img src={futureTechImg} alt="Future Tech" />
            <p>
              Embracing the latest technologies like AI, ML, Cloud & Cybersecurity, enabling learners
              to master IT skills.
            </p>
          </div>

          <div className="future-item fade-slide" style={{ animationDelay: "2s" }}>
            <img src={academyImg} alt="Academy" />
            <p>
              Personalized mentorship, project-based learning, and real-world training for professionals.
            </p>
          </div>

          <div className="future-item fade-slide" style={{ animationDelay: "3.5s" }}>
            <img src={servicesImg} alt="Services" />
            <p>
              Specialized services in CADD, multimedia, and corporate IT solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Video */}
      <div
        className={`vision-video ${videoVisible ? "slide-in-video" : ""}`}
        ref={videoRef}
      >
        <h3>Our Journey & Future Roadmap</h3>
        <video autoPlay muted loop controls width="100%" style={{ maxWidth: "60%", borderRadius: "15px" }}>
          <source src="/VisionVideo.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
};

export default Vision;
