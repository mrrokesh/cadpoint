import React, { useState, useMemo } from "react";
import "./MechAndAeroCertificationCourses.css";
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
    id: "cert-autocad-2d-64",
    title: "Certification in AutoCAD 2D",
    category: "Certification",
    softwares: ["AutoCAD 2D"],
    duration: "64 hours",
    availability: "Online / Offline",
    description: "AutoCAD 2D certification covering drafting and drawing fundamentals.",
    image: placeholderImage,
    className: `${slugify("Certification in AutoCAD 2D")}-card`,
  },
  {
    id: "cert-autocad-3d-32",
    title: "Certification in AutoCAD 3D",
    category: "Certification",
    softwares: ["AutoCAD 3D"],
    duration: "32 hours",
    availability: "Online / Offline",
    description: "AutoCAD 3D: modeling, visualization and basic 3D workflows.",
    image: placeholderImage,
    className: `${slugify("Certification in AutoCAD 3D")}-card`,
  },
  {
    id: "cert-solidworks-80",
    title: "Certification in SolidWorks",
    category: "Certification",
    softwares: ["SolidWorks"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "SolidWorks fundamentals, parts, assemblies and drawings.",
    image: placeholderImage,
    className: `${slugify("Certification in SolidWorks")}-card`,
  },
  {
    id: "cert-catia-80",
    title: "Certification in CATIA",
    category: "Certification",
    softwares: ["CATIA"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "CATIA certification for surface and solid modeling workflows.",
    image: placeholderImage,
    className: `${slugify("Certification in CATIA")}-card`,
  },
  {
    id: "cert-creo-80",
    title: "Certification in Creo",
    category: "Certification",
    softwares: ["Creo"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Creo Parametric basics and part/assembly modeling.",
    image: placeholderImage,
    className: `${slugify("Certification in Creo")}-card`,
  },
  {
    id: "cert-ansys-workbench-80",
    title: "Certification in Ansys Workbench",
    category: "Certification",
    softwares: ["Ansys Workbench"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Ansys Workbench for FEA basics and simulation workflows.",
    image: placeholderImage,
    className: `${slugify("Certification in Ansys Workbench")}-card`,
  },
  {
    id: "cert-nx-nastran-80",
    title: "Certification in NX Nastran",
    category: "Certification",
    softwares: ["NX - Nastran"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "NX Nastran structural analysis fundamentals and workflows.",
    image: placeholderImage,
    className: `${slugify("Certification in NX Nastran")}-card`,
  },
  {
    id: "cert-creo-simulate-80",
    title: "Certification in Creo Simulate",
    category: "Certification",
    softwares: ["Creo Simulate"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Simulation using Creo Simulate for basic design validation.",
    image: placeholderImage,
    className: `${slugify("Certification in Creo Simulate")}-card`,
  },
  {
    id: "cert-ansys-fluent-80",
    title: "Certification in Ansys Fluent",
    category: "Certification",
    softwares: ["Ansys Fluent"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "CFD fundamentals using Ansys Fluent.",
    image: placeholderImage,
    className: `${slugify("Certification in Ansys Fluent")}-card`,
  },
  {
    id: "cert-solid-edge-80",
    title: "Certification in Solid Edge",
    category: "Certification",
    softwares: ["Solid Edge"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Solid Edge CAD modeling and drafting.",
    image: placeholderImage,
    className: `${slugify("Certification in Solid Edge")}-card`,
  },
  {
    id: "cert-fusion360-80",
    title: "Certification in Fusion 360",
    category: "Certification",
    softwares: ["Fusion 360"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Fusion 360 for CAD/CAM modelling and prototyping.",
    image: placeholderImage,
    className: `${slugify("Certification in Fusion 360")}-card`,
  },
  {
    id: "cert-hypermesh-80",
    title: "Certification in HyperMesh",
    category: "Certification",
    softwares: ["HyperMesh"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Preprocessing and meshing using Altair HyperMesh.",
    image: placeholderImage,
    className: `${slugify("Certification in HyperMesh")}-card`,
  },
  {
    id: "cert-autodesk-inventor-80",
    title: "Certification in Autodesk Inventor",
    category: "Certification",
    softwares: ["Autodesk Inventor"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Autodesk Inventor for parametric modeling and assemblies.",
    image: placeholderImage,
    className: `${slugify("Certification in Autodesk Inventor")}-card`,
  },
  {
    id: "cert-revit-mep-80",
    title: "Certification in Revit MEP",
    category: "Certification",
    softwares: ["Revit MEP"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Revit MEP for building services modelling (MEP).",
    image: placeholderImage,
    className: `${slugify("Certification in Revit MEP")}-card`,
  },
  {
    id: "cert-primavera-80",
    title: "Certification in Primavera with PPM",
    category: "Certification",
    softwares: ["Primavera", "PPM"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Primavera scheduling and PPM concepts for project planning.",
    image: placeholderImage,
    className: `${slugify("Certification in Primavera with PPM")}-card`,
  },
  {
    id: "cert-ms-project-80",
    title: "Certification in Microsoft Project with PPM",
    category: "Certification",
    softwares: ["Microsoft Project", "PPM"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Microsoft Project for planning, tracking and PPM fundamentals.",
    image: placeholderImage,
    className: `${slugify("Certification in Microsoft Project with PPM")}-card`,
  },
  {
    id: "cert-gdt-24",
    title: "Certification in GD&T",
    category: "Certification",
    softwares: ["GD&T"],
    duration: "24 hours",
    availability: "Online / Offline",
    description: "Geometric Dimensioning & Tolerancing principles and application.",
    image: placeholderImage,
    className: `${slugify("Certification in GD&T")}-card`,
  },
  {
    id: "cert-microstation-64",
    title: "Certification in Microstation",
    category: "Certification",
    softwares: ["Microstation"],
    duration: "64 hours",
    availability: "Online / Offline",
    description: "Microstation drafting and 2D/3D workflows.",
    image: placeholderImage,
    className: `${slugify("Certification in Microstation")}-card`,
  },
  {
    id: "cert-hvac-80",
    title: "Certification in HVAC Design",
    category: "Certification",
    softwares: ["HVAC"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "HVAC design fundamentals, systems and calculations.",
    image: placeholderImage,
    className: `${slugify("Certification in HVAC Design")}-card`,
  },
  {
    id: "cert-altair-80",
    title: "Certification in Altair HyperWorks",
    category: "Certification",
    softwares: ["Altair HyperWorks"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Altair HyperWorks suite for simulation and analysis.",
    image: placeholderImage,
    className: `${slugify("Certification in Altair HyperWorks")}-card`,
  },
  {
    id: "cert-tekla-80",
    title: "Certification in Tekla Structures",
    category: "Certification",
    softwares: ["Tekla"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Tekla Structures for steel detailing and structural modelling.",
    image: placeholderImage,
    className: `${slugify("Certification in Tekla Structures")}-card`,
  },
  {
    id: "cert-intergraph-80",
    title: "Certification in Intergraph Smart 3D",
    category: "Certification",
    softwares: ["Intergraph Smart 3D"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Plant and offshore design using Intergraph Smart 3D.",
    image: placeholderImage,
    className: `${slugify("Certification in Intergraph Smart 3D")}-card`,
  },
  {
    id: "cert-pdms-80",
    title: "Certification in PDMS (Plant Design Management System)",
    category: "Certification",
    softwares: ["PDMS"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Plant design fundamentals using PDMS tools.",
    image: placeholderImage,
    className: `${slugify("Certification in PDMS (Plant Design Management System)")}-card`,
  },
  {
    id: "cert-sp3d-80",
    title: "Certification in SP3D",
    category: "Certification",
    softwares: ["SP3D"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "SmartPlant 3D basics for piping & plant design.",
    image: placeholderImage,
    className: `${slugify("Certification in SP3D")}-card`,
  },
  {
    id: "cert-caesar2-80",
    title: "Certification in CAESAR II",
    category: "Certification",
    softwares: ["CAESAR II"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Pipe stress analysis using CAESAR II.",
    image: placeholderImage,
    className: `${slugify("Certification in CAESAR II")}-card`,
  },
  {
    id: "cert-abaqus-80",
    title: "Certification in ABAQUS",
    category: "Certification",
    softwares: ["ABAQUS"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "ABAQUS for advanced FEA and simulation tasks.",
    image: placeholderImage,
    className: `${slugify("Certification in ABAQUS")}-card`,
  },
  {
    id: "cert-ansys-cfd-80",
    title: "Certification in Ansys CFD",
    category: "Certification",
    softwares: ["Ansys CFD"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Computational Fluid Dynamics with Ansys CFD tools.",
    image: placeholderImage,
    className: `${slugify("Certification in Ansys CFD")}-card`,
  },
  {
    id: "cert-msc-nastran-patran-80",
    title: "Certification in MSC Nastran & Patran",
    category: "Certification",
    softwares: ["MSC Nastran", "Patran"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "MSC Nastran + Patran workflows for structural analysis.",
    image: placeholderImage,
    className: `${slugify("Certification in MSC Nastran & Patran")}-card`,
  },
  {
    id: "cert-delcam-80",
    title: "Certification in DelCAM",
    category: "Certification",
    softwares: ["Del CAM"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Delcam/CAM workflows for manufacturing and toolpaths.",
    image: placeholderImage,
    className: `${slugify("Certification in DelCAM")}-card`,
  },
  {
    id: "cert-powermill-80",
    title: "Certification in PowerMill",
    category: "Certification",
    softwares: ["PowerMill"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "PowerMill CAM programming for CNC machining strategies.",
    image: placeholderImage,
    className: `${slugify("Certification in PowerMill")}-card`,
  },
  {
    id: "cert-plant3d-80",
    title: "Certification in Autodesk Plant 3D",
    category: "Certification",
    softwares: ["Autodesk Plant 3D"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Plant 3D modeling for process plant layouts and piping.",
    image: placeholderImage,
    className: `${slugify("Certification in Autodesk Plant 3D")}-card`,
  },
  {
    id: "cert-hap-40",
    title: "Certification in HAP (Cooling Load Estimation)",
    category: "Certification",
    softwares: ["HAP"],
    duration: "40 hours",
    availability: "Online / Offline",
    description: "Heat load & cooling estimation with HAP.",
    image: placeholderImage,
    className: `${slugify("Certification in HAP (Cooling Load Estimation)")}-card`,
  },
  {
    id: "cert-ductsizer-20",
    title: "Certification in DuctSizer",
    category: "Certification",
    softwares: ["Duct Sizer"],
    duration: "20 hours",
    availability: "Online / Offline",
    description: "Duct sizing and airflow calculations with DuctSizer.",
    image: placeholderImage,
    className: `${slugify("Certification in DuctSizer")}-card`,
  },
  {
    id: "cert-pipesizer-20",
    title: "Certification in PipeSizer",
    category: "Certification",
    softwares: ["Pipe Sizer"],
    duration: "20 hours",
    availability: "Online / Offline",
    description: "Fluid network calculations and piping sizing using PipeSizer.",
    image: placeholderImage,
    className: `${slugify("Certification in PipeSizer")}-card`,
  },
  {
    id: "cert-instrumentation-pid-60",
    title: "Certification in Instrumentation CAD & P&ID",
    category: "Certification",
    softwares: ["Instrumentation CAD", "P&ID"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Instrumentation drawing and P&ID drafting best practices.",
    image: placeholderImage,
    className: `${slugify("Certification in Instrumentation CAD & P&ID")}-card`,
  },
  {
    id: "cert-catia-nc-60",
    title: "Certification in CATIA NC Programming",
    category: "Certification",
    softwares: ["CATIA NC Programming"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "NC programming in CATIA for CAM and machining.",
    image: placeholderImage,
    className: `${slugify("Certification in CATIA NC Programming")}-card`,
  },
  {
    id: "cert-manual-cnc-40",
    title: "Certification in Manual CNC Programming",
    category: "Certification",
    softwares: ["CNC Programming - Manual"],
    duration: "40 hours",
    availability: "Online / Offline",
    description: "G-code basics and manual CNC programming fundamentals.",
    image: placeholderImage,
    className: `${slugify("Certification in Manual CNC Programming")}-card`,
  },
  {
    id: "cert-cnc-cam-80",
    title: "Certification in CNC Programming & Design",
    category: "Certification",
    softwares: ["Fusion 360", "Mastercam", "PowerMill"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "CNC programming & CAM design across popular tools.",
    image: placeholderImage,
    className: `${slugify("Certification in CNC Programming & Design")}-card`,
  },
  {
    id: "cert-cam-programming-120",
    title: "Certification in CAM Programming & Design",
    category: "Certification",
    softwares: ["Mastercam", "Delcam", "NX CAM"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Advanced CAM programming and toolpath optimization.",
    image: placeholderImage,
    className: `${slugify("Certification in CAM Programming & Design")}-card`,
  },
  {
    id: "cert-robotics-60",
    title: "Certification in Robotics with Embedded System",
    category: "Certification",
    softwares: ["Arduino"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Robotics basics with embedded controllers using Arduino.",
    image: placeholderImage,
    className: `${slugify("Certification in Robotics with Embedded System")}-card`,
  },
  {
    id: "cert-steel-structural-120",
    title: "Certification in Steel Structural Design & Detailing",
    category: "Certification",
    softwares: ["Tekla"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Steel detailing and structural design concepts with Tekla.",
    image: placeholderImage,
    className: `${slugify("Certification in Steel Structural Design & Detailing")}-card`,
  },
  {
    id: "cert-sheetmetal-120",
    title: "Certification in Sheetmetal Design",
    category: "Certification",
    softwares: ["SolidWorks", "CATIA", "NX CAD"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Sheetmetal part design and manufacturing considerations.",
    image: placeholderImage,
    className: `${slugify("Certification in Sheetmetal Design")}-card`,
  },
  {
    id: "cert-fea-120",
    title: "Certification in Finite Element Analysis",
    category: "Certification",
    softwares: ["Ansys", "COMSOL Multiphysics"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "FEA fundamentals and practice with Ansys and COMSOL.",
    image: placeholderImage,
    className: `${slugify("Certification in Finite Element Analysis")}-card`,
  },
  {
    id: "cert-matlab-80",
    title: "Certification in MATLAB",
    category: "Certification",
    softwares: ["MATLAB"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "MATLAB for engineering computation and scripting.",
    image: placeholderImage,
    className: `${slugify("Certification in MATLAB")}-card`,
  },
  {
    id: "cert-plc-scada-80",
    title: "Certification in PLC & SCADA",
    category: "Certification",
    softwares: ["PLC", "SCADA"],
    duration: "80 hours",
    availability: "Online / Offline",
    description: "Programmable logic controllers and SCADA system basics.",
    image: placeholderImage,
    className: `${slugify("Certification in PLC & SCADA")}-card`,
  },
  {
    id: "cert-3dprinting-60",
    title: "Certification in 3D Printing & Modeling",
    category: "Certification",
    softwares: ["Blender", "Fusion 360"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "3D printing workflows, modeling and slicing basics.",
    image: placeholderImage,
    className: `${slugify("Certification in 3D Printing & Modeling")}-card`,
  },
  {
    id: "cert-autocad-cnc-84",
    title: "Certification in AutoCAD for CNC Engineers",
    category: "Certification",
    softwares: ["AutoCAD 2D", "CNC Concepts"],
    duration: "84 hours",
    availability: "Online / Offline",
    description: "AutoCAD 2D with CNC engineering concept training.",
    image: placeholderImage,
    className: `${slugify("Certification in AutoCAD for CNC Engineers")}-card`,
  },
  {
    id: "cert-firefighting-100",
    title: "Certification in Fire Fighting Drafting",
    category: "Certification",
    softwares: ["Revit MEP"],
    duration: "100 hours",
    availability: "Online / Offline",
    description: "Fire fighting systems drafting with Revit MEP and concepts.",
    image: placeholderImage,
    className: `${slugify("Certification in Fire Fighting Drafting")}-card`,
  },
  {
    id: "cert-aeronautical-cad-120",
    title: "Certification in Aeronautical CAD Design",
    category: "Certification",
    softwares: ["CATIA"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Aeronautical CAD design fundamentals using CATIA.",
    image: placeholderImage,
    className: `${slugify("Certification in Aeronautical CAD Design")}-card`,
  },
  {
    id: "cert-automobile-cad-120",
    title: "Certification in Automobile CAD Design",
    category: "Certification",
    softwares: ["SolidWorks"],
    duration: "120 hours",
    availability: "Online / Offline",
    description: "Automobile CAD design with SolidWorks and domain-specific theory.",
    image: placeholderImage,
    className: `${slugify("Certification in Automobile CAD Design")}-card`,
  },];


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

    <h1 className="heading">Certification Courses</h1>

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