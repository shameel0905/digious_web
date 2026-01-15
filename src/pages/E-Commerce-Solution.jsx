import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ECommerWebInnerDetails from "../components/ECommerceWebsiteInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerEcommerce from "../components/BreadcrumbInnerEcommerce";
import EcommerceHelmet from "../elements/EcommerceHelmet";
import HeroSection from "../components/HeroSection";

const ECommerceSolutionService = () => {
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
      <EcommerceHelmet title={"Ecommerce Solutions"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerEcommerce title="Ecommerce Solutions" />

      {/* ServiceDetails */}
      <ECommerWebInnerDetails />
    {/* <div className="space"><HeroSection/></div> */}


      {/* ProcessOne */}
      {/* <ProcessOneEcommerce /> */}

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

export default ECommerceSolutionService;
