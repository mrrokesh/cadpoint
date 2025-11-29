import React, { useEffect, useState } from "react";
import "./PlacementFlow.css";

import admissionImg from "../../assets/Images/PlacementFlow/admission.webp";
import trainingImg from "../../assets/Images/PlacementFlow/training.avif";
import interviewImg from "../../assets/Images/PlacementFlow/interview.jpg";
import internshipImg from "../../assets/Images/PlacementFlow/internship.avif";
import liveprojectImg from "../../assets/Images/PlacementFlow/LiveProject.jpg";
import placementImg from "../../assets/Images/PlacementFlow/placement.png";

const ServicesCarousel = () => {
  const initialCards = [
    { title: "Admission", img: admissionImg, desc: "Student enrolls and begins guided learning path." },
    { title: "Training & Skill Development", img: trainingImg, desc: "Practical training with live tools and real-time tasks." },
    { title: "Interview Preparation", img: interviewImg, desc: "Mock interviews, resume building & soft skills polishing." },
    { title: "Internship Opportunity", img: internshipImg, desc: "Best performers are offered internship in our company." },
    { title: "Live Project Exposure", img: liveprojectImg, desc: "Work with our dev teams on real-world production tasks." },
    { title: "Permanent Placement", img: placementImg, desc: "Top performers get placed in the company." }
  ];

  const [cards, setCards] = useState(initialCards);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(prev => {
        // remove the first (focused) card
        const newCards = prev.slice(1);
        return newCards.length === 0 ? initialCards : newCards;
      });
      setFocusIndex(0); // next card becomes focus
    }, 2500); // 5 seconds hold for zoom

    return () => clearTimeout(timer);
  }, [cards]);

  return (
    <div className="queue-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`queue-card ${index === focusIndex ? "focus" : ""} ${index < focusIndex ? "gone" : ""}`}
          style={{ left: `${index * 440}px` }} // 340px = card width + spacing
        >

          <h3>{card.title}</h3>

          <img src={card.img} alt={card.title} />
          
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCarousel;
