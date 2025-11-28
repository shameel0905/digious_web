import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import MobielAppInnerDetails from "../components/MobileAppInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerMobileAppDev from "../components/BreadcrumbInnerMobileAppDev";
import MobappHelmet from "../elements/MobappHelmet";
import HeroSection from "../components/HeroSection";

const MobileAppService = () => {
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
      <MobappHelmet title={"Mobile App Development"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerMobileAppDev title="Mobile App Development" />

      {/* ServiceDetails */}
      <MobielAppInnerDetails />
       <HeroSection/>

      {/* ProcessOne */}
      {/* <ProcessOneMobileApp /> */}

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

export default MobileAppService;
