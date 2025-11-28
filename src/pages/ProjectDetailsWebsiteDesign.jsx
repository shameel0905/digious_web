import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioWebsite from "../components/BreadcrumbInnerPortfolioWebsite";
import PortfolioWebsiteInner from "../components/PortfolioWebsiteInner";
import WebportfolioHelmet from "../elements/WebportfolioHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsWebsiteDesign = () => {
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
      <WebportfolioHelmet title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioWebsite title="Projects of Website Design" />


      {/* PortfolioDetailsArea */}
      <PortfolioWebsiteInner />
       <HeroSection/>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsWebsiteDesign;
