import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HomeHelmet from "../elements/HomeHelmet";
import HeaderFive from "../components/HeaderFive";
import ServiceFive from "../components/ServiceFive";
import ClientThree from "../components/ClientThree";
import AboutFive from "../components/AboutFive";
import ProcessTwo from "../components/ProcessTwo";
import TestimonialFour from "../components/TestimonialFour";
import PricingTwo from "../components/PricingTwo";
import CTAThree from "../components/CTAThree";
import FaqThree from "../components/FaqThree";
import BlogFive from "../components/BlogFive";
import MarqueeFour from "../components/MarqueeFour";
import FooterFour from "../components/FooterFour";
import StripeFormHome from "../components/stripeFormHome";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroTwo from "../components/HeroTwo";

const HomeFive = () => {
  const [active, setActive] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsMinimized(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsMinimized(true);
  };

  const togglePopup = () => {
    if (isMinimized) {
      openPopup();
    } else {
      closePopup();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 500);

    Aos.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(true);
    }, 4000);
  }, []);

  const stickyButtonStyle = {
    position: 'fixed',
    left: '0',
    top: '50%',
    transform: 'translateY(-50)',
    zIndex: 1000,
    backgroundColor: '#2976c0',
    color: 'white',
    padding: '15px 8px',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    letterSpacing: '1px',
    lineHeight: '1.2'
  };

  return (
    <>
      {active && <Preloader />}
      <HomeHelmet title={"Digious Solutions"} />
      
      <HeaderFive />
      <HeroTwo/>
      <ServiceFive />
      
      {isPopupOpen && <StripeFormHome onClose={closePopup} />}
      
      {isMinimized && (
        <div 
          className="sticky-offer-button"
          onClick={togglePopup}
          style={stickyButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1.02)';
            e.target.style.backgroundColor = '#2976c0';
            e.target.style.padding = '15px 10px';
            e.target.style.boxShadow = '3px 0 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.backgroundColor = '#2976c0';
            e.target.style.padding = '15px 8px';
            e.target.style.boxShadow = '2px 0 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          Avail Offer Now
        </div>
      )}

      <div className="bg-dark2 space-top">
        <ClientThree />
      </div>

      <div className="bg-dark2 space">
        <AboutFive />
      </div>

      <ProcessTwo />
      <TestimonialFour />
      <PricingTwo />
      <CTAThree />
      <FaqThree />
      <BlogFive />
      <MarqueeFour />
      <FooterFour />
    </>
  );
};

export default HomeFive;