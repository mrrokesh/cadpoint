import React, { useState, useEffect } from "react";
import "./PopupSlide.css";

export default function PopupSlide({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 30);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (typeof onSubmit === "function") await onSubmit(formData);

      alert("Thank you! We will contact you shortly.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${visible ? "show" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Enquiry Form</h2>
        <p className="subtitle">
          Please share your details. Our team will reach out shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Select Course</label>
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Choose course</option>
              <option value="tech">Tech</option>
              <option value="non-tech">Non-Tech</option>
              <option value="cadd-civil">CADD - Civil</option>
              <option value="cadd-mech">CADD - Mechanical</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Tell us briefly about your requirements"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit  →"}
          </button>
        </form>
      </div>
    </div>
  );
}
