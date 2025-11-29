import React, { useState, useMemo, useRef } from "react";
import "./MultimediaProfessionalCourses.css";

import placeholderImage from "../MultimediaImages/AfterEffect.webp";


const allCourses =  [
  { id: "pro-graphic-web", title: "Professional Course in Graphic & Web Design", category: "Professional", softwares: ["Photoshop", "Illustrator", "CorelDRAW", "HTML/CSS"], duration: "160 hours", availability: "Online / Offline", description: "Professional-level training in graphic & web design.", image: placeholderImage, className: "pro-graphic-web-card" },
  { id: "pro-digital-video", title: "Professional Course in Digital Video Production", category: "Professional", softwares: ["Premiere Pro", "After Effects", "Audition", "Photoshop"], duration: "180 hours", availability: "Online / Offline", description: "Master video production and editing.", image: placeholderImage, className: "pro-digital-video-card" },
  { id: "pro-2d-animation", title: "Professional Course in 2D Animation & Editing", category: "Professional", softwares: ["Flash", "Photoshop", "Sound Forge", "Premiere Pro"], duration: "160 hours", availability: "Online / Offline", description: "Professional 2D animation training.", image: placeholderImage, className: "pro-2d-animation-card" },
  { id: "pro-print-publishing", title: "Professional Course in Print & Publishing", category: "Professional", softwares: ["Photoshop", "InDesign", "PageMaker", "Illustrator"], duration: "160 hours", availability: "Online / Offline", description: "Advance your skills in print media.", image: placeholderImage, className: "pro-print-publishing-card" },
  { id: "pro-uiux", title: "Professional Course in UI/UX Design", category: "Professional", softwares: ["Photoshop", "Figma", "Illustrator", "InDesign"], duration: "160 hours", availability: "Online / Offline", description: "UI/UX design with modern tools.", image: placeholderImage, className: "pro-uiux-card" },
  { id: "pro-3d-design", title: "Professional Course in 3D Design & Animation", category: "Professional", softwares: ["Maya", "After Effects", "Photoshop", "Premiere"], duration: "180 hours", availability: "Online / Offline", description: "End-to-end 3D animation & rendering.", image: placeholderImage, className: "pro-3d-design-card" },
  { id: "pro-architectural-visualization", title: "Professional Course in Architectural Visualization", category: "Professional", softwares: ["3ds Max", "V-Ray", "Photoshop", "Premiere Pro"], duration: "180 hours", availability: "Online / Offline", description: "Architectural visualization with V-Ray & Max.", image: placeholderImage, className: "pro-architectural-visualization-card" },
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

      <h1 className="heading"> Professional Courses</h1>


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
