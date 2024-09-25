import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import DigitalMarkInnerDetails from "../components/DigitalMarkInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerDigitalMarket from "../components/BreadcrumbInnerDigitalMarket";

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
      <HelmetReact title={"Digital Marketing"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerDigitalMarket title="Digital Marketing" />

      {/* ServiceDetails */}
      <DigitalMarkInnerDetails />

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
