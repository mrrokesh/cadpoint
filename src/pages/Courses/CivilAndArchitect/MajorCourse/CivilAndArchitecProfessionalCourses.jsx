import React, { useState, useMemo, useRef } from "react";
import "./CivilAndArchitecProfessionalCourses.css";

import placeholderImage from "../CivilAndArchitectImages/CivilAndArchitec.jpg";




const allCourses =  [
  {
    id: "pro-architectural-design-1",
    title: "Professional in Architectural Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "3DS Max", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Complete architectural planning, BIM modeling, and visualization.",
    image: placeholderImage,
    className: "pro-architectural-design-1-card"
  },

  {
    id: "pro-architectural-design-qty",
    title: "Professional in Architectural Design with Quantity Takeoff",
    category: "Professional",
    softwares: ["AutoCAD 2D", "3DS Max", "Revit Architecture", "Quantity Takeoff"],
    duration: "264 hours",
    availability: "Online / Offline",
    description: "Architectural design with integrated quantity surveying.",
    image: placeholderImage,
    className: "pro-architectural-design-qty-card"
  },

  {
    id: "pro-architectural-project-planning-1",
    title: "Professional in Architectural Design & Project Planning",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit Architecture", "Microsoft Projects", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Architectural design combined with project planning essentials.",
    image: placeholderImage,
    className: "pro-architectural-project-planning-1-card"
  },

  {
    id: "pro-architectural-project-planning-2",
    title: "Professional in Architectural Design & Project Planning (Primavera)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit Architecture", "Primavera", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Architectural BIM design with Primavera project planning.",
    image: placeholderImage,
    className: "pro-architectural-project-planning-2-card"
  },

  {
    id: "pro-architectural-design-qty-ms",
    title: "Professional in Architectural Design + QTO + MS Project",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit Architecture", "Quantity Takeoff", "Microsoft Projects", "PPM Concepts"],
    duration: "300 hours",
    availability: "Online / Offline",
    description: "Architectural design, quantity surveying, and project management.",
    image: placeholderImage,
    className: "pro-architectural-design-qty-ms-card"
  },

  {
    id: "pro-architectural-design-qty-primavera",
    title: "Professional in Architectural Design + QTO + Primavera",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit Architecture", "Quantity Takeoff", "Primavera", "PPM Concepts"],
    duration: "300 hours",
    availability: "Online / Offline",
    description: "Advanced BIM, estimation, and scheduling with Primavera.",
    image: placeholderImage,
    className: "pro-architectural-design-qty-primavera-card"
  },

  {
    id: "pro-building-design-1",
    title: "Professional in Building Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "ETABS", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Structural + architectural building modeling training.",
    image: placeholderImage,
    className: "pro-building-design-1-card"
  },

  {
    id: "pro-building-design-staad-ansys",
    title: "Professional in Building Design (STAAD, Ansys)",
    category: "Professional",
    softwares: ["STAAD Pro", "Ansys Civil", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Building design including structural + FEA tools.",
    image: placeholderImage,
    className: "pro-building-design-staad-ansys-card"
  },

  {
    id: "pro-building-design-3ds",
    title: "Professional in Building Design (3DS Max)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "3DS Max", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Building modeling + architectural visualization.",
    image: placeholderImage,
    className: "pro-building-design-3ds-card"
  },

  {
    id: "pro-building-design-staad",
    title: "Professional in Building Design (STAAD Pro)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Architectural + structural building design using STAAD.",
    image: placeholderImage,
    className: "pro-building-design-staad-card"
  },

  {
    id: "pro-building-design-staad-qty",
    title: "Professional in Building Design + Quantity Takeoff",
    category: "Professional",
    softwares: ["AutoCAD 2D", "STAAD Pro", "Revit Architecture", "Quantity Takeoff"],
    duration: "280 hours",
    availability: "Online / Offline",
    description: "Building BIM + structural + QTO integrated program.",
    image: placeholderImage,
    className: "pro-building-design-staad-qty-card"
  },

  {
    id: "pro-building-design-staad-ms",
    title: "Professional in Building Design + STAAD + MS Project",
    category: "Professional",
    softwares: ["STAAD Pro", "Revit Architecture", "Microsoft Projects", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "Structural design with project management using MS Project.",
    image: placeholderImage,
    className: "pro-building-design-staad-ms-card"
  },

  {
    id: "pro-building-design-staad-qty-ms",
    title: "Professional in Building Design + QTO + MS Project",
    category: "Professional",
    softwares: ["STAAD Pro", "Revit Architecture", "Quantity Takeoff", "Microsoft Projects", "PPM Concepts"],
    duration: "316 hours",
    availability: "Online / Offline",
    description: "Advanced structural + QTO + MS Project integration.",
    image: placeholderImage,
    className: "pro-building-design-staad-qty-ms-card"
  },

  {
    id: "pro-building-design-staad-primavera",
    title: "Professional in Building Design + STAAD + Primavera",
    category: "Professional",
    softwares: ["STAAD Pro", "Revit Architecture", "Primavera", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "Building design with Primavera-driven scheduling.",
    image: placeholderImage,
    className: "pro-building-design-staad-primavera-card"
  },

  {
    id: "pro-building-design-staad-qty-primavera",
    title: "Professional in Building Design + QTO + Primavera",
    category: "Professional",
    softwares: ["STAAD Pro", "Revit Architecture", "Quantity Takeoff", "Primavera", "PPM Concepts"],
    duration: "316 hours",
    availability: "Online / Offline",
    description: "Complete building design + QTO + Primavera planning program.",
    image: placeholderImage,
    className: "pro-building-design-staad-qty-primavera-card"
  },

  {
    id: "pro-building-design-etabs-ms",
    title: "Professional in ETABS + Revit + MS Projects",
    category: "Professional",
    softwares: ["ETABS", "Revit Architecture", "Microsoft Projects", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "ETABS structural design with MS Project integration.",
    image: placeholderImage,
    className: "pro-building-design-etabs-ms-card"
  },

  {
    id: "pro-building-design-etabs-qty-ms",
    title: "Professional in ETABS + Revit + QTO + MS Projects",
    category: "Professional",
    softwares: ["ETABS", "Revit Architecture", "Quantity Takeoff", "Microsoft Projects", "PPM Concepts"],
    duration: "316 hours",
    availability: "Online / Offline",
    description: "Structural analysis + BIM + estimation + MS Project skills.",
    image: placeholderImage,
    className: "pro-building-design-etabs-qty-ms-card"
  },

  {
    id: "pro-building-design-etabs-primavera",
    title: "Professional in ETABS + Revit + Primavera",
    category: "Professional",
    softwares: ["ETABS", "Revit Architecture", "Primavera", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "ETABS structure design with Primavera project planning.",
    image: placeholderImage,
    className: "pro-building-design-etabs-primavera-card"
  },

  {
    id: "pro-building-design-etabs-qty-primavera",
    title: "Professional in ETABS + Revit + QTO + Primavera",
    category: "Professional",
    softwares: ["ETABS", "Revit Architecture", "Quantity Takeoff", "Primavera", "PPM Concepts"],
    duration: "316 hours",
    availability: "Online / Offline",
    description: "Full ETABS + BIM + estimation + Primavera workflow.",
    image: placeholderImage,
    className: "pro-building-design-etabs-qty-primavera-card"
  },

  {
    id: "pro-transportation-design-1",
    title: "Professional in Transportation Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "MX Road", "Primavera", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Transportation engineering using MX Road & Primavera.",
    image: placeholderImage,
    className: "pro-transportation-design-1-card"
  },

  {
    id: "pro-transportation-design-2",
    title: "Professional in Transportation Design (MS Projects)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "MX Road", "Microsoft Projects", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Road design with MS Project-based scheduling.",
    image: placeholderImage,
    className: "pro-transportation-design-2-card"
  },

  {
    id: "pro-transportation-design-adv-1",
    title: "Professional in Transportation Design (Civil 3D + Primavera)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "MX Road", "Civil 3D", "Primavera", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Advanced road design with Civil 3D & Primavera.",
    image: placeholderImage,
    className: "pro-transportation-design-adv-1-card"
  },

  {
    id: "pro-transportation-design-adv-2",
    title: "Professional in Transportation Design (Civil 3D + MS Projects)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "MX Road", "Civil 3D", "Microsoft Projects", "PPM Concepts"],
    duration: "340 hours",
    availability: "Online / Offline",
    description: "Roadway engineering & modeling using Civil 3D + MS Projects.",
    image: placeholderImage,
    className: "pro-transportation-design-adv-2-card"
  },

  {
    id: "pro-land-survey-1",
    title: "Professional in Land Survey",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Civil 3D", "Microsoft Projects", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Land survey engineering with Civil 3D + MS Projects.",
    image: placeholderImage,
    className: "pro-land-survey-1-card"
  },

  {
    id: "pro-land-survey-2",
    title: "Professional in Land Survey (Primavera)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Civil 3D", "Primavera", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Surveying and project planning with Civil 3D + Primavera.",
    image: placeholderImage,
    className: "pro-land-survey-2-card"
  },

  {
    id: "pro-structural-simulation-1",
    title: "Professional in Structural Design & Simulation",
    category: "Professional",
    softwares: ["STAAD Pro", "Ansys Civil", "Primavera", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "Structural FEA + STAAD + Primavera project workflows.",
    image: placeholderImage,
    className: "pro-structural-simulation-1-card"
  },

  {
    id: "pro-structural-simulation-2",
    title: "Professional in Structural Simulation (MS Project)",
    category: "Professional",
    softwares: ["STAAD Pro", "Ansys Civil", "Microsoft Projects", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "Structural simulation with MS Project integration.",
    image: placeholderImage,
    className: "pro-structural-simulation-2-card"
  },

  {
    id: "pro-structural-design-etabs-ms",
    title: "Professional in Structural Design with ETABS + MS Project",
    category: "Professional",
    softwares: ["STAAD Pro", "ETABS", "Microsoft Projects", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "Combined STAAD, ETABS, MS Project structural workflow.",
    image: placeholderImage,
    className: "pro-structural-design-etabs-ms-card"
  },

  {
    id: "pro-structural-design-etabs-primavera",
    title: "Professional in Structural Design with ETABS + Primavera",
    category: "Professional",
    softwares: ["STAAD Pro", "ETABS", "Primavera", "PPM Concepts"],
    duration: "276 hours",
    availability: "Online / Offline",
    description: "ETABS structural design with Primavera scheduling.",
    image: placeholderImage,
    className: "pro-structural-design-etabs-primavera-card"
  },

  {
    id: "pro-cad-etabs-primavera",
    title: "Professional in CAD + Structural (ETABS + Primavera)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "ETABS", "Primavera", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "CAD + ETABS structural workflows with Primavera.",
    image: placeholderImage,
    className: "pro-cad-etabs-primavera-card"
  },

  {
    id: "pro-cad-etabs-msproject",
    title: "Professional in CAD + Structural (ETABS + MS Project)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "ETABS", "Microsoft Projects", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "CAD + ETABS + MS Project structural workflow.",
    image: placeholderImage,
    className: "pro-cad-etabs-msproject-card"
  },

  {
    id: "pro-cad-ansys-msproject",
    title: "Professional in CAD + Structural (Ansys + MS Project)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Ansys Civil", "Microsoft Projects", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "CAD + civil finite element analysis + project planning.",
    image: placeholderImage,
    className: "pro-cad-ansys-msproject-card"
  },

  {
    id: "pro-cad-ansys-primavera",
    title: "Professional in CAD + Structural (Ansys + Primavera)",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Ansys Civil", "Primavera", "PPM Concepts"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Structural simulation and planning using Primavera.",
    image: placeholderImage,
    className: "pro-cad-ansys-primavera-card"
  },

  {
    id: "pro-staad-etabs",
    title: "Professional in STAAD + ETABS (Dual Structural Suite)",
    category: "Professional",
    softwares: ["STAAD Pro", "ETABS"],
    duration: "224 hours",
    availability: "Online / Offline",
    description: "Dual-suite structural design using STAAD and ETABS.",
    image: placeholderImage,
    className: "pro-staad-etabs-card"
  },

  {
    id: "pro-staad-ansys",
    title: "Professional in STAAD + Ansys Civil",
    category: "Professional",
    softwares: ["STAAD Pro", "Ansys Civil"],
    duration: "224 hours",
    availability: "Online / Offline",
    description: "Structural and finite element modeling with two major engines.",
    image: placeholderImage,
    className: "pro-staad-ansys-card"
  },

  {
    id: "pro-bim-planning",
    title: "Professional in BIM & Planning",
    category: "Professional",
    softwares: ["Revit Architecture", "Navisworks", "MS Project", "PPM Concepts"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "BIM modeling + clash detection + project planning.",
    image: placeholderImage,
    className: "pro-bim-planning-card"
  },

  {
    id: "pro-structural-simulation-adv",
    title: "Professional in Structural Simulation",
    category: "Professional",
    softwares: ["ETABS", "SAFE", "ABAQUS"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Advanced structural simulation with SAFE + ABAQUS.",
    image: placeholderImage,
    className: "pro-structural-simulation-adv-card"
  },

  {
    id: "pro-infra-gis",
    title: "Professional in Infrastructure GIS & Planning",
    category: "Professional",
    softwares: ["ArcGIS", "AutoCAD Map 3D", "MS Project"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "GIS, mapping, surveying, and infrastructure planning.",
    image: placeholderImage,
    className: "pro-infra-gis-card"
  },

  {
    id: "pro-visualization-interior",
    title: "Professional in Visualization & Interior Design",
    category: "Professional",
    softwares: ["SketchUp", "Corona", "Enscape", "Revit Architecture"],
    duration: "320 hours",
    availability: "Online / Offline",
    description: "Interior visualization with real-time rendering tools.",
    image: placeholderImage,
    className: "pro-visualization-interior-card"
  },

  {
    id: "pro-interior-visualization",
    title: "Professional in Interior Visualization",
    category: "Professional",
    softwares: ["SketchUp", "V-Ray", "Twinmotion", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Interior rendering, BIM modeling & visualization.",
    image: placeholderImage,
    className: "pro-interior-visualization-card"
  },

  {
    id: "pro-bim-real-time",
    title: "Professional in Real-Time BIM Presentation",
    category: "Professional",
    softwares: ["Twinmotion", "Unity", "Revit Architecture"],
    duration: "240 hours",
    availability: "Online / Offline",
    description: "Real-time BIM visualization using Twinmotion & Unity.",
    image: placeholderImage,
    className: "pro-bim-real-time-card"
  },

  {
    id: "pro-quantity-survey",
    title: "Professional in Advanced Quantity Surveying",
    category: "Professional",
    softwares: ["AutoCAD 2D", "Revit", "QTO", "Quantity Survey Tools"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Advanced QS training with BIM & QTO integration.",
    image: placeholderImage,
    className: "pro-quantity-survey-card"
  },

  {
    id: "pro-roadway-design",
    title: "Professional in Roadway Design",
    category: "Professional",
    softwares: ["AutoCAD 2D", "MX Road", "Civil 3D", "Primavera", "MS Project"],
    duration: "260 hours",
    availability: "Online / Offline",
    description: "Advanced roadway engineering + dual scheduling tools.",
    image: placeholderImage,
    className: "pro-roadway-design-card"
  },

  {
    id: "pro-arch-visualization",
    title: "Professional Course in Architectural Visualization",
    category: "Professional",
    softwares: ["3ds Max", "V-Ray", "Photoshop", "Premiere Pro"],
    duration: "180 hours",
    availability: "Online / Offline",
    description: "Visualization, rendering, compositing, and video editing.",
    image: placeholderImage,
    className: "pro-arch-visualization-card"
  }
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
