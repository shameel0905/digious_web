import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
// import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
// import ServiceInnerDetails from "../components/GraphicInnerDetails";
import BreadcrumbInner from "../components/BreadcrumbInner";
// import TestimonialOne from "../components/TestimonialOne";
import TestimonialTwo from "../components/TestimonialTwo";
import ProcessOne from "../components/ProcessOne";
import PortfolioThree from "../components/PortfolioThree";
import SoftwareDevInnerDetails from "../components/SoftwareDevInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneSoftwareDev from "../components/ProcessOneSoftwareDev";
import BreadcrumbInnerSoftwareDev from "../components/BreadcrumbInnerSoftwareDev";
import PortfolioAll from "../components/PortfolioAll";
import PortfolioDetailsArea from "../components/PortfolioDetailsArea";
import PortfolioOne from "../components/PortfolioOne";
import PortfolioTwo from "../components/PortfolioTwo";
import PortfolioFour from "../components/PortfolioFour";

const SoftwareDevService = () => {
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
      <HelmetReact title={"Software Development"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerSoftwareDev title="Software Development" />

      {/* ServiceDetails */}
      <SoftwareDevInnerDetails />

      {/* ProcessOne */}
      {/* <ProcessOneSoftwareDev /> */}

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

export default SoftwareDevService;
