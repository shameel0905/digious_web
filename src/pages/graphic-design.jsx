import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/GraphicInnerDetails";
import BreadcrumbInner from "../components/BreadcrumbInner";
import TestimonialOne from "../components/TestimonialOne";
import GraphicdesignHelmet from "../elements/GraphicdesignHelmet";
import HeroSection from "../components/HeroSection";

const GraphicService = () => {
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
      <GraphicdesignHelmet title={"Graphic Design"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInner title="Graphic Design" />
     

      {/* ServiceDetails */}
      <ServiceInnerDetails />

      {/* ProcessOne */}
      {/* <ProcessOne /> */}
          {/* <div className="space"><HeroSection/></div> */}

      
      

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

export default GraphicService;
