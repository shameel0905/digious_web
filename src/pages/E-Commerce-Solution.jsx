import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
// import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/GraphicInnerDetails";
import BreadcrumbInner from "../components/BreadcrumbInner";
// import TestimonialOne from "../components/TestimonialOne";
import TestimonialTwo from "../components/TestimonialTwo";
import ProcessOne from "../components/ProcessOne";
import PortfolioThree from "../components/PortfolioThree";
import ECommerWebInnerDetails from "../components/ECommerceWebsiteInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneEcommerce from "../components/ProcessOneEcommerce";
import BreadcrumbInnerEcommerce from "../components/BreadcrumbInnerEcommerce";

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
      <HelmetReact title={"Graphic Design"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerEcommerce title="Ecommerce Solutions" />

      {/* ServiceDetails */}
      <ECommerWebInnerDetails />

      {/* ProcessOne */}
      <ProcessOneEcommerce />

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
