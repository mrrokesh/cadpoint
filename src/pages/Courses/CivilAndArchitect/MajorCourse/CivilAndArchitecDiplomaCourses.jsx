import React, { useState, useMemo, useRef } from "react";
import "./CivilAndArchitecDiplomaCourses.css";

import placeholderImage from "../CivilAndArchitectImages/CivilAndArchitec.jpg";


const allCourses = [
  { "id": "dip-autocad", "title": "Diploma in AutoCAD", "category": "Diploma", "softwares": ["AutoCAD 2D", "AutoCAD 3D"], "duration": "96 hours", "availability": "Online / Offline", "description": "Comprehensive 2D & 3D drafting training.", "image": placeholderImage, "className": "dip-autocad-card" },

  { "id": "dip-civil-drafting", "title": "Diploma in Civil Drafting & Detailing", "category": "Diploma", "softwares": ["AutoCAD 2D", "Microstation"], "duration": "128 hours", "availability": "Online / Offline", "description": "Drafting & detailing for civil engineering.", "image": placeholderImage, "className": "dip-civil-drafting-card" },

  { "id": "dip-architecture-cad", "title": "Diploma in Architecture CAD / Civil CAD", "category": "Diploma", "softwares": ["AutoCAD 2D", "Revit Architecture"], "duration": "144 hours", "availability": "Online / Offline", "description": "Architecture & civil CAD diploma.", "image": placeholderImage, "className": "dip-architecture-cad-card" },

  { "id": "dip-structural-design", "title": "Diploma in Structural Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "STAAD Pro"], "duration": "144 hours", "availability": "Online / Offline", "description": "Structural design fundamentals.", "image": placeholderImage, "className": "dip-structural-design-card" },

  { "id": "dip-rcc-structural", "title": "Diploma in RCC Structural Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "ETABS"], "duration": "144 hours", "availability": "Online / Offline", "description": "RCC structure design using ETABS.", "image": placeholderImage, "className": "dip-rcc-structural-card" },

  { "id": "dip-structural-analysis", "title": "Diploma in Structural Analysis & Drafting", "category": "Diploma", "softwares": ["AutoCAD 2D", "Ansys Civil"], "duration": "144 hours", "availability": "Online / Offline", "description": "Drafting and analysis using Ansys.", "image": placeholderImage, "className": "dip-structural-analysis-card" },

  { "id": "dip-steel-drafting", "title": "Diploma in Steel Structure Drafting", "category": "Diploma", "softwares": ["AutoCAD 2D", "Tekla"], "duration": "144 hours", "availability": "Online / Offline", "description": "Steel structure drafting using Tekla.", "image": placeholderImage, "className": "dip-steel-drafting-card" },

  { "id": "dip-structural-simulation", "title": "Diploma in Structural Simulation", "category": "Diploma", "softwares": ["ETABS", "Ansys Civil"], "duration": "144 hours", "availability": "Online / Offline", "description": "ETABS & ANSYS simulation diploma.", "image": placeholderImage, "className": "dip-structural-simulation-card" },

  { "id": "dip-rcc-steel", "title": "Diploma in RCC & Steel Design", "category": "Diploma", "softwares": ["ETABS", "Tekla"], "duration": "144 hours", "availability": "Online / Offline", "description": "RCC and steel structure design.", "image": placeholderImage, "className": "dip-rcc-steel-card" },

  { "id": "dip-steel-design-analysis", "title": "Diploma in Steel Structure Design & Analysis", "category": "Diploma", "softwares": ["Tekla", "Ansys Civil"], "duration": "144 hours", "availability": "Online / Offline", "description": "Steel design + ANSYS analysis.", "image": placeholderImage, "className": "dip-steel-design-analysis-card" },

  { "id": "dip-steel-design", "title": "Diploma in Steel Structure Design", "category": "Diploma", "softwares": ["STAAD Pro", "Tekla"], "duration": "144 hours", "availability": "Online / Offline", "description": "Steel structure engineering diploma.", "image": placeholderImage, "className": "dip-steel-design-card" },

  { "id": "dip-rcc-analysis", "title": "Diploma in RCC Structural Analysis", "category": "Diploma", "softwares": ["STAAD Pro", "ETABS"], "duration": "144 hours", "availability": "Online / Offline", "description": "Analysis of RCC structures.", "image": placeholderImage, "className": "dip-rcc-analysis-card" },

  { "id": "dip-structural-simulation-eng", "title": "Diploma in Structural Simulation Engineering", "category": "Diploma", "softwares": ["STAAD Pro", "Ansys Civil"], "duration": "144 hours", "availability": "Online / Offline", "description": "Simulation engineering diploma.", "image": placeholderImage, "className": "dip-structural-simulation-eng-card" },

  { "id": "dip-interior-design", "title": "Diploma in Interior Designing", "category": "Diploma", "softwares": ["AutoCAD 2D", "3DS Max"], "duration": "144 hours", "availability": "Online / Offline", "description": "Interior design drafting & visualization.", "image": placeholderImage, "className": "dip-interior-design-card" },

  { "id": "dip-estimation-costing", "title": "Diploma in Estimation & Costing", "category": "Diploma", "softwares": ["AutoCAD 2D", "Quantity Takeoff", "Estimation Tools"], "duration": "144 hours", "availability": "Online / Offline", "description": "Estimation, costing & QTO training.", "image": placeholderImage, "className": "dip-estimation-costing-card" },

  { "id": "dip-civil-surveying", "title": "Diploma in Civil Surveying", "category": "Diploma", "softwares": ["AutoCAD 2D", "Civil 3D", "Land Survey Tools"], "duration": "144 hours", "availability": "Online / Offline", "description": "Surveying with Civil 3D & land tools.", "image": placeholderImage, "className": "dip-civil-surveying-card" },

  { "id": "dip-drafting-planning", "title": "Diploma in Drafting & Project Planning", "category": "Diploma", "softwares": ["AutoCAD 2D", "Primavera"], "duration": "144 hours", "availability": "Online / Offline", "description": "Drafting + project planning.", "image": placeholderImage, "className": "dip-drafting-planning-card" },

  { "id": "dip-autocad-msproject", "title": "Diploma in AutoCAD + MS Projects", "category": "Diploma", "softwares": ["AutoCAD 2D", "MS Projects"], "duration": "144 hours", "availability": "Online / Offline", "description": "AutoCAD drafting + MS Projects.", "image": placeholderImage, "className": "dip-autocad-msproject-card" },

  { "id": "dip-bim-design", "title": "Diploma in BIM (Building Information Modelling) Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "Revit Architecture", "Navisworks"], "duration": "184 hours", "availability": "Online / Offline", "description": "BIM design diploma.", "image": placeholderImage, "className": "dip-bim-design-card" },

  { "id": "dip-transport-design", "title": "Diploma in Transportation Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "MX Road"], "duration": "144 hours", "availability": "Online / Offline", "description": "Transportation planning & design.", "image": placeholderImage, "className": "dip-transport-design-card" },

  { "id": "dip-roadway", "title": "Diploma in Roadway Design", "category": "Diploma", "softwares": ["Microstation", "MX Road"], "duration": "144 hours", "availability": "Online / Offline", "description": "Roadway engineering diploma.", "image": placeholderImage, "className": "dip-roadway-card" },

  { "id": "dip-road-infra-simulation", "title": "Diploma in Road Infrastructure & Simulation", "category": "Diploma", "softwares": ["Ansys Civil", "MX Road"], "duration": "160 hours", "availability": "Online / Offline", "description": "Road infrastructure simulation.", "image": placeholderImage, "className": "dip-road-infra-simulation-card" },

  { "id": "dip-highway-structural", "title": "Diploma in Highway Structural Design", "category": "Diploma", "softwares": ["STAAD Pro", "MX Road"], "duration": "160 hours", "availability": "Online / Offline", "description": "Highway structure design diploma.", "image": placeholderImage, "className": "dip-highway-structural-card" },

  { "id": "dip-rcc-road", "title": "Diploma in RCC Road Structure Design", "category": "Diploma", "softwares": ["ETABS", "MX Road"], "duration": "160 hours", "availability": "Online / Offline", "description": "RCC road design diploma.", "image": placeholderImage, "className": "dip-rcc-road-card" },

  { "id": "dip-land-survey-road", "title": "Diploma in Land Survey & Road Design", "category": "Diploma", "softwares": ["Civil 3D", "MX Road"], "duration": "160 hours", "availability": "Online / Offline", "description": "Survey + road design diploma.", "image": placeholderImage, "className": "dip-land-survey-road-card" },

  { "id": "dip-architecture-design", "title": "Diploma in Architecture Design", "category": "Diploma", "softwares": ["3DS Max", "Revit Architecture"], "duration": "160 hours", "availability": "Online / Offline", "description": "Architecture modeling & rendering.", "image": placeholderImage, "className": "dip-architecture-design-card" },

  { "id": "dip-building-design-analysis", "title": "Diploma in Building Design & Analysis", "category": "Diploma", "softwares": ["Revit Architecture", "STAAD Pro"], "duration": "160 hours", "availability": "Online / Offline", "description": "Building design & analysis diploma.", "image": placeholderImage, "className": "dip-building-design-analysis-card" },

  { "id": "dip-building-design-analysis-2", "title": "Diploma in Structural Building Design", "category": "Diploma", "softwares": ["Revit Architecture", "Ansys Civil"], "duration": "160 hours", "availability": "Online / Offline", "description": "Structural building design.", "image": placeholderImage, "className": "dip-structural-building-design-card" },

  { "id": "dip-building-design-etabs", "title": "Diploma in Revit Architecture + ETABS", "category": "Diploma", "softwares": ["Revit Architecture", "ETABS"], "duration": "160 hours", "availability": "Online / Offline", "description": "Building modeling + ETABS.", "image": placeholderImage, "className": "dip-revit-etabs-card" },

  { "id": "dip-building-design-tekla", "title": "Diploma in Revit Architecture + Tekla", "category": "Diploma", "softwares": ["Revit Architecture", "Tekla"], "duration": "160 hours", "availability": "Online / Offline", "description": "Revit + Tekla steel modeling.", "image": placeholderImage, "className": "dip-revit-tekla-card" },

  { "id": "dip-project-planning", "title": "Diploma in Project Planning", "category": "Diploma", "softwares": ["Primavera", "MS Projects", "PPM Concepts"], "duration": "200 hours", "availability": "Online / Offline", "description": "Project management diploma.", "image": placeholderImage, "className": "dip-project-planning-card" },

  { "id": "dip-foundation-analysis", "title": "Diploma in Foundation & Structural Analysis", "category": "Diploma", "softwares": ["SAFE", "ETABS"], "duration": "144 hours", "availability": "Online / Offline", "description": "Foundation and structural analysis.", "image": placeholderImage, "className": "dip-foundation-analysis-card" },

  { "id": "dip-bridge-design", "title": "Diploma in Structural Bridge Design", "category": "Diploma", "softwares": ["ETABS", "CSiBridge"], "duration": "160 hours", "availability": "Online / Offline", "description": "Bridge structural design.", "image": placeholderImage, "className": "dip-bridge-design-card" },

  { "id": "dip-building-estimation", "title": "Diploma in Building Estimation & Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "Quantity Takeoff", "Revit Architecture"], "duration": "200 hours", "availability": "Online / Offline", "description": "Building estimation and design.", "image": placeholderImage, "className": "dip-building-estimation-card" },

  { "id": "dip-qto-revit", "title": "Diploma in Quantity Takeoff + Revit Architecture", "category": "Diploma", "softwares": ["Quantity Takeoff", "Revit Architecture"], "duration": "120 hours", "availability": "Online / Offline", "description": "QTO + Revit fundamentals.", "image": placeholderImage, "className": "dip-qto-revit-card" },

  { "id": "dip-staad-qto-revit", "title": "Diploma in Staad Pro + QTO + Revit Architecture", "category": "Diploma", "softwares": ["STAAD Pro", "Quantity Takeoff", "Revit Architecture"], "duration": "200 hours", "availability": "Online / Offline", "description": "STAAD + QTO + Revit program.", "image": placeholderImage, "className": "dip-staad-qto-revit-card" },

  { "id": "dip-etabs-qto-revit", "title": "Diploma in ETABS + QTO + Revit Architecture", "category": "Diploma", "softwares": ["ETABS", "Quantity Takeoff", "Revit Architecture"], "duration": "200 hours", "availability": "Online / Offline", "description": "ETABS + QTO + Revit diploma.", "image": placeholderImage, "className": "dip-etabs-qto-revit-card" },

  { "id": "dip-fea", "title": "Diploma in Finite Element Analysis", "category": "Diploma", "softwares": ["Ansys Civil", "ABAQUS"], "duration": "160 hours", "availability": "Online / Offline", "description": "FEA simulation diploma.", "image": placeholderImage, "className": "dip-fea-card" },

  { "id": "dip-urban-mapping", "title": "Diploma in Urban Mapping & Design", "category": "Diploma", "softwares": ["AutoCAD Map 3D", "ArcGIS"], "duration": "160 hours", "availability": "Online / Offline", "description": "Urban planning & GIS diploma.", "image": placeholderImage, "className": "dip-urban-mapping-card" },

  { "id": "dip-bim-automation", "title": "Diploma in BIM Automation", "category": "Diploma", "softwares": ["Revit Architecture", "Dynamo"], "duration": "144 hours", "availability": "Online / Offline", "description": "Automation using Dynamo + Revit.", "image": placeholderImage, "className": "dip-bim-automation-card" },

  { "id": "dip-photorealistic-visualization", "title": "Diploma in Photorealistic Visualization", "category": "Diploma", "softwares": ["SketchUp", "Corona", "Enscape"], "duration": "144 hours", "availability": "Online / Offline", "description": "Photorealistic architectural rendering.", "image": placeholderImage, "className": "dip-photorealistic-visualization-card" },

  { "id": "dip-real-time-rendering", "title": "Diploma in Real-Time Rendering", "category": "Diploma", "softwares": ["Twinmotion", "D5 Render", "Unity"], "duration": "144 hours", "availability": "Online / Offline", "description": "Real-time rendering & animation.", "image": placeholderImage, "className": "dip-real-time-rendering-card" },

  { "id": "dip-traditional-design", "title": "Diploma in Traditional & Scientific Design", "category": "Diploma", "softwares": ["AutoCAD 2D", "Vaasthu"], "duration": "120 hours", "availability": "Online / Offline", "description": "Traditional & scientific principles of design.", "image": placeholderImage, "className": "dip-traditional-design-card" },

  { "id": "dip-architectural-walkthrough", "title": "Diploma in Architectural Walkthrough", "category": "Diploma", "softwares": ["3DS Max", "Premiere Pro"], "duration": "120 hours", "availability": "Online / Offline", "description": "Architectural walkthrough animation.", "image": placeholderImage, "className": "dip-architectural-walkthrough-card" }
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
