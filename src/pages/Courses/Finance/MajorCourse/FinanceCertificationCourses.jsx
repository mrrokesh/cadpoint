import React, { useState, useMemo, useRef } from "react";
import "./FinanceCertificationCourses.css";


import placeholderImage from "../FinanceImages/Finance.jpg";



const allCourses = [  { id: "cert-tally-erp9", title: "Certificate in Tally ERP 9", category: "Certification", softwares: ["Tally ERP 9"], duration: "60 hours", availability: "Online / Offline", description: "Fundamentals of accounting and business management using Tally ERP 9.", image: placeholderImage, className: "cert-tally-erp9-card" },
  { id: "cert-tally-prime", title: "Certificate in Tally Prime", category: "Certification", softwares: ["Tally Prime"], duration: "60 hours", availability: "Online / Offline", description: "Practical accounting and GST workflows using Tally Prime.", image: placeholderImage, className: "cert-tally-prime-card" },
  { id: "cert-quickbooks", title: "Certificate in QuickBooks Accounting", category: "Certification", softwares: ["QuickBooks"], duration: "60 hours", availability: "Online / Offline", description: "QuickBooks essentials for small business accounting.", image: placeholderImage, className: "cert-quickbooks-card" },
  { id: "cert-zoho-books", title: "Certificate in Zoho Books", category: "Certification", softwares: ["Zoho Books"], duration: "60 hours", availability: "Online / Offline", description: "Cloud accounting and invoicing using Zoho Books.", image: placeholderImage, className: "cert-zoho-books-card" },
  { id: "cert-sage50", title: "Certificate in Sage 50 (Peachtree)", category: "Certification", softwares: ["Sage 50"], duration: "60 hours", availability: "Online / Offline", description: "Accounting and bookkeeping with Sage 50 (Peachtree).", image: placeholderImage, className: "cert-sage50-card" },
  { id: "cert-excel-essentials", title: "Certificate in Microsoft Excel – Essentials", category: "Certification", softwares: ["MS Excel"], duration: "60 hours", availability: "Online / Offline", description: "Core Excel skills for accounting and reporting.", image: placeholderImage, className: "cert-excel-essentials-card" },
  { id: "cert-excel-advanced", title: "Certificate in Microsoft Excel – Advanced", category: "Certification", softwares: ["Advanced Excel"], duration: "60 hours", availability: "Online / Offline", description: "Advanced Excel techniques for financial analysis and automation.", image: placeholderImage, className: "cert-excel-advanced-card" },
  { id: "cert-ms-office-apps", title: "Certificate in MS Office Applications", category: "Certification", softwares: ["MS Word", "MS Excel", "PowerPoint"], duration: "60 hours", availability: "Online / Offline", description: "Productivity skills across Word, Excel and PowerPoint.", image: placeholderImage, className: "cert-ms-office-apps-card" },
  { id: "cert-gst-filing", title: "Certificate in GST Filing & Auditing", category: "Certification", softwares: ["GST"], duration: "60 hours", availability: "Online / Offline", description: "GST compliance, returns filing and basic auditing procedures.", image: placeholderImage, className: "cert-gst-filing-card" },
  { id: "cert-payroll-tds", title: "Certificate in Payroll & TDS Management", category: "Certification", softwares: ["Payroll", "TDS"], duration: "60 hours", availability: "Online / Offline", description: "Payroll processing, statutory compliance and TDS management.", image: placeholderImage, className: "cert-payroll-tds-card" },
  { id: "cert-indian-taxation", title: "Certificate in Indian Taxation Fundamentals", category: "Certification", softwares: ["CGST", "SGST", "IGST", "UTGST"], duration: "60 hours", availability: "Online / Offline", description: "Foundations of Indian GST and indirect taxation.", image: placeholderImage, className: "cert-indian-taxation-card" },
  { id: "cert-international-taxation", title: "Certificate in International Taxation", category: "Certification", softwares: ["Global Taxation"], duration: "60 hours", availability: "Online / Offline", description: "Principles of international taxation and cross-border rules.", image: placeholderImage, className: "cert-international-taxation-card" },
  { id: "cert-sap-financials", title: "Certificate in SAP ERP – Financials", category: "Certification", softwares: ["SAP FICO S/4 HANA"], duration: "60 hours", availability: "Online / Offline", description: "Introductory course on SAP FICO for financial accounting and controlling.", image: placeholderImage, className: "cert-sap-financials-card" },
  { id: "cert-sap-mm", title: "Certificate in SAP Material Management", category: "Certification", softwares: ["SAP MM"], duration: "60 hours", availability: "Online / Offline", description: "Fundamentals of SAP MM for procurement and inventory management.", image: placeholderImage, className: "cert-sap-mm-card" },
  { id: "cert-sap-sd", title: "Certificate in SAP Sales & Distribution", category: "Certification", softwares: ["SAP SD"], duration: "60 hours", availability: "Online / Offline", description: "SAP SD basics for order-to-cash and distribution workflows.", image: placeholderImage, className: "cert-sap-sd-card" },
  { id: "cert-sap-pp", title: "Certificate in SAP Production Planning", category: "Certification", softwares: ["SAP PP"], duration: "60 hours", availability: "Online / Offline", description: "Overview of SAP PP for production planning and scheduling.", image: placeholderImage, className: "cert-sap-pp-card" },
  { id: "cert-sap-logistics", title: "Certificate in SAP Logistics", category: "Certification", softwares: ["SAP Logistics"], duration: "60 hours", availability: "Online / Offline", description: "Logistics and supply chain concepts in SAP.", image: placeholderImage, className: "cert-sap-logistics-card" },
  { id: "cert-office-etiquette", title: "Certificate in Office Etiquette & Communication", category: "Certification", softwares: ["Communication","Email","Workplace Skills"], duration: "40 hours", availability: "Online / Offline", description: "Professional workplace communication and etiquette training.", image: placeholderImage, className: "cert-office-etiquette-card" },
  { id: "cert-digital-filing", title: "Certificate in Digital Filing & Cloud Tools", category: "Certification", softwares: ["Google Drive","OneDrive","Filing Tools"], duration: "40 hours", availability: "Online / Offline", description: "Digital filing, cloud storage workflows and document management.", image: placeholderImage, className: "cert-digital-filing-card" },
  { id: "cert-internet-email", title: "Certificate in Internet, Email & Digital Literacy", category: "Certification", softwares: ["Web Tools","Email","Docs"], duration: "40 hours", availability: "Online / Offline", description: "Basic digital literacy including email and web tools.", image: placeholderImage, className: "cert-internet-email-card" },];


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

      <h1 className="heading"> ACCOUNTING, FINANCE, AND ERP Certification Courses</h1>

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
