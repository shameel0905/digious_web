import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ERPSolInnerDetails from "../components/ERPSolInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneERP from "../components/ProcessOneERP";
import BreadcrumbInnerERPSol from "../components/BreadcrumbInnerERPSol";

const Erpsolutions = () => {
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
      <BreadcrumbInnerERPSol title="ERP Solutions" />

      {/* ServiceDetails */}
      <ERPSolInnerDetails />

      {/* ProcessOne */}
      <ProcessOneERP />

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

export default Erpsolutions;
