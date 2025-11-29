import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ElectricalAndElectronics.css";

import placeholderImage from "./ElectricalAndElectronicsImages/electronics.jpg";


const allCourses = [
  {
    id: "cert-python-60",
    title: "Certification Courses",
    duration: "60 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with Electrical & Electronics Engineering courses. Master essential skills in circuits, power systems, embedded systems, and automation. Gain hands-on experience with industry-standard tools and technologies. Become job-ready and stand out in the field of modern electrical engineering.",
    image: placeholderImage,
    path: "/ElectricalAndElectronicsCertificationCourses",
  },
  {
    id: "cert-java-60",
    title: "Diploma Courses",
    duration: "120 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with industry-focused Electrical & Electronics courses. Gain hands-on experience in circuits, power systems, electronics, and embedded technologies. Build strong technical fundamentals through practical training and become job-ready to excel in the electrical and electronics field.",
    image: placeholderImage,
    path: "/ElectricalAndElectronicsDiplomaCourses",
  },
  {
    id: "cert-c-60",
    title: "Professional Courses",
    duration: "200 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with our industry-aligned Electrical & Electronics courses, gain in-depth practical skills in circuits, power systems, electronics, and embedded technologies, build strong technical expertise through hands-on training, and become fully job-ready with abilities highly valued across the industry.",
    image: placeholderImage,
    path: "/ElectricalAndElectronicsProfessionalCourses",
  },
  {
    id: "cert-cpp-60",
    title: "Master Diploma Courses",
    duration: "260 hours",
    availability: "Online / Offline / Remote",
    description:
"Enhance your skills with industry-aligned Electrical & Electronics Master Diploma programs, providing hands-on training, advanced technical expertise, and practical experience to make you fully industry-ready. Build a strong foundation, master modern tools, and excel in the evolving electrical and electronics field.",
    image: placeholderImage,
    path: "/ElectricalAndElectronicsMasterDiplomaCourses",
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

      <h1 className="heading">Electrical And Electronics COURSES</h1>

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
