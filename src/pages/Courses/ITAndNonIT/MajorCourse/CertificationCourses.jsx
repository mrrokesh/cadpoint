import React, { useState, useMemo, useRef } from "react";
import "./CertificationCourses.css";
import placeholderImage from "../ITNonITImages/Python.jpg";


const allCourses = [
{
    id: "cert-python-60",
    title: "Certificate in Python Programming",
    category: "Certificate",
    softwares: ["Python"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Foundational Python programming concepts and hands-on exercises.",
    image: placeholderImage,
    className: "certificate-in-python-programming-card"
  },
  {
    id: "cert-java-60",
    title: "Certificate in Java Programming",
    category: "Certificate",
    softwares: ["Java"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Java basics and core concepts for application development.",
    image: placeholderImage,
    className: "certificate-in-java-programming-card"
  },
  {
    id: "cert-c-60",
    title: "Certificate in C Programming",
    category: "Certificate",
    softwares: ["C"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "C language fundamentals and procedural programming.",
    image: placeholderImage,
    className: "certificate-in-c-programming-card"
  },
  {
    id: "cert-cpp-60",
    title: "Certificate in C++ Programming",
    category: "Certificate",
    softwares: ["C++"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "C++ syntax, OOP basics, and standard library usage.",
    image: placeholderImage,
    className: "certificate-in-cpp-programming-card"
  },
  {
    id: "cert-js-60",
    title: "Certificate in JavaScript Essentials",
    category: "Certificate",
    softwares: ["JavaScript"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Core JavaScript essentials for web development.",
    image: placeholderImage,
    className: "certificate-in-javascript-essentials-card"
  },
  {
    id: "cert-r-60",
    title: "Certificate in R Programming",
    category: "Certificate",
    softwares: ["R"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "R basics for statistical computing and data manipulation.",
    image: placeholderImage,
    className: "certificate-in-r-programming-card"
  },
  {
    id: "cert-go-60",
    title: "Certificate in Go Programming",
    category: "Certificate",
    softwares: ["Google Go"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Introduction to Go (Golang) and concurrent programming patterns.",
    image: placeholderImage,
    className: "certificate-in-go-programming-card"
  },
  {
    id: "cert-swift-60",
    title: "Certificate in Swift Programming",
    category: "Certificate",
    softwares: ["Swift"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Swift fundamentals for iOS/macOS development.",
    image: placeholderImage,
    className: "certificate-in-swift-programming-card"
  },
  {
    id: "cert-dotnet-60",
    title: "Certificate in .NET Programming",
    category: "Certificate",
    softwares: [".NET"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: ".NET basics, C# introduction and runtime fundamentals.",
    image: placeholderImage,
    className: "certificate-in-dotnet-programming-card"
  },

  /* ----------------- Web Designing (Certificates) ----------------- */
  {
    id: "cert-html-css-60",
    title: "Certificate in HTML & CSS",
    category: "Web Designing",
    softwares: ["HTML", "CSS"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Foundations of web layout and styling using HTML and CSS.",
    image: placeholderImage,
    className: "certificate-in-html-css-card"
  },
  {
    id: "cert-bootstrap-40",
    title: "Certificate in Bootstrap",
    category: "Web Designing",
    softwares: ["Bootstrap"],
    duration: "40 hours",
    availability: "Online / Offline",
    description: "Bootstrap responsive components and grid system.",
    image: placeholderImage,
    className: "certificate-in-bootstrap-card"
  },
  {
    id: "cert-angular-60",
    title: "Certificate in Angular Basics",
    category: "Web Designing",
    softwares: ["Angular"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Angular fundamentals and component-driven UI.",
    image: placeholderImage,
    className: "certificate-in-angular-basics-card"
  },
  {
    id: "cert-nodejs-60",
    title: "Certificate in Node.js Basics",
    category: "Web Designing",
    softwares: ["Node.js"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Node.js runtime basics for server-side JavaScript.",
    image: placeholderImage,
    className: "certificate-in-nodejs-basics-card"
  },
  {
    id: "cert-react-60",
    title: "Certificate in React Basics",
    category: "Web Designing",
    softwares: ["React"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "React fundamentals: components, state, and props.",
    image: placeholderImage,
    className: "certificate-in-react-basics-card"
  },

  /* ----------------- More Certificate / Web / Database entries from PDF ----------------- */
  {
    id: "cert-php-60",
    title: "Certificate in PHP Programming",
    category: "Certificate",
    softwares: ["PHP"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "PHP essentials and server-side scripting fundamentals.",
    image: placeholderImage,
    className: "certificate-in-php-programming-card"
  },

  /* ----------------- Database Certificates ----------------- */
  {
    id: "cert-mysql-60",
    title: "Certificate in MySQL",
    category: "Database",
    softwares: ["MySQL"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Basics of MySQL, queries, and schema design.",
    image: placeholderImage,
    className: "certificate-in-mysql-card"
  },
  {
    id: "cert-mongodb-60",
    title: "Certificate in MongoDB",
    category: "Database",
    softwares: ["MongoDB"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "NoSQL fundamentals with MongoDB CRUD and indexing.",
    image: placeholderImage,
    className: "certificate-in-mongodb-card"
  },
  {
    id: "cert-oracle-60",
    title: "Certificate in Oracle Database",
    category: "Database",
    softwares: ["Oracle"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Oracle DB fundamentals and SQL tuning basics.",
    image: placeholderImage,
    className: "certificate-in-oracle-database-card"
  },
  {
    id: "cert-sqlserver-60",
    title: "Certificate in SQL Server",
    category: "Database",
    softwares: ["SQL Server"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "MS SQL Server essentials and administration basics.",
    image: placeholderImage,
    className: "certificate-in-sqlserver-card"
  },

  /* ----------------- Software Testing Certificates ----------------- */
  {
    id: "cert-manualtesting-60",
    title: "Certificate in Manual Testing",
    category: "Software Testing",
    softwares: ["Manual Testing"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Manual testing lifecycle, test cases and bug reporting.",
    image: placeholderImage,
    className: "certificate-in-manual-testing-card"
  },
  {
    id: "cert-selenium-60",
    title: "Certificate in Selenium Automation",
    category: "Software Testing",
    softwares: ["Selenium"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Browser automation with Selenium WebDriver.",
    image: placeholderImage,
    className: "certificate-in-selenium-automation-card"
  },
  {
    id: "cert-jmeter-60",
    title: "Certificate in JMeter",
    category: "Software Testing",
    softwares: ["JMeter"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Performance testing fundamentals using JMeter.",
    image: placeholderImage,
    className: "certificate-in-jmeter-card"
  },
  {
    id: "cert-qtp-60",
    title: "Certificate in QTP/UFT",
    category: "Software Testing",
    softwares: ["QTP/UFT"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Functional automation with QTP / UFT.",
    image: placeholderImage,
    className: "certificate-in-qtp-uft-card"
  },
  {
    id: "cert-soapui-60",
    title: "Certificate in Soap UI",
    category: "Software Testing",
    softwares: ["Soap UI"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "API testing using SoapUI tools and workflows.",
    image: placeholderImage,
    className: "certificate-in-soapui-card"
  },

  /* ----------------- Cloud Computing Certificates ----------------- */
  {
    id: "cert-aws-60",
    title: "Certificate in AWS Essentials",
    category: "Cloud Computing",
    softwares: ["AWS"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Core AWS cloud services and fundamentals.",
    image: placeholderImage,
    className: "certificate-in-aws-essentials-card"
  },
  {
    id: "cert-azure-60",
    title: "Certificate in Microsoft Azure",
    category: "Cloud Computing",
    softwares: ["Azure"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Azure fundamentals and cloud services overview.",
    image: placeholderImage,
    className: "certificate-in-microsoft-azure-card"
  },
  {
    id: "cert-gcloud-60",
    title: "Certificate in Google Cloud Basics",
    category: "Cloud Computing",
    softwares: ["Google Cloud"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Introductory concepts of Google Cloud Platform.",
    image: placeholderImage,
    className: "certificate-in-google-cloud-basics-card"
  },
  {
    id: "cert-openstack-60",
    title: "Certificate in OpenStack",
    category: "Cloud Computing",
    softwares: ["OpenStack"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "OpenStack components and private cloud basics.",
    image: placeholderImage,
    className: "certificate-in-openstack-card"
  },

  /* ----------------- DevOps Certificates ----------------- */
  {
    id: "cert-git-60",
    title: "Certificate in Git & GitHub",
    category: "DevOps",
    softwares: ["Git", "GitHub"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Version control using Git and GitHub workflows.",
    image: placeholderImage,
    className: "certificate-in-git-github-card"
  },
  {
    id: "cert-jenkins-60",
    title: "Certificate in Jenkins",
    category: "DevOps",
    softwares: ["Jenkins"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "CI/CD pipelines using Jenkins.",
    image: placeholderImage,
    className: "certificate-in-jenkins-card"
  },
  {
    id: "cert-docker-60",
    title: "Certificate in Docker",
    category: "DevOps",
    softwares: ["Docker"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Containerization fundamentals with Docker.",
    image: placeholderImage,
    className: "certificate-in-docker-card"
  },
  {
    id: "cert-kubernetes-60",
    title: "Certificate in Kubernetes",
    category: "DevOps",
    softwares: ["Kubernetes"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Container orchestration basics with Kubernetes.",
    image: placeholderImage,
    className: "certificate-in-kubernetes-card"
  },
  {
    id: "cert-ansible-60",
    title: "Certificate in Ansible",
    category: "DevOps",
    softwares: ["Ansible"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Automation and configuration with Ansible.",
    image: placeholderImage,
    className: "certificate-in-ansible-card"
  },
  {
    id: "cert-puppet-60",
    title: "Certificate in Puppet",
    category: "DevOps",
    softwares: ["Puppet"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Configuration management fundamentals using Puppet.",
    image: placeholderImage,
    className: "certificate-in-puppet-card"
  },

  /* ----------------- Database & AI Certificates ----------------- */
  {
    id: "cert-data-science-60",
    title: "Certificate in Data Science with Python",
    category: "Database & AI",
    softwares: ["Python"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Intro to data science using Python tools.",
    image: placeholderImage,
    className: "certificate-in-data-science-with-python-card"
  },
  {
    id: "cert-ml-60",
    title: "Certificate in Machine Learning",
    category: "Database & AI",
    softwares: ["Machine Learning"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "ML fundamentals and model building basics.",
    image: placeholderImage,
    className: "certificate-in-machine-learning-card"
  },
  {
    id: "cert-tableau-60",
    title: "Certificate in Tableau Basics",
    category: "Database & AI",
    softwares: ["Tableau"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Introduction to Tableau visualization basics.",
    image: placeholderImage,
    className: "certificate-in-tableau-basics-card"
  },
  {
    id: "cert-powerbi-60",
    title: "Certificate in Power BI Basics",
    category: "Database & AI",
    softwares: ["Power BI"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Power BI essentials for dashboards and reporting.",
    image: placeholderImage,
    className: "certificate-in-powerbi-basics-card"
  },

  /* ----------------- Cyber Security Certificates ----------------- */
  {
    id: "cert-wireshark-60",
    title: "Certificate in Wireshark",
    category: "Cyber Security",
    softwares: ["Wireshark"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Network traffic analysis using Wireshark.",
    image: placeholderImage,
    className: "certificate-in-wireshark-card"
  },
  {
    id: "cert-metasploit-60",
    title: "Certificate in Metasploit",
    category: "Cyber Security",
    softwares: ["Metasploit"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Penetration testing basics using Metasploit.",
    image: placeholderImage,
    className: "certificate-in-metasploit-card"
  },
  {
    id: "cert-mimikatz-60",
    title: "Certificate in Mimikatz",
    category: "Cyber Security",
    softwares: ["Mimikatz"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Credential extraction basics (ethical use).",
    image: placeholderImage,
    className: "certificate-in-mimikatz-card"
  },
  {
    id: "cert-burpsuite-60",
    title: "Certificate in Burp Suite",
    category: "Cyber Security",
    softwares: ["Burp Suite"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Web vulnerability assessment using Burp Suite.",
    image: placeholderImage,
    className: "certificate-in-burp-suite-card"
  },

  /* ----------------- RPA (Certificates) ----------------- */
  {
    id: "cert-uipath-60",
    title: "Certificate in UI Path",
    category: "RPA",
    softwares: ["UI Path"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Robotic process automation fundamentals with UI Path.",
    image: placeholderImage,
    className: "certificate-in-ui-path-card"
  },
  {
    id: "cert-blueprism-60",
    title: "Certificate in Blue Prism",
    category: "RPA",
    softwares: ["Blue Prism"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Blue Prism introduction to enterprise RPA flows.",
    image: placeholderImage,
    className: "certificate-in-blue-prism-card"
  },
  {
    id: "cert-automation-anywhere-60",
    title: "Certificate in Automation Anywhere",
    category: "RPA",
    softwares: ["Automation Anywhere"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Automation Anywhere basics and bot creation.",
    image: placeholderImage,
    className: "certificate-in-automation-anywhere-card"
  },

  /* ----------------- Digital Marketing Certificates ----------------- */
  {
    id: "cert-seo-60",
    title: "Certificate in SEO Basics",
    category: "Digital Marketing",
    softwares: ["SEO Tools"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "SEO fundamentals and on-page/off-page strategies.",
    image: placeholderImage,
    className: "certificate-in-seo-basics-card"
  },
  {
    id: "cert-googleads-60",
    title: "Certificate in Google Ads",
    category: "Digital Marketing",
    softwares: ["Google Ads"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Google Ads campaign setup and optimization.",
    image: placeholderImage,
    className: "certificate-in-google-ads-card"
  },
  {
    id: "cert-emailmarketing-60",
    title: "Certificate in Email Marketing",
    category: "Digital Marketing",
    softwares: ["Mailchimp", "HubSpot"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Email marketing platforms and campaign best-practices.",
    image: placeholderImage,
    className: "certificate-in-email-marketing-card"
  },
  {
    id: "cert-web-analytics-60",
    title: "Certificate in Web Analytics",
    category: "Digital Marketing",
    softwares: ["Google Analytics"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Google Analytics basics for tracking and insights.",
    image: placeholderImage,
    className: "certificate-in-web-analytics-card"
  },
  {
    id: "cert-canva-60",
    title: "Certificate in Canva for Creatives",
    category: "Digital Marketing",
    softwares: ["Canva"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Design basics with Canva for marketing creatives.",
    image: placeholderImage,
    className: "certificate-in-canva-for-creatives-card"
  },

  /* ----------------- Digital Warehouse Certificates ----------------- */
  {
    id: "cert-informatica-60",
    title: "Certificate in Informatica Basics",
    category: "Digital Warehouse",
    softwares: ["Informatica"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "ETL basics using Informatica tools.",
    image: placeholderImage,
    className: "certificate-in-informatica-basics-card"
  },
  {
    id: "cert-qlikview-60",
    title: "Certificate in QlikView",
    category: "Digital Warehouse",
    softwares: ["QlikView"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "QlikView for BI dashboards and visualization basics.",
    image: placeholderImage,
    className: "certificate-in-qlikview-card"
  },
  {
    id: "cert-pentaho-60",
    title: "Certificate in Pentaho",
    category: "Digital Warehouse",
    softwares: ["Pentaho"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Pentaho fundamentals for data integration and reporting.",
    image: placeholderImage,
    className: "certificate-in-pentaho-card"
  },

  /* ----------------- Game / AR / VR / Robotics Certificates ----------------- */
  {
    id: "cert-unity-60",
    title: "Certificate in Unity 3D Game Development",
    category: "Game/AR/VR/Robotics",
    softwares: ["Unity"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Unity basics for 3D game development.",
    image: placeholderImage,
    className: "certificate-in-unity-3d-game-development-card"
  },
  {
    id: "cert-unreal-60",
    title: "Certificate in Unreal Engine",
    category: "Game/AR/VR/Robotics",
    softwares: ["Unreal Engine"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Unreal Engine fundamentals for complex game builds.",
    image: placeholderImage,
    className: "certificate-in-unreal-engine-card"
  },
  {
    id: "cert-arkit-60",
    title: "Certificate in ARKit Development",
    category: "Game/AR/VR/Robotics",
    softwares: ["ARKit"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "ARKit fundamentals for iOS AR experiences.",
    image: placeholderImage,
    className: "certificate-in-arkit-development-card"
  },
  {
    id: "cert-arcore-60",
    title: "Certificate in ARCore Development",
    category: "Game/AR/VR/Robotics",
    softwares: ["ARCore"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "ARCore basics for Android AR development.",
    image: placeholderImage,
    className: "certificate-in-arcore-development-card"
  },
  {
    id: "cert-iot-arduino-60",
    title: "Certificate in IoT with Arduino",
    category: "Game/AR/VR/Robotics",
    softwares: ["Arduino"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "IoT fundamentals using Arduino hardware and sensors.",
    image: placeholderImage,
    className: "certificate-in-iot-with-arduino-card"
  },
  {
    id: "cert-raspberry-60",
    title: "Certificate in Raspberry Pi Programming",
    category: "Game/AR/VR/Robotics",
    softwares: ["Raspberry Pi"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Raspberry Pi basics for embedded and IoT projects.",
    image: placeholderImage,
    className: "certificate-in-raspberry-pi-programming-card"
  },

  /* ----------------- Frameworks Certificates ----------------- */
  {
    id: "cert-django-60",
    title: "Certificate in Django",
    category: "Frameworks",
    softwares: ["Django"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Web framework basics using Django for Python.",
    image: placeholderImage,
    className: "certificate-in-django-card"
  },
  {
    id: "cert-springboot-60",
    title: "Certificate in Spring Boot",
    category: "Frameworks",
    softwares: ["Spring Boot"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Spring Boot fundamentals for Java microservices.",
    image: placeholderImage,
    className: "certificate-in-spring-boot-card"
  },
  {
    id: "cert-laravel-60",
    title: "Certificate in Laravel",
    category: "Frameworks",
    softwares: ["Laravel"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "Laravel basics for PHP full-stack applications.",
    image: placeholderImage,
    className: "certificate-in-laravel-card"
  },
  {
    id: "cert-reactnative-60",
    title: "Certificate in React Native",
    category: "Frameworks",
    softwares: ["React Native"],
    duration: "60 hours",
    availability: "Online / Offline",
    description: "React Native basics for cross-platform mobile apps.",
    image: placeholderImage,
    className: "certificate-in-react-native-card"
  },

];

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

      <h1 className="heading">Certification Courses</h1>

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
