import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import SQAInnerDetails from "../components/SQAInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneSQA from "../components/ProcessOneSQA";
import BreadcrumbInnerSQA from "../components/BreadcrumbInnerSQA";

const SqaService = () => {
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
      <BreadcrumbInnerSQA title="Software Quality Assurance" />

      {/* ServiceDetails */}
      <SQAInnerDetails />

      {/* ProcessOne */}
      <ProcessOneSQA />

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

export default SqaService;
