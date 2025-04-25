import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HomeHelmet from "../elements/HomeHelmet";
import HeaderFive from "../components/HeaderFive";
import HeroFive from "../components/HeroFive";
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

/*
Theme Name: Digious
Author: Digious Solutions
Author URI: https://github.com/digious-solutions 
*/

const HomeFive = () => {
  const [active, setActive] = useState(true);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(false); // Preloader control
      setIsPopupOpen(true); // Open popup after delay
    }, 500);

    Aos.init(); // Animation lib
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(true); // Open popup after delay
    }, 9000);
  }, []);

  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      {/* Helmet */}
      <HomeHelmet title={"Digious Solutions"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* HeroFive */}
      <HeroFive />

      {/* ServiceFive */}
      <ServiceFive />
      {isPopupOpen && <StripeFormHome onClose={closePopup} />}
      <div className="bg-dark2 space-top">
        {/* ClientThree */}
        <ClientThree />
      </div>

      <div className="bg-dark2 space">
        {/* AboutOne */}
        <AboutFive />
      </div>

      {/* ProcessTwo */}
      <ProcessTwo />

      {/* TestimonialFour */}
      <TestimonialFour />

      {/* PricingTwo */}
      <PricingTwo />

      {/* CTA_Three */}
      <CTAThree />

      {/* TeamFour */}
      {/* Uncomment if you need this component */}
      {/* <TeamFour /> */}

      {/* Portfolio Section */}
      {/* Add Portfolio Component Here */}

      {/* FaqThree */}
      <FaqThree />

      {/* BlogFive */}
      <BlogFive />

      {/* MarqueeFour */}
      <MarqueeFour />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
