import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioUIUX from "../components/BreadcrumbInnerPortfolioUIUX";
import PortfolioUIUXInner from "../components/PortfolioUIUXInner";



const ProjectDetailsUIUX = () => {
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
      <HelmetReact title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioUIUX title="Projects of UI/UX Design" />

      {/* PortfolioDetailsArea */}
      <PortfolioUIUXInner />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsUIUX;
