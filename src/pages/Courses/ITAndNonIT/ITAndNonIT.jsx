import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ITAndNonIT.css";

import placeholderImage from "./ITNonITImages/Python.jpg";


const allCourses = [
  {
    id: "cert-python-60",
    title: "Certification Courses",
    duration: "60 hours",
    availability: "Online / Offline / Remote",
    description:
      "Boost your career with industry-focused Certification Courses in IT and Non-IT. Learn fast, build confidence, and stand out with job-ready skills.",
    image: placeholderImage,
    path: "/CertificationCourses",
  },
  {
    id: "cert-java-60",
    title: "Diploma Courses",
    duration: "120 hours",
    availability: "Online / Offline / Remote",
    description:
      "Build strong foundational expertise with our industry-aligned Diploma Courses across IT and Non-IT domains — unlocking real career opportunities.",
    image: placeholderImage,
    path: "/DiplomaCourses",
  },
  {
    id: "cert-c-60",
    title: "Professional Courses",
    duration: "200 hours",
    availability: "Online / Offline / Remote",
    description:
      "Advance your career with our Professional Courses designed for high-demand technical and business skills.",
    image: placeholderImage,
    path: "/ProfessionalCourses",
  },
  {
    id: "cert-cpp-60",
    title: "Master Diploma Courses",
    duration: "260 hours",
    availability: "Online / Offline / Remote",
    description:
      "Achieve mastery with our advanced Master Diploma programs crafted for deep, career-shaping expertise — unlocking limitless career potential.",
    image: placeholderImage,
    path: "/MasterDiplomaCourses",
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

      <h1 className="heading">IT & NON–IT COURSES</h1>

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
