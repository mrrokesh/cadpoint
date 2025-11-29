import React, { useState } from "react";
import "./ServicesPage.css";

import Projectwork from "../../assets/Images/ServiceImages/ProjectWork.jpg";
import Industrywork from "../../assets/Images/ServiceImages/industry.avif";
import placementAssist from "../../assets/Images/ServiceImages/Placement_assist.jpg";
import CorporateTraining from "../../assets/Images/ServiceImages/Corporate-Training.jpg";
import softwaredevelopement from "../../assets/Images/ServiceImages/softwaredevelopement.jpeg";
import internship from "../../assets/Images/ServiceImages/internship.jpeg";
import digitalmarketing from "../../assets/Images/ServiceImages/digitalmarketing.jpeg";
import webapp from "../../assets/Images/ServiceImages/webapp.jpeg";
import cadddesign from "../../assets/Images/ServiceImages/cadddesign.jpeg";
import AcademicResearch from "../../assets/Images/ServiceImages/AcademicResearch.jpeg";

const servicesData = [
  {
    id: 1,
    title: "Project Work for Students",
    image: Projectwork,
    shortDesc: "We help students complete projects with real-world guidance.",
    fullDesc: [
      "Our project work program supports students through every phase of their academic projects. We begin by clarifying the project scope, defining measurable goals, and choosing a practical technology stack so students can focus on implementation with confidence.",
      "You will receive step-by-step guidance for topic selection, system design, coding standards, debugging practices, and final presentation preparation. Mentors review drafts, provide checkpoints, and ensure that the project follows academic requirements and industry best practices.",
      "Completing these projects improves practical skills, strengthens portfolios, and prepares students for viva and technical interviews. The end result is a polished, industry-aligned submission that demonstrates both technical depth and clear documentation."
    ],
  },
  {
    id: 2,
    title: "Industry Projects",
    image: Industrywork,
    shortDesc: "Work on live industry projects and gain real-time exposure.",
    fullDesc: [
      "Industry projects simulate real company workflows so learners can experience professional environments. From sprint planning to version control, you will follow the same practices used by software teams in production.",
      "Participants learn tools, team collaboration, task tracking, and code review processes while working on realistic deliverables. The program includes milestones, peer reviews, and clearly defined acceptance criteria that mirror industry expectations.",
      "These projects build a strong portfolio by demonstrating real-world problem solving, communication, and adherence to development standards. Employers value candidates who can show project-based contributions and measurable outcomes."
    ],
  },
  {
    id: 3,
    title: "Placement Assistance",
    image: placementAssist,
    shortDesc: "We connect skilled candidates with top recruiters.",
    fullDesc: [
      "Our placement assistance program prepares candidates with end-to-end job readiness training to face technical and HR interviews with confidence. We focus on both hard skills and soft skills to make you interview-ready.",
      "You will get resume optimization, aptitude and coding practice, mock technical interviews, HR round preparation, and personalized feedback after every mock session. We also run workshops on communication, group discussions, and interview strategies.",
      "This training improves presentation, problem-solving speed, and confidence levels — all crucial for converting interview opportunities into job offers. Many students report faster placements and better interview outcomes after this program."
    ],
  },
  {
    id: 4,
    title: "Corporate Training",
    image: CorporateTraining,
    shortDesc: "Upskill your team with custom corporate IT training.",
    fullDesc: [
      "Our corporate training programs are tailored to company goals and current technologies to quickly uplift team capabilities. Courses are customized to match role-specific needs and project pipelines for maximum impact.",
      "Training includes hands-on labs, real-case studies, live demos, and practical assignments designed to reinforce learning. We provide assessments, progress reports, and follow-up materials so the knowledge sticks and is immediately applicable.",
      "Organizations benefit from improved productivity, fewer onboarding gaps, and a better-skilled workforce. The result is faster delivery cycles, higher code quality, and teams that can adopt new tech with confidence."
    ],
  },
  {
    id: 5,
    title: "Software Development",
    image: softwaredevelopement,
    shortDesc: "We develop custom software and applications.",
    fullDesc: [
      "We deliver end-to-end software development services for web and mobile platforms, focusing on scalable architecture and maintainable code. Projects start with requirement analysis and end with deployment and support.",
      "Our services include UI/UX design, API development, testing, CI/CD setup, and cloud deployment to ensure reliable, production-ready applications. We follow iterative development processes and provide regular demos and feedback loops.",
      "Clients receive a tailored solution built to business requirements, with clear documentation and long-term support options. This approach minimizes technical debt and maximizes business value over the life of the product."
    ],
  },
  {
    id: 6,
    title: "Internship Programs",
    image: internship,
    shortDesc: "Gain hands-on experience with structured internships.",
    fullDesc: [
      "Our internships combine mentorship, real tasks, and practical learning to prepare students for real job roles. Every intern is paired with an industry mentor who supervises the project and guides daily progress.",
      "During the internship you will work on real modules, participate in stand-ups, submit deliverables, and attend learning sessions that teach tools and best practices. Regular feedback ensures continuous improvement and skill growth.",
      "On completion interns receive certificates, performance reports, and references that help in job searches. The structured approach increases employability and gives students a clear path from learning to working."
    ],
  },
  {
    id: 7,
    title: "Digital Marketing Services",
    image: digitalmarketing,
    shortDesc: "Grow your brand with our online marketing solutions.",
    fullDesc: [
      "We offer data-driven digital marketing services to increase brand visibility and attract qualified leads. Campaigns are built on research, audience insights, and measurable KPIs that align with your business goals.",
      "Our work includes SEO, paid ads, social media strategy, content planning, and analytics reporting to optimize performance continuously. We create targeted funnels that convert traffic into customers using tested strategies.",
      "Clients see improvements in traffic quality, engagement metrics, and lead generation revenue over time. The combined approach of organic and paid tactics ensures sustainable growth and measurable ROI."
    ],
  },
  {
    id: 8,
    title: "Web & App Design",
    image: webapp,
    shortDesc: "Modern and responsive UI/UX design.",
    fullDesc: [
      "We craft clean, user-focused designs for websites and mobile apps that balance aesthetics and usability. Our process begins with research, user flows, and wireframes to map the best experiences for your users.",
      "Design deliverables include high-fidelity mockups, interactive prototypes, responsive layouts, and style guides that help developers implement the UI precisely. Usability testing and iterations are part of the workflow to ensure clarity and performance.",
      "Well-designed interfaces improve user retention, conversion rates, and customer satisfaction. Investing in good design reduces friction and helps deliver a strong brand impression across platforms."
    ],
  },
  {
    id: 9,
    title: "CAD & Design Services",
    image: cadddesign,
    shortDesc: "Expert CAD solutions for engineering domains.",
    fullDesc: [
      "Our CAD and design services provide accurate engineering drawings, 3D models, and simulations for manufacturing and product development. We follow industry standards to ensure compatibility and precision.",
      "Services include 2D drafting, 3D modelling, assembly drawings, BOM creation, and simulation-driven optimization. We work with AutoCAD, SolidWorks, CATIA and other professional tools to meet project demands.",
      "Deliverables are production-ready and help reduce rework, speed up manufacturing, and improve design validation. Engineers and manufacturers benefit from clearer documentation and faster project timelines."
    ],
  },
  {
    id: 10,
    title: "Academic Research & Paper Assistance",
    image: AcademicResearch,
    shortDesc: "Guidance for research, thesis, and journal papers.",
    fullDesc: [
      "We assist students and researchers in planning and preparing academic work with a focus on rigorous methodology and correct formatting. From topic refinement to literature review, we guide each step carefully.",
      "Our services include structure building, statistical guidance, editing and proofreading, reference management, and plagiarism checks to ensure the work meets journal standards. We also advise on submission and peer-review processes.",
      "With professional support, researchers produce clearer manuscripts, improve acceptance chances, and accelerate publication timelines. The result is higher-quality research outputs that follow academic conventions closely."
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(null);

  const openPopup = (service) => {
    setActive(service);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setActive(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="svc-section">
      <h2 className="svc-title">Our IT Services</h2>

      <div className="svc-container">
        {servicesData.map((service) => (
          <div key={service.id} className="svc-card">
            <img src={service.image} alt={service.title} className="svc-img" />
            <div className="svc-content">
              <h3>{service.title}</h3>
              <p className="svc-short">{service.shortDesc}</p>
              <button className="svc-btn" onClick={() => openPopup(service)}>
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="svc-popup-overlay" role="dialog" aria-modal="true">
          <div className="svc-popup-box">
            <button
              className="svc-close-btn"
              aria-label="Close"
              onClick={closePopup}
            >
              ×
            </button>

            <div className="popup-inner">
              <div className="popup-left">
                <img
                  src={active.image}
                  alt={active.title}
                  className="popup-img"
                  draggable="false"
                />
              </div>

              <div className="popup-right">
                <h2 className="popup-title">{active.title}</h2>

                <div className="popup-paragraphs">
                  {active.fullDesc.map((p, idx) => (
                    <p key={idx} className="popup-para">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
