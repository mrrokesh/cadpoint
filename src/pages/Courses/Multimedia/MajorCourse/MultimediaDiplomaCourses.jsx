import React, { useState, useMemo, useRef } from "react";
import "./MultimediaDiplomaCourses.css";

import placeholderImage from "../MultimediaImages/AfterEffect.webp";



const allCourses = [  { id: "dip-dtp", title: "Diploma in Desktop Publishing", category: "Diploma", softwares: ["Photoshop", "PageMaker"], duration: "100 hours", availability: "Online / Offline", description: "Learn essential desktop publishing tools.", image: placeholderImage, className: "dip-dtp-card" },
  { id: "dip-advanced-dtp", title: "Diploma in Advanced DTP", category: "Diploma", softwares: ["Photoshop", "CorelDRAW", "Illustrator"], duration: "120 hours", availability: "Online / Offline", description: "Advanced-level DTP and design tools.", image: placeholderImage, className: "dip-advanced-dtp-card" },
  { id: "dip-graphic-essentials", title: "Diploma in Graphic Design Essentials", category: "Diploma", softwares: ["Photoshop", "Illustrator"], duration: "120 hours", availability: "Online / Offline", description: "Core skills for graphic designing.", image: placeholderImage, className: "dip-graphic-essentials-card" },
  { id: "dip-video-editing", title: "Diploma in Video Editing", category: "Diploma", softwares: ["Premiere Pro", "Photoshop"], duration: "120 hours", availability: "Online / Offline", description: "Advanced video editing diploma.", image: placeholderImage, className: "dip-video-editing-card" },
  { id: "dip-animation-basics", title: "Diploma in Animation Basics", category: "Diploma", softwares: ["Maya", "Flash"], duration: "120 hours", availability: "Online / Offline", description: "Learn basics of 2D & 3D animation.", image: placeholderImage, className: "dip-animation-basics-card" },
  { id: "dip-web-layout", title: "Diploma in Web Design & Layouts", category: "Diploma", softwares: ["HTML & CSS", "InDesign"], duration: "120 hours", availability: "Online / Offline", description: "Web layouts & responsive design.", image: placeholderImage, className: "dip-web-layout-card" },
  { id: "dip-ui-design", title: "Diploma in UI Design", category: "Diploma", softwares: ["Figma", "Photoshop"], duration: "100 hours", availability: "Online / Offline", description: "User interface design fundamentals.", image: placeholderImage, className: "dip-ui-design-card" },
  { id: "dip-multimedia", title: "Diploma in Multimedia Design", category: "Diploma", softwares: ["Photoshop", "After Effects"], duration: "120 hours", availability: "Online / Offline", description: "Complete multimedia design workflow.", image: placeholderImage, className: "dip-multimedia-card" },
  { id: "dip-architectural-walkthrough", title: "Diploma in Architectural Walkthrough", category: "Diploma", softwares: ["3ds Max", "Premiere Pro"], duration: "120 hours", availability: "Online / Offline", description: "3D walkthrough creation for architecture.", image: placeholderImage, className: "dip-architectural-walkthrough-card" },];

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

      <h1 className="heading"> Diploma Courses</h1>


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
