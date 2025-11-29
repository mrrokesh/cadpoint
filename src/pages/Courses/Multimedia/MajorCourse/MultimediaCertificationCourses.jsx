import React, { useState, useMemo, useRef } from "react";
import "./MultimediaCertificationCourses.css";


import placeholderImage from "../MultimediaImages/AfterEffect.webp";



const allCourses = [
  { id: "cert-photoshop", title: "Certificate in Graphic Design with Photoshop", category: "Certification", softwares: ["Adobe Photoshop"], duration: "60 hours", availability: "Online / Offline", description: "Learn graphic design fundamentals using Adobe Photoshop.", image: placeholderImage, className: "cert-photoshop-card" },
  { id: "cert-coreldraw", title: "Certificate in CorelDRAW Designing", category: "Certification", softwares: ["CorelDRAW"], duration: "60 hours", availability: "Online / Offline", description: "Design layouts and vector graphics using CorelDRAW.", image: placeholderImage, className: "cert-coreldraw-card" },
  { id: "cert-illustrator", title: "Certificate in Vector Illustration", category: "Certification", softwares: ["Adobe Illustrator"], duration: "60 hours", availability: "Online / Offline", description: "Master vector illustration techniques in Illustrator.", image: placeholderImage, className: "cert-illustrator-card" },
  { id: "cert-indesign", title: "Certificate in Page Layout Design", category: "Certification", softwares: ["Adobe InDesign"], duration: "60 hours", availability: "Online / Offline", description: "Create page layouts for publishing using InDesign.", image: placeholderImage, className: "cert-indesign-card" },
  { id: "cert-pagemaker", title: "Certificate in Publishing Design", category: "Certification", softwares: ["Adobe PageMaker"], duration: "60 hours", availability: "Online / Offline", description: "Learn professional publishing design with PageMaker.", image: placeholderImage, className: "cert-pagemaker-card" },
  { id: "cert-premiere-basics", title: "Certificate in Video Editing Basics", category: "Certification", softwares: ["Adobe Premiere Pro"], duration: "60 hours", availability: "Online / Offline", description: "Introduction to video editing using Premiere Pro.", image: placeholderImage, className: "cert-premiere-basics-card" },
  { id: "cert-soundforge", title: "Certificate in Audio Editing", category: "Certification", softwares: ["Sound Forge"], duration: "60 hours", availability: "Online / Offline", description: "Audio editing and enhancement using Sound Forge.", image: placeholderImage, className: "cert-soundforge-card" },
  { id: "cert-aftereffects", title: "Certificate in Visual Effects with After Effects", category: "Certification", softwares: ["Adobe After Effects"], duration: "60 hours", availability: "Online / Offline", description: "Learn VFX and motion graphics using After Effects.", image: placeholderImage, className: "cert-aftereffects-card" },
  { id: "cert-flash", title: "Certificate in Flash Animation", category: "Certification", softwares: ["Adobe Flash"], duration: "60 hours", availability: "Online / Offline", description: "2D animation basics using Adobe Flash.", image: placeholderImage, className: "cert-flash-card" },
  { id: "cert-maya", title: "Certificate in Maya 3D Modeling", category: "Certification", softwares: ["Autodesk Maya"], duration: "60 hours", availability: "Online / Offline", description: "3D modeling fundamentals in Autodesk Maya.", image: placeholderImage, className: "cert-maya-card" },
  { id: "cert-webdesign", title: "Certificate in Web Design Basics", category: "Certification", softwares: ["HTML", "CSS"], duration: "60 hours", availability: "Online / Offline", description: "Basic web design using HTML & CSS.", image: placeholderImage, className: "cert-webdesign-card" },
  { id: "cert-animate", title: "Certificate in Motion Graphics", category: "Certification", softwares: ["Adobe Animate"], duration: "60 hours", availability: "Online / Offline", description: "Create motion graphics using Adobe Animate.", image: placeholderImage, className: "cert-animate-card" },
  { id: "cert-stopmotion", title: "Certificate in Stop Motion Animation", category: "Certification", softwares: ["Stop Motion Studio"], duration: "60 hours", availability: "Online / Offline", description: "Stop-motion animation essentials.", image: placeholderImage, className: "cert-stopmotion-card" },
  { id: "cert-storyboard", title: "Certificate in Storyboarding", category: "Certification", softwares: ["Toon Boom Storyboard Pro"], duration: "60 hours", availability: "Online / Offline", description: "Professional storyboarding techniques.", image: placeholderImage, className: "cert-storyboard-card" }
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
