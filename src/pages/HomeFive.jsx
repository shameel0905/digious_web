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

/*
Theme Name: Digious
Author: Digious Solutions
Author URI: https://github.com/digious-solutions 
*/

const HomeFive = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);

    Aos.init();
  }, []);
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

      {/* TeamFour
      <TeamFour /> */}

      {/* porfolio willbe here */}

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
