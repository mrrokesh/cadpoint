import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CivilAndArchitec.css";


import placeholderImage from "./CivilAndArchitectImages/CivilAndArchitec.jpg";



const allCourses = [
  {
    id: "cert-python-60",
    title: "Certification Courses",
    duration: "60 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with Civil and Architecture courses. Master essential skills in structural design, construction management, urban planning, and sustainable architecture. Gain hands-on experience with industry-standard tools and technologies. Become job-ready and stand out in the field of modern civil engineering and architecture.",   
     image: placeholderImage,
    path: "/CivilAndArchitecCertificationCourses",
  },
  {
    id: "cert-java-60",
    title: "Diploma Courses",
    duration: "120 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with industry-focused Civil and Architecture courses. Gain hands-on experience in structural design, construction management, building materials, and sustainable architecture. Build strong technical fundamentals through practical training and become job-ready to excel in the civil engineering and architecture field.", 
    image: placeholderImage,
    path: "/CivilAndArchitecDiplomaCourses",
  },
  {
    id: "cert-c-60",
    title: "Professional Courses",
    duration: "200 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with our industry-aligned Civil and Architecture courses, gain  practical skills in structural design, construction management, building materials, and sustainable architecture, build  technical expertise through hands-on training, and become fully job-ready with abilities highly valued across the civil engineering and architecture industry.",   
     image: placeholderImage,
    path: "/CivilAndArchitecProfessionalCourses",
  },
  {
    id: "cert-cpp-60",
    title: "Master Diploma Courses",
    duration: "260 hours",
    availability: "Online / Offline / Remote",
    description:
    "Enhance your expertise with industry-aligned Civil and Architecture Master Diploma programs. Gain hands-on training, advanced technical skills, and practical experience that prepare you to be fully industry-ready. Build a solid foundation, master modern design and construction tools, and excel in the dynamic and evolving field of civil engineering and architecture.", 
    image: placeholderImage,
    path: "/CivilAndArchitecMasterDiplomaCourses",
  },
];

export default function ITandNON_IT() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openEnquiry = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const closeEnquiry = () => {
    setShowForm(false);
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container compact">

      <h1 className="heading">Civil And Architecture COURSES</h1>

      {/* ===== GRID ===== */}
      <div className="course-grid two-by-two">
        {allCourses.map((course) => (
          <div key={course.id} className="course-card">

            {/* Image */}
            <div className="card-media">
              <img src={course.image} alt={course.title} className="course-image" />
            </div>

            {/* Content */}
            <div className="card-body">
              <h3 className="course-title">{course.title}</h3>
              <span className="availability">{course.availability}</span>

              <div className="meta-row">
                <small className="category-label">{course.title}</small>
                <small className="duration-label">{course.duration}</small>
              </div>

              <p className="course-description">{course.description}</p>

              {/* Buttons */}
              <div className="card-actions">

                <button
                  className="enquiry-btn"
                  onClick={() => openEnquiry(course)}
                >
                  Enquiry
                </button>

                {/* ✔ View Courses redirect based on each card */}
                <Link className="view-courses-btn" to={course.path}>
                  View Courses
                </Link>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ===== ENQUIRY POPUP ===== */}
      {showForm && selectedCourse && (
        <div className="form-overlay" onClick={closeEnquiry}>
          <div className="form-box slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="form-close" onClick={closeEnquiry}>&times;</button>

            <h2>Enquiry — {selectedCourse.title}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Enquiry submitted for ${selectedCourse.title}`);
                closeEnquiry();
              }}
            >
              <input name="name" placeholder="Name" required />
              <input name="email" placeholder="Email" type="email" required />
              <input name="phone" placeholder="Mobile Number" required />
              <input name="degree" placeholder="Basic Degree" />
              <textarea name="message" placeholder="Short Message" rows="4" />

              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="skip-btn" onClick={closeEnquiry}>
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
