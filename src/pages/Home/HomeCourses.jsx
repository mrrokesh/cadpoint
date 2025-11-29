import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCourses.css";

import civilImg from "../../assets/Images/Courses/cadd-civil.jpg";
import mechImg from "../../assets/Images/Courses/aeronautical.webp";
import eeeImg from "../../assets/Images/Courses/electronics.jpg";
import accountsImg from "../../assets/Images/Courses/accounts.jpg";
import itImg from "../../assets/Images/Courses/it.jpg";
import Multimedia from "../../assets/Images/Courses/ArVr.jpg";


export default function HomeCourses() {
  const navigate = useNavigate();


  const departments = [
    {
      title: "IT & Non-IT Career Programs",
      img: itImg,
      desc:
        "Learn Python, Full Stack Web Development, Data Analytics and Corporate Skill Training to build a job-ready career.",
      page: "it-non-it",
    },


  {
    title: "Multimedia • AR & VR Development",
    img: Multimedia,
    desc:
      "Master Unreal Engine, Unity, 3D Assets, Interactive Environments and Virtual Workspace Design for next-gen careers.",
    page: "/Multimedia",
    
  },

    {
      title: "Accounts & Office Management",
      img: accountsImg,
      desc:
        "Train in Tally Prime, GST Filing, Payroll, Billing Systems and Advanced Excel for corporate financial roles.",
      page: "/Finance",
    },
    {
      title: "Civil & Architecture Designing",
      img: civilImg,
      desc:
        "Become skilled in AutoCAD, Revit, STAAD Pro, BIM Modeling and Complete Real-Site Project Drafting.",
      page: "/civil-arch",
    },
    {
      title: " Mechanical & Aeronautical Designing",
      img: mechImg,
      desc:
        "Learn CATIA, SolidWorks, Creo, GD&T, Industrial Design Standards and Production Workflow Modelling.",
      page: "/MechAndAero",
    },
    {
      title: "Electrical And Electronics Designing",
      img: eeeImg,
      desc:
        "Get trained in PLC, SCADA, Industrial Automation, Circuit Design and Complete Electrical Panel Drafting.",
      page: "/ElectricalAndElectronics",
    },
  ];

  return (
    <section className="Courses-section">
      <h2 className="Courses-heading">Our Departments</h2>

      <div className="Courses-grid">
        {departments.map((d, i) => (
          <div className="Courses-card" key={i}>
            <div className="Courses-image">
              <img src={d.img} alt={d.title} />
            </div>

            <div className="Courses-content">
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
              <button onClick={() => navigate(d.page)}>Explore →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
