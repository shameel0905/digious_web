import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutFive from "../components/AboutFive";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import TeamFour from "../components/TeamFour";
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
      <HelmetReact title={"About"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      <div className="bg-dark2 space">
        {/* AboutOne */}
        <AboutFive />
      </div>

      {/* WhyChoose */}
      <div className="space">
        <WhyChoose />
      </div>

      {/* ProcessThree
      <ProcessThree /> */}

      {/* TestimonialOne */}
      <div className="space">
        <TestimonialOne />
      </div>

      <div className="space-bottom">
        {/* CounterOne */}
        <CounterOne />
      </div>

      {/* GoalArea */}
      <GoalArea />

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
