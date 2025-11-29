import React, { useState, useMemo, useRef } from "react";
import "./CivilAndArchitecDiplomaCourses.css";

import placeholderImage from "../CivilAndArchitectImages/CivilAndArchitec.jpg";


const allCourses = [
  {
    id: "master-architectural-design-1",
    title: "Master Diploma in Architectural Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Quantity Takeoff", "Revit Architecture", "3DS Max", "Primavera", "PPM Concepts"],
    duration: "380 hours",
    availability: "Online / Offline",
    description: "Advanced architectural design with BIM, visualization, and project planning.",
    image: placeholderImage,
    className: "master-architectural-design-1-card"
  },

  {
    id: "master-architectural-design-2",
    title: "Master Diploma in Architectural Design (MS Projects)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Quantity Takeoff", "Revit Architecture", "3DS Max", "Microsoft Projects"],
    duration: "380 hours",
    availability: "Online / Offline",
    description: "Architectural design with MS Projects-focused planning.",
    image: placeholderImage,
    className: "master-architectural-design-2-card"
  },

  {
    id: "master-structural-design-1",
    title: "Master Diploma in Structural Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Ansys Civil", "Primavera", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Structural engineering using STAAD Pro and civil FEA tools.",
    image: placeholderImage,
    className: "master-structural-design-1-card"
  },

  {
    id: "master-structural-design-2",
    title: "Master Diploma in Structural Design (MS Projects)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Ansys Civil", "Microsoft Projects"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Structural design with MS Projects-driven planning.",
    image: placeholderImage,
    className: "master-structural-design-2-card"
  },

  {
    id: "master-structural-design-etabs-1",
    title: "Master Diploma in Structural Design (ETABS)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "ETABS", "Primavera", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "ETABS-based structural engineering with project planning tools.",
    image: placeholderImage,
    className: "master-structural-design-etabs-1-card"
  },

  {
    id: "master-structural-design-etabs-2",
    title: "Master Diploma in Structural Design (ETABS + MS Projects)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "ETABS", "Microsoft Projects"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Structural design training integrating ETABS with MS Projects.",
    image: placeholderImage,
    className: "master-structural-design-etabs-2-card"
  },

  {
    id: "master-structural-design-fea",
    title: "Master Diploma in Structural Engineering with FEA",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "ETABS", "Ansys Civil", "Primavera", "PPM Concepts"],
    duration: "420 hours",
    availability: "Online / Offline",
    description: "Comprehensive structural engineering and finite element analysis program.",
    image: placeholderImage,
    className: "master-structural-design-fea-card"
  },

  {
    id: "master-structural-systems",
    title: "Master Diploma in Structural Systems",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "Ansys Civil", "ETABS", "Primavera", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Structural analysis and design using ETABS and FEA tools.",
    image: placeholderImage,
    className: "master-structural-systems-card"
  },

  {
    id: "master-building-design-1",
    title: "Master Diploma in Building Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "3DS Max", "Revit Architecture", "Primavera", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Comprehensive building design course including BIM & visualization.",
    image: placeholderImage,
    className: "master-building-design-1-card"
  },

  {
    id: "master-building-design-2",
    title: "Master Diploma in Building Design (MS Projects)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "3DS Max", "Revit Architecture", "Microsoft Projects", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Building design mastery with MS Projects scheduling.",
    image: placeholderImage,
    className: "master-building-design-2-card"
  },

  {
    id: "master-building-estimation-1",
    title: "Master Diploma in Building Estimation & Design",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Quantity Takeoff", "Revit Architecture", "Primavera", "PPM Concepts"],
    duration: "380 hours",
    availability: "Online / Offline",
    description: "Building design with quantity takeoff and structural analysis.",
    image: placeholderImage,
    className: "master-building-estimation-1-card"
  },

  {
    id: "master-building-estimation-2",
    title: "Master Diploma in Building Estimation & Design (MS Projects)",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Quantity Takeoff", "Revit Architecture", "Microsoft Projects", "PPM Concepts"],
    duration: "380 hours",
    availability: "Online / Offline",
    description: "Estimation, BIM, and structural design with MS Projects integration.",
    image: placeholderImage,
    className: "master-building-estimation-2-card"
  },

  {
    id: "master-bim-engineering",
    title: "Master Diploma in BIM Engineering",
    category: "Master Diploma",
    softwares: ["Revit Architecture", "Revit Structure", "Navisworks", "Dynamo", "BIM Collaborate Pro", "MS Project"],
    duration: "400 hours",
    availability: "Online / Offline",
    description: "BIM mastery in architecture, structure, coordination, and automation.",
    image: placeholderImage,
    className: "master-bim-engineering-card"
  },

  {
    id: "master-interior-visualization",
    title: "Master Diploma in Interior & Visualization",
    category: "Master Diploma",
    softwares: ["AutoCAD 2D", "SketchUp", "V-Ray", "Twinmotion", "Photoshop", "Revit Architecture"],
    duration: "320 hours",
    availability: "Online / Offline",
    description: "Complete interior design + visualization + BIM program.",
    image: placeholderImage,
    className: "master-interior-visualization-card"
  },

  {
    id: "master-project-planning",
    title: "Master Diploma in Project Planning & Construction",
    category: "Master Diploma",
    softwares: ["Primavera", "MS Project", "Power BI", "SAP", "AutoCAD 2D", "Quantity Takeoff"],
    duration: "430 hours",
    availability: "Online / Offline",
    description: "Advanced construction planning and analytics with SAP and Power BI.",
    image: placeholderImage,
    className: "master-project-planning-card"
  },

  {
    id: "master-structural-systems-fea",
    title: "Master Diploma in Structural Systems & FEA",
    category: "Master Diploma",
    softwares: ["STAAD Pro", "SAFE", "ETABS", "Ansys", "ABAQUS"],
    duration: "400 hours",
    availability: "Online / Offline",
    description: "Full spectrum structural modeling, analysis and FEA specialization.",
    image: placeholderImage,
    className: "master-structural-systems-fea-card"
  },

  {
    id: "master-urban-mapping",
    title: "Master Diploma in Urban & Infra Mapping",
    category: "Master Diploma",
    softwares: ["AutoCAD Map 3D", "ArcGIS", "Civil 3D", "MX Road", "Project Planning Tools"],
    duration: "420 hours",
    availability: "Online / Offline",
    description: "Urban GIS mapping, road design, and infrastructure planning.",
    image: placeholderImage,
    className: "master-urban-mapping-card"
  },

  {
    id: "master-architectural-visualization",
    title: "Master Diploma in Real-Time Architectural Visualization",
    category: "Master Diploma",
    softwares: ["SketchUp", "Lumion", "Corona", "Enscape", "Twinmotion", "Unity"],
    duration: "300 hours",
    availability: "Online / Offline",
    description: "Real-time rendering and visualization for architecture.",
    image: placeholderImage,
    className: "master-architectural-visualization-card"
  },

  {
    id: "master-bim-automation",
    title: "Master Diploma in BIM Automation & Project Control",
    category: "Master Diploma",
    softwares: ["Revit", "Dynamo", "Navisworks", "BIM Collaborate", "MS Project", "Primavera"],
    duration: "320 hours",
    availability: "Online / Offline",
    description: "Automation-driven BIM workflows with full project control.",
    image: placeholderImage,
    className: "master-bim-automation-card"
  },

  {
    id: "master-animation",
    title: "Master Diploma in Architectural & Engineering Animation",
    category: "Master Diploma",
    softwares: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop", "Premiere Pro"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Animation workflow for architectural and engineering presentations.",
    image: placeholderImage,
    className: "master-animation-card"
  }
]

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
