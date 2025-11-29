import React, { useState } from "react";
import "./EnquiryForm.css";

export default function EnquiryForm() {
  // --------- State for form fields ----------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  // --------- Submit handler ----------
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby0ydvs99RhJhEQbvXa7vwsfMHruvqYVCpplwo4RnXzBvXYh340jTRByO02tyAUDpKt/exec", // <-- replace this with your Google Apps Script Web App URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, mobile, message }),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="contact-wrapper">
      {/* LEFT SIDE CONTENT */}
      <div className="left-content">
        <h2 className="section-title">Enquiry</h2>
        <p className="info-text">
          Send us your feedback or enquiries regarding our services.
          We aim to respond quickly and ensure a smooth support experience.
          Your input helps us improve and serve you better every day.
        </p>

        <h3 className="helpline-title">Helpline</h3>
        <p className="helpline-text">
          For urgent support, call our helpline.<br />
          <strong>Monday to Sunday · 9 AM – 7 PM</strong><br />
          Phone: <strong>+91 98765 43210</strong>
        </p>
      </div>

      {/* RIGHT SIDE FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text" name="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email" name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel" name="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your message" name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="arrow-btn">→</button>
      </form>
    </div>
  );
}
