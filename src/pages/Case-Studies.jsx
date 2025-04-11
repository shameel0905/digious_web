import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import CaseStudies from "../components/CaseStudies";
import HeaderFive from "../components/HeaderFive";



const Project = () => {
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
      <HelmetReact title={"Project Case Studies"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title="Project Case Studies" />

      {/* PortfolioAll */}
      <CaseStudies />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Project;
