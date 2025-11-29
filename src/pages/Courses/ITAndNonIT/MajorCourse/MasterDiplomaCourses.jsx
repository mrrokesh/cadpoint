import React, { useState, useMemo, useRef } from "react";
import "./MasterDiplomaCourses.css";
import placeholderImage from "../ITNonITImages/Python.jpg";


const allCourses = [
{
    id: "master-fullstack-260",
    title: "Master Diploma in Full Stack Development",
    category: "Master Diploma",
    softwares: ["HTML", "CSS", "JavaScript", "Python", "Django", "React", "Node.js"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Comprehensive master-level full-stack development program.",
    image: placeholderImage,
    className: "master-diploma-in-full-stack-development-card"
  },
  {
    id: "master-softwareeng-260",
    title: "Master Diploma in Software Engineering",
    category: "Master Diploma",
    softwares: ["Python", "Java", "C#", ".NET", "SQL Server", "Git"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Advanced software engineering and system design topics.",
    image: placeholderImage,
    className: "master-diploma-in-software-engineering-card"
  },
  {
    id: "master-cloud-devops-260",
    title: "Master Diploma in Cloud Computing & DevOps",
    category: "Master Diploma",
    softwares: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Ansible"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Master-level cloud and DevOps engineering curriculum.",
    image: placeholderImage,
    className: "master-diploma-in-cloud-computing-devops-card"
  },
  {
    id: "master-datascience-280",
    title: "Master Diploma in Data Science & AI",
    category: "Master Diploma",
    softwares: ["Python", "Machine Learning", "Deep Learning", "Tableau", "Power BI", "Hadoop"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Deep dive into data science, ML and big data ecosystems.",
    image: placeholderImage,
    className: "master-diploma-in-data-science-ai-card"
  },
  {
    id: "master-cybersecurity-260",
    title: "Master Diploma in Cybersecurity & Penetration Testing",
    category: "Master Diploma",
    softwares: ["Wireshark", "Metasploit", "Mimikatz", "Kali Linux", "Burp Suite", "Cryptography"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Advanced offensive/defensive security and pentesting topics.",
    image: placeholderImage,
    className: "master-diploma-in-cybersecurity-penetration-testing-card"
  },
  {
    id: "master-rpa-240",
    title: "Master Diploma in RPA & Automation",
    category: "Master Diploma",
    softwares: ["UI Path", "Blue Prism", "Automation Anywhere", "Power Automate"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Advanced RPA automation and enterprise process design.",
    image: placeholderImage,
    className: "master-diploma-in-rpa-automation-card"
  },
  {
    id: "master-digitalmarketing-240",
    title: "Master Diploma in Digital Marketing & Analytics",
    category: "Master Diploma",
    softwares: ["SEO", "Google Ads", "Email Marketing", "Analytics", "HubSpot"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Strategic digital marketing and analytics at master level.",
    image: placeholderImage,
    className: "master-diploma-in-digital-marketing-analytics-card"
  },
  {
    id: "master-webapp-260",
    title: "Master Diploma in Web & App Development",
    category: "Master Diploma",
    softwares: ["HTML", "CSS", "Bootstrap", "Angular", "React Native", "Firebase"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Master-level web and mobile app build & deployment.",
    image: placeholderImage,
    className: "master-diploma-in-web-app-development-card"
  },
  {
    id: "master-advprog-260",
    title: "Master Diploma in Advanced Programming",
    category: "Master Diploma",
    softwares: ["Python", "Java", "C++", "Go", "Swift", "Git", "Docker"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Comprehensive advanced programming language topics.",
    image: placeholderImage,
    className: "master-diploma-in-advanced-programming-card"
  },
  {
    id: "master-gamedev-280",
    title: "Master Diploma in Game & AR/VR Development",
    category: "Master Diploma",
    softwares: ["Unity", "Unreal Engine", "Blender", "ARKit", "ARCore", "C#"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Master-level gaming and immersive experience development.",
    image: placeholderImage,
    className: "master-diploma-in-game-ar-vr-development-card"
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

      <h1 className="heading"> Master Diploma Courses </h1>


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
