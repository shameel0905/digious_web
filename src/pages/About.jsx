import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import AboutHelmet from "../elements/AboutHelmet";
import HeaderFive from "../components/HeaderFive";
import Breadcrumb from "../components/Breadcrumb";
import AboutSix from "../components/AboutSix";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeroSection from "../components/HeroSection";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <AboutHelmet title={"About"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      <div className="bg-dark2 space">
        {/* AboutOne */}
        <AboutSix />
      </div>

     
      {/* WhyChoose */}
      <div className="space">
        <WhyChoose />
      </div>

      {/* ProcessThree
      <ProcessThree /> */}
      <div className="space"><HeroSection/></div>
      

      {/* TestimonialOne */}
      <div className="space">
        <TestimonialOne />
      </div>

      <div className="space-bottom">
        {/* CounterOne */}
        <CounterOne />
      </div>

      
        {/* GoalArea */}
        {/* <GoalArea /> */}
        
      

      {/* TeamFour
      <TeamFour /> */}

      {/* Newsletter */}
      <Newsletter />
      

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default About;
