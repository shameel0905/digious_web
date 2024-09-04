import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import HeroFive from "../components/HeroFive";
import ServiceFive from "../components/ServiceFive";
import ClientThree from "../components/ClientThree";
import AboutFive from "../components/AboutFive";
import ProcessTwo from "../components/ProcessTwo";
import TestimonialFour from "../components/TestimonialFour";
import PricingTwo from "../components/PricingTwo";
import CTAThree from "../components/CTAThree";
import TeamFour from "../components/TeamFour";
import FaqThree from "../components/FaqThree";
import BlogFive from "../components/BlogFive";
import MarqueeFour from "../components/MarqueeFour";
import FooterFour from "../components/FooterFour";
import Aos from "aos";
import "aos/dist/aos.css";

// Import GSAP and ScrollToPlugin
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

/*
Theme Name: Digious
Author: Digious Solutions
Author URI: https://github.com/digious-solutions 
*/

const HomeFive = () => {
  const [active, setActive] = useState(true);

  // useEffect(() => {
  //   // Remove the preloader after a short delay
  //   setTimeout(() => {
  //     setActive(false);
  //   }, 500);

  //   // Initialize AOS for animations
  //   Aos.init();

  //   // Smooth scroll on clicking any link with a hash
  //   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //     anchor.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       gsap.to(window, { duration: 1, scrollTo: this.getAttribute("href") });
  //     });
  //   });
  // }, []);

  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Home"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* HeroFive */}
      <HeroFive />

      {/* ServiceFive */}
      <ServiceFive />

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
