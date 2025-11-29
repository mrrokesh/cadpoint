import React from "react";
import "./Ecosystem.css";

// Import Images
import Tesla from "../../assets/images/Ecosystem/tesla.webp";
import Meta from "../../assets/images/Ecosystem/meta.webp";
import AppleImg from "../../assets/images/Ecosystem/apple.jpg";

// Own Brands Data
const ownBrands = [
  {
    name: "FatCat Wealthy",
    badges: ["Finance", "Investment", "Wealth Management"],
    stats: { projects: 120, clients: 80 },
    info: [
      "FatCatWealthy empowers clients with smart financial strategies and technologies.",
      "We secure and grow wealth, transforming financial independence into reality."
    ],
    website: "https://fatcatwealthy.com",
    image: Tesla,
  },
  {
    name: "Lax360 Private Limited",
    badges: ["Animation", "Web Design", "Multimedia"],
    stats: { projects: 90, clients: 50 },
    info: [
      "Lax360 crafts stunning animations, websites, and multimedia projects.",
      "We combine creativity and technology to make your brand unforgettable."
    ],
    website: "https://www.lax360.com",
    image: Meta,
  },
  {
    name: "Lax Venture",
    badges: ["AI", "Automation", "Innovation"],
    stats: { projects: 60, clients: 40 },
    info: [
      "LaxVenture drives AI innovation to solve complex business challenges.",
      "We build intelligent ecosystems optimizing operations and efficiency."
    ],
    website: "https://www.laxventure.com",
    image: AppleImg,
  }
];

// Tied-up Companies Data
const tiedUpCompanies = [
  {
    name: "Skimitter Private Limited",
    badges: ["Mechanical", "Electrical", "Engineering"],
    stats: { projects: 70, clients: 35 },
    info: [
      "Skimitter excels in mechanical and electrical engineering solutions.",
      "They deliver projects with unmatched quality, reliability, and innovation."
    ],
    website: "https://skimitaracademy.com/",
    image: Tesla,
  },
  {
    name: "Alan Tech Soft",
    badges: ["Software", "Tech", "Digital Transformation"],
    stats: { projects: 80, clients: 50 },
    info: [
      "Alan empowers businesses with smart software and digital solutions.",
      "They create intelligent technology for impactful digital experiences."
    ],
    website: "https://aalantechsoft.com",
    image: Meta,
  },
  {
    name: "Nexon Gen Tech",
    badges: ["AI & IT Solutions", "Cybersecurity", "Enterprise"],
    stats: { projects: 100, clients: 70 },
    info: [
      "NexonTech provides AI powered, IT solutions and Enterprise-grade platforms.",
      "They deliver scalable and reliable solutions for modern business needs."
    ],
    website: "https://www.nexontech.com",
    image: AppleImg,
  }
];

// Card Component
const EcosystemCard = ({ name, badges, stats, info, website, image, reverse, type }) => (
  <div className={`ecosystem-card ${reverse ? "reverse" : ""} ${type}`}>
    <div className="ecosystem-image">
      <img src={image} alt={name} />
    </div>
    <div className="ecosystem-details">
      <h3>{name}</h3>
      
      <div className="badges">
        {badges.map((badge, i) => <span key={i} className="badge">{badge}</span>)}
      </div>
      
      {info.map((para, i) => <p key={i}>{para}</p>)}
      
      <div className="stats">
        <span>Projects: {stats.projects}</span>
        <span>Clients: {stats.clients}</span>
      </div>
      
      <a href={website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  </div>
);

const Ecosystem = () => {
  return (
    <section className="ecosystem-section">
      <h2>Ecosystem</h2>
      <p className="intro-text">
        "Explore our ecosystem: a powerful network of our own ventures and trusted partners driving innovation and excellence.
        From AI and creative multimedia to finance and engineering, each company adds unique value and expertise.
        Together, we deliver breakthrough solutions, sustainable growth, and unmatched experiences.
        Our ecosystem is where technology, creativity, and strategy converge to shape the future.
        Step into a world of innovation, impact, and limitless possibilities."
      </p>

      <h3 className="section-title">Our Own Brands</h3>
      {ownBrands.map((item, index) => (
        <EcosystemCard
          key={index}
          {...item}
          reverse={index % 2 !== 0}
          type="own"
        />
      ))}

      <h3 className="section-title">Tied-up Companies</h3>
      {tiedUpCompanies.map((item, index) => (
        <EcosystemCard
          key={index}
          {...item}
          reverse={index % 2 === 0}
          type="partner"
        />
      ))}
    </section>
  );
};

export default Ecosystem;
