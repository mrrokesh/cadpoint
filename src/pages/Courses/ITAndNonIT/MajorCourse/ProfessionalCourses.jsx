import React, { useState, useMemo, useRef } from "react";
import "./ProfessionalCourses.css";
import placeholderImage from "../ITNonITImages/Python.jpg";


const allCourses = [
    {
        id: "pro-fullstack-200",
        title: "Professional Program in Full Stack Development – Python & React",
        category: "Professional",
        softwares: ["HTML", "CSS", "JavaScript", "Python", "React"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Extensive full-stack professional program: Python & React.",
        image: placeholderImage,
        className: "professional-program-in-full-stack-development-python-react-card"
      },
      {
        id: "pro-javafullstack-200",
        title: "Professional Program in Java Full Stack",
        category: "Professional",
        softwares: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Professional Java full stack training with Spring Boot.",
        image: placeholderImage,
        className: "professional-program-in-java-full-stack-card"
      },
      {
        id: "pro-mean-200",
        title: "Professional Program in MEAN Stack",
        category: "Professional",
        softwares: ["MongoDB", "Express.js", "Angular", "Node.js"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Complete MEAN stack professional training.",
        image: placeholderImage,
        className: "professional-program-in-mean-stack-card"
      },
      {
        id: "pro-mern-200",
        title: "Professional Program in MERN Stack",
        category: "Professional",
        softwares: ["MongoDB", "Express.js", "React", "Node.js"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Complete MERN stack professional training.",
        image: placeholderImage,
        className: "professional-program-in-mern-stack-card"
      },
      {
        id: "pro-webdesign-180",
        title: "Professional Program in Advanced Web Designing",
        category: "Professional",
        softwares: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
        duration: "180 hours",
        availability: "Online / Offline",
        description: "Advanced web design with interactivity and UX focus.",
        image: placeholderImage,
        className: "professional-program-in-advanced-web-designing-card"
      },
      {
        id: "pro-softwaretesting-200",
        title: "Professional Program in Software Testing",
        category: "Professional",
        softwares: ["Manual Testing", "Selenium", "JMeter", "QTP"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Industry-grade software testing professional curriculum.",
        image: placeholderImage,
        className: "professional-program-in-software-testing-card"
      },
      {
        id: "pro-datascience-200",
        title: "Professional Program in Data Science & AI",
        category: "Professional",
        softwares: ["Python", "Machine Learning", "Tableau", "Power BI"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "In-depth data science and AI professional training.",
        image: placeholderImage,
        className: "professional-program-in-data-science-ai-card"
      },
      {
        id: "pro-cloud-devops-200",
        title: "Professional Program in Cloud & DevOps",
        category: "Professional",
        softwares: ["AWS", "Azure", "Docker", "Jenkins"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Cloud and DevOps skills for production environments.",
        image: placeholderImage,
        className: "professional-program-in-cloud-devops-card"
      },
      {
        id: "pro-cybersecurity-200",
        title: "Professional Program in Cybersecurity & Ethical Hacking",
        category: "Professional",
        softwares: ["Wireshark", "Metasploit", "Burp Suite", "Mimikatz"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Professional cybersecurity and ethical hacking training.",
        image: placeholderImage,
        className: "professional-program-in-cybersecurity-ethical-hacking-card"
      },
      {
        id: "pro-rpa-200",
        title: "Professional Program in RPA Tools",
        category: "Professional",
        softwares: ["UI Path", "Blue Prism", "Automation Anywhere"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Professional RPA training across major tools.",
        image: placeholderImage,
        className: "professional-program-in-rpa-tools-card"
      },
      {
        id: "pro-digitalmarketing-180",
        title: "Professional Program in Digital Marketing",
        category: "Professional",
        softwares: ["SEO", "Google Ads", "Email Marketing", "Analytics"],
        duration: "180 hours",
        availability: "Online / Offline",
        description: "Complete digital marketing professional syllabus.",
        image: placeholderImage,
        className: "professional-program-in-digital-marketing-card"
      },
      {
        id: "pro-dbmanagement-200",
        title: "Professional Program in Database Management",
        category: "Professional",
        softwares: ["MySQL", "MongoDB", "Oracle", "SQL Server"],
        duration: "200 hours",
        availability: "Online / Offline",
        description: "Database admin and management professional curriculum.",
        image: placeholderImage,
        className: "professional-program-in-database-management-card"
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

      <h1 className="heading">Professional Courses</h1>


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
