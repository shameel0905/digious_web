import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioBranding from "../components/BreadcrumbInnerPortfolioBranding";
import PortfolioBrandingInner from "../components/PortfolioBrandingInner";
import BrandingportfolioHelmet from "../elements/BrandingportfolioHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsBranding = () => {
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
      <BrandingportfolioHelmet title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioBranding title="Projects of Branding" />

      {/* PortfolioDetailsArea */}
      <PortfolioBrandingInner />
       <HeroSection/>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsBranding;
