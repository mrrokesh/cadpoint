import React, { useState, useMemo, useRef } from "react";
import "./MechAndAeroProfessionalCourses.css";

import placeholderImage from "../MechAndAeroImages/CaddMech.webp";

  const slugify = (s) =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");


const allCourses = [
   {
    id: "pro-mep-design-260",
    title: "Professional in MEP Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit MEP", "Microsoft Project", "Primavera"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "MEP design workflows, planning and project management concepts.",
    image: placeholderImage,
    className: `${slugify("Professional in MEP Design")}-card`,
  },
  {
    id: "pro-product-design-240",
    title: "Professional in Product Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Creo Parametric", "CATIA"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Product design professional course combining multiple CAD tools.",
    image: placeholderImage,
    className: `${slugify("Professional in Product Design")}-card`,
  },
  {
    id: "pro-product-design-analysis-240",
    title: "Professional in Product Design & Analysis",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Ansys", "CATIA"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Product design with analysis: CAD plus simulation tools.",
    image: placeholderImage,
    className: `${slugify("Professional in Product Design & Analysis")}-card`,
  },
  {
    id: "pro-piping-engineering-240",
    title: "Professional in Piping Engineering",
    category: "Professional",
    softwares: ["AutoCAD", "PDMS", "CAESAR II"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Piping engineering & plant design professional program.",
    image: placeholderImage,
    className: `${slugify("Professional in Piping Engineering")}-card`,
  },
  {
    id: "pro-mep-project-planning-240",
    title: "Professional in MEP Design & Project Planning",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit MEP", "Primavera", "Microsoft Project"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "MEP design combined with planning tools and PPM concepts.",
    image: placeholderImage,
    className: `${slugify("Professional in MEP Design & Project Planning")}-card`,
  },
  {
    id: "pro-cam-cnc-280",
    title: "Professional in CAM & CNC Programming",
    category: "Professional",
    softwares: ["MasterCAM", "NX-CAM", "Fusion 360"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Advanced CAM workflows, NX-CAM, MasterCAM and CNC programming.",
    image: placeholderImage,
    className: `${slugify("Professional in CAM & CNC Programming")}-card`,
  },
  {
    id: "pro-automotive-160",
    title: "Professional in Automotive Product Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "SolidWorks", "CATIA"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Automotive product design professional training and theory.",
    image: placeholderImage,
    className: `${slugify("Professional in Automotive Product Design")}-card`,
  },
  {
    id: "pro-aerospace-280",
    title: "Professional in Aerospace Product Design",
    category: "Professional",
    softwares: ["CATIA", "SolidWorks", "Autodesk Inventor"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Aerospace product design combining CAD and aerospace theory.",
    image: placeholderImage,
    className: `${slugify("Professional in Aerospace Product Design")}-card`,
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
