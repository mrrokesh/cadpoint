import React, { useState, useMemo, useRef } from "react";
import "./ElectricalAndElectronicsDiplomaCourses.css";

import placeholderImage from "../ElectricalAndElectronicsImages/Electronics.jpg";


const allCourses = [
    { id: "dip-autocad", title: "Diploma in AutoCAD", category: "Diploma", softwares: ["AutoCAD 2D", "AutoCAD 3D"], duration: "96 hours", availability: "Online / Offline", description: "2D & 3D drafting diploma.", image: placeholderImage, className: "dip-autocad-card" },
    { id: "dip-hvac-mep", title: "Diploma in HVAC & MEP Design", category: "Diploma", softwares: ["AutoCAD 2D", "Revit MEP"], duration: "144 hours", availability: "Online / Offline", description: "HVAC + MEP drafting and modeling.", image: placeholderImage, className: "dip-hvac-mep-card" },
    { id: "dip-electrical-cad", title: "Diploma in Electrical CAD", category: "Diploma", softwares: ["AutoCAD 2D", "AutoCAD Electrical"], duration: "144 hours", availability: "Online / Offline", description: "Electrical CAD drafting diploma.", image: placeholderImage, className: "dip-electrical-cad-card" },
    { id: "dip-instrumentation", title: "Diploma in Instrumentation Design", category: "Diploma", softwares: ["AutoCAD 2D", "Instrumentation CAD", "P&ID"], duration: "144 hours", availability: "Online / Offline", description: "Instrumentation & P&ID design diploma.", image: placeholderImage, className: "dip-instrumentation-card" },
    { id: "dip-plumbing", title: "Diploma in Plumbing Design & Drafting", category: "Diploma", softwares: ["AutoCAD 2D", "Revit MEP", "Layout Design"], duration: "160 hours", availability: "Online / Offline", description: "Plumbing layout and drafting diploma.", image: placeholderImage, className: "dip-plumbing-card" },
    { id: "dip-firefighting", title: "Diploma in Fire Fighting System Drafting", category: "Diploma", softwares: ["AutoCAD 2D", "Revit MEP", "Fire Fighting Theory"], duration: "160 hours", availability: "Online / Offline", description: "Firefighting system drafting diploma.", image: placeholderImage, className: "dip-firefighting-card" },
    { id: "dip-wiring-harness", title: "Diploma in Electrical Wiring Harness Design", category: "Diploma", softwares: ["EPLAN", "AutoCAD Electrical"], duration: "160 hours", availability: "Online / Offline", description: "Wiring harness diploma.", image: placeholderImage, className: "dip-wiring-harness-card" },
    { id: "dip-electrical-design", title: "Diploma in Electrical Design", category: "Diploma", softwares: ["AutoCAD Electrical", "Revit MEP", "Dialux"], duration: "180 hours", availability: "Online / Offline", description: "Electrical building services design.", image: placeholderImage, className: "dip-electrical-design-card" },
    { id: "dip-mep-coordination", title: "Diploma in MEP Coordination & Drafting", category: "Diploma", softwares: ["AutoCAD 2D", "Revit MEP", "Navisworks"], duration: "180 hours", availability: "Online / Offline", description: "Drafting + coordination for MEP.", image: placeholderImage, className: "dip-mep-coordination-card" }
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
