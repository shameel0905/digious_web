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
import HeroFive from "../components/HeroFive";

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
    transform: 'translateY(-50%)',
    zIndex: 1000,
    backgroundColor: '#2976c0',
    color: 'white',
    padding: '15px 8px',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(41, 118, 192, 0.4), 0 0 25px rgba(41, 118, 192, 0.2)',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    outline: 'none',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    letterSpacing: '1px',
    lineHeight: '1.2',
    animation: 'gentleGlow 2s ease-in-out infinite'
  };

  return (
    <>
      {active && <Preloader />}
      <HomeHelmet title={"Digious Solutions"} />
      
      <HeaderFive />
      <HeroFive />
      <ServiceFive />
      
      {isPopupOpen && <StripeFormHome onClose={closePopup} />}
      
      {/* {isMinimized && (
        <div 
  className="sticky-offer-button"
  onClick={togglePopup}
  style={stickyButtonStyle}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-50%) scale(1.02)';
    e.target.style.backgroundColor = '#2976c0';
    e.target.style.padding = '15px 10px';
    e.target.style.boxShadow = `
      3px 0 12px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(41, 118, 192, 0.8),
      0 0 40px rgba(25, 144, 255, 1),
      0 0 60px rgba(25, 144, 255, 1),
      0 0 20px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4)
    `;
    e.target.style.border = '1px solid rgba(255, 255, 255, 0.6)';
    e.target.style.animation = 'pulseGlow 0.6s ease-in-out infinite';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(-50%) scale(1)';
    e.target.style.backgroundColor = '#2976c0';
    e.target.style.padding = '15px 8px';
    e.target.style.boxShadow = `
      2px 0 8px rgba(0, 0, 0, 0.3),
      0 0 15px rgba(41, 118, 192, 0.5),
      0 0 30px rgba(41, 118, 192, 0.3),
      0 0 10px rgba(255, 255, 255, 0.3)
    `;
    e.target.style.border = '1px solid rgba(255, 255, 255, 0.4)';
    e.target.style.animation = 'gentleGlow 2s ease-in-out infinite';
  }}
>
  Avail Offer Now
        </div>
      )} */}

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

      {/* Add CSS styles directly in the component */}
      <style jsx>{`
        @keyframes gentleGlow {
          0%, 100% {
            box-shadow: 
              2px 0 8px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(41, 118, 192, 0.8),
              0 0 40px rgba(25, 144, 255, 0.9),
              0 0 60px rgba(25, 144, 255, 0.7),
              0 0 15px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 
              2px 0 8px rgba(0, 0, 0, 0.3),
              0 0 30px rgba(41, 118, 192, 1),
              0 0 60px rgba(25, 144, 255, 1),
              0 0 90px rgba(25, 144, 255, 0.9),
              0 0 25px rgba(255, 255, 255, 0.9),
              0 0 50px rgba(255, 255, 255, 0.7);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 
              3px 0 15px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(41, 118, 192, 1),
              0 0 80px rgba(25, 144, 255, 1),
              0 0 120px rgba(25, 144, 255, 1),
              0 0 30px rgba(255, 255, 255, 1),
              0 0 60px rgba(255, 255, 255, 0.9),
              0 0 90px rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 
              3px 0 15px rgba(0, 0, 0, 0.5),
              0 0 60px rgba(25, 144, 255, 1),
              0 0 120px rgba(25, 144, 255, 1),
              0 0 180px rgba(25, 144, 255, 1),
              0 0 45px rgba(255, 255, 255, 1),
              0 0 90px rgba(255, 255, 255, 1),
              0 0 135px rgba(255, 255, 255, 0.9);
          }
          100% {
            box-shadow: 
              3px 0 15px rgba(0, 0, 0, 0.5),
              0 0 80px rgba(25, 144, 255, 1),
              0 0 160px rgba(25, 144, 255, 1),
              0 0 240px rgba(25, 144, 255, 1),
              0 0 60px rgba(255, 255, 255, 1),
              0 0 120px rgba(255, 255, 255, 1),
              0 0 180px rgba(255, 255, 255, 1);
          }
        }

        .sticky-offer-button {
          animation: gentleGlow 1.5s ease-in-out infinite;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default HomeFive;