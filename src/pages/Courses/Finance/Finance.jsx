import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Finance.css";

import placeholderImage from "./FinanceImages/Finance.jpg";


const allCourses = [
  {
    id: "cert-python-60",
    title: "Certification Courses",
    duration: "60 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with Accounting, Finance, and ERP courses. Master essential skills in financial accounting, taxation, budgeting, auditing, and enterprise resource planning systems. Gain hands-on experience with industry-standard tools like Tally, SAP, and Excel. Become job-ready and stand out in the fast-growing world of modern finance and business management.",
    image: placeholderImage,
    path: "/FinanceCertificationCourses",
  },
  {
    id: "cert-java-60",
    title: "Diploma Courses",
    duration: "120 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with industry-focused Accounting, Finance, and ERP courses. Gain hands-on experience in financial accounting, taxation, auditing, budgeting, and enterprise resource planning platforms like Tally and SAP. Strengthen your practical knowledge through real-time exercises and industry workflows, and become  business operations, and ERP management domain.",  
   image: placeholderImage,
    path: "/FinanceDiplomaCourses",
  },
  {
    id: "cert-c-60",
    title: "Professional Courses",
    duration: "200 hours",
    availability: "Online / Offline / Remote",
    description:
    "Advance your career with our industry-aligned Accounting, Finance, and ERP courses, gain in-depth practical skills in financial accounting, taxation, auditing, budgeting, and enterprise resource planning systems, build strong professional expertise through hands-on training with tools like Tally, SAP, and Excel, and become fully job-ready skills with the finance and business management industry.",
    image: placeholderImage,
    path: "/FinanceProfessionalCourses",
  },
  {
    id: "cert-cpp-60",
    title: "Master Diploma Courses",
    duration: "260 hours",
    availability: "Online / Offline / Remote",
    description:
"Enhance your skills with industry-aligned Accounting, Finance, and ERP Master Diploma programs, providing hands-on training, advanced financial and analytical expertise, and practical experience to make you fully industry-ready. Build a strong foundation, master modern tools like Tally, SAP, and Excel, and excel in the evolving finance, business operations, and ERP management field.",    image: placeholderImage,
    path: "/FinanceMasterDiplomaCourses",
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

      <h1 className="heading">ACCOUNTING, FINANCE, AND ERP</h1>

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
