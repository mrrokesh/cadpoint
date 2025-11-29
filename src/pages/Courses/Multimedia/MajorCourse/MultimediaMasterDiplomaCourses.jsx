import React, { useState, useMemo, useRef } from "react";
import "./MultimediaMasterDiplomaCourses.css";

import placeholderImage from "../MultimediaImages/AfterEffect.webp";


const allCourses = [
  { id: "master-graphic-multimedia", title: "Master Diploma in Graphic & Multimedia Design", category: "Master Diploma", softwares: ["Photoshop", "Illustrator", "CorelDRAW", "InDesign", "After Effects"], duration: "240 hours", availability: "Online / Offline", description: "Master-level training in complete multimedia design.", image: placeholderImage, className: "master-graphic-multimedia-card" },
  { id: "master-animation-vfx", title: "Master Diploma in Animation & VFX", category: "Master Diploma", softwares: ["Maya", "After Effects", "Premiere Pro", "Flash", "Photoshop"], duration: "280 hours", availability: "Online / Offline", description: "Advanced animation & VFX master diploma.", image: placeholderImage, className: "master-animation-vfx-card" },
  { id: "master-digital-media", title: "Master Diploma in Digital Media Production", category: "Master Diploma", softwares: ["Premiere", "After Effects", "Audition", "Photoshop", "Illustrator"], duration: "260 hours", availability: "Online / Offline", description: "Master end-to-end digital media production.", image: placeholderImage, className: "master-digital-media-card" },
  { id: "master-multimedia-web", title: "Master Diploma in Multimedia and Web", category: "Master Diploma", softwares: ["Photoshop", "Illustrator", "HTML/CSS", "JavaScript", "Figma"], duration: "250 hours", availability: "Online / Offline", description: "Master multimedia + web development skills.", image: placeholderImage, className: "master-multimedia-web-card" },
  { id: "master-game-art", title: "Master Diploma in 3D Animation & Game Art", category: "Master Diploma", softwares: ["Maya", "Unity", "Photoshop", "Blender", "Substance Painter"], duration: "300 hours", availability: "Online / Offline", description: "Complete 3D animation & game art master program.", image: placeholderImage, className: "master-game-art-card" },
  { id: "master-architectural-animation", title: "Master Diploma in Architectural & Engineering Animation", category: "Master Diploma", softwares: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop", "Premiere Pro"], duration: "280 hours", availability: "Online / Offline", description: "Advanced walkthrough & architectural animation.", image: placeholderImage, className: "master-architectural-animation-card" },
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
