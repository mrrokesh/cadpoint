import React, { useState, useMemo, useRef } from "react";
import "./DiplomaCourses.css";
import placeholderImage from "../ITNonITImages/Python.jpg";


const allCourses = [
     {
        id: "diploma-fullstack-120",
        title: "Diploma in Full Stack Web Development – Python",
        category: "Diploma",
        softwares: ["HTML", "Python"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Comprehensive full stack web development using Python.",
        image: placeholderImage,
        className: "diploma-in-full-stack-web-development-python-card"
      },
      {
        id: "diploma-java-fullstack-120",
        title: "Diploma in Java Full Stack Development",
        category: "Diploma",
        softwares: ["HTML", "Java"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Java-based full stack skills with front-end and back-end.",
        image: placeholderImage,
        className: "diploma-in-java-full-stack-development-card"
      },
      {
        id: "diploma-mern-120",
        title: "Diploma in MERN Stack Development",
        category: "Diploma",
        softwares: ["MongoDB", "React"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "MERN stack: MongoDB, Express, React and Node training.",
        image: placeholderImage,
        className: "diploma-in-mern-stack-development-card"
      },
      {
        id: "diploma-mean-120",
        title: "Diploma in MEAN Stack Development",
        category: "Diploma",
        softwares: ["MongoDB", "Angular"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "MEAN stack: MongoDB, Express, Angular and Node training.",
        image: placeholderImage,
        className: "diploma-in-mean-stack-development-card"
      },
      {
        id: "diploma-webdesignpro-100",
        title: "Diploma in Web Designing Pro",
        category: "Diploma",
        softwares: ["HTML", "Bootstrap"],
        duration: "100 hours",
        availability: "Online / Offline",
        description: "Advanced web designing with Bootstrap and best practices.",
        image: placeholderImage,
        className: "diploma-in-web-designing-pro-card"
      },
      {
        id: "diploma-softwaretesting-120",
        title: "Diploma in Software Testing",
        category: "Diploma",
        softwares: ["Manual Testing", "Selenium"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Software testing principles and automation with Selenium.",
        image: placeholderImage,
        className: "diploma-in-software-testing-card"
      },
      {
        id: "diploma-automationtesting-120",
        title: "Diploma in Automation Testing",
        category: "Diploma",
        softwares: ["Selenium", "JMeter"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Automation testing techniques using Selenium and JMeter.",
        image: placeholderImage,
        className: "diploma-in-automation-testing-card"
      },
      {
        id: "diploma-datascience-120",
        title: "Diploma in Data Science & Visualization",
        category: "Diploma",
        softwares: ["Python", "Tableau"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Data science fundamentals and visualization tools.",
        image: placeholderImage,
        className: "diploma-in-data-science-visualization-card"
      },
      {
        id: "diploma-databasemanagement-100",
        title: "Diploma in Database Management",
        category: "Diploma",
        softwares: ["MySQL", "MongoDB"],
        duration: "100 hours",
        availability: "Online / Offline",
        description: "Database administration and management concepts.",
        image: placeholderImage,
        className: "diploma-in-database-management-card"
      },
      {
        id: "diploma-digitalmarketingpro-100",
        title: "Diploma in Digital Marketing Pro",
        category: "Diploma",
        softwares: ["SEO", "Google Ads"],
        duration: "100 hours",
        availability: "Online / Offline",
        description: "Advanced digital marketing strategies and analytics.",
        image: placeholderImage,
        className: "diploma-in-digital-marketing-pro-card"
      },
      {
        id: "diploma-cloud-120",
        title: "Diploma in Cloud Computing – AWS & Azure",
        category: "Diploma",
        softwares: ["AWS", "Azure"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Cloud essentials covering both AWS and Azure platforms.",
        image: placeholderImage,
        className: "diploma-in-cloud-computing-card"
      },
      {
        id: "diploma-devops-120",
        title: "Diploma in DevOps Engineering",
        category: "Diploma",
        softwares: ["Git", "Docker"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "DevOps tools and CI/CD practice for modern workflows.",
        image: placeholderImage,
        className: "diploma-in-devops-engineering-card"
      },
      {
        id: "diploma-cybersecurity-120",
        title: "Diploma in Cyber Security",
        category: "Diploma",
        softwares: ["Wireshark", "Metasploit"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Cybersecurity foundations and penetration testing basics.",
        image: placeholderImage,
        className: "diploma-in-cyber-security-card"
      },
      {
        id: "diploma-rpa-100",
        title: "Diploma in RPA Tools",
        category: "Diploma",
        softwares: ["UI Path", "Blue Prism"],
        duration: "100 hours",
        availability: "Online / Offline",
        description: "Robotic Process Automation using industry RPA tools.",
        image: placeholderImage,
        className: "diploma-in-rpa-tools-card"
      },
      {
        id: "diploma-datawarehousing-120",
        title: "Diploma in Data Warehousing",
        category: "Diploma",
        softwares: ["Informatica", "OBIEE"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Data warehousing concepts, ETL and BI reporting tools.",
        image: placeholderImage,
        className: "diploma-in-data-warehousing-card"
      },
      {
        id: "diploma-programminglanguages-100",
        title: "Diploma in Programming Languages",
        category: "Diploma",
        softwares: ["Python", "Java"],
        duration: "100 hours",
        availability: "Online / Offline",
        description: "Multiple programming languages fundamentals in-depth.",
        image: placeholderImage,
        className: "diploma-in-programming-languages-card"
      },
      {
        id: "diploma-salesforce-120",
        title: "Diploma in Salesforce Administration",
        category: "Diploma",
        softwares: ["Salesforce Admin", "Salesforce Dev"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Salesforce admin and dev fundamentals with integrations.",
        image: placeholderImage,
        className: "diploma-in-salesforce-administration-card"
      },
      {
        id: "diploma-arvr-120",
        title: "Diploma in AR/VR Development",
        category: "Diploma",
        softwares: ["Unity", "ARKit"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "AR/VR development fundamentals across platforms.",
        image: placeholderImage,
        className: "diploma-in-ar-vr-development-card"
      },
      {
        id: "diploma-game-120",
        title: "Diploma in Game Development",
        category: "Diploma",
        softwares: ["Unity", "C#"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Game development using Unity and C# essentials.",
        image: placeholderImage,
        className: "diploma-in-game-development-card"
      },
      {
        id: "diploma-blockchain-120",
        title: "Diploma in Blockchain & Smart Contracts",
        category: "Diploma",
        softwares: ["Blockchain", "Solidity"],
        duration: "120 hours",
        availability: "Online / Offline",
        description: "Blockchain fundamentals, smart contracts and DApps.",
        image: placeholderImage,
        className: "diploma-in-blockchain-smart-contracts-card"
      },

];

export default function CertificationCourses() {


  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedSoftware, setSelectedSoftware] = useState("All");


  const [openLangFor, setOpenLangFor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);


  const categories = useMemo(() => {
    const unique = new Set(allCourses.map((c) => c.category));
    return ["All", ...Array.from(unique).sort()];
  }, []);

  const durations = useMemo(() => {
    const unique = new Set(allCourses.map((c) => c.duration));
    return ["All", ...Array.from(unique).sort((a, b) => {
      const na = parseInt(a) || 0;
      const nb = parseInt(b) || 0;
      return na - nb;
    })];
  }, []);

  const softwares = useMemo(() => {
    const unique = new Set();
    allCourses.forEach((c) => c.softwares.forEach((sw) => unique.add(sw)));
    return ["All", ...Array.from(unique).sort()];
  }, []);


  const filtered = useMemo(() => {
    return allCourses.filter((course) => {
      if (selectedCategory !== "All" && course.category !== selectedCategory)
        return false;

      if (selectedDuration !== "All" && course.duration !== selectedDuration)
        return false;

      if (
        selectedSoftware !== "All" &&
        !course.softwares.includes(selectedSoftware)
      )
        return false;

      return true;
    });
  }, [selectedCategory, selectedDuration, selectedSoftware]);



  return (
    <div className="courses-container">

      <h1 className="heading">Diploma Courses</h1>


      <div className="filter-bar">
      
        <div className="filter-item">
          <label>Category</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

       
        <div className="filter-item">
          <label>Duration</label>
          <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
            {durations.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

       
        <div className="filter-item">
          <label>Software</label>
          <select value={selectedSoftware} onChange={(e) => setSelectedSoftware(e.target.value)}>
            {softwares.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        
        <button
          className="reset-btn"
          onClick={() => {
            setSelectedCategory("All");
            setSelectedDuration("All");
            setSelectedSoftware("All");
          }}
        >
          Reset
        </button>
      </div>


      <div className="course-grid">
        {filtered.map((course) => (
          <div key={course.id} className={`course-card ${course.className}`}>

            <img src={course.image} alt={course.title} className="course-image" />

            <h3 className="course-title">{course.title}</h3>
            <span className="availability">{course.availability}</span>

            <div className="meta-row">
              <small className="category-label">{course.category}</small>
              <small className="duration-label">{course.duration}</small>
            </div>

      
            <button
              className="language-btn"
              onClick={() => {
                setOpenLangFor(course.id);
                setShowForm(false);
              }}
            >
              Languages ▾
            </button>

          
            {openLangFor === course.id && (
              <div className="tools-popup">
                <button className="tools-popup-close" onClick={() => setOpenLangFor(null)}>
                  ✕
                </button>

                <h4 className="tools-title">Softwares</h4>
                <ul className="tools-list">
                  {course.softwares.map((sw, i) => (
                    <li key={i}>{sw}</li>
                  ))}
                </ul>
              </div>
            )}

          
            <p className="course-description">{course.description}</p>

            <button
              className="enquiry-btn"
              onClick={() => {
                setSelectedCourse(course);
                setShowForm(true);
                setOpenLangFor(null);
              }}
            >
              Enquiry
            </button>

          </div>
        ))}

       
        {filtered.length === 0 && (
          <div className="no-results">No courses found.</div>
        )}
      </div>



      {showForm && selectedCourse && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Enquiry — {selectedCourse.title}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Enquiry submitted!");
                setShowForm(false);
              }}
            >
              <input name="name" placeholder="Name" required />
              <input name="email" placeholder="Email" type="email" required />
              <input name="phone" placeholder="Mobile Number" required />
              <input name="degree" placeholder="Basic Degree" required />
              <textarea name="message" placeholder="Message" rows="4" />

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button type="button" className="skip-btn" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
