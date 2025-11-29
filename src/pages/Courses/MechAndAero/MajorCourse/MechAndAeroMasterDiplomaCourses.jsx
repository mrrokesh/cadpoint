import React, { useState, useMemo, useRef } from "react";
import "./MechAndAeroMasterDiplomaCourses.css";

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
    id: "master-mechanical-cad-620",
    title: "Master Diploma in Mechanical CAD",
    category: "Master Diploma",
    softwares: [
      "AutoCAD 2D",
      "Creo Parametric",
      "Autodesk Inventor",
      "Ansys",
      "Catia",
      "SolidWorks",
      "NX Cad",
      "NX Nastran",
    ],
    duration: "620 hours",
    availability: "Online / Offline",
    description: "Master-level course covering multiple CAD, CAE tools and advanced workflows.",
    image: placeholderImage,
    className: `${slugify("Master Diploma in Mechanical CAD")}-card`,
  },
  {
    id: "master-product-design-analysis-440",
    title: "Master Diploma in Product Design & Analysis",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Creo Parametric", "Ansys", "SolidWorks"],
    duration: "440 hours",
    availability: "Online / Offline",
    description: "Advanced product design with analysis and planning tools.",
    image: placeholderImage,
    className: `${slugify("Master Diploma in Product Design & Analysis")}-card`,
  },
  {
    id: "master-aerospace-design-500",
    title: "Master diploma in Aerospace Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Catia", "SolidWorks", "Ansys Workbench", "NX Nastran", "Hypermesh"],
    duration: "500 hours",
    availability: "Online / Offline",
    description: "Master-level aerospace CAD, FEA and domain theory.",
    image: placeholderImage,
    className: `${slugify("Master diploma in Aerospace Design")}-card`,
  },
  {
    id: "master-automobile-design-500",
    title: "Master diploma in Automobile Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Catia", "SolidWorks", "Ansys Workbench", "NX Nastran", "Hypermesh"],
    duration: "500 hours",
    availability: "Online / Offline",
    description: "Master-level automobile design with simulation and theory.",
    image: placeholderImage,
    className: `${slugify("Master diploma in Automobile Design")}-card`,
  },
  {
    id: "master-simulation-validation-450",
    title: "Master Diploma in Simulation & Validation",
    category: "Master Diploma",
    softwares: ["Catia", "Hypermesh", "NX Nastran", "Ansys"],
    duration: "450 hours",
    availability: "Online / Offline",
    description: "Simulation and product validation using industry-grade tools.",
    image: placeholderImage,
    className: `${slugify("Master Diploma in Simulation & Validation")}-card`,
  },
  {
    id: "master-cam-design-420",
    title: "Master Diploma in CAM Design",
    category: "Master Diploma",
    softwares: ["Fusion 360", "NX CAM", "PowerMill", "GD&T"],
    duration: "420 hours",
    availability: "Online / Offline",
    description: "Master-level CAM, GD&T and project planning concepts.",
    image: placeholderImage,
    className: `${slugify("Master Diploma in CAM Design")}-card`,
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
