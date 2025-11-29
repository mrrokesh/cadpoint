import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupSlide from "./components/PopupSlide";
import WhatsApp from "./components/StickyWhatsApp";


import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import AboutPage from "./pages/About/AboutPage";
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import Registration from "./pages/Registration/RegistrationPage";

// Courses
import ITAndNonIT from "./pages/Courses/ITAndNonIT/ITAndNonIT";
import CertificationCourses from "./pages/Courses/ITAndNonIT/MajorCourse/CertificationCourses";
import DiplomaCourses from "./pages/Courses/ITAndNonIT/MajorCourse/DiplomaCourses";
import ProfessionalCourses from "./pages/Courses/ITAndNonIT/MajorCourse/ProfessionalCourses";
import MasterDiplomaCourses from "./pages/Courses/ITAndNonIT/MajorCourse/MasterDiplomaCourses";

import MechAndAero from "./pages/Courses/MechAndAero/MechAndAero";
import MechAndAeroCertificationCourses from "./pages/Courses/MechAndAero/MajorCourse/MechAndAeroCertificationCourses";
import MechAndAeroDiplomaCourses from "./pages/Courses/MechAndAero/MajorCourse/MechAndAeroDiplomaCourses";
import MechAndAeroProfessionalCourses from "./pages/Courses/MechAndAero/MajorCourse/MechAndAeroProfessionalCourses";
import MechAndAeroMasterDiplomaCourses from "./pages/Courses/MechAndAero/MajorCourse/MechAndAeroMasterDiplomaCourses";


import Multimedia from "./pages/Courses/Multimedia/Multimedia";
import MultimediaCertificationCourses from "./pages/Courses/Multimedia/MajorCourse/MultimediaCertificationCourses";
import MultimediaDiplomaCourses from "./pages/Courses/Multimedia/MajorCourse/MultimediaDiplomaCourses";
import MultimediaProfessionalCourses from "./pages/Courses/Multimedia/MajorCourse/MultimediaProfessionalCourses";
import MultimediaMasterDiplomaCourses from "./pages/Courses/Multimedia/MajorCourse/MultimediaMasterDiplomaCourses";



import Finance from "./pages/Courses/Finance/Finance";
import FinanceCertificationCourses from "./pages/Courses/Finance/MajorCourse/FinanceCertificationCourses";
import FinanceDiplomaCourses from "./pages/Courses/Finance/MajorCourse/FinanceDiplomaCourses";
import FinanceProfessionalCourses from "./pages/Courses/Finance/MajorCourse/FinanceProfessionalCourses";
import FinanceMasterDiplomaCourses from "./pages/Courses/Finance/MajorCourse/FinanceMasterDiplomaCourses";


import CivilAndArchitec from "./pages/Courses/CivilAndArchitect/CivilAndArchitec";
import CivilAndArchitecCertificationCourses from "./pages/Courses/CivilAndArchitect/MajorCourse/CivilAndArchitecCertificationCourses";
import CivilAndArchitecDiplomaCourses from "./pages/Courses/CivilAndArchitect/MajorCourse/CivilAndArchitecDiplomaCourses";
import CivilAndArchitecProfessionalCourses from "./pages/Courses/CivilAndArchitect/MajorCourse/CivilAndArchitecProfessionalCourses";
import CivilAndArchitecMasterDiplomaCourses from "./pages/Courses/CivilAndArchitect/MajorCourse/CivilAndArchitecMasterDiplomaCourses";


import ElectricalAndElectronics from "./pages/Courses/ElectricalAndElectronics/ElectricalAndElectronics";
import ElectricalAndElectronicsCertificationCourses from "./pages/Courses/ElectricalAndElectronics/MajorCourse/ElectricalAndElectronicsCertificationCourses";
import ElectricalAndElectronicsDiplomaCourses from "./pages/Courses/ElectricalAndElectronics/MajorCourse/ElectricalAndElectronicsDiplomaCourses";
import ElectricalAndElectronicsProfessionalCourses from "./pages/Courses/ElectricalAndElectronics/MajorCourse/ElectricalAndElectronicsProfessionalCourses";
import ElectricalAndElectronicsMasterDiplomaCourses from "./pages/Courses/ElectricalAndElectronics/MajorCourse/ElectricalAndElectronicsMasterDiplomaCourses";








function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Router>
      
      
      <TopBar />
      <Navbar />
      <ScrollToTop />

      

      {showPopup && (
        <PopupSlide
          onClose={() => setShowPopup(false)}
          onSubmit={(data) => console.log("Form submitted:", data)}
        />
      )}

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/registration" element={<Registration />} />

        {/* Courses */}
        <Route path="/it-non-it" element={<ITAndNonIT />} />
        <Route path="/CertificationCourses" element={<CertificationCourses />} />
        <Route path="/DiplomaCourses" element={<DiplomaCourses />} /> 
        <Route path="/ProfessionalCourses" element={<ProfessionalCourses />} /> 
        <Route path="/MasterDiplomaCourses" element={<MasterDiplomaCourses />} />


        <Route path="/MechAndAero" element={<MechAndAero />} />
        <Route path="/MechAndAeroCertificationCourses" element={<MechAndAeroCertificationCourses />} />
        <Route path="/MechAndAeroDiplomaCourses" element={<MechAndAeroDiplomaCourses />} /> 
        <Route path="/MechAndAeroProfessionalCourses" element={<MechAndAeroProfessionalCourses />} /> 
        <Route path="/MechAndAeroMasterDiplomaCourses" element={<MechAndAeroMasterDiplomaCourses />} />

        <Route path="/Multimedia" element={<Multimedia />} />
        <Route path="/MultimediaCertificationCourses" element={<MultimediaCertificationCourses />} />
        <Route path="/MultimediaDiplomaCourses" element={<MultimediaDiplomaCourses />} /> 
        <Route path="/MultimediaProfessionalCourses" element={<MultimediaProfessionalCourses />} /> 
        <Route path="/MultimediaMasterDiplomaCourses" element={<MultimediaMasterDiplomaCourses />} /> 

        <Route path="/civil-arch" element={<CivilAndArchitec />} />
        <Route path="/CivilAndArchitecCertificationCourses" element={<CivilAndArchitecCertificationCourses />} />
        <Route path="/CivilAndArchitecDiplomaCourses" element={<CivilAndArchitecDiplomaCourses />} /> 
        <Route path="/CivilAndArchitecProfessionalCourses" element={<CivilAndArchitecProfessionalCourses />} /> 
        <Route path="/CivilAndArchitecMasterDiplomaCourses" element={<CivilAndArchitecMasterDiplomaCourses />} /> 

        <Route path="/Finance" element={<Finance />} />
         <Route path="/FinanceCertificationCourses" element={<FinanceCertificationCourses />} />
        <Route path="/FinanceDiplomaCourses" element={<FinanceDiplomaCourses />} /> 
        <Route path="/FinanceProfessionalCourses" element={<FinanceProfessionalCourses />} /> 
        <Route path="/FinanceMasterDiplomaCourses" element={<FinanceMasterDiplomaCourses />} /> 

        <Route path="/ElectricalAndElectronics" element={<ElectricalAndElectronics />} /> 
        <Route path="/ElectricalAndElectronicsCertificationCourses" element={<ElectricalAndElectronicsCertificationCourses />} />
        <Route path="/ElectricalAndElectronicsDiplomaCourses" element={<ElectricalAndElectronicsDiplomaCourses />} /> 
        <Route path="/ElectricalAndElectronicsProfessionalCourses" element={<ElectricalAndElectronicsProfessionalCourses />} /> 
        <Route path="/ElectricalAndElectronicsMasterDiplomaCourses" element={<ElectricalAndElectronicsMasterDiplomaCourses />} />  


      </Routes>
      <WhatsApp />
      <Footer />
    </Router>
  );
}

export default App;
