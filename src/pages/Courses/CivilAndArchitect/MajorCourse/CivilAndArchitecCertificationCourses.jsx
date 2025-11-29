import React, { useState, useMemo, useRef } from "react";
import "./CivilAndArchitecCertificationCourses.css";


import placeholderImage from "../CivilAndArchitectImages/CivilAndArchitec.jpg";



const allCourses = [
  {
    "id": "cert-autocad-2d",
    "title": "Certification Course on AutoCAD 2D / Foundation Course in Civil CAD",
    "category": "Certification",
    "softwares": ["AutoCAD 2D"],
    "duration": "64 hours",
    "availability": "Online / Offline",
    "description": "Foundation-level drafting using AutoCAD 2D.",
    "image": placeholderImage,
    "className": "cert-autocad-2d-card"
  },
  {
    "id": "cert-autocad-3d",
    "title": "Certification Course on AutoCAD 3D / Foundation Course in Civil CAD",
    "category": "Certification",
    "softwares": ["AutoCAD 3D"],
    "duration": "100 hours",
    "availability": "Online / Offline",
    "description": "3D modeling and advanced drafting with AutoCAD 3D.",
    "image": placeholderImage,
    "className": "cert-autocad-3d-card"
  },
  {
    "id": "cert-microstation",
    "title": "Certification Course on Microstation",
    "category": "Certification",
    "softwares": ["Microstation"],
    "duration": "64 hours",
    "availability": "Online / Offline",
    "description": "Microstation drafting and modeling.",
    "image": placeholderImage,
    "className": "cert-microstation-card"
  },
  {
    "id": "cert-archicad",
    "title": "Certification Course on ArchiCAD for BIM",
    "category": "Certification",
    "softwares": ["ArchiCAD"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "ArchiCAD for building information modeling.",
    "image": placeholderImage,
    "className": "cert-archicad-card"
  },
  {
    "id": "cert-revit-architecture",
    "title": "Certification Course on Revit Architecture / Architectural Designing",
    "category": "Certification",
    "softwares": ["Revit Architecture"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Revit Architecture training for BIM workflows.",
    "image": placeholderImage,
    "className": "cert-revit-architecture-card"
  },
  {
    "id": "cert-bim-advanced",
    "title": "Certificate Course in Building Information Modeling (BIM)",
    "category": "Certification",
    "softwares": ["Revit Architectural Advanced"],
    "duration": "120 hours",
    "availability": "Online / Offline",
    "description": "Advanced BIM training using Revit.",
    "image": placeholderImage,
    "className": "cert-bim-advanced-card"
  },
  {
    "id": "cert-3dsmax",
    "title": "Certificate Course in 3ds Max / Architectural Visualization",
    "category": "Certification",
    "softwares": ["3ds Max"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "3D visualization and rendering using 3ds Max.",
    "image": placeholderImage,
    "className": "cert-3dsmax-card"
  },
  {
    "id": "cert-3dsmax-advanced",
    "title": "Certification Course on Advanced 3D Visualization",
    "category": "Certification",
    "softwares": ["3ds Max Advanced"],
    "duration": "120 hours",
    "availability": "Online / Offline",
    "description": "Advanced 3D modeling and architectural visualization.",
    "image": placeholderImage,
    "className": "cert-3dsmax-advanced-card"
  },
  {
    "id": "cert-staadpro",
    "title": "Certification Course on Structural Design",
    "category": "Certification",
    "softwares": ["STAAD Pro"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Structural analysis and design using STAAD Pro.",
    "image": placeholderImage,
    "className": "cert-staadpro-card"
  },
  {
    "id": "cert-etabs",
    "title": "Certification Course on ETABS",
    "category": "Certification",
    "softwares": ["ETABS"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Structural modeling and analysis using ETABS.",
    "image": placeholderImage,
    "className": "cert-etabs-card"
  },
  {
    "id": "cert-navisworks-bim",
    "title": "Certification Course on BIM Coordination Using Navisworks",
    "category": "Certification",
    "softwares": ["Navisworks"],
    "duration": "40 hours",
    "availability": "Online / Offline",
    "description": "BIM coordination and clash detection using Navisworks.",
    "image": placeholderImage,
    "className": "cert-navisworks-bim-card"
  },
  {
    "id": "cert-revit-structure",
    "title": "Certification Course on Structural BIM Design Using Revit",
    "category": "Certification",
    "softwares": ["Revit Structure"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Structural modeling using Revit Structure.",
    "image": placeholderImage,
    "className": "cert-revit-structure-card"
  },
  {
    "id": "cert-bim-collab",
    "title": "Certificate Course on BIM Collaboration",
    "category": "Certification",
    "softwares": ["Autodesk BIM Collaborate Pro"],
    "duration": "40 hours",
    "availability": "Online / Offline",
    "description": "Collaborative BIM workflows.",
    "image": placeholderImage,
    "className": "cert-bim-collab-card"
  },
  {
    "id": "cert-tekla",
    "title": "Certification Course on Structural Detailing with Tekla Structures",
    "category": "Certification",
    "softwares": ["Tekla"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Tekla Structures for steel and concrete detailing.",
    "image": placeholderImage,
    "className": "cert-tekla-card"
  },
  {
    "id": "cert-vray",
    "title": "Certification Course on VRay Rendering",
    "category": "Certification",
    "softwares": ["V-Ray"],
    "duration": "40 hours",
    "availability": "Online / Offline",
    "description": "Rendering and lighting with V-Ray.",
    "image": placeholderImage,
    "className": "cert-vray-card"
  },
  {
    "id": "cert-sketchup",
    "title": "Certification Course on Architectural Modeling with SketchUp",
    "category": "Certification",
    "softwares": ["SketchUp"],
    "duration": "40 hours",
    "availability": "Online / Offline",
    "description": "Architectural modeling using SketchUp.",
    "image": placeholderImage,
    "className": "cert-sketchup-card"
  },
  {
    "id": "cert-photoshop",
    "title": "Certification Course on Photoshop for Civil / Architects",
    "category": "Certification",
    "softwares": ["Photoshop"],
    "duration": "40 hours",
    "availability": "Online / Offline",
    "description": "Photoshop for architectural visualization.",
    "image": placeholderImage,
    "className": "cert-photoshop-card"
  },
  {
    "id": "cert-civil3d",
    "title": "Certification Course on Civil 3D & Land Survey",
    "category": "Certification",
    "softwares": ["Civil 3D", "Land Survey"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Land survey drafting and Civil 3D workflows.",
    "image": placeholderImage,
    "className": "cert-civil3d-card"
  },
  {
    "id": "cert-ansys",
    "title": "Certification Course on Structural Analysis with FEA",
    "category": "Certification",
    "softwares": ["Ansys Civil"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Structural finite-element analysis using Ansys.",
    "image": placeholderImage,
    "className": "cert-ansys-card"
  },
  {
    "id": "cert-revit-steel",
    "title": "Certification Course on Revit Steel & Precast",
    "category": "Certification",
    "softwares": ["Revit Steel & Precast"],
    "duration": "80 hours",
    "availability": "Online / Offline",
    "description": "Modeling steel and precast structures in Revit.",
    "image": placeholderImage,
    "className": "cert-revit-steel-card"
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
