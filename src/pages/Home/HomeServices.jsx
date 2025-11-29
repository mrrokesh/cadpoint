import React, { useEffect } from "react";
import "./HomeServices.css";

import project from "../../assets/Images/Services/project.jpg";
import placement from "../../assets/Images/Services/placement.jpg";
import certificate from "../../assets/Images/Services/certificate.jpg";
import corporate from "../../assets/Images/Services/corporate.webp";





const servicesData = [
  {
    title: "Industry Projects",
    description: "Get hands-on experience with real client-based live projects designed to match industry standards.",
    img: project,
  },
  {
    title: "Placement Assistance",
    description: "We offer interview preparation, resume building & direct placement drives through our partner companies.",
    img: placement,
  },
  {
    title: "Certification",
    description: "Receive globally recognized certificates that enhance your profile and boost your career prospects.",
    img: certificate,
  },
  {
    title: "Corporate Training",
    description: "Professional corporate upskilling programs for companies to upgrade their workforce with latest technologies.",
    img: corporate,
  }
];

const HomeServices = () => {

  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");
    const revealOnScroll = () => {
      serviceCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          card.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  return (
    <section id="services" className="services">
      <h3 className="section-title">Our Services</h3>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="img-wrap">
              <img src={service.img} alt={service.title} />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default HomeServices;
