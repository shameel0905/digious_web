import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import PortfolioDetailsArea from "../components/PortfolioDetailsArea";
import PortfolioTwo from "../components/PortfolioTwo";
import HeaderFive from "../components/HeaderFive";
import PortfolioGraphicInner from "../components/PortfolioGraphicInner";
import BreadcrumbInnerPortfolioGraphics from "../components/BreadcrumbInnerPortfolioGraphics";



const ProjectDetailsGraphic = () => {
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
      <BreadcrumbInnerPortfolioGraphics title="Projects of Graphic Design" />

      {/* PortfolioDetailsArea */}
      <PortfolioGraphicInner />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsGraphic;
