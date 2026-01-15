import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import GameDevInnerDetails from "../components/GameDevInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerGameDev from "../components/BreadcrumbInnerGameDev";
import GamedevHelmet from "../elements/GamedevHelmet";
import HeroSection from "../components/HeroSection";

const GameDevelopmentService = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <GamedevHelmet title={"Game Development"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerGameDev title="Game Development" />

      {/* ServiceDetails */}
      <GameDevInnerDetails />
    {/* <div className="space"><HeroSection/></div> */}


      {/* ProcessOne */}
      {/* <ProcessOneGameDev /> */}

      {/* TestimonialOne */}
      <div className="space">
        <TestimonialOne />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default GameDevelopmentService;
