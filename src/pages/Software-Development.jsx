import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import SoftwareDevInnerDetails from "../components/SoftwareDevInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import BreadcrumbInnerSoftwareDev from "../components/BreadcrumbInnerSoftwareDev";
import SoftwaredevHelmet from "../elements/SoftwaredevHelmet";

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
      <SoftwaredevHelmet title={"Software Development"} />

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
