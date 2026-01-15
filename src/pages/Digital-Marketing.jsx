import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import DigitalMarkInnerDetails from "../components/DigitalMarkInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerDigitalMarket from "../components/BreadcrumbInnerDigitalMarket";
import DigimarketingHelmet from "../elements/DigimarketingHelmet";
import HeroSection from "../components/HeroSection";

const DigitalMarketingService = () => {
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
      <DigimarketingHelmet title={"Digital Marketing"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerDigitalMarket title="Digital Marketing" />

      {/* ServiceDetails */}
      <DigitalMarkInnerDetails />
        {/* <div className="space"><HeroSection/></div> */}


      {/* ProcessOne */}
      {/* <ProcessOneDigitalMarket /> */}

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

export default DigitalMarketingService;
