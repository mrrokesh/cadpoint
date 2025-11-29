import React, { useEffect, useRef, useState } from "react";
import missionImg from "../../assets/images/Mission/missionImg.jpg";
import experience from "../../assets/images/Mission/experience.jpeg";
import mentoring from "../../assets/images/Mission/mentoring.jpg";
import skillDevelopement from "../../assets/images/Mission/skillDevelopement.jpeg";
import "./AboutMission.css";

const Mission = () => {
  const missionRef = useRef(null);
  const roadmapRef = useRef(null);
  const videoRef = useRef(null);

  const [missionVisible, setMissionVisible] = useState(false);
  const [roadmapVisible, setRoadmapVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === missionRef.current) setMissionVisible(true);
            if (entry.target === roadmapRef.current) setRoadmapVisible(true);
            if (entry.target === videoRef.current) setVideoVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (roadmapRef.current) observer.observe(roadmapRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-section">

      {/* Mission Block */}
      <div
        className={`mission-container ${missionVisible ? "slide-in" : ""}`}
        ref={missionRef}
      >
        <div className="mission-text">
          <h2>Our Mission</h2>

          <p className={`slide-left ${missionVisible ? "visible" : ""}`}>
            Our mission is to empower learners with modern skills and strong industry knowledge.
             We focus on building professionals who are confident, capable, and future-ready.
            By providing structured learning paths, we prepare students to excel in real careers.
          </p>

          <p className={`slide-right ${missionVisible ? "visible" : ""}`}>
           We create a holistic learning ecosystem that blends expert mentorship with practical training.
          Through hands-on projects and real-world exposure, learners gain job-ready experience.
          Our goal is to bridge the gap between education and industry demands effectively.
          </p>
        </div>

        <div className="mission-image">
          <img src={missionImg} alt="Mission Banner" />
        </div>
      </div>

      {/* Roadmap */}
      <div
        className={`mission-roadmap ${roadmapVisible ? "fade-in" : ""}`}
        ref={roadmapRef}
      >
        <h3>Our Mission Roadmap</h3>

        <p>
          Our roadmap focuses on structured learning paths that guide students toward mastery.
          We emphasize practical, hands-on experience to build strong real-world capability.
          Essential industry skills are integrated into every stage of the learning journey.
          Together, these pillars prepare learners to thrive in competitive professional environments.
        </p>

        <div className="mission-pillars">

          <div className={`pillar ${roadmapVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <img src={skillDevelopement} alt="Skill Development" />
            <p>Skill Development through hands-on, modern tech projects.</p>
          </div>

          <div className={`pillar ${roadmapVisible ? "visible" : ""}`} style={{ transitionDelay: "0.6s" }}>
            <img src={mentoring} alt="Mentorship" />
            <p>Personalized Mentorship from industry professionals.</p>
          </div>

          <div className={`pillar ${roadmapVisible ? "visible" : ""}`} style={{ transitionDelay: "0.9s" }}>
            <img src={experience} alt="Experience" />
            <p>Internships & Live Project Experience for real-world exposure.</p>
          </div>

        </div>
      </div>

      {/* Video */}
      <div
        className={`mission-video ${videoVisible ? "slide-in-video" : ""}`}
        ref={videoRef}
      >
        <h3>Our Journey & Mission</h3>

        <video autoPlay muted loop controls width="100%" style={{ maxWidth: "60%", borderRadius: "15px" }}>
          <source src="/CompanyIntroductionVideo.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
};

export default Mission;
