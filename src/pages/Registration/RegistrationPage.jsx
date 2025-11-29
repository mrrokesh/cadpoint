import React, { useState } from "react";
import "./RegistrationPage.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    photo: null,
    mobile: "",
    altMobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    courseCategory: "",
    courseName: "",
    mode: "",
    batchTime: "",
    startDate: "",
    reason: "",
    qualification: "",
    specialization: "",
    passingYear: "",
    university: "",
    certificates: null,
    employmentStatus: "",
    company: "",
    jobRole: "",
    experience: "",
    resume: null,
    idType: "",
    idNumber: "",
    idFile: null,
    skills: "",
    languages: "",
    specialNeeds: "",
    agree1: false,
    agree2: false,
    agree3: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Information</h3>
        <div className="grid-2">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <div className="grid-2">
          <input type="date" name="dob" onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <label>Upload Photo:</label>
        <input type="file" name="photo" onChange={handleChange} />

        <h3>Contact Details</h3>
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input name="altMobile" placeholder="Alternate Mobile (optional)" onChange={handleChange} />
        <input name="email" placeholder="Email Address" onChange={handleChange} />
        <textarea name="address" placeholder="Current Address" onChange={handleChange}></textarea>

        <div className="grid-3">
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="state" placeholder="State" onChange={handleChange} />
          <input name="pincode" placeholder="PIN Code" onChange={handleChange} />
        </div>

        <input name="country" placeholder="Country" onChange={handleChange} />

        <h3>Course Details</h3>
        <select name="courseCategory" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="IT">IT</option>
          <option value="Non-IT">Non-IT</option>
        </select>

        <input name="courseName" placeholder="Course Name" onChange={handleChange} />

        <select name="mode" onChange={handleChange}>
          <option value="">Training Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select name="batchTime" onChange={handleChange}>
          <option value="">Preferred Batch Time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Weekend">Weekend</option>
        </select>

        <h3>Educational Background</h3>
        <input name="qualification" placeholder="Highest Qualification" onChange={handleChange} />
        <input name="specialization" placeholder="Specialization" onChange={handleChange} />
        <input name="passingYear" placeholder="Passing Year" onChange={handleChange} />
        <input name="university" placeholder="University / College Name" onChange={handleChange} />

        <h3>Work Information (Optional)</h3>
        <select name="employmentStatus" onChange={handleChange}>
          <option value="">Employment Status</option>
          <option value="Student">Student</option>
          <option value="Fresher">Fresher</option>
          <option value="Working">Working</option>
        </select>

        <input name="company" placeholder="Company Name" onChange={handleChange} />
        <input name="jobRole" placeholder="Job Role" onChange={handleChange} />
        <input name="experience" placeholder="Experience (Years)" onChange={handleChange} />
        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleChange} />

        <h3>ID Verification</h3>
        <select name="idType" onChange={handleChange}>
          <option value="">Select ID Type</option>
          <option value="Aadhar">Aadhar</option>
          <option value="PAN">PAN</option>
          <option value="Other">Other</option>
        </select>

        <input name="idNumber" placeholder="ID Number" onChange={handleChange} />
        <label>Upload ID Proof:</label>
        <input type="file" name="idFile" onChange={handleChange} />

        <h3>Additional Details</h3>
        <input name="skills" placeholder="Skills Known" onChange={handleChange} />
        <input name="languages" placeholder="Languages Known" onChange={handleChange} />
        <textarea name="specialNeeds" placeholder="Any Special Requirements" onChange={handleChange}></textarea>



        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}