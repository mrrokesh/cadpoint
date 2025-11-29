import React, { useState, useEffect } from "react";
import VideoHero from "./VideoHero";
import About from "./HomeAbout";
import HomeCourses from "./HomeCourses";
import HomeServices from "./HomeServices";
import PlacementFlow from "./PlacementFlow";
import LocationMap from "./LocationMap";
import PopupSlide from "../../components/PopupSlide"; 
import EnquiryForm from "./EnquiryForm";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Only show popup if not shown before
    if (!localStorage.getItem("homepagePopupShown")) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("homepagePopupShown", "true"); // mark as seen
    setShowPopup(false);
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    localStorage.setItem("homepagePopupShown", "true"); // mark as seen
    setShowPopup(false);
  };

  return (
    <div>
      {/* Your homepage content */}
      <VideoHero />
      <About />
      <HomeCourses />
      <HomeServices />
      <PlacementFlow />
      <EnquiryForm />
      <LocationMap />

      {/* Popup */}
      {showPopup && (
        <PopupSlide onClose={handleClose} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
