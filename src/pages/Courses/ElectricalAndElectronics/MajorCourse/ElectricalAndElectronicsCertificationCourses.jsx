import React, { useState, useMemo, useRef } from "react";
import "./ElectricalAndElectronicsCertificationCourses.css";


import placeholderImage from "../ElectricalAndElectronicsImages/Electronics.jpg";



const allCourses = [
    { id: "cert-autocad-2d-electrical", title: "Certification Course on AutoCAD 2D for Electrical Drafting", category: "Certification", softwares: ["AutoCAD 2D"], duration: "64 hours", availability: "Online / Offline", description: "Training focused on 2D AutoCAD drafting for electrical layouts.", image: placeholderImage, className: "cert-autocad-2d-electrical-card" },
    { id: "cert-autocad-3d", title: "Certification Course on AutoCAD 3D", category: "Certification", softwares: ["AutoCAD 3D"], duration: "32 hours", availability: "Online / Offline", description: "AutoCAD 3D modeling course for engineering drafting.", image: placeholderImage, className: "cert-autocad-3d-card" },
    { id: "cert-revit-mep", title: "Certification Course on Revit MEP", category: "Certification", softwares: ["Revit MEP"], duration: "80 hours", availability: "Online / Offline", description: "Complete Revit MEP training for building services design.", image: placeholderImage, className: "cert-revit-mep-card" },
    { id: "cert-autocad-electrical", title: "Certification Course on AutoCAD Electrical", category: "Certification", softwares: ["AutoCAD Electrical"], duration: "80 hours", availability: "Online / Offline", description: "Electrical control panel design using AutoCAD Electrical.", image: placeholderImage, className: "cert-autocad-electrical-card" },
    { id: "cert-wiring-harness-design", title: "Certificate Course on Electrical Wiring Harness Design", category: "Certification", softwares: ["EPLAN", "AutoCAD Electrical"], duration: "80 hours", availability: "Online / Offline", description: "Wiring harness design using EPLAN and AutoCAD Electrical.", image: placeholderImage, className: "cert-wiring-harness-design-card" },
    { id: "cert-hap", title: "Certification Course on HAP (Cooling Load Estimation)", category: "Certification", softwares: ["HAP"], duration: "40 hours", availability: "Online / Offline", description: "Cooling load estimation training with HAP.", image: placeholderImage, className: "cert-hap-card" },
    { id: "cert-duct-sizer", title: "Certification Course on DuctSizer", category: "Certification", softwares: ["Duct Sizer"], duration: "20 hours", availability: "Online / Offline", description: "HVAC duct sizing calculations.", image: placeholderImage, className: "cert-duct-sizer-card" },
    { id: "cert-pipe-sizer", title: "Certification Course on PipeSizer", category: "Certification", softwares: ["Pipe Sizer"], duration: "20 hours", availability: "Online / Offline", description: "Pipe sizing and flow calculations.", image: placeholderImage, className: "cert-pipe-sizer-card" },
    { id: "cert-firefighting-drafting", title: "Certification Course on Fire Fighting Drafting", category: "Certification", softwares: ["Revit MEP", "Fire Fighting Concepts"], duration: "100 hours", availability: "Online / Offline", description: "Firefighting drafting and design.", image: placeholderImage, className: "cert-firefighting-drafting-card" },
    { id: "cert-instrumentation-pid", title: "Certification Course on Instrumentation CAD & P&ID", category: "Certification", softwares: ["Instrumentation CAD", "P&ID"], duration: "60 hours", availability: "Online / Offline", description: "Instrumentation and P&ID drafting.", image: placeholderImage, className: "cert-instrumentation-pid-card" },
    { id: "cert-hvac-design", title: "Certification Course on HVAC Design", category: "Certification", softwares: ["HVAC"], duration: "80 hours", availability: "Online / Offline", description: "Fundamentals of HVAC system design.", image: placeholderImage, className: "cert-hvac-design-card" },
    { id: "cert-etap", title: "Certification Course on ETAP (Power System Analysis)", category: "Certification", softwares: ["ETAP"], duration: "60 hours", availability: "Online / Offline", description: "Power system analysis using ETAP.", image: placeholderImage, className: "cert-etap-card" },
    { id: "cert-lighting-design", title: "Certification Course in Lighting Design", category: "Certification", softwares: ["Dialux", "Dialux Evo"], duration: "40 hours", availability: "Online / Offline", description: "Lighting design using Dialux tools.", image: placeholderImage, className: "cert-lighting-design-card" },
    { id: "cert-firefighting-basics", title: "Certification Course on Firefighting Design Basics", category: "Certification", softwares: ["Firefighting Layouts", "Basic Concepts"], duration: "40 hours", availability: "Online / Offline", description: "Basics of firefighting design.", image: placeholderImage, className: "cert-firefighting-basics-card" },
    { id: "cert-revit-family", title: "Certification Course on Revit Family Creation", category: "Certification", softwares: ["Revit Family Module"], duration: "40 hours", availability: "Online / Offline", description: "Custom family creation in Revit.", image: placeholderImage, className: "cert-revit-family-card" },
    { id: "cert-navisworks", title: "Certification Course on Navisworks for MEP Coordination", category: "Certification", softwares: ["Navisworks Manage"], duration: "40 hours", availability: "Online / Offline", description: "MEP coordination and clash detection.", image: placeholderImage, className: "cert-navisworks-card" }
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

      <h1 className="heading">  Certification Courses</h1>

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
