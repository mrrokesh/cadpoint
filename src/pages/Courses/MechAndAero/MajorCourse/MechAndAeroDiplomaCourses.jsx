import React, { useState, useMemo } from "react";
import "./MechAndAeroDiplomaCourses.css";

import placeholderImage from "../MechAndAeroImages/CaddMech.webp";

export default function CertificationCourses() {

  const slugify = (s) =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");



const allCourses = [
   {
    id: "diploma-autocad-96",
    title: "Diploma in AutoCAD",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "AutoCAD 3D"],
    duration: "96 hours",
    availability: "Online / Offline",
    description: "Diploma covering AutoCAD 2D and 3D drafting skills.",
    image: placeholderImage,
    className: `${slugify("Diploma in AutoCAD")}-card`,
  },
  {
    id: "diploma-drafting-modeling-128",
    title: "Diploma in Drafting & 3D Modeling",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "Autodesk Inventor"],
    duration: "128 hours",
    availability: "Online / Offline",
    description: "Drafting and 3D modeling with AutoCAD and Inventor.",
    image: placeholderImage,
    className: `${slugify("Diploma in Drafting & 3D Modeling")}-card`,
  },
  {
    id: "diploma-drafting-128",
    title: "Diploma in Drafting",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "Microstation"],
    duration: "128 hours",
    availability: "Online / Offline",
    description: "Comprehensive drafting skills including Microstation.",
    image: placeholderImage,
    className: `${slugify("Diploma in Drafting")}-card`,
  },
  {
    id: "diploma-simulation-tools-160",
    title: "Diploma in Simulation Tools",
    category: "Diploma",
    softwares: ["Ansys", "Ansys Fluent"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Simulation tools for analysis and CFD fundamentals.",
    image: placeholderImage,
    className: `${slugify("Diploma in Simulation Tools")}-card`,
  },
  {
    id: "diploma-cam-design-160",
    title: "Diploma in CAM Design",
    category: "Diploma",
    softwares: ["NX Cad", "NX Cam"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "CAM design workflows using NX CAD & NX CAM.",
    image: placeholderImage,
    className: `${slugify("Diploma in CAM Design")}-card`,
  },
  {
    id: "diploma-product-design-144",
    title: "Diploma in Product Design",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "CATIA"],
    duration: "144 hours",
    availability: "Online / Offline",
    description: "Product design fundamentals combining CAD tools.",
    image: placeholderImage,
    className: `${slugify("Diploma in Product Design")}-card`,
  },
  {
    id: "diploma-hvac-mep-144",
    title: "Diploma HVAC & MEP Design",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "Revit MEP"],
    duration: "144 hours",
    availability: "Online / Offline",
    description: "HVAC & MEP design with hands-on drafting and Revit.",
    image: placeholderImage,
    className: `${slugify("Diploma HVAC & MEP Design")}-card`,
  },
  {
    id: "diploma-product-analysis-160",
    title: "Diploma in Product Analysis / Mechanical Analysis & Simulation",
    category: "Diploma",
    softwares: ["Ansys", "Hypermesh"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Product analysis, FEA and simulation fundamentals.",
    image: placeholderImage,
    className: `${slugify("Diploma in Product Analysis / Mechanical Analysis & Simulation")}-card`,
  },
  {
    id: "diploma-fea-nx-160",
    title: "Diploma in FEA with NX Nastran",
    category: "Diploma",
    softwares: ["Hypermesh", "NX Nastran"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "FEA using Hypermesh preprocessor and NX Nastran solver.",
    image: placeholderImage,
    className: `${slugify("Diploma in FEA with NX Nastran")}-card`,
  },
  {
    id: "diploma-piping-144",
    title: "Diploma in Piping Design & Drafting",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "PDMS", "SP3D"],
    duration: "144 hours",
    availability: "Online / Offline",
    description: "Piping design, drafting and plant layouts using PDMS/SP3D.",
    image: placeholderImage,
    className: `${slugify("Diploma in Piping Design & Drafting")}-card`,
  },
  {
    id: "diploma-sheetmetal-fabrication-120",
    title: "Diploma in Sheetmetal & Fabrication",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "SolidWorks", "CATIA"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Sheetmetal design theory, fabrication and CAD practice.",
    image: placeholderImage,
    className: `${slugify("Diploma in Sheetmetal & Fabrication")}-card`,
  },
  {
    id: "diploma-biomedical-160",
    title: "Diploma in Biomedical Engineering Designing Course",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "SolidWorks"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Biomedical engineering design with CAD tools and theory.",
    image: placeholderImage,
    className: `${slugify("Diploma in Biomedical Engineering Designing Course")}-card`,
  },
  {
    id: "diploma-instrumentation-144",
    title: "Diploma in Instrumentation Design",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "Instrumentation CAD"],
    duration: "144 hours",
    availability: "Online / Offline",
    description: "Instrumentation design with P&ID and CAD drafting.",
    image: placeholderImage,
    className: `${slugify("Diploma in Instrumentation Design")}-card`,
  },
  {
    id: "diploma-aeronautical-160",
    title: "Diploma in Aeronautical CAD Design",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "CATIA"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Aeronautical CAD topics using CATIA and theory.",
    image: placeholderImage,
    className: `${slugify("Diploma in Aeronautical CAD Design")}-card`,
  },
  {
    id: "diploma-automobile-product-160",
    title: "Diploma in Automobile Product Design",
    category: "Diploma",
    softwares: ["AutoCAD 2D", "SolidWorks"],
    duration: "160 hours",
    availability: "Online / Offline",
    description: "Automobile product design with CAD and automotive theory.",
    image: placeholderImage,
    className: `${slugify("Diploma in Automobile Product Design")}-card`,
  },

];


/* ---------------------- STATE ---------------------- */
const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedDuration, setSelectedDuration] = useState("All");
const [selectedSoftware, setSelectedSoftware] = useState("All");

const [openLangFor, setOpenLangFor] = useState(null);
const [showForm, setShowForm] = useState(false);
const [selectedCourse, setSelectedCourse] = useState(null);

/* ---------------------- DROPDOWN VALUES ---------------------- */
const categories = useMemo(() => {
  const s = new Set(allCourses.map((c) => c.category));
  return ["All", ...Array.from(s).sort()];
}, []);

const durations = useMemo(() => {
  const s = new Set(allCourses.map((c) => c.duration));
  return [
    "All",
    ...Array.from(s).sort((a, b) => {
      const na = parseInt(a) || 0;
      const nb = parseInt(b) || 0;
      return na - nb;
    }),
  ];
}, []);

const softwares = useMemo(() => {
  const s = new Set();
  allCourses.forEach((c) => c.softwares.forEach((sw) => s.add(sw)));
  return ["All", ...Array.from(s).sort()];
}, []);

/* ---------------------- FILTER LOGIC ---------------------- */
const filtered = useMemo(() => {
  return allCourses.filter((c) => {
    if (selectedCategory !== "All" && c.category !== selectedCategory) return false;
    if (selectedDuration !== "All" && c.duration !== selectedDuration) return false;
    if (selectedSoftware !== "All" && !c.softwares.includes(selectedSoftware)) return false;
    return true;
  });
}, [selectedCategory, selectedDuration, selectedSoftware]);

/* ---------------------- UI ---------------------- */
return (
  <div className="courses-container">

    <h1 className="heading">Diploma Courses</h1>

    {/* ---------------- FILTER BAR ---------------- */}
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

    {/* ---------------- COURSE GRID ---------------- */}
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

          {/* ---------------- LANG BUTTON ---------------- */}
          <button
            className="language-btn"
            onClick={() => {
              setOpenLangFor(course.id);
              setShowForm(false);
            }}
          >
            Languages ▾
          </button>

          {/* ---------------- SOFTWARE POPUP ---------------- */}
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

          {/* ---------------- ENQUIRY BUTTON ---------------- */}
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

      {filtered.length === 0 && <div className="no-results">No courses found.</div>}
    </div>

    {/* ---------------- FORM POPUP ---------------- */}
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
              <button
                type="button"
                className="skip-btn"
                onClick={() => setShowForm(false)}
              >
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